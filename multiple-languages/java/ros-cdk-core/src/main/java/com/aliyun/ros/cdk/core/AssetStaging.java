package com.aliyun.ros.cdk.core;

/**
 * Stages a file or directory from a location on the file system into a staging directory.
 * <p>
 * This is controlled by the context key 'aliyun:ros:disable-asset-staging' and enabled
 * by the CLI by default in order to ensure that when the CDK app exists, all
 * assets are available for deployment. Otherwise, if an app references assets
 * in temporary locations, those will not be available when it exists.
 * <p>
 * The <code>stagedPath</code> property is a stringified token that represents the location
 * of the file or directory after staging. It will be resolved only during the
 * "prepare" stage and may be either the original path or the staged path
 * depending on the context setting.
 * <p>
 * The file/directory are staged based on their content hash (fingerprint). This
 * means that only if content was changed, copy will happen.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:00.607Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.core.$Module.class, fqn = "@alicloud/ros-cdk-core.AssetStaging")
public class AssetStaging extends com.aliyun.ros.cdk.core.Construct {

    protected AssetStaging(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected AssetStaging(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        BUNDLING_INPUT_DIR = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.AssetStaging.class, "BUNDLING_INPUT_DIR", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
        BUNDLING_OUTPUT_DIR = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.core.AssetStaging.class, "BUNDLING_OUTPUT_DIR", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    public AssetStaging(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.AssetStagingProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Clears the asset hash cache.
     */
    public static void clearAssetHashCache() {
        software.amazon.jsii.JsiiObject.jsiiStaticCall(com.aliyun.ros.cdk.core.AssetStaging.class, "clearAssetHashCache", software.amazon.jsii.NativeType.VOID);
    }

    /**
     * Return the path to the staged asset, relative to the Cloud Assembly (manifest) directory of the given stack.
     * <p>
     * Only returns a relative path if the asset was staged, returns an absolute path if
     * it was not staged.
     * <p>
     * A bundled asset might end up in the outDir and still not count as
     * "staged"; if asset staging is disabled we're technically expected to
     * reference source directories, but we don't have a source directory for the
     * bundled outputs (as the bundle output is written to a temporary
     * directory). Nevertheless, we will still return an absolute path.
     * <p>
     * A non-obvious directory layout may look like this:
     * <p>
     * <blockquote><pre>
     *    CLOUD ASSEMBLY ROOT
     *      +-- asset.12345abcdef/
     *      +-- assembly-Stage
     *            +-- MyStack.template.json
     *            +-- MyStack.assets.json &lt;- will contain { "path": "../asset.12345abcdef" }
     * </pre></blockquote>
     * <p>
     * @param stack This parameter is required.
     */
    public @org.jetbrains.annotations.NotNull java.lang.String relativeStagedPath(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Stack stack) {
        return software.amazon.jsii.Kernel.call(this, "relativeStagedPath", software.amazon.jsii.NativeType.forClass(java.lang.String.class), new Object[] { java.util.Objects.requireNonNull(stack, "stack is required") });
    }

    /**
     * The directory inside the bundling container into which the asset sources will be mounted.
     */
    public final static java.lang.String BUNDLING_INPUT_DIR;

    /**
     * The directory inside the bundling container into which the bundled output should be written.
     */
    public final static java.lang.String BUNDLING_OUTPUT_DIR;

    /**
     * Absolute path to the asset data.
     * <p>
     * If asset staging is disabled, this will just be the source path or
     * a temporary directory used for bundling.
     * <p>
     * If asset staging is enabled it will be the staged path.
     * <p>
     * IMPORTANT: If you are going to call <code>addFileAsset()</code>, use
     * <code>relativeStagedPath()</code> instead.
     */
    public @org.jetbrains.annotations.NotNull java.lang.String getAbsoluteStagedPath() {
        return software.amazon.jsii.Kernel.get(this, "absoluteStagedPath", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * A cryptographic hash of the asset.
     */
    public @org.jetbrains.annotations.NotNull java.lang.String getAssetHash() {
        return software.amazon.jsii.Kernel.get(this, "assetHash", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * Whether this asset is an archive (zip or jar).
     */
    public @org.jetbrains.annotations.NotNull java.lang.Boolean getIsArchive() {
        return software.amazon.jsii.Kernel.get(this, "isArchive", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    /**
     * How this asset should be packaged.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.FileAssetPackaging getPackaging() {
        return software.amazon.jsii.Kernel.get(this, "packaging", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.FileAssetPackaging.class));
    }

    /**
     * The absolute path of the asset as it was referenced by the user.
     */
    public @org.jetbrains.annotations.NotNull java.lang.String getSourcePath() {
        return software.amazon.jsii.Kernel.get(this, "sourcePath", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.core.AssetStaging}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.core.AssetStaging> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id) {
            return new Builder(scope, id);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final com.aliyun.ros.cdk.core.AssetStagingProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id) {
            this.scope = scope;
            this.id = id;
            this.props = new com.aliyun.ros.cdk.core.AssetStagingProps.Builder();
        }

        /**
         * File paths matching the patterns will be excluded.
         * <p>
         * See <code>ignoreMode</code> to set the matching behavior.
         * Has no effect on Assets bundled using the <code>bundling</code> property.
         * <p>
         * Default: - nothing is excluded
         * <p>
         * @return {@code this}
         * @param exclude File paths matching the patterns will be excluded. This parameter is required.
         */
        public Builder exclude(final java.util.List<java.lang.String> exclude) {
            this.props.exclude(exclude);
            return this;
        }

        /**
         * A strategy for how to handle symlinks.
         * <p>
         * Default: SymlinkFollowMode.NEVER
         * <p>
         * @return {@code this}
         * @param follow A strategy for how to handle symlinks. This parameter is required.
         */
        public Builder follow(final com.aliyun.ros.cdk.core.SymlinkFollowMode follow) {
            this.props.follow(follow);
            return this;
        }

        /**
         * The ignore behavior to use for <code>exclude</code> patterns.
         * <p>
         * Default: IgnoreMode.GLOB
         * <p>
         * @return {@code this}
         * @param ignoreMode The ignore behavior to use for <code>exclude</code> patterns. This parameter is required.
         */
        public Builder ignoreMode(final com.aliyun.ros.cdk.core.IgnoreMode ignoreMode) {
            this.props.ignoreMode(ignoreMode);
            return this;
        }

        /**
         * Extra information to encode into the fingerprint (e.g. build instructions and other inputs).
         * <p>
         * Default: - hash is only based on source content
         * <p>
         * @return {@code this}
         * @param extraHash Extra information to encode into the fingerprint (e.g. build instructions and other inputs). This parameter is required.
         */
        public Builder extraHash(final java.lang.String extraHash) {
            this.props.extraHash(extraHash);
            return this;
        }

        /**
         * Specify a custom hash for this asset.
         * <p>
         * If <code>assetHashType</code> is set it must
         * be set to <code>AssetHashType.CUSTOM</code>. For consistency, this custom hash will
         * be SHA256 hashed and encoded as hex. The resulting hash will be the asset
         * hash.
         * <p>
         * NOTE: the hash is used in order to identify a specific revision of the asset, and
         * used for optimizing and caching deployment activities related to this asset such as
         * packaging, uploading to OSS bucket, etc. If you chose to customize the hash, you will
         * need to make sure it is updated every time the asset changes, or otherwise it is
         * possible that some deployments will not be invalidated.
         * <p>
         * Default: - based on `assetHashType`
         * <p>
         * @return {@code this}
         * @param assetHash Specify a custom hash for this asset. This parameter is required.
         */
        public Builder assetHash(final java.lang.String assetHash) {
            this.props.assetHash(assetHash);
            return this;
        }

        /**
         * Specifies the type of hash to calculate for this asset.
         * <p>
         * If <code>assetHash</code> is configured, this option must be <code>undefined</code> or
         * <code>AssetHashType.CUSTOM</code>.
         * <p>
         * Default: - the default is `AssetHashType.SOURCE`, but if `assetHash` is
         * explicitly specified this value defaults to `AssetHashType.CUSTOM`.
         * <p>
         * @return {@code this}
         * @param assetHashType Specifies the type of hash to calculate for this asset. This parameter is required.
         */
        public Builder assetHashType(final com.aliyun.ros.cdk.core.AssetHashType assetHashType) {
            this.props.assetHashType(assetHashType);
            return this;
        }

        /**
         * Bundle the asset by executing a command in a Docker container or a custom bundling provider.
         * <p>
         * The asset path will be mounted at <code>/asset-input</code>. The Docker
         * container is responsible for putting content at <code>/asset-output</code>.
         * The content at <code>/asset-output</code> will be zipped and used as the
         * final asset.
         * <p>
         * Default: - uploaded as-is to OSS bucket if the asset is a regular file or a .zip file,
         * archived into a .zip file and uploaded to OSS bucket otherwise.
         * <p>
         * @return {@code this}
         * @param bundling Bundle the asset by executing a command in a Docker container or a custom bundling provider. This parameter is required.
         */
        public Builder bundling(final com.aliyun.ros.cdk.core.BundlingOptions bundling) {
            this.props.bundling(bundling);
            return this;
        }

        /**
         * The source file or directory to copy from.
         * <p>
         * @return {@code this}
         * @param sourcePath The source file or directory to copy from. This parameter is required.
         */
        public Builder sourcePath(final java.lang.String sourcePath) {
            this.props.sourcePath(sourcePath);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.core.AssetStaging}.
         */
        @Override
        public com.aliyun.ros.cdk.core.AssetStaging build() {
            return new com.aliyun.ros.cdk.core.AssetStaging(
                this.scope,
                this.id,
                this.props.build()
            );
        }
    }
}
