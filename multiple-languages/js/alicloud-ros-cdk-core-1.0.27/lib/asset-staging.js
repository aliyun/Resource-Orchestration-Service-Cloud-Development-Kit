"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssetStaging = void 0;
const crypto = require("crypto");
const path = require("path");
const construct_compat_1 = require("./construct-compat");
const fs = require("fs-extra");
const assets_1 = require("./assets");
const bundling_1 = require("./bundling");
const fs_1 = require("./fs");
const fingerprint_1 = require("./fs/fingerprint");
const names_1 = require("./names");
const asset_staging_1 = require("./private/asset-staging");
const cache_1 = require("./private/cache");
const stack_1 = require("./stack");
const stage_1 = require("./stage");
const cxapi = require("@alicloud/ros-cdk-cxapi");
const ARCHIVE_EXTENSIONS = ['.tar.gz', '.zip', '.jar', '.tar', '.tgz'];
const ASSET_SALT_CONTEXT_KEY = '@alicloud/ros-cdk-core:assetHashSalt';
/**
 * Stages a file or directory from a location on the file system into a staging
 * directory.
 *
 * This is controlled by the context key 'aliyun:ros:disable-asset-staging' and enabled
 * by the CLI by default in order to ensure that when the CDK app exists, all
 * assets are available for deployment. Otherwise, if an app references assets
 * in temporary locations, those will not be available when it exists.
 *
 * The `stagedPath` property is a stringified token that represents the location
 * of the file or directory after staging. It will be resolved only during the
 * "prepare" stage and may be either the original path or the staged path
 * depending on the context setting.
 *
 * The file/directory are staged based on their content hash (fingerprint). This
 * means that only if content was changed, copy will happen.
 */
class AssetStaging extends construct_compat_1.Construct {
    constructor(scope, id, props) {
        super(scope, id);
        const salt = this.node.tryGetContext(ASSET_SALT_CONTEXT_KEY);
        this.sourcePath = path.resolve(props.sourcePath);
        this.fingerprintOptions = {
            ...props,
            exclude: ['.is_custom_resource', ...props.exclude ?? []],
            extraHash: props.extraHash || salt ? `${props.extraHash ?? ''}${salt ?? ''}` : undefined,
        };
        if (!fs.existsSync(this.sourcePath)) {
            throw new Error(`Cannot find asset at ${this.sourcePath}`);
        }
        this.sourceStats = fs.statSync(this.sourcePath);
        const outdir = stage_1.Stage.of(this)?.assetOutdir;
        if (!outdir) {
            throw new Error('unable to determine cloud assembly asset output directory. Assets must be defined indirectly within a "Stage" or an "App" scope');
        }
        this.assetOutdir = outdir;
        // Determine the hash type based on the props as props.assetHashType is
        // optional from a caller perspective.
        this.customSourceFingerprint = props.assetHash;
        this.hashType = determineHashType(props.assetHashType, this.customSourceFingerprint);
        // Decide what we're going to do, without actually doing it yet
        let stageThisAsset;
        let skip = false;
        if (props.bundling) {
            // Check if we actually have to bundle for this stack
            skip = !stack_1.Stack.of(this).bundlingRequired;
            const bundling = props.bundling;
            stageThisAsset = () => this.stageByBundling(bundling, skip);
        }
        else {
            stageThisAsset = () => this.stageByCopying();
        }
        // Calculate a cache key from the props. This way we can check if we already
        // staged this asset and reuse the result (e.g. the same asset with the same
        // configuration is used in multiple stacks). In this case we can completely
        // skip file system and bundling operations.
        //
        // The output directory and whether this asset is skipped or not should also be
        // part of the cache key to make sure we don't accidentally return the wrong
        // staged asset from the cache.
        this.cacheKey = calculateCacheKey({
            outdir: this.assetOutdir,
            sourcePath: path.resolve(props.sourcePath),
            bundling: props.bundling,
            assetHashType: this.hashType,
            customFingerprint: this.customSourceFingerprint,
            extraHash: props.extraHash,
            exclude: props.exclude,
            ignoreMode: props.ignoreMode,
            skip,
        });
        const staged = AssetStaging.assetCache.obtain(this.cacheKey, stageThisAsset);
        this.absoluteStagedPath = staged.stagedPath;
        this.assetHash = staged.assetHash;
        this.packaging = staged.packaging;
        this.isArchive = staged.isArchive;
    }
    /**
     * Clears the asset hash cache
     */
    static clearAssetHashCache() {
        this.assetCache.clear();
        fingerprint_1.clearLargeFileFingerprintCache();
    }
    /**
     * Return the path to the staged asset, relative to the Cloud Assembly (manifest) directory of the given stack
     *
     * Only returns a relative path if the asset was staged, returns an absolute path if
     * it was not staged.
     *
     * A bundled asset might end up in the outDir and still not count as
     * "staged"; if asset staging is disabled we're technically expected to
     * reference source directories, but we don't have a source directory for the
     * bundled outputs (as the bundle output is written to a temporary
     * directory). Nevertheless, we will still return an absolute path.
     *
     * A non-obvious directory layout may look like this:
     *
     * ```
     *   CLOUD ASSEMBLY ROOT
     *     +-- asset.12345abcdef/
     *     +-- assembly-Stage
     *           +-- MyStack.template.json
     *           +-- MyStack.assets.json <- will contain { "path": "../asset.12345abcdef" }
     * ```
     */
    relativeStagedPath(stack) {
        const asmManifestDir = stage_1.Stage.of(stack)?.outdir;
        if (!asmManifestDir) {
            return this.absoluteStagedPath;
        }
        const isOutsideAssetDir = path.relative(this.assetOutdir, this.absoluteStagedPath).startsWith('..');
        if (isOutsideAssetDir || this.stagingDisabled) {
            return this.absoluteStagedPath;
        }
        return path.relative(asmManifestDir, this.absoluteStagedPath);
    }
    /**
     * Stage the source to the target by copying
     *
     * Optionally skip if staging is disabled, in which case we pretend we did something but we don't really.
     */
    stageByCopying() {
        const assetHash = this.calculateHash(this.hashType);
        const stagedPath = this.stagingDisabled
            ? this.sourcePath
            : path.resolve(this.assetOutdir, renderAssetFilename(assetHash, getExtension(this.sourcePath)));
        if (!this.sourceStats.isDirectory() && !this.sourceStats.isFile()) {
            throw new Error(`Asset ${this.sourcePath} is expected to be either a directory or a regular file`);
        }
        this.stageAsset(this.sourcePath, stagedPath, 'copy');
        return {
            assetHash,
            stagedPath,
            packaging: this.sourceStats.isDirectory() ? assets_1.FileAssetPackaging.ZIP_DIRECTORY : assets_1.FileAssetPackaging.FILE,
            isArchive: this.sourceStats.isDirectory() || ARCHIVE_EXTENSIONS.includes(getExtension(this.sourcePath).toLowerCase()),
        };
    }
    /**
     * Stage the source to the target by bundling
     *
     * Optionally skip, in which case we pretend we did something but we don't really.
     */
    stageByBundling(bundling, skip) {
        if (!this.sourceStats.isDirectory()) {
            throw new Error(`Asset ${this.sourcePath} is expected to be a directory when bundling`);
        }
        if (skip) {
            // We should have bundled, but didn't to save time. Still pretend to have a hash.
            // If the asset uses OUTPUT or BUNDLE, we use a CUSTOM hash to avoid fingerprinting
            // a potentially very large source directory. Other hash types are kept the same.
            let hashType = this.hashType;
            if (hashType === assets_1.AssetHashType.OUTPUT) {
                this.customSourceFingerprint = names_1.Names.uniqueId(this);
                hashType = assets_1.AssetHashType.CUSTOM;
            }
            return {
                assetHash: this.calculateHash(hashType, bundling),
                stagedPath: this.sourcePath,
                packaging: assets_1.FileAssetPackaging.ZIP_DIRECTORY,
                isArchive: true,
            };
        }
        // Try to calculate assetHash beforehand (if we can)
        let assetHash = this.hashType === assets_1.AssetHashType.SOURCE || this.hashType === assets_1.AssetHashType.CUSTOM
            ? this.calculateHash(this.hashType, bundling)
            : undefined;
        const bundleDir = this.determineBundleDir(this.assetOutdir, assetHash);
        this.bundle(bundling, bundleDir);
        // Check bundling output content and determine if we will need to archive
        const bundlingOutputType = bundling.outputType ?? bundling_1.BundlingOutput.AUTO_DISCOVER;
        const bundledAsset = determineBundledAsset(bundleDir, bundlingOutputType);
        // Calculate assetHash afterwards if we still must
        assetHash = assetHash ?? this.calculateHash(this.hashType, bundling, bundledAsset.path);
        const stagedPath = path.resolve(this.assetOutdir, renderAssetFilename(assetHash, bundledAsset.extension));
        this.stageAsset(bundledAsset.path, stagedPath, 'move');
        // If bundling produced a single archive file we "touch" this file in the bundling
        // directory after it has been moved to the staging directory if the hash is known before bundling. This way if bundling
        // is skipped because the bundling directory already exists we can still determine
        // the correct packaging type.
        // If the hash is calculated after bundling we remove the temporary directory now.
        if (bundledAsset.packaging === assets_1.FileAssetPackaging.FILE) {
            if (this.hashType === assets_1.AssetHashType.OUTPUT) {
                fs.removeSync(path.dirname(bundledAsset.path));
            }
            else {
                fs.closeSync(fs.openSync(bundledAsset.path, 'w'));
            }
        }
        return {
            assetHash,
            stagedPath,
            packaging: bundledAsset.packaging,
            isArchive: bundlingOutputType !== bundling_1.BundlingOutput.SINGLE_FILE,
        };
    }
    /**
     * Whether staging has been disabled
     */
    get stagingDisabled() {
        return !!this.node.tryGetContext(cxapi.DISABLE_ASSET_STAGING_CONTEXT);
    }
    /**
     * Copies or moves the files from sourcePath to targetPath.
     *
     * Moving implies the source directory is temporary and can be trashed.
     *
     * Will not do anything if source and target are the same.
     */
    stageAsset(sourcePath, targetPath, style) {
        // Is the work already done?
        const isAlreadyStaged = fs.existsSync(targetPath);
        if (isAlreadyStaged) {
            if (style === 'move' && sourcePath !== targetPath) {
                fs.removeSync(sourcePath);
            }
            return;
        }
        // Moving can be done quickly
        if (style == 'move') {
            fs.renameSync(sourcePath, targetPath);
            return;
        }
        // Copy file/directory to staging directory
        if (this.sourceStats.isFile()) {
            fs.copyFileSync(sourcePath, targetPath);
        }
        else if (this.sourceStats.isDirectory()) {
            fs.mkdirSync(targetPath);
            fs_1.FileSystem.copyDirectory(sourcePath, targetPath, this.fingerprintOptions);
        }
        else {
            throw new Error(`Unknown file type: ${sourcePath}`);
        }
    }
    /**
     * Determine the directory where we're going to write the bundling output
     *
     * This is the target directory where we're going to write the staged output
     * files if we can (if the hash is fully known), or a temporary directory
     * otherwise.
     */
    determineBundleDir(outdir, sourceHash) {
        if (sourceHash) {
            return path.resolve(outdir, renderAssetFilename(sourceHash));
        }
        // When the asset hash isn't known in advance, bundler outputs to an
        // intermediate directory named after the asset's cache key
        return path.resolve(outdir, `bundling-temp-${this.cacheKey}`);
    }
    /**
     * Bundles an asset to the given directory
     *
     * If the given directory already exists, assume that everything's already
     * in order and don't do anything.
     *
     * @param options Bundling options
     * @param bundleDir Where to create the bundle directory
     * @returns The fully resolved bundle output directory.
     */
    bundle(options, bundleDir) {
        if (fs.existsSync(bundleDir)) {
            return;
        }
        fs.ensureDirSync(bundleDir);
        // Chmod the bundleDir to full access.
        fs.chmodSync(bundleDir, 0o777);
        let localBundling;
        try {
            process.stderr.write(`Bundling asset ${this.node.path}...\n`);
            localBundling = options.local?.tryBundle(bundleDir, options);
            if (!localBundling) {
                const assetStagingOptions = {
                    sourcePath: this.sourcePath,
                    bundleDir,
                    ...options,
                };
                switch (options.bundlingFileAccess) {
                    case bundling_1.BundlingFileAccess.VOLUME_COPY:
                        new asset_staging_1.AssetBundlingVolumeCopy(assetStagingOptions).run();
                        break;
                    case bundling_1.BundlingFileAccess.BIND_MOUNT:
                    default:
                        new asset_staging_1.AssetBundlingBindMount(assetStagingOptions).run();
                        break;
                }
            }
        }
        catch (err) {
            // When bundling fails, keep the bundle output for diagnosability, but
            // rename it out of the way so that the next run doesn't assume it has a
            // valid bundleDir.
            const bundleErrorDir = bundleDir + '-error';
            if (fs.existsSync(bundleErrorDir)) {
                // Remove the last bundleErrorDir.
                fs.removeSync(bundleErrorDir);
            }
            fs.renameSync(bundleDir, bundleErrorDir);
            throw new Error(`Failed to bundle asset ${this.node.path}, bundle output is located at ${bundleErrorDir}: ${err}`);
        }
        if (fs_1.FileSystem.isEmpty(bundleDir)) {
            const outputDir = localBundling ? bundleDir : AssetStaging.BUNDLING_OUTPUT_DIR;
            throw new Error(`Bundling did not produce any output. Check that content is written to ${outputDir}.`);
        }
    }
    calculateHash(hashType, bundling, outputDir) {
        // When bundling a CUSTOM or SOURCE asset hash type, we want the hash to include
        // the bundling configuration. We handle CUSTOM and bundled SOURCE hash types
        // as a special case to preserve existing user asset hashes in all other cases.
        if (hashType == assets_1.AssetHashType.CUSTOM || (hashType == assets_1.AssetHashType.SOURCE && bundling)) {
            const hash = crypto.createHash('sha256');
            // if asset hash is provided by user, use it, otherwise fingerprint the source.
            hash.update(this.customSourceFingerprint ?? fs_1.FileSystem.fingerprint(this.sourcePath, this.fingerprintOptions));
            // If we're bundling an asset, include the bundling configuration in the hash
            if (bundling) {
                hash.update(JSON.stringify(bundling, sanitizeHashValue));
            }
            return hash.digest('hex');
        }
        switch (hashType) {
            case assets_1.AssetHashType.SOURCE:
                return fs_1.FileSystem.fingerprint(this.sourcePath, this.fingerprintOptions);
            case assets_1.AssetHashType.OUTPUT:
                if (!outputDir) {
                    throw new Error(`Cannot use \`${hashType}\` hash type when \`bundling\` is not specified.`);
                }
                return fs_1.FileSystem.fingerprint(outputDir, this.fingerprintOptions);
            default:
                throw new Error('Unknown asset hash type.');
        }
    }
}
exports.AssetStaging = AssetStaging;
/**
 * The directory inside the bundling container into which the asset sources will be mounted.
 */
AssetStaging.BUNDLING_INPUT_DIR = '/asset-input';
/**
 * The directory inside the bundling container into which the bundled output should be written.
 */
AssetStaging.BUNDLING_OUTPUT_DIR = '/asset-output';
/**
 * Cache of asset hashes based on asset configuration to avoid repeated file
 * system and bundling operations.
 */
AssetStaging.assetCache = new cache_1.Cache();
function renderAssetFilename(assetHash, extension = '') {
    return `asset.${assetHash}${extension}`;
}
/**
 * Determines the hash type from user-given prop values.
 *
 * @param assetHashType Asset hash type construct prop
 * @param customSourceFingerprint Asset hash seed given in the construct props
 */
function determineHashType(assetHashType, customSourceFingerprint) {
    const hashType = customSourceFingerprint
        ? (assetHashType ?? assets_1.AssetHashType.CUSTOM)
        : (assetHashType ?? assets_1.AssetHashType.SOURCE);
    if (customSourceFingerprint && hashType !== assets_1.AssetHashType.CUSTOM) {
        throw new Error(`Cannot specify \`${assetHashType}\` for \`assetHashType\` when \`assetHash\` is specified. Use \`CUSTOM\` or leave \`undefined\`.`);
    }
    if (hashType === assets_1.AssetHashType.CUSTOM && !customSourceFingerprint) {
        throw new Error('`assetHash` must be specified when `assetHashType` is set to `AssetHashType.CUSTOM`.');
    }
    return hashType;
}
/**
 * Calculates a cache key from the props. Normalize by sorting keys.
 */
function calculateCacheKey(props) {
    return crypto.createHash('sha256')
        .update(JSON.stringify(sortObject(props), sanitizeHashValue))
        .digest('hex');
}
/**
 * Recursively sort object keys
 */
function sortObject(object) {
    if (typeof object !== 'object' || object instanceof Array) {
        return object;
    }
    const ret = {};
    for (const key of Object.keys(object).sort()) {
        ret[key] = sortObject(object[key]);
    }
    return ret;
}
/**
 * Removes the auth token from pip URLs if present to prevent an unnecessary
 * rebuild.
 */
function sanitizeHashValue(key, value) {
    if (key === 'PIP_INDEX_URL' || key === 'PIP_EXTRA_INDEX_URL') {
        try {
            let url = new URL(value);
            if (url.password) {
                url.password = '';
                return url.toString();
            }
        }
        catch (e) {
            if (e.name === 'TypeError') {
                throw new Error(`${key} must be a valid URL, got ${value}.`);
            }
            throw e;
        }
    }
    return value;
}
/**
 * Returns the single archive file of a directory or undefined
 */
function findSingleFile(directory, archiveOnly) {
    if (!fs.existsSync(directory)) {
        throw new Error(`Directory ${directory} does not exist.`);
    }
    if (!fs.statSync(directory).isDirectory()) {
        throw new Error(`${directory} is not a directory.`);
    }
    const content = fs.readdirSync(directory);
    if (content.length === 1) {
        const file = path.join(directory, content[0]);
        const extension = getExtension(content[0]).toLowerCase();
        if (fs.statSync(file).isFile() && (!archiveOnly || ARCHIVE_EXTENSIONS.includes(extension))) {
            return file;
        }
    }
    return undefined;
}
/**
 * Returns the bundled asset to use based on the content of the bundle directory
 * and the type of output.
 */
function determineBundledAsset(bundleDir, outputType) {
    const archiveFile = findSingleFile(bundleDir, outputType !== bundling_1.BundlingOutput.SINGLE_FILE);
    // auto-discover means that if there is an archive file, we take it as the
    // bundle, otherwise, we will archive here.
    if (outputType === bundling_1.BundlingOutput.AUTO_DISCOVER) {
        outputType = archiveFile ? bundling_1.BundlingOutput.ARCHIVED : bundling_1.BundlingOutput.NOT_ARCHIVED;
    }
    switch (outputType) {
        case bundling_1.BundlingOutput.NOT_ARCHIVED:
            return { path: bundleDir, packaging: assets_1.FileAssetPackaging.ZIP_DIRECTORY };
        case bundling_1.BundlingOutput.ARCHIVED:
        case bundling_1.BundlingOutput.SINGLE_FILE:
            if (!archiveFile) {
                throw new Error('Bundling output directory is expected to include only a single file when `output` is set to `ARCHIVED` or `SINGLE_FILE`');
            }
            return { path: archiveFile, packaging: assets_1.FileAssetPackaging.FILE, extension: getExtension(archiveFile) };
    }
}
/**
 * Return the extension name of a source path
 *
 * Loop through ARCHIVE_EXTENSIONS for valid archive extensions.
 */
function getExtension(source) {
    for (const ext of ARCHIVE_EXTENSIONS) {
        if (source.toLowerCase().endsWith(ext)) {
            return ext;
        }
    }
    return path.extname(source);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzZXQtc3RhZ2luZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFzc2V0LXN0YWdpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsaUNBQWlDO0FBQ2pDLDZCQUE2QjtBQUM3Qix5REFBK0M7QUFDL0MsK0JBQStCO0FBQy9CLHFDQUEyRTtBQUMzRSx5Q0FBaUY7QUFDakYsNkJBQXNEO0FBQ3RELGtEQUFrRTtBQUNsRSxtQ0FBZ0M7QUFDaEMsMkRBQTBGO0FBQzFGLDJDQUF3QztBQUN4QyxtQ0FBZ0M7QUFDaEMsbUNBQWdDO0FBQ2hDLGlEQUFpRDtBQUVqRCxNQUFNLGtCQUFrQixHQUFHLENBQUMsU0FBUyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBRXZFLE1BQU0sc0JBQXNCLEdBQUcsc0NBQXNDLENBQUM7QUFxQ3RFOzs7Ozs7Ozs7Ozs7Ozs7O0dBZ0JHO0FBQ0gsTUFBYSxZQUFhLFNBQVEsNEJBQVM7SUEwRXZDLFlBQVksS0FBZ0IsRUFBRSxFQUFVLEVBQUUsS0FBd0I7UUFDOUQsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUVqQixNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1FBRTdELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLGtCQUFrQixHQUFHO1lBQ3RCLEdBQUcsS0FBSztZQUNSLE9BQU8sRUFBRSxDQUFDLHFCQUFxQixFQUFFLEdBQUcsS0FBSyxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUM7WUFDeEQsU0FBUyxFQUFFLEtBQUssQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxTQUFTLElBQUksRUFBRSxHQUFHLElBQUksSUFBSSxFQUFF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N0MsVUFBVSxHQUFHLFdBQVcsQ0FBQyxDQUFDLENBQUMseUJBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLHlCQUFjLENBQUMsWUFBWSxDQUFDO0tBQ3BGO0lBRUQsUUFBUSxVQUFVLEVBQUU7UUFDaEIsS0FBSyx5QkFBYyxDQUFDLFlBQVk7WUFDNUIsT0FBTyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLDJCQUFrQixDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQzVFLEtBQUsseUJBQWMsQ0FBQyxRQUFRLENBQUM7UUFDN0IsS0FBSyx5QkFBYyxDQUFDLFdBQVc7WUFDM0IsSUFBSSxDQUFDLFdBQVcsRUFBRTtnQkFDZCxNQUFNLElBQUksS0FBSyxDQUFDLHlIQUF5SCxDQUFDLENBQUM7YUFDOUk7WUFDRCxPQUFPLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsMkJBQWtCLENBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxZQUFZLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQztLQUM5RztBQUNMLENBQUM7QUFFRDs7OztHQUlHO0FBQ0gsU0FBUyxZQUFZLENBQUMsTUFBYztJQUNoQyxLQUFNLE1BQU0sR0FBRyxJQUFJLGtCQUFrQixFQUFHO1FBQ3BDLElBQUksTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUNwQyxPQUFPLEdBQUcsQ0FBQztTQUNkO0tBQ0o7SUFFRCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDaEMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGNyeXB0byBmcm9tICdjcnlwdG8nO1xuaW1wb3J0ICogYXMgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gXCIuL2NvbnN0cnVjdC1jb21wYXRcIjtcbmltcG9ydCAqIGFzIGZzIGZyb20gJ2ZzLWV4dHJhJztcbmltcG9ydCB7IEFzc2V0SGFzaFR5cGUsIEFzc2V0T3B0aW9ucywgRmlsZUFzc2V0UGFja2FnaW5nIH0gZnJvbSAnLi9hc3NldHMnO1xuaW1wb3J0IHsgQnVuZGxpbmdGaWxlQWNjZXNzLCBCdW5kbGluZ09wdGlvbnMsIEJ1bmRsaW5nT3V0cHV0IH0gZnJvbSAnLi9idW5kbGluZyc7XG5pbXBvcnQgeyBGaWxlU3lzdGVtLCBGaW5nZXJwcmludE9wdGlvbnMgfSBmcm9tICcuL2ZzJztcbmltcG9ydCB7IGNsZWFyTGFyZ2VGaWxlRmluZ2VycHJpbnRDYWNoZSB9IGZyb20gJy4vZnMvZmluZ2VycHJpbnQnO1xuaW1wb3J0IHsgTmFtZXMgfSBmcm9tICcuL25hbWVzJztcbmltcG9ydCB7IEFzc2V0QnVuZGxpbmdWb2x1bWVDb3B5LCBBc3NldEJ1bmRsaW5nQmluZE1vdW50IH0gZnJvbSAnLi9wcml2YXRlL2Fzc2V0LXN0YWdpbmcnO1xuaW1wb3J0IHsgQ2FjaGUgfSBmcm9tICcuL3ByaXZhdGUvY2FjaGUnO1xuaW1wb3J0IHsgU3RhY2sgfSBmcm9tICcuL3N0YWNrJztcbmltcG9ydCB7IFN0YWdlIH0gZnJvbSAnLi9zdGFnZSc7XG5pbXBvcnQgKiBhcyBjeGFwaSBmcm9tICdAYWxpY2xvdWQvcm9zLWNkay1jeGFwaSc7XG5cbmNvbnN0IEFSQ0hJVkVfRVhURU5TSU9OUyA9IFsnLnRhci5neicsICcuemlwJywgJy5qYXInLCAnLnRhcicsICcudGd6J107XG5cbmNvbnN0IEFTU0VUX1NBTFRfQ09OVEVYVF9LRVkgPSAnQGFsaWNsb3VkL3Jvcy1jZGstY29yZTphc3NldEhhc2hTYWx0JztcblxuLyoqXG4gKiBBIHByZXZpb3VzbHkgc3RhZ2VkIGFzc2V0XG4gKi9cbmludGVyZmFjZSBTdGFnZWRBc3NldCB7XG4gICAgLyoqXG4gICAgICogVGhlIHBhdGggd2hlcmUgd2Ugd3JvdGUgdGhpcyBhc3NldCBwcmV2aW91c2x5XG4gICAgICovXG4gICAgcmVhZG9ubHkgc3RhZ2VkUGF0aDogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGhhc2ggd2UgdXNlZCBwcmV2aW91c2x5XG4gICAgICovXG4gICAgcmVhZG9ubHkgYXNzZXRIYXNoOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgcGFja2FnaW5nIG9mIHRoZSBhc3NldFxuICAgICAqL1xuICAgIHJlYWRvbmx5IHBhY2thZ2luZzogRmlsZUFzc2V0UGFja2FnaW5nO1xuXG4gICAgLyoqXG4gICAgICogV2hldGhlciB0aGlzIGFzc2V0IGlzIGFuIGFyY2hpdmVcbiAgICAgKi9cbiAgICByZWFkb25seSBpc0FyY2hpdmU6IGJvb2xlYW47XG59XG5cbi8qKlxuICogSW5pdGlhbGl6YXRpb24gcHJvcGVydGllcyBmb3IgYEFzc2V0U3RhZ2luZ2AuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQXNzZXRTdGFnaW5nUHJvcHMgZXh0ZW5kcyBGaW5nZXJwcmludE9wdGlvbnMsIEFzc2V0T3B0aW9ucyB7XG4gICAgLyoqXG4gICAgICogVGhlIHNvdXJjZSBmaWxlIG9yIGRpcmVjdG9yeSB0byBjb3B5IGZyb20uXG4gICAgICovXG4gICAgcmVhZG9ubHkgc291cmNlUGF0aDogc3RyaW5nO1xufVxuXG4vKipcbiAqIFN0YWdlcyBhIGZpbGUgb3IgZGlyZWN0b3J5IGZyb20gYSBsb2NhdGlvbiBvbiB0aGUgZmlsZSBzeXN0ZW0gaW50byBhIHN0YWdpbmdcbiAqIGRpcmVjdG9yeS5cbiAqXG4gKiBUaGlzIGlzIGNvbnRyb2xsZWQgYnkgdGhlIGNvbnRleHQga2V5ICdhbGl5dW46cm9zOmRpc2FibGUtYXNzZXQtc3RhZ2luZycgYW5kIGVuYWJsZWRcbiAqIGJ5IHRoZSBDTEkgYnkgZGVmYXVsdCBpbiBvcmRlciB0byBlbnN1cmUgdGhhdCB3aGVuIHRoZSBDREsgYXBwIGV4aXN0cywgYWxsXG4gKiBhc3NldHMgYXJlIGF2YWlsYWJsZSBmb3IgZGVwbG95bWVudC4gT3RoZXJ3aXNlLCBpZiBhbiBhcHAgcmVmZXJlbmNlcyBhc3NldHNcbiAqIGluIHRlbXBvcmFyeSBsb2NhdGlvbnMsIHRob3NlIHdpbGwgbm90IGJlIGF2YWlsYWJsZSB3aGVuIGl0IGV4aXN0cy5cbiAqXG4gKiBUaGUgYHN0YWdlZFBhdGhgIHByb3BlcnR5IGlzIGEgc3RyaW5naWZpZWQgdG9rZW4gdGhhdCByZXByZXNlbnRzIHRoZSBsb2NhdGlvblxuICogb2YgdGhlIGZpbGUgb3IgZGlyZWN0b3J5IGFmdGVyIHN0YWdpbmcuIEl0IHdpbGwgYmUgcmVzb2x2ZWQgb25seSBkdXJpbmcgdGhlXG4gKiBcInByZXBhcmVcIiBzdGFnZSBhbmQgbWF5IGJlIGVpdGhlciB0aGUgb3JpZ2luYWwgcGF0aCBvciB0aGUgc3RhZ2VkIHBhdGhcbiAqIGRlcGVuZGluZyBvbiB0aGUgY29udGV4dCBzZXR0aW5nLlxuICpcbiAqIFRoZSBmaWxlL2RpcmVjdG9yeSBhcmUgc3RhZ2VkIGJhc2VkIG9uIHRoZWlyIGNvbnRlbnQgaGFzaCAoZmluZ2VycHJpbnQpLiBUaGlzXG4gKiBtZWFucyB0aGF0IG9ubHkgaWYgY29udGVudCB3YXMgY2hhbmdlZCwgY29weSB3aWxsIGhhcHBlbi5cbiAqL1xuZXhwb3J0IGNsYXNzIEFzc2V0U3RhZ2luZyBleHRlbmRzIENvbnN0cnVjdCB7XG4gICAgLyoqXG4gICAgICogVGhlIGRpcmVjdG9yeSBpbnNpZGUgdGhlIGJ1bmRsaW5nIGNvbnRhaW5lciBpbnRvIHdoaWNoIHRoZSBhc3NldCBzb3VyY2VzIHdpbGwgYmUgbW91bnRlZC5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEJVTkRMSU5HX0lOUFVUX0RJUiA9ICcvYXNzZXQtaW5wdXQnO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGRpcmVjdG9yeSBpbnNpZGUgdGhlIGJ1bmRsaW5nIGNvbnRhaW5lciBpbnRvIHdoaWNoIHRoZSBidW5kbGVkIG91dHB1dCBzaG91bGQgYmUgd3JpdHRlbi5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEJVTkRMSU5HX09VVFBVVF9ESVIgPSAnL2Fzc2V0LW91dHB1dCc7XG5cbiAgICAvKipcbiAgICAgKiBDbGVhcnMgdGhlIGFzc2V0IGhhc2ggY2FjaGVcbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIGNsZWFyQXNzZXRIYXNoQ2FjaGUoKSB7XG4gICAgICAgIHRoaXMuYXNzZXRDYWNoZS5jbGVhcigpO1xuICAgICAgICBjbGVhckxhcmdlRmlsZUZpbmdlcnByaW50Q2FjaGUoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDYWNoZSBvZiBhc3NldCBoYXNoZXMgYmFzZWQgb24gYXNzZXQgY29uZmlndXJhdGlvbiB0byBhdm9pZCByZXBlYXRlZCBmaWxlXG4gICAgICogc3lzdGVtIGFuZCBidW5kbGluZyBvcGVyYXRpb25zLlxuICAgICAqL1xuICAgIHByaXZhdGUgc3RhdGljIGFzc2V0Q2FjaGUgPSBuZXcgQ2FjaGU8U3RhZ2VkQXNzZXQ+KCk7XG5cbiAgICAvKipcbiAgICAgKiBBYnNvbHV0ZSBwYXRoIHRvIHRoZSBhc3NldCBkYXRhLlxuICAgICAqXG4gICAgICogSWYgYXNzZXQgc3RhZ2luZyBpcyBkaXNhYmxlZCwgdGhpcyB3aWxsIGp1c3QgYmUgdGhlIHNvdXJjZSBwYXRoIG9yXG4gICAgICogYSB0ZW1wb3JhcnkgZGlyZWN0b3J5IHVzZWQgZm9yIGJ1bmRsaW5nLlxuICAgICAqXG4gICAgICogSWYgYXNzZXQgc3RhZ2luZyBpcyBlbmFibGVkIGl0IHdpbGwgYmUgdGhlIHN0YWdlZCBwYXRoLlxuICAgICAqXG4gICAgICogSU1QT1JUQU5UOiBJZiB5b3UgYXJlIGdvaW5nIHRvIGNhbGwgYGFkZEZpbGVBc3NldCgpYCwgdXNlXG4gICAgICogYHJlbGF0aXZlU3RhZ2VkUGF0aCgpYCBpbnN0ZWFkLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhYnNvbHV0ZVN0YWdlZFBhdGg6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIFRoZSBhYnNvbHV0ZSBwYXRoIG9mIHRoZSBhc3NldCBhcyBpdCB3YXMgcmVmZXJlbmNlZCBieSB0aGUgdXNlci5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgc291cmNlUGF0aDogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQSBjcnlwdG9ncmFwaGljIGhhc2ggb2YgdGhlIGFzc2V0LlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhc3NldEhhc2g6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEhvdyB0aGlzIGFzc2V0IHNob3VsZCBiZSBwYWNrYWdlZC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgcGFja2FnaW5nOiBGaWxlQXNzZXRQYWNrYWdpbmc7XG5cbiAgICAvKipcbiAgICAgKiBXaGV0aGVyIHRoaXMgYXNzZXQgaXMgYW4gYXJjaGl2ZSAoemlwIG9yIGphcikuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGlzQXJjaGl2ZTogYm9vbGVhbjtcblxuICAgIHByaXZhdGUgcmVhZG9ubHkgZmluZ2VycHJpbnRPcHRpb25zOiBGaW5nZXJwcmludE9wdGlvbnM7XG5cbiAgICBwcml2YXRlIHJlYWRvbmx5IGhhc2hUeXBlOiBBc3NldEhhc2hUeXBlO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgYXNzZXRPdXRkaXI6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEEgY3VzdG9tIHNvdXJjZSBmaW5nZXJwcmludCBnaXZlbiBieSB0aGUgdXNlclxuICAgICAqXG4gICAgICogV2lsbCBub3QgYmUgdXNlZCBsaXRlcmFsbHksIGFsd2F5cyBoYXNoZWQgbGF0ZXIgb24uXG4gICAgICovXG4gICAgcHJpdmF0ZSBjdXN0b21Tb3VyY2VGaW5nZXJwcmludD86IHN0cmluZztcblxuICAgIHByaXZhdGUgcmVhZG9ubHkgY2FjaGVLZXk6IHN0cmluZztcblxuICAgIHByaXZhdGUgcmVhZG9ubHkgc291cmNlU3RhdHM6IGZzLlN0YXRzO1xuXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IEFzc2V0U3RhZ2luZ1Byb3BzKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCk7XG5cbiAgICAgICAgY29uc3Qgc2FsdCA9IHRoaXMubm9kZS50cnlHZXRDb250ZXh0KEFTU0VUX1NBTFRfQ09OVEVYVF9LRVkpO1xuXG4gICAgICAgIHRoaXMuc291cmNlUGF0aCA9IHBhdGgucmVzb2x2ZShwcm9wcy5zb3VyY2VQYXRoKTtcbiAgICAgICAgdGhpcy5maW5nZXJwcmludE9wdGlvbnMgPSB7XG4gICAgICAgICAgICAuLi5wcm9wcyxcbiAgICAgICAgICAgIGV4Y2x1ZGU6IFsnLmlzX2N1c3RvbV9yZXNvdXJjZScsIC4uLnByb3BzLmV4Y2x1ZGUgPz8gW11dLFxuICAgICAgICAgICAgZXh0cmFIYXNoOiBwcm9wcy5leHRyYUhhc2ggfHwgc2FsdCA/IGAke3Byb3BzLmV4dHJhSGFzaCA/PyAnJ30ke3NhbHQgPz8gJyd9YCA6IHVuZGVmaW5lZCxcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoIWZzLmV4aXN0c1N5bmModGhpcy5zb3VyY2VQYXRoKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDYW5ub3QgZmluZCBhc3NldCBhdCAke3RoaXMuc291cmNlUGF0aH1gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc291cmNlU3RhdHMgPSBmcy5zdGF0U3luYyh0aGlzLnNvdXJjZVBhdGgpO1xuXG4gICAgICAgIGNvbnN0IG91dGRpciA9IFN0YWdlLm9mKHRoaXMpPy5hc3NldE91dGRpcjtcbiAgICAgICAgaWYgKCFvdXRkaXIpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigndW5hYmxlIHRvIGRldGVybWluZSBjbG91ZCBhc3NlbWJseSBhc3NldCBvdXRwdXQgZGlyZWN0b3J5LiBBc3NldHMgbXVzdCBiZSBkZWZpbmVkIGluZGlyZWN0bHkgd2l0aGluIGEgXCJTdGFnZVwiIG9yIGFuIFwiQXBwXCIgc2NvcGUnKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFzc2V0T3V0ZGlyID0gb3V0ZGlyO1xuXG4gICAgICAgIC8vIERldGVybWluZSB0aGUgaGFzaCB0eXBlIGJhc2VkIG9uIHRoZSBwcm9wcyBhcyBwcm9wcy5hc3NldEhhc2hUeXBlIGlzXG4gICAgICAgIC8vIG9wdGlvbmFsIGZyb20gYSBjYWxsZXIgcGVyc3BlY3RpdmUuXG4gICAgICAgIHRoaXMuY3VzdG9tU291cmNlRmluZ2VycHJpbnQgPSBwcm9wcy5hc3NldEhhc2g7XG4gICAgICAgIHRoaXMuaGFzaFR5cGUgPSBkZXRlcm1pbmVIYXNoVHlwZShwcm9wcy5hc3NldEhhc2hUeXBlLCB0aGlzLmN1c3RvbVNvdXJjZUZpbmdlcnByaW50KTtcblxuICAgICAgICAvLyBEZWNpZGUgd2hhdCB3ZSdyZSBnb2luZyB0byBkbywgd2l0aG91dCBhY3R1YWxseSBkb2luZyBpdCB5ZXRcbiAgICAgICAgbGV0IHN0YWdlVGhpc0Fzc2V0OiAoKSA9PiBTdGFnZWRBc3NldDtcbiAgICAgICAgbGV0IHNraXAgPSBmYWxzZTtcbiAgICAgICAgaWYgKHByb3BzLmJ1bmRsaW5nKSB7XG4gICAgICAgICAgICAvLyBDaGVjayBpZiB3ZSBhY3R1YWxseSBoYXZlIHRvIGJ1bmRsZSBmb3IgdGhpcyBzdGFja1xuICAgICAgICAgICAgc2tpcCA9ICFTdGFjay5vZih0aGlzKS5idW5kbGluZ1JlcXVpcmVkO1xuICAgICAgICAgICAgY29uc3QgYnVuZGxpbmcgPSBwcm9wcy5idW5kbGluZztcbiAgICAgICAgICAgIHN0YWdlVGhpc0Fzc2V0ID0gKCkgPT4gdGhpcy5zdGFnZUJ5QnVuZGxpbmcoYnVuZGxpbmcsIHNraXApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3RhZ2VUaGlzQXNzZXQgPSAoKSA9PiB0aGlzLnN0YWdlQnlDb3B5aW5nKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDYWxjdWxhdGUgYSBjYWNoZSBrZXkgZnJvbSB0aGUgcHJvcHMuIFRoaXMgd2F5IHdlIGNhbiBjaGVjayBpZiB3ZSBhbHJlYWR5XG4gICAgICAgIC8vIHN0YWdlZCB0aGlzIGFzc2V0IGFuZCByZXVzZSB0aGUgcmVzdWx0IChlLmcuIHRoZSBzYW1lIGFzc2V0IHdpdGggdGhlIHNhbWVcbiAgICAgICAgLy8gY29uZmlndXJhdGlvbiBpcyB1c2VkIGluIG11bHRpcGxlIHN0YWNrcykuIEluIHRoaXMgY2FzZSB3ZSBjYW4gY29tcGxldGVseVxuICAgICAgICAvLyBza2lwIGZpbGUgc3lzdGVtIGFuZCBidW5kbGluZyBvcGVyYXRpb25zLlxuICAgICAgICAvL1xuICAgICAgICAvLyBUaGUgb3V0cHV0IGRpcmVjdG9yeSBhbmQgd2hldGhlciB0aGlzIGFzc2V0IGlzIHNraXBwZWQgb3Igbm90IHNob3VsZCBhbHNvIGJlXG4gICAgICAgIC8vIHBhcnQgb2YgdGhlIGNhY2hlIGtleSB0byBtYWtlIHN1cmUgd2UgZG9uJ3QgYWNjaWRlbnRhbGx5IHJldHVybiB0aGUgd3JvbmdcbiAgICAgICAgLy8gc3RhZ2VkIGFzc2V0IGZyb20gdGhlIGNhY2hlLlxuICAgICAgICB0aGlzLmNhY2hlS2V5ID0gY2FsY3VsYXRlQ2FjaGVLZXkoe1xuICAgICAgICAgICAgb3V0ZGlyOiB0aGlzLmFzc2V0T3V0ZGlyLFxuICAgICAgICAgICAgc291cmNlUGF0aDogcGF0aC5yZXNvbHZlKHByb3BzLnNvdXJjZVBhdGgpLFxuICAgICAgICAgICAgYnVuZGxpbmc6IHByb3BzLmJ1bmRsaW5nLFxuICAgICAgICAgICAgYXNzZXRIYXNoVHlwZTogdGhpcy5oYXNoVHlwZSxcbiAgICAgICAgICAgIGN1c3RvbUZpbmdlcnByaW50OiB0aGlzLmN1c3RvbVNvdXJjZUZpbmdlcnByaW50LFxuICAgICAgICAgICAgZXh0cmFIYXNoOiBwcm9wcy5leHRyYUhhc2gsXG4gICAgICAgICAgICBleGNsdWRlOiBwcm9wcy5leGNsdWRlLFxuICAgICAgICAgICAgaWdub3JlTW9kZTogcHJvcHMuaWdub3JlTW9kZSxcbiAgICAgICAgICAgIHNraXAsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IHN0YWdlZCA9IEFzc2V0U3RhZ2luZy5hc3NldENhY2hlLm9idGFpbih0aGlzLmNhY2hlS2V5LCBzdGFnZVRoaXNBc3NldCk7XG4gICAgICAgIHRoaXMuYWJzb2x1dGVTdGFnZWRQYXRoID0gc3RhZ2VkLnN0YWdlZFBhdGg7XG4gICAgICAgIHRoaXMuYXNzZXRIYXNoID0gc3RhZ2VkLmFzc2V0SGFzaDtcbiAgICAgICAgdGhpcy5wYWNrYWdpbmcgPSBzdGFnZWQucGFja2FnaW5nO1xuICAgICAgICB0aGlzLmlzQXJjaGl2ZSA9IHN0YWdlZC5pc0FyY2hpdmU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJuIHRoZSBwYXRoIHRvIHRoZSBzdGFnZWQgYXNzZXQsIHJlbGF0aXZlIHRvIHRoZSBDbG91ZCBBc3NlbWJseSAobWFuaWZlc3QpIGRpcmVjdG9yeSBvZiB0aGUgZ2l2ZW4gc3RhY2tcbiAgICAgKlxuICAgICAqIE9ubHkgcmV0dXJucyBhIHJlbGF0aXZlIHBhdGggaWYgdGhlIGFzc2V0IHdhcyBzdGFnZWQsIHJldHVybnMgYW4gYWJzb2x1dGUgcGF0aCBpZlxuICAgICAqIGl0IHdhcyBub3Qgc3RhZ2VkLlxuICAgICAqXG4gICAgICogQSBidW5kbGVkIGFzc2V0IG1pZ2h0IGVuZCB1cCBpbiB0aGUgb3V0RGlyIGFuZCBzdGlsbCBub3QgY291bnQgYXNcbiAgICAgKiBcInN0YWdlZFwiOyBpZiBhc3NldCBzdGFnaW5nIGlzIGRpc2FibGVkIHdlJ3JlIHRlY2huaWNhbGx5IGV4cGVjdGVkIHRvXG4gICAgICogcmVmZXJlbmNlIHNvdXJjZSBkaXJlY3RvcmllcywgYnV0IHdlIGRvbid0IGhhdmUgYSBzb3VyY2UgZGlyZWN0b3J5IGZvciB0aGVcbiAgICAgKiBidW5kbGVkIG91dHB1dHMgKGFzIHRoZSBidW5kbGUgb3V0cHV0IGlzIHdyaXR0ZW4gdG8gYSB0ZW1wb3JhcnlcbiAgICAgKiBkaXJlY3RvcnkpLiBOZXZlcnRoZWxlc3MsIHdlIHdpbGwgc3RpbGwgcmV0dXJuIGFuIGFic29sdXRlIHBhdGguXG4gICAgICpcbiAgICAgKiBBIG5vbi1vYnZpb3VzIGRpcmVjdG9yeSBsYXlvdXQgbWF5IGxvb2sgbGlrZSB0aGlzOlxuICAgICAqXG4gICAgICogYGBgXG4gICAgICogICBDTE9VRCBBU1NFTUJMWSBST09UXG4gICAgICogICAgICstLSBhc3NldC4xMjM0NWFiY2RlZi9cbiAgICAgKiAgICAgKy0tIGFzc2VtYmx5LVN0YWdlXG4gICAgICogICAgICAgICAgICstLSBNeVN0YWNrLnRlbXBsYXRlLmpzb25cbiAgICAgKiAgICAgICAgICAgKy0tIE15U3RhY2suYXNzZXRzLmpzb24gPC0gd2lsbCBjb250YWluIHsgXCJwYXRoXCI6IFwiLi4vYXNzZXQuMTIzNDVhYmNkZWZcIiB9XG4gICAgICogYGBgXG4gICAgICovXG4gICAgcHVibGljIHJlbGF0aXZlU3RhZ2VkUGF0aChzdGFjazogU3RhY2spIHtcbiAgICAgICAgY29uc3QgYXNtTWFuaWZlc3REaXIgPSBTdGFnZS5vZihzdGFjayk/Lm91dGRpcjtcbiAgICAgICAgaWYgKCFhc21NYW5pZmVzdERpcikgeyByZXR1cm4gdGhpcy5hYnNvbHV0ZVN0YWdlZFBhdGg7IH1cblxuICAgICAgICBjb25zdCBpc091dHNpZGVBc3NldERpciA9IHBhdGgucmVsYXRpdmUodGhpcy5hc3NldE91dGRpciwgdGhpcy5hYnNvbHV0ZVN0YWdlZFBhdGgpLnN0YXJ0c1dpdGgoJy4uJyk7XG4gICAgICAgIGlmIChpc091dHNpZGVBc3NldERpciB8fCB0aGlzLnN0YWdpbmdEaXNhYmxlZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYWJzb2x1dGVTdGFnZWRQYXRoO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHBhdGgucmVsYXRpdmUoYXNtTWFuaWZlc3REaXIsIHRoaXMuYWJzb2x1dGVTdGFnZWRQYXRoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTdGFnZSB0aGUgc291cmNlIHRvIHRoZSB0YXJnZXQgYnkgY29weWluZ1xuICAgICAqXG4gICAgICogT3B0aW9uYWxseSBza2lwIGlmIHN0YWdpbmcgaXMgZGlzYWJsZWQsIGluIHdoaWNoIGNhc2Ugd2UgcHJldGVuZCB3ZSBkaWQgc29tZXRoaW5nIGJ1dCB3ZSBkb24ndCByZWFsbHkuXG4gICAgICovXG4gICAgcHJpdmF0ZSBzdGFnZUJ5Q29weWluZygpOiBTdGFnZWRBc3NldCB7XG4gICAgICAgIGNvbnN0IGFzc2V0SGFzaCA9IHRoaXMuY2FsY3VsYXRlSGFzaCh0aGlzLmhhc2hUeXBlKTtcbiAgICAgICAgY29uc3Qgc3RhZ2VkUGF0aCA9IHRoaXMuc3RhZ2luZ0Rpc2FibGVkXG4gICAgICAgICAgICA/IHRoaXMuc291cmNlUGF0aFxuICAgICAgICAgICAgOiBwYXRoLnJlc29sdmUodGhpcy5hc3NldE91dGRpciwgcmVuZGVyQXNzZXRGaWxlbmFtZShhc3NldEhhc2gsIGdldEV4dGVuc2lvbih0aGlzLnNvdXJjZVBhdGgpKSk7XG5cbiAgICAgICAgaWYgKCF0aGlzLnNvdXJjZVN0YXRzLmlzRGlyZWN0b3J5KCkgJiYgIXRoaXMuc291cmNlU3RhdHMuaXNGaWxlKCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQXNzZXQgJHt0aGlzLnNvdXJjZVBhdGh9IGlzIGV4cGVjdGVkIHRvIGJlIGVpdGhlciBhIGRpcmVjdG9yeSBvciBhIHJlZ3VsYXIgZmlsZWApO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zdGFnZUFzc2V0KHRoaXMuc291cmNlUGF0aCwgc3RhZ2VkUGF0aCwgJ2NvcHknKTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYXNzZXRIYXNoLFxuICAgICAgICAgICAgc3RhZ2VkUGF0aCxcbiAgICAgICAgICAgIHBhY2thZ2luZzogdGhpcy5zb3VyY2VTdGF0cy5pc0RpcmVjdG9yeSgpID8gRmlsZUFzc2V0UGFja2FnaW5nLlpJUF9ESVJFQ1RPUlkgOiBGaWxlQXNzZXRQYWNrYWdpbmcuRklMRSxcbiAgICAgICAgICAgIGlzQXJjaGl2ZTogdGhpcy5zb3VyY2VTdGF0cy5pc0RpcmVjdG9yeSgpIHx8IEFSQ0hJVkVfRVhURU5TSU9OUy5pbmNsdWRlcyhnZXRFeHRlbnNpb24odGhpcy5zb3VyY2VQYXRoKS50b0xvd2VyQ2FzZSgpKSxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTdGFnZSB0aGUgc291cmNlIHRvIHRoZSB0YXJnZXQgYnkgYnVuZGxpbmdcbiAgICAgKlxuICAgICAqIE9wdGlvbmFsbHkgc2tpcCwgaW4gd2hpY2ggY2FzZSB3ZSBwcmV0ZW5kIHdlIGRpZCBzb21ldGhpbmcgYnV0IHdlIGRvbid0IHJlYWxseS5cbiAgICAgKi9cbiAgICBwcml2YXRlIHN0YWdlQnlCdW5kbGluZyhidW5kbGluZzogQnVuZGxpbmdPcHRpb25zLCBza2lwOiBib29sZWFuKTogU3RhZ2VkQXNzZXQge1xuICAgICAgICBpZiAoIXRoaXMuc291cmNlU3RhdHMuaXNEaXJlY3RvcnkoKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBBc3NldCAke3RoaXMuc291cmNlUGF0aH0gaXMgZXhwZWN0ZWQgdG8gYmUgYSBkaXJlY3Rvcnkgd2hlbiBidW5kbGluZ2ApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNraXApIHtcbiAgICAgICAgICAgIC8vIFdlIHNob3VsZCBoYXZlIGJ1bmRsZWQsIGJ1dCBkaWRuJ3QgdG8gc2F2ZSB0aW1lLiBTdGlsbCBwcmV0ZW5kIHRvIGhhdmUgYSBoYXNoLlxuICAgICAgICAgICAgLy8gSWYgdGhlIGFzc2V0IHVzZXMgT1VUUFVUIG9yIEJVTkRMRSwgd2UgdXNlIGEgQ1VTVE9NIGhhc2ggdG8gYXZvaWQgZmluZ2VycHJpbnRpbmdcbiAgICAgICAgICAgIC8vIGEgcG90ZW50aWFsbHkgdmVyeSBsYXJnZSBzb3VyY2UgZGlyZWN0b3J5LiBPdGhlciBoYXNoIHR5cGVzIGFyZSBrZXB0IHRoZSBzYW1lLlxuICAgICAgICAgICAgbGV0IGhhc2hUeXBlID0gdGhpcy5oYXNoVHlwZTtcbiAgICAgICAgICAgIGlmIChoYXNoVHlwZSA9PT0gQXNzZXRIYXNoVHlwZS5PVVRQVVQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmN1c3RvbVNvdXJjZUZpbmdlcnByaW50ID0gTmFtZXMudW5pcXVlSWQodGhpcyk7XG4gICAgICAgICAgICAgICAgaGFzaFR5cGUgPSBBc3NldEhhc2hUeXBlLkNVU1RPTTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgYXNzZXRIYXNoOiB0aGlzLmNhbGN1bGF0ZUhhc2goaGFzaFR5cGUsIGJ1bmRsaW5nKSxcbiAgICAgICAgICAgICAgICBzdGFnZWRQYXRoOiB0aGlzLnNvdXJjZVBhdGgsXG4gICAgICAgICAgICAgICAgcGFja2FnaW5nOiBGaWxlQXNzZXRQYWNrYWdpbmcuWklQX0RJUkVDVE9SWSxcbiAgICAgICAgICAgICAgICBpc0FyY2hpdmU6IHRydWUsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVHJ5IHRvIGNhbGN1bGF0ZSBhc3NldEhhc2ggYmVmb3JlaGFuZCAoaWYgd2UgY2FuKVxuICAgICAgICBsZXQgYXNzZXRIYXNoID0gdGhpcy5oYXNoVHlwZSA9PT0gQXNzZXRIYXNoVHlwZS5TT1VSQ0UgfHwgdGhpcy5oYXNoVHlwZSA9PT0gQXNzZXRIYXNoVHlwZS5DVVNUT01cbiAgICAgICAgICAgID8gdGhpcy5jYWxjdWxhdGVIYXNoKHRoaXMuaGFzaFR5cGUsIGJ1bmRsaW5nKVxuICAgICAgICAgICAgOiB1bmRlZmluZWQ7XG5cbiAgICAgICAgY29uc3QgYnVuZGxlRGlyID0gdGhpcy5kZXRlcm1pbmVCdW5kbGVEaXIodGhpcy5hc3NldE91dGRpciwgYXNzZXRIYXNoKTtcbiAgICAgICAgdGhpcy5idW5kbGUoYnVuZGxpbmcsIGJ1bmRsZURpcik7XG5cbiAgICAgICAgLy8gQ2hlY2sgYnVuZGxpbmcgb3V0cHV0IGNvbnRlbnQgYW5kIGRldGVybWluZSBpZiB3ZSB3aWxsIG5lZWQgdG8gYXJjaGl2ZVxuICAgICAgICBjb25zdCBidW5kbGluZ091dHB1dFR5cGUgPSBidW5kbGluZy5vdXRwdXRUeXBlID8/IEJ1bmRsaW5nT3V0cHV0LkFVVE9fRElTQ09WRVI7XG4gICAgICAgIGNvbnN0IGJ1bmRsZWRBc3NldCA9IGRldGVybWluZUJ1bmRsZWRBc3NldChidW5kbGVEaXIsIGJ1bmRsaW5nT3V0cHV0VHlwZSk7XG5cbiAgICAgICAgLy8gQ2FsY3VsYXRlIGFzc2V0SGFzaCBhZnRlcndhcmRzIGlmIHdlIHN0aWxsIG11c3RcbiAgICAgICAgYXNzZXRIYXNoID0gYXNzZXRIYXNoID8/IHRoaXMuY2FsY3VsYXRlSGFzaCh0aGlzLmhhc2hUeXBlLCBidW5kbGluZywgYnVuZGxlZEFzc2V0LnBhdGgpO1xuXG4gICAgICAgIGNvbnN0IHN0YWdlZFBhdGggPSBwYXRoLnJlc29sdmUodGhpcy5hc3NldE91dGRpciwgcmVuZGVyQXNzZXRGaWxlbmFtZShhc3NldEhhc2gsIGJ1bmRsZWRBc3NldC5leHRlbnNpb24pKTtcblxuICAgICAgICB0aGlzLnN0YWdlQXNzZXQoYnVuZGxlZEFzc2V0LnBhdGgsIHN0YWdlZFBhdGgsICdtb3ZlJyk7XG5cbiAgICAgICAgLy8gSWYgYnVuZGxpbmcgcHJvZHVjZWQgYSBzaW5nbGUgYXJjaGl2ZSBmaWxlIHdlIFwidG91Y2hcIiB0aGlzIGZpbGUgaW4gdGhlIGJ1bmRsaW5nXG4gICAgICAgIC8vIGRpcmVjdG9yeSBhZnRlciBpdCBoYXMgYmVlbiBtb3ZlZCB0byB0aGUgc3RhZ2luZyBkaXJlY3RvcnkgaWYgdGhlIGhhc2ggaXMga25vd24gYmVmb3JlIGJ1bmRsaW5nLiBUaGlzIHdheSBpZiBidW5kbGluZ1xuICAgICAgICAvLyBpcyBza2lwcGVkIGJlY2F1c2UgdGhlIGJ1bmRsaW5nIGRpcmVjdG9yeSBhbHJlYWR5IGV4aXN0cyB3ZSBjYW4gc3RpbGwgZGV0ZXJtaW5lXG4gICAgICAgIC8vIHRoZSBjb3JyZWN0IHBhY2thZ2luZyB0eXBlLlxuICAgICAgICAvLyBJZiB0aGUgaGFzaCBpcyBjYWxjdWxhdGVkIGFmdGVyIGJ1bmRsaW5nIHdlIHJlbW92ZSB0aGUgdGVtcG9yYXJ5IGRpcmVjdG9yeSBub3cuXG4gICAgICAgIGlmIChidW5kbGVkQXNzZXQucGFja2FnaW5nID09PSBGaWxlQXNzZXRQYWNrYWdpbmcuRklMRSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuaGFzaFR5cGUgPT09IEFzc2V0SGFzaFR5cGUuT1VUUFVUKSB7XG4gICAgICAgICAgICAgICAgZnMucmVtb3ZlU3luYyhwYXRoLmRpcm5hbWUoYnVuZGxlZEFzc2V0LnBhdGgpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZnMuY2xvc2VTeW5jKGZzLm9wZW5TeW5jKGJ1bmRsZWRBc3NldC5wYXRoLCAndycpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhc3NldEhhc2gsXG4gICAgICAgICAgICBzdGFnZWRQYXRoLFxuICAgICAgICAgICAgcGFja2FnaW5nOiBidW5kbGVkQXNzZXQucGFja2FnaW5nLFxuICAgICAgICAgICAgaXNBcmNoaXZlOiBidW5kbGluZ091dHB1dFR5cGUgIT09IEJ1bmRsaW5nT3V0cHV0LlNJTkdMRV9GSUxFLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgc3RhZ2luZyBoYXMgYmVlbiBkaXNhYmxlZFxuICAgICAqL1xuICAgIHByaXZhdGUgZ2V0IHN0YWdpbmdEaXNhYmxlZCgpIHtcbiAgICAgICAgcmV0dXJuICEhdGhpcy5ub2RlLnRyeUdldENvbnRleHQoY3hhcGkuRElTQUJMRV9BU1NFVF9TVEFHSU5HX0NPTlRFWFQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENvcGllcyBvciBtb3ZlcyB0aGUgZmlsZXMgZnJvbSBzb3VyY2VQYXRoIHRvIHRhcmdldFBhdGguXG4gICAgICpcbiAgICAgKiBNb3ZpbmcgaW1wbGllcyB0aGUgc291cmNlIGRpcmVjdG9yeSBpcyB0ZW1wb3JhcnkgYW5kIGNhbiBiZSB0cmFzaGVkLlxuICAgICAqXG4gICAgICogV2lsbCBub3QgZG8gYW55dGhpbmcgaWYgc291cmNlIGFuZCB0YXJnZXQgYXJlIHRoZSBzYW1lLlxuICAgICAqL1xuICAgIHByaXZhdGUgc3RhZ2VBc3NldChzb3VyY2VQYXRoOiBzdHJpbmcsIHRhcmdldFBhdGg6IHN0cmluZywgc3R5bGU6ICdtb3ZlJyB8ICdjb3B5Jykge1xuICAgICAgICAvLyBJcyB0aGUgd29yayBhbHJlYWR5IGRvbmU/XG4gICAgICAgIGNvbnN0IGlzQWxyZWFkeVN0YWdlZCA9IGZzLmV4aXN0c1N5bmModGFyZ2V0UGF0aCk7XG4gICAgICAgIGlmIChpc0FscmVhZHlTdGFnZWQpIHtcbiAgICAgICAgICAgIGlmIChzdHlsZSA9PT0gJ21vdmUnICYmIHNvdXJjZVBhdGggIT09IHRhcmdldFBhdGgpIHtcbiAgICAgICAgICAgICAgICBmcy5yZW1vdmVTeW5jKHNvdXJjZVBhdGgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gTW92aW5nIGNhbiBiZSBkb25lIHF1aWNrbHlcbiAgICAgICAgaWYgKHN0eWxlID09ICdtb3ZlJykge1xuICAgICAgICAgICAgZnMucmVuYW1lU3luYyhzb3VyY2VQYXRoLCB0YXJnZXRQYXRoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENvcHkgZmlsZS9kaXJlY3RvcnkgdG8gc3RhZ2luZyBkaXJlY3RvcnlcbiAgICAgICAgaWYgKHRoaXMuc291cmNlU3RhdHMuaXNGaWxlKCkpIHtcbiAgICAgICAgICAgIGZzLmNvcHlGaWxlU3luYyhzb3VyY2VQYXRoLCB0YXJnZXRQYXRoKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnNvdXJjZVN0YXRzLmlzRGlyZWN0b3J5KCkpIHtcbiAgICAgICAgICAgIGZzLm1rZGlyU3luYyh0YXJnZXRQYXRoKTtcbiAgICAgICAgICAgIEZpbGVTeXN0ZW0uY29weURpcmVjdG9yeShzb3VyY2VQYXRoLCB0YXJnZXRQYXRoLCB0aGlzLmZpbmdlcnByaW50T3B0aW9ucyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVua25vd24gZmlsZSB0eXBlOiAke3NvdXJjZVBhdGh9YCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZXRlcm1pbmUgdGhlIGRpcmVjdG9yeSB3aGVyZSB3ZSdyZSBnb2luZyB0byB3cml0ZSB0aGUgYnVuZGxpbmcgb3V0cHV0XG4gICAgICpcbiAgICAgKiBUaGlzIGlzIHRoZSB0YXJnZXQgZGlyZWN0b3J5IHdoZXJlIHdlJ3JlIGdvaW5nIHRvIHdyaXRlIHRoZSBzdGFnZWQgb3V0cHV0XG4gICAgICogZmlsZXMgaWYgd2UgY2FuIChpZiB0aGUgaGFzaCBpcyBmdWxseSBrbm93biksIG9yIGEgdGVtcG9yYXJ5IGRpcmVjdG9yeVxuICAgICAqIG90aGVyd2lzZS5cbiAgICAgKi9cbiAgICBwcml2YXRlIGRldGVybWluZUJ1bmRsZURpcihvdXRkaXI6IHN0cmluZywgc291cmNlSGFzaD86IHN0cmluZykge1xuICAgICAgICBpZiAoc291cmNlSGFzaCkge1xuICAgICAgICAgICAgcmV0dXJuIHBhdGgucmVzb2x2ZShvdXRkaXIsIHJlbmRlckFzc2V0RmlsZW5hbWUoc291cmNlSGFzaCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gV2hlbiB0aGUgYXNzZXQgaGFzaCBpc24ndCBrbm93biBpbiBhZHZhbmNlLCBidW5kbGVyIG91dHB1dHMgdG8gYW5cbiAgICAgICAgLy8gaW50ZXJtZWRpYXRlIGRpcmVjdG9yeSBuYW1lZCBhZnRlciB0aGUgYXNzZXQncyBjYWNoZSBrZXlcbiAgICAgICAgcmV0dXJuIHBhdGgucmVzb2x2ZShvdXRkaXIsIGBidW5kbGluZy10ZW1wLSR7dGhpcy5jYWNoZUtleX1gKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBCdW5kbGVzIGFuIGFzc2V0IHRvIHRoZSBnaXZlbiBkaXJlY3RvcnlcbiAgICAgKlxuICAgICAqIElmIHRoZSBnaXZlbiBkaXJlY3RvcnkgYWxyZWFkeSBleGlzdHMsIGFzc3VtZSB0aGF0IGV2ZXJ5dGhpbmcncyBhbHJlYWR5XG4gICAgICogaW4gb3JkZXIgYW5kIGRvbid0IGRvIGFueXRoaW5nLlxuICAgICAqXG4gICAgICogQHBhcmFtIG9wdGlvbnMgQnVuZGxpbmcgb3B0aW9uc1xuICAgICAqIEBwYXJhbSBidW5kbGVEaXIgV2hlcmUgdG8gY3JlYXRlIHRoZSBidW5kbGUgZGlyZWN0b3J5XG4gICAgICogQHJldHVybnMgVGhlIGZ1bGx5IHJlc29sdmVkIGJ1bmRsZSBvdXRwdXQgZGlyZWN0b3J5LlxuICAgICAqL1xuICAgIHByaXZhdGUgYnVuZGxlKG9wdGlvbnM6IEJ1bmRsaW5nT3B0aW9ucywgYnVuZGxlRGlyOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKGZzLmV4aXN0c1N5bmMoYnVuZGxlRGlyKSkgeyByZXR1cm47IH1cblxuICAgICAgICBmcy5lbnN1cmVEaXJTeW5jKGJ1bmRsZURpcik7XG4gICAgICAgIC8vIENobW9kIHRoZSBidW5kbGVEaXIgdG8gZnVsbCBhY2Nlc3MuXG4gICAgICAgIGZzLmNobW9kU3luYyhidW5kbGVEaXIsIDBvNzc3KTtcblxuICAgICAgICBsZXQgbG9jYWxCdW5kbGluZzogYm9vbGVhbiB8IHVuZGVmaW5lZDtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHByb2Nlc3Muc3RkZXJyLndyaXRlKGBCdW5kbGluZyBhc3NldCAke3RoaXMubm9kZS5wYXRofS4uLlxcbmApO1xuXG4gICAgICAgICAgICBsb2NhbEJ1bmRsaW5nID0gb3B0aW9ucy5sb2NhbD8udHJ5QnVuZGxlKGJ1bmRsZURpciwgb3B0aW9ucyk7XG4gICAgICAgICAgICBpZiAoIWxvY2FsQnVuZGxpbmcpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBhc3NldFN0YWdpbmdPcHRpb25zID0ge1xuICAgICAgICAgICAgICAgICAgICBzb3VyY2VQYXRoOiB0aGlzLnNvdXJjZVBhdGgsXG4gICAgICAgICAgICAgICAgICAgIGJ1bmRsZURpcixcbiAgICAgICAgICAgICAgICAgICAgLi4ub3B0aW9ucyxcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgc3dpdGNoIChvcHRpb25zLmJ1bmRsaW5nRmlsZUFjY2Vzcykge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIEJ1bmRsaW5nRmlsZUFjY2Vzcy5WT0xVTUVfQ09QWTpcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBBc3NldEJ1bmRsaW5nVm9sdW1lQ29weShhc3NldFN0YWdpbmdPcHRpb25zKS5ydW4oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIEJ1bmRsaW5nRmlsZUFjY2Vzcy5CSU5EX01PVU5UOlxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IEFzc2V0QnVuZGxpbmdCaW5kTW91bnQoYXNzZXRTdGFnaW5nT3B0aW9ucykucnVuKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgLy8gV2hlbiBidW5kbGluZyBmYWlscywga2VlcCB0aGUgYnVuZGxlIG91dHB1dCBmb3IgZGlhZ25vc2FiaWxpdHksIGJ1dFxuICAgICAgICAgICAgLy8gcmVuYW1lIGl0IG91dCBvZiB0aGUgd2F5IHNvIHRoYXQgdGhlIG5leHQgcnVuIGRvZXNuJ3QgYXNzdW1lIGl0IGhhcyBhXG4gICAgICAgICAgICAvLyB2YWxpZCBidW5kbGVEaXIuXG4gICAgICAgICAgICBjb25zdCBidW5kbGVFcnJvckRpciA9IGJ1bmRsZURpciArICctZXJyb3InO1xuICAgICAgICAgICAgaWYgKGZzLmV4aXN0c1N5bmMoYnVuZGxlRXJyb3JEaXIpKSB7XG4gICAgICAgICAgICAgICAgLy8gUmVtb3ZlIHRoZSBsYXN0IGJ1bmRsZUVycm9yRGlyLlxuICAgICAgICAgICAgICAgIGZzLnJlbW92ZVN5bmMoYnVuZGxlRXJyb3JEaXIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmcy5yZW5hbWVTeW5jKGJ1bmRsZURpciwgYnVuZGxlRXJyb3JEaXIpO1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gYnVuZGxlIGFzc2V0ICR7dGhpcy5ub2RlLnBhdGh9LCBidW5kbGUgb3V0cHV0IGlzIGxvY2F0ZWQgYXQgJHtidW5kbGVFcnJvckRpcn06ICR7ZXJyfWApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKEZpbGVTeXN0ZW0uaXNFbXB0eShidW5kbGVEaXIpKSB7XG4gICAgICAgICAgICBjb25zdCBvdXRwdXREaXIgPSBsb2NhbEJ1bmRsaW5nID8gYnVuZGxlRGlyIDogQXNzZXRTdGFnaW5nLkJVTkRMSU5HX09VVFBVVF9ESVI7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEJ1bmRsaW5nIGRpZCBub3QgcHJvZHVjZSBhbnkgb3V0cHV0LiBDaGVjayB0aGF0IGNvbnRlbnQgaXMgd3JpdHRlbiB0byAke291dHB1dERpcn0uYCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGNhbGN1bGF0ZUhhc2goaGFzaFR5cGU6IEFzc2V0SGFzaFR5cGUsIGJ1bmRsaW5nPzogQnVuZGxpbmdPcHRpb25zLCBvdXRwdXREaXI/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICAvLyBXaGVuIGJ1bmRsaW5nIGEgQ1VTVE9NIG9yIFNPVVJDRSBhc3NldCBoYXNoIHR5cGUsIHdlIHdhbnQgdGhlIGhhc2ggdG8gaW5jbHVkZVxuICAgICAgICAvLyB0aGUgYnVuZGxpbmcgY29uZmlndXJhdGlvbi4gV2UgaGFuZGxlIENVU1RPTSBhbmQgYnVuZGxlZCBTT1VSQ0UgaGFzaCB0eXBlc1xuICAgICAgICAvLyBhcyBhIHNwZWNpYWwgY2FzZSB0byBwcmVzZXJ2ZSBleGlzdGluZyB1c2VyIGFzc2V0IGhhc2hlcyBpbiBhbGwgb3RoZXIgY2FzZXMuXG4gICAgICAgIGlmIChoYXNoVHlwZSA9PSBBc3NldEhhc2hUeXBlLkNVU1RPTSB8fCAoaGFzaFR5cGUgPT0gQXNzZXRIYXNoVHlwZS5TT1VSQ0UgJiYgYnVuZGxpbmcpKSB7XG4gICAgICAgICAgICBjb25zdCBoYXNoID0gY3J5cHRvLmNyZWF0ZUhhc2goJ3NoYTI1NicpO1xuXG4gICAgICAgICAgICAvLyBpZiBhc3NldCBoYXNoIGlzIHByb3ZpZGVkIGJ5IHVzZXIsIHVzZSBpdCwgb3RoZXJ3aXNlIGZpbmdlcnByaW50IHRoZSBzb3VyY2UuXG4gICAgICAgICAgICBoYXNoLnVwZGF0ZSh0aGlzLmN1c3RvbVNvdXJjZUZpbmdlcnByaW50ID8/IEZpbGVTeXN0ZW0uZmluZ2VycHJpbnQodGhpcy5zb3VyY2VQYXRoLCB0aGlzLmZpbmdlcnByaW50T3B0aW9ucykpO1xuXG4gICAgICAgICAgICAvLyBJZiB3ZSdyZSBidW5kbGluZyBhbiBhc3NldCwgaW5jbHVkZSB0aGUgYnVuZGxpbmcgY29uZmlndXJhdGlvbiBpbiB0aGUgaGFzaFxuICAgICAgICAgICAgaWYgKGJ1bmRsaW5nKSB7XG4gICAgICAgICAgICAgICAgaGFzaC51cGRhdGUoSlNPTi5zdHJpbmdpZnkoYnVuZGxpbmcsIHNhbml0aXplSGFzaFZhbHVlKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBoYXNoLmRpZ2VzdCgnaGV4Jyk7XG4gICAgICAgIH1cblxuICAgICAgICBzd2l0Y2ggKGhhc2hUeXBlKSB7XG4gICAgICAgICAgICBjYXNlIEFzc2V0SGFzaFR5cGUuU09VUkNFOlxuICAgICAgICAgICAgICAgIHJldHVybiBGaWxlU3lzdGVtLmZpbmdlcnByaW50KHRoaXMuc291cmNlUGF0aCwgdGhpcy5maW5nZXJwcmludE9wdGlvbnMpO1xuICAgICAgICAgICAgY2FzZSBBc3NldEhhc2hUeXBlLk9VVFBVVDpcbiAgICAgICAgICAgICAgICBpZiAoIW91dHB1dERpcikge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYENhbm5vdCB1c2UgXFxgJHtoYXNoVHlwZX1cXGAgaGFzaCB0eXBlIHdoZW4gXFxgYnVuZGxpbmdcXGAgaXMgbm90IHNwZWNpZmllZC5gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIEZpbGVTeXN0ZW0uZmluZ2VycHJpbnQob3V0cHV0RGlyLCB0aGlzLmZpbmdlcnByaW50T3B0aW9ucyk7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVW5rbm93biBhc3NldCBoYXNoIHR5cGUuJyk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIHJlbmRlckFzc2V0RmlsZW5hbWUoYXNzZXRIYXNoOiBzdHJpbmcsIGV4dGVuc2lvbiA9ICcnKSB7XG4gICAgcmV0dXJuIGBhc3NldC4ke2Fzc2V0SGFzaH0ke2V4dGVuc2lvbn1gO1xufVxuXG4vKipcbiAqIERldGVybWluZXMgdGhlIGhhc2ggdHlwZSBmcm9tIHVzZXItZ2l2ZW4gcHJvcCB2YWx1ZXMuXG4gKlxuICogQHBhcmFtIGFzc2V0SGFzaFR5cGUgQXNzZXQgaGFzaCB0eXBlIGNvbnN0cnVjdCBwcm9wXG4gKiBAcGFyYW0gY3VzdG9tU291cmNlRmluZ2VycHJpbnQgQXNzZXQgaGFzaCBzZWVkIGdpdmVuIGluIHRoZSBjb25zdHJ1Y3QgcHJvcHNcbiAqL1xuZnVuY3Rpb24gZGV0ZXJtaW5lSGFzaFR5cGUoYXNzZXRIYXNoVHlwZT86IEFzc2V0SGFzaFR5cGUsIGN1c3RvbVNvdXJjZUZpbmdlcnByaW50Pzogc3RyaW5nKSB7XG4gICAgY29uc3QgaGFzaFR5cGUgPSBjdXN0b21Tb3VyY2VGaW5nZXJwcmludFxuICAgICAgICA/IChhc3NldEhhc2hUeXBlID8/IEFzc2V0SGFzaFR5cGUuQ1VTVE9NKVxuICAgICAgICA6IChhc3NldEhhc2hUeXBlID8/IEFzc2V0SGFzaFR5cGUuU09VUkNFKTtcblxuICAgIGlmIChjdXN0b21Tb3VyY2VGaW5nZXJwcmludCAmJiBoYXNoVHlwZSAhPT0gQXNzZXRIYXNoVHlwZS5DVVNUT00pIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDYW5ub3Qgc3BlY2lmeSBcXGAke2Fzc2V0SGFzaFR5cGV9XFxgIGZvciBcXGBhc3NldEhhc2hUeXBlXFxgIHdoZW4gXFxgYXNzZXRIYXNoXFxgIGlzIHNwZWNpZmllZC4gVXNlIFxcYENVU1RPTVxcYCBvciBsZWF2ZSBcXGB1bmRlZmluZWRcXGAuYCk7XG4gICAgfVxuICAgIGlmIChoYXNoVHlwZSA9PT0gQXNzZXRIYXNoVHlwZS5DVVNUT00gJiYgIWN1c3RvbVNvdXJjZUZpbmdlcnByaW50KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignYGFzc2V0SGFzaGAgbXVzdCBiZSBzcGVjaWZpZWQgd2hlbiBgYXNzZXRIYXNoVHlwZWAgaXMgc2V0IHRvIGBBc3NldEhhc2hUeXBlLkNVU1RPTWAuJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGhhc2hUeXBlO1xufVxuXG4vKipcbiAqIENhbGN1bGF0ZXMgYSBjYWNoZSBrZXkgZnJvbSB0aGUgcHJvcHMuIE5vcm1hbGl6ZSBieSBzb3J0aW5nIGtleXMuXG4gKi9cbmZ1bmN0aW9uIGNhbGN1bGF0ZUNhY2hlS2V5PEEgZXh0ZW5kcyBvYmplY3Q+KHByb3BzOiBBKTogc3RyaW5nIHtcbiAgICByZXR1cm4gY3J5cHRvLmNyZWF0ZUhhc2goJ3NoYTI1NicpXG4gICAgICAgIC51cGRhdGUoSlNPTi5zdHJpbmdpZnkoc29ydE9iamVjdChwcm9wcyksIHNhbml0aXplSGFzaFZhbHVlKSlcbiAgICAgICAgLmRpZ2VzdCgnaGV4Jyk7XG59XG5cbi8qKlxuICogUmVjdXJzaXZlbHkgc29ydCBvYmplY3Qga2V5c1xuICovXG5mdW5jdGlvbiBzb3J0T2JqZWN0KG9iamVjdDogeyBba2V5OiBzdHJpbmddOiBhbnkgfSk6IHsgW2tleTogc3RyaW5nXTogYW55IH0ge1xuICAgIGlmICh0eXBlb2Ygb2JqZWN0ICE9PSAnb2JqZWN0JyB8fCBvYmplY3QgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICByZXR1cm4gb2JqZWN0O1xuICAgIH1cbiAgICBjb25zdCByZXQ6IHsgW2tleTogc3RyaW5nXTogYW55IH0gPSB7fTtcbiAgICBmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhvYmplY3QpLnNvcnQoKSkge1xuICAgICAgICByZXRba2V5XSA9IHNvcnRPYmplY3Qob2JqZWN0W2tleV0pO1xuICAgIH1cbiAgICByZXR1cm4gcmV0O1xufVxuXG4vKipcbiAqIFJlbW92ZXMgdGhlIGF1dGggdG9rZW4gZnJvbSBwaXAgVVJMcyBpZiBwcmVzZW50IHRvIHByZXZlbnQgYW4gdW5uZWNlc3NhcnlcbiAqIHJlYnVpbGQuXG4gKi9cbmZ1bmN0aW9uIHNhbml0aXplSGFzaFZhbHVlKGtleTogc3RyaW5nLCB2YWx1ZTogYW55KTogYW55IHtcbiAgICBpZiAoa2V5ID09PSAnUElQX0lOREVYX1VSTCcgfHwga2V5ID09PSAnUElQX0VYVFJBX0lOREVYX1VSTCcpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGxldCB1cmwgPSBuZXcgVVJMKHZhbHVlKTtcbiAgICAgICAgICAgIGlmICh1cmwucGFzc3dvcmQpIHtcbiAgICAgICAgICAgICAgICB1cmwucGFzc3dvcmQgPSAnJztcbiAgICAgICAgICAgICAgICByZXR1cm4gdXJsLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGlmIChlLm5hbWUgPT09ICdUeXBlRXJyb3InKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAke2tleX0gbXVzdCBiZSBhIHZhbGlkIFVSTCwgZ290ICR7dmFsdWV9LmApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdmFsdWU7XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgc2luZ2xlIGFyY2hpdmUgZmlsZSBvZiBhIGRpcmVjdG9yeSBvciB1bmRlZmluZWRcbiAqL1xuZnVuY3Rpb24gZmluZFNpbmdsZUZpbGUoZGlyZWN0b3J5OiBzdHJpbmcsIGFyY2hpdmVPbmx5OiBib29sZWFuKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICBpZiAoIWZzLmV4aXN0c1N5bmMoZGlyZWN0b3J5KSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYERpcmVjdG9yeSAke2RpcmVjdG9yeX0gZG9lcyBub3QgZXhpc3QuYCk7XG4gICAgfVxuXG4gICAgaWYgKCFmcy5zdGF0U3luYyhkaXJlY3RvcnkpLmlzRGlyZWN0b3J5KCkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAke2RpcmVjdG9yeX0gaXMgbm90IGEgZGlyZWN0b3J5LmApO1xuICAgIH1cblxuICAgIGNvbnN0IGNvbnRlbnQgPSBmcy5yZWFkZGlyU3luYyhkaXJlY3RvcnkpO1xuICAgIGlmIChjb250ZW50Lmxlbmd0aCA9PT0gMSkge1xuICAgICAgICBjb25zdCBmaWxlID0gcGF0aC5qb2luKGRpcmVjdG9yeSwgY29udGVudFswXSk7XG4gICAgICAgIGNvbnN0IGV4dGVuc2lvbiA9IGdldEV4dGVuc2lvbihjb250ZW50WzBdKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBpZiAoZnMuc3RhdFN5bmMoZmlsZSkuaXNGaWxlKCkgJiYgKCFhcmNoaXZlT25seSB8fCBBUkNISVZFX0VYVEVOU0lPTlMuaW5jbHVkZXMoZXh0ZW5zaW9uKSkpIHtcbiAgICAgICAgICAgIHJldHVybiBmaWxlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cblxuaW50ZXJmYWNlIEJ1bmRsZWRBc3NldCB7XG4gICAgcGF0aDogc3RyaW5nO1xuICAgIHBhY2thZ2luZzogRmlsZUFzc2V0UGFja2FnaW5nO1xuICAgIGV4dGVuc2lvbj86IHN0cmluZztcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBidW5kbGVkIGFzc2V0IHRvIHVzZSBiYXNlZCBvbiB0aGUgY29udGVudCBvZiB0aGUgYnVuZGxlIGRpcmVjdG9yeVxuICogYW5kIHRoZSB0eXBlIG9mIG91dHB1dC5cbiAqL1xuZnVuY3Rpb24gZGV0ZXJtaW5lQnVuZGxlZEFzc2V0KGJ1bmRsZURpcjogc3RyaW5nLCBvdXRwdXRUeXBlOiBCdW5kbGluZ091dHB1dCk6IEJ1bmRsZWRBc3NldCB7XG4gICAgY29uc3QgYXJjaGl2ZUZpbGUgPSBmaW5kU2luZ2xlRmlsZShidW5kbGVEaXIsIG91dHB1dFR5cGUgIT09IEJ1bmRsaW5nT3V0cHV0LlNJTkdMRV9GSUxFKTtcblxuICAgIC8vIGF1dG8tZGlzY292ZXIgbWVhbnMgdGhhdCBpZiB0aGVyZSBpcyBhbiBhcmNoaXZlIGZpbGUsIHdlIHRha2UgaXQgYXMgdGhlXG4gICAgLy8gYnVuZGxlLCBvdGhlcndpc2UsIHdlIHdpbGwgYXJjaGl2ZSBoZXJlLlxuICAgIGlmIChvdXRwdXRUeXBlID09PSBCdW5kbGluZ091dHB1dC5BVVRPX0RJU0NPVkVSKSB7XG4gICAgICAgIG91dHB1dFR5cGUgPSBhcmNoaXZlRmlsZSA/IEJ1bmRsaW5nT3V0cHV0LkFSQ0hJVkVEIDogQnVuZGxpbmdPdXRwdXQuTk9UX0FSQ0hJVkVEO1xuICAgIH1cblxuICAgIHN3aXRjaCAob3V0cHV0VHlwZSkge1xuICAgICAgICBjYXNlIEJ1bmRsaW5nT3V0cHV0Lk5PVF9BUkNISVZFRDpcbiAgICAgICAgICAgIHJldHVybiB7IHBhdGg6IGJ1bmRsZURpciwgcGFja2FnaW5nOiBGaWxlQXNzZXRQYWNrYWdpbmcuWklQX0RJUkVDVE9SWSB9O1xuICAgICAgICBjYXNlIEJ1bmRsaW5nT3V0cHV0LkFSQ0hJVkVEOlxuICAgICAgICBjYXNlIEJ1bmRsaW5nT3V0cHV0LlNJTkdMRV9GSUxFOlxuICAgICAgICAgICAgaWYgKCFhcmNoaXZlRmlsZSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQnVuZGxpbmcgb3V0cHV0IGRpcmVjdG9yeSBpcyBleHBlY3RlZCB0byBpbmNsdWRlIG9ubHkgYSBzaW5nbGUgZmlsZSB3aGVuIGBvdXRwdXRgIGlzIHNldCB0byBgQVJDSElWRURgIG9yIGBTSU5HTEVfRklMRWAnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB7IHBhdGg6IGFyY2hpdmVGaWxlLCBwYWNrYWdpbmc6IEZpbGVBc3NldFBhY2thZ2luZy5GSUxFLCBleHRlbnNpb246IGdldEV4dGVuc2lvbihhcmNoaXZlRmlsZSkgfTtcbiAgICB9XG59XG5cbi8qKlxuICogUmV0dXJuIHRoZSBleHRlbnNpb24gbmFtZSBvZiBhIHNvdXJjZSBwYXRoXG4gKlxuICogTG9vcCB0aHJvdWdoIEFSQ0hJVkVfRVhURU5TSU9OUyBmb3IgdmFsaWQgYXJjaGl2ZSBleHRlbnNpb25zLlxuICovXG5mdW5jdGlvbiBnZXRFeHRlbnNpb24oc291cmNlOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGZvciAoIGNvbnN0IGV4dCBvZiBBUkNISVZFX0VYVEVOU0lPTlMgKSB7XG4gICAgICAgIGlmIChzb3VyY2UudG9Mb3dlckNhc2UoKS5lbmRzV2l0aChleHQpKSB7XG4gICAgICAgICAgICByZXR1cm4gZXh0O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhdGguZXh0bmFtZShzb3VyY2UpO1xufVxuXG4iXX0=