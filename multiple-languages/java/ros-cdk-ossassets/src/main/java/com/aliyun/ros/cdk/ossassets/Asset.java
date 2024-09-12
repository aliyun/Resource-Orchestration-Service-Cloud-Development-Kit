package com.aliyun.ros.cdk.ossassets;

/**
 * An asset represents a local file or directory, which is automatically uploaded to OSS bucket and then can be referenced within a CDK application.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-09-12T02:20:29.092Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ossassets.$Module.class, fqn = "@alicloud/ros-cdk-ossassets.Asset")
public class Asset extends com.aliyun.ros.cdk.core.Resource {

    protected Asset(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Asset(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    public Asset(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ossassets.AssetProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Adds ROS template metadata to the specified resource with information that indicates which resource property is mapped to this local asset.
     * <p>
     * Asset metadata will only be included if the stack is synthesized with the
     * "ros:cdk:enable-asset-metadata" context key defined, which is the default
     * behavior when synthesizing via the CDK Toolkit.
     * <p>
     * @param resource The ROS resource which is using this asset. This parameter is required.
     * @param resourceProperty The property name where this asset is referenced. This parameter is required.
     */
    public void addResourceMetadata(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.RosResource resource, final @org.jetbrains.annotations.NotNull java.lang.String resourceProperty) {
        software.amazon.jsii.Kernel.call(this, "addResourceMetadata", software.amazon.jsii.NativeType.VOID, new Object[] { java.util.Objects.requireNonNull(resource, "resource is required"), java.util.Objects.requireNonNull(resourceProperty, "resourceProperty is required") });
    }

    /**
     * A cryptographic hash of the asset.
     */
    public @org.jetbrains.annotations.NotNull java.lang.String getAssetHash() {
        return software.amazon.jsii.Kernel.get(this, "assetHash", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * The path to the asset, relative to the current Cloud Assembly.
     * <p>
     * If asset staging is disabled, this will just be the original path.
     * If asset staging is enabled it will be the staged path.
     */
    public @org.jetbrains.annotations.NotNull java.lang.String getAssetPath() {
        return software.amazon.jsii.Kernel.get(this, "assetPath", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * Attribute that represents the name of the OSS bucket this asset exists in.
     */
    public @org.jetbrains.annotations.NotNull java.lang.String getBucketName() {
        return software.amazon.jsii.Kernel.get(this, "bucketName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * Attribute which represents the OSS HTTP URL of this asset.
     * <p>
     * For example, <code>https://${bucketName}.oss-${region}.aliyuncs.com/${objectKey}</code>
     */
    public @org.jetbrains.annotations.NotNull java.lang.String getHttpUrl() {
        return software.amazon.jsii.Kernel.get(this, "httpUrl", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * Indicates if this asset is a single file.
     * <p>
     * Allows constructs to ensure that the
     * correct file type was used.
     */
    public @org.jetbrains.annotations.NotNull java.lang.Boolean getIsFile() {
        return software.amazon.jsii.Kernel.get(this, "isFile", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    /**
     * Indicates if this asset is a zip archive.
     * <p>
     * Allows constructs to ensure that the
     * correct file type was used.
     */
    public @org.jetbrains.annotations.NotNull java.lang.Boolean getIsZipArchive() {
        return software.amazon.jsii.Kernel.get(this, "isZipArchive", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    /**
     * Attribute which represents the OSS object key of this asset.
     */
    public @org.jetbrains.annotations.NotNull java.lang.String getObjectKey() {
        return software.amazon.jsii.Kernel.get(this, "objectKey", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.ossassets.Asset}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ossassets.Asset> {
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
        private final com.aliyun.ros.cdk.ossassets.AssetProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id) {
            this.scope = scope;
            this.id = id;
            this.props = new com.aliyun.ros.cdk.ossassets.AssetProps.Builder();
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
         * @param followSymlinks A strategy for how to handle symlinks. This parameter is required.
         */
        public Builder followSymlinks(final com.aliyun.ros.cdk.core.SymlinkFollowMode followSymlinks) {
            this.props.followSymlinks(followSymlinks);
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
         * Whether or not the asset needs to exist beyond deployment time;
         * <p>
         * i.e.
         * are copied over to a different location and not needed afterwards.
         * Setting this property to true has an impact on the lifecycle of the asset,
         * because we will assume that it is safe to delete after the ROS
         * deployment succeeds.
         * <p>
         * For example, FC Function assets are copied over to Function during
         * deployment. Therefore, it is not necessary to store the asset in OSS bucket,
         * so we consider those deployTime assets.
         * <p>
         * Default: false
         * <p>
         * @return {@code this}
         * @param deployTime Whether or not the asset needs to exist beyond deployment time;. This parameter is required.
         */
        public Builder deployTime(final java.lang.Boolean deployTime) {
            this.props.deployTime(deployTime);
            return this;
        }

        /**
         * The disk location of the asset.
         * <p>
         * The path should refer to one of the following:
         * <p>
         * <ul>
         * <li>A regular file or a .zip file, in which case the file will be uploaded as-is to OSS bucket.</li>
         * <li>A directory, in which case it will be archived into a .zip file and uploaded to OSS bucket.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param path The disk location of the asset. This parameter is required.
         */
        public Builder path(final java.lang.String path) {
            this.props.path(path);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.ossassets.Asset}.
         */
        @Override
        public com.aliyun.ros.cdk.ossassets.Asset build() {
            return new com.aliyun.ros.cdk.ossassets.Asset(
                this.scope,
                this.id,
                this.props.build()
            );
        }
    }
}
