package com.aliyun.ros.cdk.eci.datasource;

/**
 * This class encapsulates and extends the ROS resource type <code>DATASOURCE::ECI::ImageCaches</code>, which is used to query multiple image caches at a time.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-04T02:47:54.199Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.eci.$Module.class, fqn = "@alicloud/ros-cdk-eci.datasource.ImageCaches")
public class ImageCaches extends com.aliyun.ros.cdk.core.Resource {

    protected ImageCaches(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected ImageCaches(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props
     * @param enableResourcePropertyConstraint
     */
    public ImageCaches(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.eci.datasource.ImageCachesProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props, enableResourcePropertyConstraint });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props
     */
    public ImageCaches(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.eci.datasource.ImageCachesProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     */
    public ImageCaches(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required") });
    }

    /**
     * Attribute ImageCacheIds: The list of image cache IDs.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrImageCacheIds() {
        return software.amazon.jsii.Kernel.get(this, "attrImageCacheIds", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute ImageCaches: The list of image caches.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrImageCaches() {
        return software.amazon.jsii.Kernel.get(this, "attrImageCaches", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    protected @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    protected void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    protected @org.jetbrains.annotations.NotNull java.lang.String getId() {
        return software.amazon.jsii.Kernel.get(this, "id", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    protected void setId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "id", java.util.Objects.requireNonNull(value, "id is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.eci.datasource.ImageCachesProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.eci.datasource.ImageCachesProps.class));
    }

    protected void setProps(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.eci.datasource.ImageCachesProps value) {
        software.amazon.jsii.Kernel.set(this, "props", java.util.Objects.requireNonNull(value, "props is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.eci.datasource.ImageCaches}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.eci.datasource.ImageCaches> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         * @param enableResourcePropertyConstraint
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id) {
            return new Builder(scope, id, null);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private com.aliyun.ros.cdk.eci.datasource.ImageCachesProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        }

        /**
         * Property imageCacheId: ImageCacheId.
         * <p>
         * @return {@code this}
         * @param imageCacheId Property imageCacheId: ImageCacheId. This parameter is required.
         */
        public Builder imageCacheId(final java.lang.String imageCacheId) {
            this.props().imageCacheId(imageCacheId);
            return this;
        }
        /**
         * Property imageCacheId: ImageCacheId.
         * <p>
         * @return {@code this}
         * @param imageCacheId Property imageCacheId: ImageCacheId. This parameter is required.
         */
        public Builder imageCacheId(final com.aliyun.ros.cdk.core.IResolvable imageCacheId) {
            this.props().imageCacheId(imageCacheId);
            return this;
        }

        /**
         * Property imageCacheName: ImageCacheName.
         * <p>
         * @return {@code this}
         * @param imageCacheName Property imageCacheName: ImageCacheName. This parameter is required.
         */
        public Builder imageCacheName(final java.lang.String imageCacheName) {
            this.props().imageCacheName(imageCacheName);
            return this;
        }
        /**
         * Property imageCacheName: ImageCacheName.
         * <p>
         * @return {@code this}
         * @param imageCacheName Property imageCacheName: ImageCacheName. This parameter is required.
         */
        public Builder imageCacheName(final com.aliyun.ros.cdk.core.IResolvable imageCacheName) {
            this.props().imageCacheName(imageCacheName);
            return this;
        }

        /**
         * Property limit: Number of pages.
         * <p>
         * @return {@code this}
         * @param limit Property limit: Number of pages. This parameter is required.
         */
        public Builder limit(final java.lang.Number limit) {
            this.props().limit(limit);
            return this;
        }
        /**
         * Property limit: Number of pages.
         * <p>
         * @return {@code this}
         * @param limit Property limit: Number of pages. This parameter is required.
         */
        public Builder limit(final com.aliyun.ros.cdk.core.IResolvable limit) {
            this.props().limit(limit);
            return this;
        }

        /**
         * Property resourceGroupId: ResourceGroupId.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: ResourceGroupId. This parameter is required.
         */
        public Builder resourceGroupId(final java.lang.String resourceGroupId) {
            this.props().resourceGroupId(resourceGroupId);
            return this;
        }
        /**
         * Property resourceGroupId: ResourceGroupId.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: ResourceGroupId. This parameter is required.
         */
        public Builder resourceGroupId(final com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.props().resourceGroupId(resourceGroupId);
            return this;
        }

        /**
         * Property snapshotId: SnapshotId.
         * <p>
         * @return {@code this}
         * @param snapshotId Property snapshotId: SnapshotId. This parameter is required.
         */
        public Builder snapshotId(final java.lang.String snapshotId) {
            this.props().snapshotId(snapshotId);
            return this;
        }
        /**
         * Property snapshotId: SnapshotId.
         * <p>
         * @return {@code this}
         * @param snapshotId Property snapshotId: SnapshotId. This parameter is required.
         */
        public Builder snapshotId(final com.aliyun.ros.cdk.core.IResolvable snapshotId) {
            this.props().snapshotId(snapshotId);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.eci.datasource.ImageCaches}.
         */
        @Override
        public com.aliyun.ros.cdk.eci.datasource.ImageCaches build() {
            return new com.aliyun.ros.cdk.eci.datasource.ImageCaches(
                this.scope,
                this.id,
                this.props != null ? this.props.build() : null,
                this.enableResourcePropertyConstraint
            );
        }

        private com.aliyun.ros.cdk.eci.datasource.ImageCachesProps.Builder props() {
            if (this.props == null) {
                this.props = new com.aliyun.ros.cdk.eci.datasource.ImageCachesProps.Builder();
            }
            return this.props;
        }
    }
}
