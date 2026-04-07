"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssetManifestBuilder = void 0;
const fs = require("fs");
const path = require("path");
const cxschema = require("@alicloud/ros-cdk-assembly-schema");
const assets_1 = require("../assets");
const helpers_internal_1 = require("../helpers-internal");
/**
 * Build an asset manifest from assets added to a stack
 *
 * This class does not need to be used by app builders; it is only necessary for building Stack Synthesizers.
 */
class AssetManifestBuilder {
    constructor() {
        this.files = {};
        this.dockerImages = {};
    }
    /**
     * Add a file asset to the manifest with default settings
     *
     * Derive the region from the stack, use the asset hash as the key, copy the
     * file extension over, and set the prefix.
     */
    defaultAddFileAsset(stack, asset, target) {
        validateFileAssetSource(asset);
        const extension = asset.fileName != undefined ? path.extname(asset.fileName) : '';
        const objectKey = (target.bucketPrefix ?? '') +
            asset.sourceHash +
            (asset.packaging === assets_1.FileAssetPackaging.ZIP_DIRECTORY
                ? '.zip'
                : extension);
        // Add to manifest
        return this.addFileAsset(stack, asset.sourceHash, {
            path: asset.fileName,
            executable: asset.executable,
            packaging: asset.packaging,
        }, {
            bucketName: target.bucketName,
            objectKey,
            region: (0, helpers_internal_1.resolvedOr)(stack.region, undefined)
        });
    }
    /**
     * Add a docker image asset to the manifest with default settings
     *
     * Derive the region from the stack, use the asset hash as the key, and set the prefix.
     */
    defaultAddDockerImageAsset(stack, asset, target) {
        validateDockerImageAssetSource(asset);
        const imageTag = `${target.dockerTagPrefix ?? ''}${asset.sourceHash}`;
        // Add to manifest
        const sourceHash = asset.assetName ? `${asset.assetName}-${asset.sourceHash}` : asset.sourceHash;
        return this.addDockerImageAsset(stack, sourceHash, {
            executable: asset.executable,
            directory: asset.directoryName,
            dockerBuildArgs: asset.dockerBuildArgs,
            dockerBuildSsh: asset.dockerBuildSsh,
            dockerBuildTarget: asset.dockerBuildTarget,
            dockerFile: asset.dockerFile,
            networkMode: asset.networkMode,
            platform: asset.platform,
            dockerOutputs: asset.dockerOutputs,
            cacheFrom: asset.dockerCacheFrom,
            cacheTo: asset.dockerCacheTo,
            cacheDisabled: asset.dockerCacheDisabled,
        }, {
            repositoryName: target.repositoryName,
            imageTag,
            region: (0, helpers_internal_1.resolvedOr)(stack.region, undefined)
        });
    }
    /**
     * Add a file asset source and destination to the manifest
     *
     * sourceHash should be unique for every source.
     */
    addFileAsset(stack, sourceHash, source, dest) {
        if (!this.files[sourceHash]) {
            this.files[sourceHash] = {
                source,
                destinations: {},
            };
        }
        this.files[sourceHash].destinations[this.manifestEnvName(stack)] = dest;
        return dest;
    }
    /**
     * Add a docker asset source and destination to the manifest
     *
     * sourceHash should be unique for every source.
     */
    addDockerImageAsset(stack, sourceHash, source, dest) {
        if (!this.dockerImages[sourceHash]) {
            this.dockerImages[sourceHash] = {
                source,
                destinations: {},
            };
        }
        this.dockerImages[sourceHash].destinations[this.manifestEnvName(stack)] = dest;
        return dest;
    }
    /**
     * Whether there are any assets registered in the manifest
     */
    get hasAssets() {
        return Object.keys(this.files).length + Object.keys(this.dockerImages).length > 0;
    }
    /**
     * Write the manifest to disk, and add it to the synthesis session
     *
     * Return the artifact id, which should be added to the `additionalDependencies`
     * field of the stack artifact.
     */
    emitManifest(stack, session, options = {}, dependencies = []) {
        const artifactId = `${stack.artifactId}.assets`;
        const manifestFile = `${artifactId}.json`;
        const outPath = path.join(session.assembly.outdir, manifestFile);
        const manifest = {
            version: cxschema.Manifest.version(),
            files: this.files,
            dockerImages: this.dockerImages,
        };
        fs.writeFileSync(outPath, JSON.stringify(manifest, undefined, 2));
        session.assembly.addArtifact(artifactId, {
            type: cxschema.ArtifactType.ASSET_MANIFEST,
            properties: {
                file: manifestFile,
                ...options,
            },
            dependencies: dependencies.length > 0 ? dependencies : undefined,
        });
        return artifactId;
    }
    manifestEnvName(_stack) {
        return 'current_account-current_region';
    }
}
exports.AssetManifestBuilder = AssetManifestBuilder;
function validateFileAssetSource(asset) {
    if (!!asset.executable === !!asset.fileName) {
        throw new Error(`Exactly one of 'fileName' or 'executable' is required, got: ${JSON.stringify(asset)}`);
    }
    if (!!asset.packaging !== !!asset.fileName) {
        throw new Error(`'packaging' is expected in combination with 'fileName', got: ${JSON.stringify(asset)}`);
    }
}
function validateDockerImageAssetSource(asset) {
    if (!!asset.executable === !!asset.directoryName) {
        throw new Error(`Exactly one of 'directoryName' or 'executable' is required, got: ${JSON.stringify(asset)}`);
    }
    check('dockerBuildArgs');
    check('dockerBuildTarget');
    check('dockerOutputs');
    check('dockerFile');
    function check(key) {
        if (asset[key] && !asset.directoryName) {
            throw new Error(`'${key}' is only allowed in combination with 'directoryName', got: ${JSON.stringify(asset)}`);
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzZXQtbWFuaWZlc3QtYnVpbGRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFzc2V0LW1hbmlmZXN0LWJ1aWxkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEseUJBQXlCO0FBQ3pCLDZCQUE2QjtBQUU3Qiw4REFBOEQ7QUFDOUQsc0NBQXdGO0FBQ3hGLDBEQUFpRDtBQUdqRDs7OztHQUlHO0FBQ0gsTUFBYSxvQkFBb0I7SUFBakM7UUFDcUIsVUFBSyxHQUFpRCxFQUFFLENBQUM7UUFDekQsaUJBQVksR0FBd0QsRUFBRSxDQUFDO0lBaUo1RixDQUFDO0lBL0lHOzs7OztPQUtHO0lBQ0ksbUJBQW1CLENBQUMsS0FBWSxFQUFFLEtBQXNCLEVBQUUsTUFBb0M7UUFDakcsdUJBQXVCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFL0IsTUFBTSxTQUFTLEdBQ1gsS0FBSyxDQUFDLFFBQVEsSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDcEUsTUFBTSxTQUFTLEdBQ1gsQ0FBQyxNQUFNLENBQUMsWUFBWSxJQUFJLEVBQUUsQ0FBQztZQUMzQixLQUFLLENBQUMsVUFBVTtZQUNoQixDQUFDLEtBQUssQ0FBQyxTQUFTLEtBQUssMkJBQWtCLENBQUMsYUFBYTtnQkFDakQsQ0FBQyxDQUFDLE1BQU07Z0JBQ1IsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRXJCLGtCQUFrQjtRQUNsQixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxVQUFVLEVBQUU7WUFDOUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxRQUFRO1lBQ3BCLFVBQVUsRUFBRSxLQUFLLENBQUMsVUFBVTtZQUM1QixTQUFTLEVBQUUsS0FBSyxDQUFDLFNBQVM7U0FDN0IsRUFBRTtZQUNDLFVBQVUsRUFBRSxNQUFNLENBQUMsVUFB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bSAncGF0aCc7XG5pbXBvcnQgeyBJU3ludGhlc2lzU2Vzc2lvbiB9IGZyb20gJy4uL2NvbnN0cnVjdC1jb21wYXQnO1xuaW1wb3J0ICogYXMgY3hzY2hlbWEgZnJvbSAnQGFsaWNsb3VkL3Jvcy1jZGstYXNzZW1ibHktc2NoZW1hJztcbmltcG9ydCB7IEZpbGVBc3NldFNvdXJjZSwgRmlsZUFzc2V0UGFja2FnaW5nLCBEb2NrZXJJbWFnZUFzc2V0U291cmNlIH0gZnJvbSAnLi4vYXNzZXRzJztcbmltcG9ydCB7IHJlc29sdmVkT3IgfSBmcm9tICcuLi9oZWxwZXJzLWludGVybmFsJztcbmltcG9ydCB7IFN0YWNrIH0gZnJvbSAnLi4vc3RhY2snO1xuXG4vKipcbiAqIEJ1aWxkIGFuIGFzc2V0IG1hbmlmZXN0IGZyb20gYXNzZXRzIGFkZGVkIHRvIGEgc3RhY2tcbiAqXG4gKiBUaGlzIGNsYXNzIGRvZXMgbm90IG5lZWQgdG8gYmUgdXNlZCBieSBhcHAgYnVpbGRlcnM7IGl0IGlzIG9ubHkgbmVjZXNzYXJ5IGZvciBidWlsZGluZyBTdGFjayBTeW50aGVzaXplcnMuXG4gKi9cbmV4cG9ydCBjbGFzcyBBc3NldE1hbmlmZXN0QnVpbGRlciB7XG4gICAgcHJpdmF0ZSByZWFkb25seSBmaWxlczogTm9uTnVsbGFibGU8Y3hzY2hlbWEuQXNzZXRNYW5pZmVzdFsnZmlsZXMnXT4gPSB7fTtcbiAgICBwcml2YXRlIHJlYWRvbmx5IGRvY2tlckltYWdlczogTm9uTnVsbGFibGU8Y3hzY2hlbWEuQXNzZXRNYW5pZmVzdFsnZG9ja2VySW1hZ2VzJ10+ID0ge307XG5cbiAgICAvKipcbiAgICAgKiBBZGQgYSBmaWxlIGFzc2V0IHRvIHRoZSBtYW5pZmVzdCB3aXRoIGRlZmF1bHQgc2V0dGluZ3NcbiAgICAgKlxuICAgICAqIERlcml2ZSB0aGUgcmVnaW9uIGZyb20gdGhlIHN0YWNrLCB1c2UgdGhlIGFzc2V0IGhhc2ggYXMgdGhlIGtleSwgY29weSB0aGVcbiAgICAgKiBmaWxlIGV4dGVuc2lvbiBvdmVyLCBhbmQgc2V0IHRoZSBwcmVmaXguXG4gICAgICovXG4gICAgcHVibGljIGRlZmF1bHRBZGRGaWxlQXNzZXQoc3RhY2s6IFN0YWNrLCBhc3NldDogRmlsZUFzc2V0U291cmNlLCB0YXJnZXQ6IEFzc2V0TWFuaWZlc3RGaWxlRGVzdGluYXRpb24pIHtcbiAgICAgICAgdmFsaWRhdGVGaWxlQXNzZXRTb3VyY2UoYXNzZXQpO1xuXG4gICAgICAgIGNvbnN0IGV4dGVuc2lvbiA9XG4gICAgICAgICAgICBhc3NldC5maWxlTmFtZSAhPSB1bmRlZmluZWQgPyBwYXRoLmV4dG5hbWUoYXNzZXQuZmlsZU5hbWUpIDogJyc7XG4gICAgICAgIGNvbnN0IG9iamVjdEtleSA9XG4gICAgICAgICAgICAodGFyZ2V0LmJ1Y2tldFByZWZpeCA/PyAnJykgK1xuICAgICAgICAgICAgYXNzZXQuc291cmNlSGFzaCArXG4gICAgICAgICAgICAoYXNzZXQucGFja2FnaW5nID09PSBGaWxlQXNzZXRQYWNrYWdpbmcuWklQX0RJUkVDVE9SWVxuICAgICAgICAgICAgICAgID8gJy56aXAnXG4gICAgICAgICAgICAgICAgOiBleHRlbnNpb24pO1xuXG4gICAgICAgIC8vIEFkZCB0byBtYW5pZmVzdFxuICAgICAgICByZXR1cm4gdGhpcy5hZGRGaWxlQXNzZXQoc3RhY2ssIGFzc2V0LnNvdXJjZUhhc2gsIHtcbiAgICAgICAgICAgIHBhdGg6IGFzc2V0LmZpbGVOYW1lLFxuICAgICAgICAgICAgZXhlY3V0YWJsZTogYXNzZXQuZXhlY3V0YWJsZSxcbiAgICAgICAgICAgIHBhY2thZ2luZzogYXNzZXQucGFja2FnaW5nLFxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBidWNrZXROYW1lOiB0YXJnZXQuYnVja2V0TmFtZSxcbiAgICAgICAgICAgIG9iamVjdEtleSxcbiAgICAgICAgICAgIHJlZ2lvbjogcmVzb2x2ZWRPcihzdGFjay5yZWdpb24sIHVuZGVmaW5lZClcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkIGEgZG9ja2VyIGltYWdlIGFzc2V0IHRvIHRoZSBtYW5pZmVzdCB3aXRoIGRlZmF1bHQgc2V0dGluZ3NcbiAgICAgKlxuICAgICAqIERlcml2ZSB0aGUgcmVnaW9uIGZyb20gdGhlIHN0YWNrLCB1c2UgdGhlIGFzc2V0IGhhc2ggYXMgdGhlIGtleSwgYW5kIHNldCB0aGUgcHJlZml4LlxuICAgICAqL1xuICAgIHB1YmxpYyBkZWZhdWx0QWRkRG9ja2VySW1hZ2VBc3NldChcbiAgICAgICAgc3RhY2s6IFN0YWNrLFxuICAgICAgICBhc3NldDogRG9ja2VySW1hZ2VBc3NldFNvdXJjZSxcbiAgICAgICAgdGFyZ2V0OiBBc3NldE1hbmlmZXN0RG9ja2VySW1hZ2VEZXN0aW5hdGlvbixcbiAgICApIHtcbiAgICAgICAgdmFsaWRhdGVEb2NrZXJJbWFnZUFzc2V0U291cmNlKGFzc2V0KTtcbiAgICAgICAgY29uc3QgaW1hZ2VUYWcgPSBgJHt0YXJnZXQuZG9ja2VyVGFnUHJlZml4ID8/ICcnfSR7YXNzZXQuc291cmNlSGFzaH1gO1xuXG4gICAgICAgIC8vIEFkZCB0byBtYW5pZmVzdFxuICAgICAgICBjb25zdCBzb3VyY2VIYXNoID0gYXNzZXQuYXNzZXROYW1lID8gYCR7YXNzZXQuYXNzZXROYW1lfS0ke2Fzc2V0LnNvdXJjZUhhc2h9YCA6IGFzc2V0LnNvdXJjZUhhc2g7XG4gICAgICAgIHJldHVybiB0aGlzLmFkZERvY2tlckltYWdlQXNzZXQoc3RhY2ssIHNvdXJjZUhhc2gsIHtcbiAgICAgICAgICAgIGV4ZWN1dGFibGU6IGFzc2V0LmV4ZWN1dGFibGUsXG4gICAgICAgICAgICBkaXJlY3Rvcnk6IGFzc2V0LmRpcmVjdG9yeU5hbWUsXG4gICAgICAgICAgICBkb2NrZXJCdWlsZEFyZ3M6IGFzc2V0LmRvY2tlckJ1aWxkQXJncyxcbiAgICAgICAgICAgIGRvY2tlckJ1aWxkU3NoOiBhc3NldC5kb2NrZXJCdWlsZFNzaCxcbiAgICAgICAgICAgIGRvY2tlckJ1aWxkVGFyZ2V0OiBhc3NldC5kb2NrZXJCdWlsZFRhcmdldCxcbiAgICAgICAgICAgIGRvY2tlckZpbGU6IGFzc2V0LmRvY2tlckZpbGUsXG4gICAgICAgICAgICBuZXR3b3JrTW9kZTogYXNzZXQubmV0d29ya01vZGUsXG4gICAgICAgICAgICBwbGF0Zm9ybTogYXNzZXQucGxhdGZvcm0sXG4gICAgICAgICAgICBkb2NrZXJPdXRwdXRzOiBhc3NldC5kb2NrZXJPdXRwdXRzLFxuICAgICAgICAgICAgY2FjaGVGcm9tOiBhc3NldC5kb2NrZXJDYWNoZUZyb20sXG4gICAgICAgICAgICBjYWNoZVRvOiBhc3NldC5kb2NrZXJDYWNoZVRvLFxuICAgICAgICAgICAgY2FjaGVEaXNhYmxlZDogYXNzZXQuZG9ja2VyQ2FjaGVEaXNhYmxlZCxcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgcmVwb3NpdG9yeU5hbWU6IHRhcmdldC5yZXBvc2l0b3J5TmFtZSxcbiAgICAgICAgICAgIGltYWdlVGFnLFxuICAgICAgICAgICAgcmVnaW9uOiByZXNvbHZlZE9yKHN0YWNrLnJlZ2lvbiwgdW5kZWZpbmVkKVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGQgYSBmaWxlIGFzc2V0IHNvdXJjZSBhbmQgZGVzdGluYXRpb24gdG8gdGhlIG1hbmlmZXN0XG4gICAgICpcbiAgICAgKiBzb3VyY2VIYXNoIHNob3VsZCBiZSB1bmlxdWUgZm9yIGV2ZXJ5IHNvdXJjZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgYWRkRmlsZUFzc2V0KHN0YWNrOiBTdGFjaywgc291cmNlSGFzaDogc3RyaW5nLCBzb3VyY2U6IGN4c2NoZW1hLkZpbGVTb3VyY2UsIGRlc3Q6IGN4c2NoZW1hLkZpbGVEZXN0aW5hdGlvbikge1xuICAgICAgICBpZiAoIXRoaXMuZmlsZXNbc291cmNlSGFzaF0pIHtcbiAgICAgICAgICAgIHRoaXMuZmlsZXNbc291cmNlSGFzaF0gPSB7XG4gICAgICAgICAgICAgICAgc291cmNlLFxuICAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uczoge30sXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZmlsZXNbc291cmNlSGFzaF0uZGVzdGluYXRpb25zW3RoaXMubWFuaWZlc3RFbnZOYW1lKHN0YWNrKV0gPSBkZXN0O1xuICAgICAgICByZXR1cm4gZGVzdDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGQgYSBkb2NrZXIgYXNzZXQgc291cmNlIGFuZCBkZXN0aW5hdGlvbiB0byB0aGUgbWFuaWZlc3RcbiAgICAgKlxuICAgICAqIHNvdXJjZUhhc2ggc2hvdWxkIGJlIHVuaXF1ZSBmb3IgZXZlcnkgc291cmNlLlxuICAgICAqL1xuICAgIHB1YmxpYyBhZGREb2NrZXJJbWFnZUFzc2V0KHN0YWNrOiBTdGFjaywgc291cmNlSGFzaDogc3RyaW5nLCBzb3VyY2U6IGN4c2NoZW1hLkRvY2tlckltYWdlU291cmNlLCBkZXN0OiBjeHNjaGVtYS5Eb2NrZXJJbWFnZURlc3RpbmF0aW9uKSB7XG4gICAgICAgIGlmICghdGhpcy5kb2NrZXJJbWFnZXNbc291cmNlSGFzaF0pIHtcbiAgICAgICAgICAgIHRoaXMuZG9ja2VySW1hZ2VzW3NvdXJjZUhhc2hdID0ge1xuICAgICAgICAgICAgICAgIHNvdXJjZSxcbiAgICAgICAgICAgICAgICBkZXN0aW5hdGlvbnM6IHt9LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRvY2tlckltYWdlc1tzb3VyY2VIYXNoXS5kZXN0aW5hdGlvbnNbdGhpcy5tYW5pZmVzdEVudk5hbWUoc3RhY2spXSA9IGRlc3Q7XG4gICAgICAgIHJldHVybiBkZXN0O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgdGhlcmUgYXJlIGFueSBhc3NldHMgcmVnaXN0ZXJlZCBpbiB0aGUgbWFuaWZlc3RcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IGhhc0Fzc2V0cygpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuZmlsZXMpLmxlbmd0aCArIE9iamVjdC5rZXlzKHRoaXMuZG9ja2VySW1hZ2VzKS5sZW5ndGggPiAwO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFdyaXRlIHRoZSBtYW5pZmVzdCB0byBkaXNrLCBhbmQgYWRkIGl0IHRvIHRoZSBzeW50aGVzaXMgc2Vzc2lvblxuICAgICAqXG4gICAgICogUmV0dXJuIHRoZSBhcnRpZmFjdCBpZCwgd2hpY2ggc2hvdWxkIGJlIGFkZGVkIHRvIHRoZSBgYWRkaXRpb25hbERlcGVuZGVuY2llc2BcbiAgICAgKiBmaWVsZCBvZiB0aGUgc3RhY2sgYXJ0aWZhY3QuXG4gICAgICovXG4gICAgcHVibGljIGVtaXRNYW5pZmVzdChcbiAgICAgICAgc3RhY2s6IFN0YWNrLFxuICAgICAgICBzZXNzaW9uOiBJU3ludGhlc2lzU2Vzc2lvbixcbiAgICAgICAgb3B0aW9uczogY3hzY2hlbWEuQXNzZXRNYW5pZmVzdE9wdGlvbnMgPSB7fSxcbiAgICAgICAgZGVwZW5kZW5jaWVzOiBzdHJpbmdbXSA9IFtdLFxuICAgICk6IHN0cmluZyB7XG4gICAgICAgIGNvbnN0IGFydGlmYWN0SWQgPSBgJHtzdGFjay5hcnRpZmFjdElkfS5hc3NldHNgO1xuICAgICAgICBjb25zdCBtYW5pZmVzdEZpbGUgPSBgJHthcnRpZmFjdElkfS5qc29uYDtcbiAgICAgICAgY29uc3Qgb3V0UGF0aCA9IHBhdGguam9pbihzZXNzaW9uLmFzc2VtYmx5Lm91dGRpciwgbWFuaWZlc3RGaWxlKTtcblxuICAgICAgICBjb25zdCBtYW5pZmVzdDogY3hzY2hlbWEuQXNzZXRNYW5pZmVzdCA9IHtcbiAgICAgICAgICAgIHZlcnNpb246IGN4c2NoZW1hLk1hbmlmZXN0LnZlcnNpb24oKSxcbiAgICAgICAgICAgIGZpbGVzOiB0aGlzLmZpbGVzLFxuICAgICAgICAgICAgZG9ja2VySW1hZ2VzOiB0aGlzLmRvY2tlckltYWdlcyxcbiAgICAgICAgfTtcblxuICAgICAgICBmcy53cml0ZUZpbGVTeW5jKG91dFBhdGgsIEpTT04uc3RyaW5naWZ5KG1hbmlmZXN0LCB1bmRlZmluZWQsIDIpKTtcblxuICAgICAgICBzZXNzaW9uLmFzc2VtYmx5LmFkZEFydGlmYWN0KGFydGlmYWN0SWQsIHtcbiAgICAgICAgICAgIHR5cGU6IGN4c2NoZW1hLkFydGlmYWN0VHlwZS5BU1NFVF9NQU5JRkVTVCxcbiAgICAgICAgICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgICAgICAgICBmaWxlOiBtYW5pZmVzdEZpbGUsXG4gICAgICAgICAgICAgICAgLi4ub3B0aW9ucyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkZXBlbmRlbmNpZXM6IGRlcGVuZGVuY2llcy5sZW5ndGggPiAwID8gZGVwZW5kZW5jaWVzIDogdW5kZWZpbmVkLFxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gYXJ0aWZhY3RJZDtcbiAgICB9XG5cbiAgICBwcml2YXRlIG1hbmlmZXN0RW52TmFtZShfc3RhY2s6IFN0YWNrKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICdjdXJyZW50X2FjY291bnQtY3VycmVudF9yZWdpb24nO1xuICAgIH1cbn1cblxuLyoqXG4gKiBUaGUgZGVzdGluYXRpb24gZm9yIGEgZmlsZSBhc3NldCwgd2hlbiBpdCBpcyBnaXZlbiB0byB0aGUgQXNzZXRNYW5pZmVzdEJ1aWxkZXJcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBBc3NldE1hbmlmZXN0RmlsZURlc3RpbmF0aW9uIHtcbiAgICAvKipcbiAgICAgKiBCdWNrZXQgbmFtZSB3aGVyZSB0aGUgZmlsZSBhc3NldCBzaG91bGQgYmUgd3JpdHRlblxuICAgICAqL1xuICAgIHJlYWRvbmx5IGJ1Y2tldE5hbWU6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIFByZWZpeCB0byBwcmVwZW5kIHRvIHRoZSBhc3NldCBoYXNoXG4gICAgICpcbiAgICAgKiBAZGVmYXVsdCAnJ1xuICAgICAqL1xuICAgIHJlYWRvbmx5IGJ1Y2tldFByZWZpeD86IHN0cmluZztcbn1cblxuLyoqXG4gKiBUaGUgZGVzdGluYXRpb24gZm9yIGEgZG9ja2VyIGltYWdlIGFzc2V0LCB3aGVuIGl0IGlzIGdpdmVuIHRvIHRoZSBBc3NldE1hbmlmZXN0QnVpbGRlclxuICovXG5leHBvcnQgaW50ZXJmYWNlIEFzc2V0TWFuaWZlc3REb2NrZXJJbWFnZURlc3RpbmF0aW9uIHtcbiAgICAvKipcbiAgICAgKiBSZXBvc2l0b3J5IG5hbWUgd2hlcmUgdGhlIGRvY2tlciBpbWFnZSBhc3NldCBzaG91bGQgYmUgd3JpdHRlblxuICAgICAqL1xuICAgIHJlYWRvbmx5IHJlcG9zaXRvcnlOYW1lOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBQcmVmaXggdG8gYWRkIHRvIHRoZSBhc3NldCBoYXNoIHRvIG1ha2UgdGhlIERvY2tlciBpbWFnZSB0YWdcbiAgICAgKlxuICAgICAqIEBkZWZhdWx0ICcnXG4gICAgICovXG4gICAgcmVhZG9ubHkgZG9ja2VyVGFnUHJlZml4Pzogc3RyaW5nO1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZUZpbGVBc3NldFNvdXJjZShhc3NldDogRmlsZUFzc2V0U291cmNlKSB7XG4gICAgaWYgKCEhYXNzZXQuZXhlY3V0YWJsZSA9PT0gISFhc3NldC5maWxlTmFtZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEV4YWN0bHkgb25lIG9mICdmaWxlTmFtZScgb3IgJ2V4ZWN1dGFibGUnIGlzIHJlcXVpcmVkLCBnb3Q6ICR7SlNPTi5zdHJpbmdpZnkoYXNzZXQpfWApO1xuICAgIH1cblxuICAgIGlmICghIWFzc2V0LnBhY2thZ2luZyAhPT0gISFhc3NldC5maWxlTmFtZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYCdwYWNrYWdpbmcnIGlzIGV4cGVjdGVkIGluIGNvbWJpbmF0aW9uIHdpdGggJ2ZpbGVOYW1lJywgZ290OiAke0pTT04uc3RyaW5naWZ5KGFzc2V0KX1gKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlRG9ja2VySW1hZ2VBc3NldFNvdXJjZShhc3NldDogRG9ja2VySW1hZ2VBc3NldFNvdXJjZSkge1xuICAgIGlmICghIWFzc2V0LmV4ZWN1dGFibGUgPT09ICEhYXNzZXQuZGlyZWN0b3J5TmFtZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEV4YWN0bHkgb25lIG9mICdkaXJlY3RvcnlOYW1lJyBvciAnZXhlY3V0YWJsZScgaXMgcmVxdWlyZWQsIGdvdDogJHtKU09OLnN0cmluZ2lmeShhc3NldCl9YCk7XG4gICAgfVxuXG4gICAgY2hlY2soJ2RvY2tlckJ1aWxkQXJncycpO1xuICAgIGNoZWNrKCdkb2NrZXJCdWlsZFRhcmdldCcpO1xuICAgIGNoZWNrKCdkb2NrZXJPdXRwdXRzJyk7XG4gICAgY2hlY2soJ2RvY2tlckZpbGUnKTtcblxuICAgIGZ1bmN0aW9uIGNoZWNrPEsgZXh0ZW5kcyBrZXlvZiBEb2NrZXJJbWFnZUFzc2V0U291cmNlPihrZXk6IEspIHtcbiAgICAgICAgaWYgKGFzc2V0W2tleV0gJiYgIWFzc2V0LmRpcmVjdG9yeU5hbWUpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgJyR7a2V5fScgaXMgb25seSBhbGxvd2VkIGluIGNvbWJpbmF0aW9uIHdpdGggJ2RpcmVjdG9yeU5hbWUnLCBnb3Q6ICR7SlNPTi5zdHJpbmdpZnkoYXNzZXQpfWApO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19