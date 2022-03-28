package com.aliyun.ros.cdk.eci;

/**
 * A ROS template type:  `ALIYUN::ECI::ImageCache`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.55.1 (build 07d2d90)", date = "2022-03-28T07:49:02.126Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.eci.$Module.class, fqn = "@alicloud/ros-cdk-eci.RosImageCache")
public class RosImageCache extends com.aliyun.ros.cdk.core.RosResource {

    protected RosImageCache(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosImageCache(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.eci.RosImageCache.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * Create a new `ALIYUN::ECI::ImageCache`.
     * <p>
     * @param scope - scope in which this resource is defined. This parameter is required.
     * @param id - scoped id of the resource. This parameter is required.
     * @param props - resource properties. This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosImageCache(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.eci.RosImageCacheProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), java.util.Objects.requireNonNull(enableResourcePropertyConstraint, "enableResourcePropertyConstraint is required") });
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> renderProperties(final @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> props) {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.call(this, "renderProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class)), new Object[] { java.util.Objects.requireNonNull(props, "props is required") }));
    }

    /**
     * The resource type name for this resource class.
     */
    public final static java.lang.String ROS_RESOURCE_TYPE_NAME;

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrImageCacheId() {
        return software.amazon.jsii.Kernel.get(this, "attrImageCacheId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getImage() {
        return software.amazon.jsii.Kernel.get(this, "image", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setImage(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "image", java.util.Objects.requireNonNull(value, "image is required"));
    }

    /**
     */
    public void setImage(final @org.jetbrains.annotations.NotNull java.util.List<java.lang.Object> value) {
        software.amazon.jsii.Kernel.set(this, "image", java.util.Objects.requireNonNull(value, "image is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getImageCacheName() {
        return software.amazon.jsii.Kernel.get(this, "imageCacheName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setImageCacheName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "imageCacheName", java.util.Objects.requireNonNull(value, "imageCacheName is required"));
    }

    /**
     */
    public void setImageCacheName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "imageCacheName", java.util.Objects.requireNonNull(value, "imageCacheName is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getSecurityGroupId() {
        return software.amazon.jsii.Kernel.get(this, "securityGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSecurityGroupId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "securityGroupId", java.util.Objects.requireNonNull(value, "securityGroupId is required"));
    }

    /**
     */
    public void setSecurityGroupId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "securityGroupId", java.util.Objects.requireNonNull(value, "securityGroupId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getVSwitchId() {
        return software.amazon.jsii.Kernel.get(this, "vSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setVSwitchId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "vSwitchId", java.util.Objects.requireNonNull(value, "vSwitchId is required"));
    }

    /**
     */
    public void setVSwitchId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "vSwitchId", java.util.Objects.requireNonNull(value, "vSwitchId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getEipInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "eipInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEipInstanceId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "eipInstanceId", value);
    }

    /**
     */
    public void setEipInstanceId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "eipInstanceId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getImageRegistryCredential() {
        return software.amazon.jsii.Kernel.get(this, "imageRegistryCredential", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setImageRegistryCredential(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "imageRegistryCredential", value);
    }

    /**
     */
    public void setImageRegistryCredential(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        software.amazon.jsii.Kernel.set(this, "imageRegistryCredential", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setResourceGroupId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "resourceGroupId", value);
    }

    /**
     */
    public void setResourceGroupId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "resourceGroupId", value);
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.eci.RosImageCache}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.eci.RosImageCache> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope - scope in which this resource is defined. This parameter is required.
         * @param id - scoped id of the resource. This parameter is required.
         * @param enableResourcePropertyConstraint This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.eci.RosImageCacheProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.eci.RosImageCacheProps.Builder();
        }

        /**
         * @return {@code this}
         * @param image This parameter is required.
         */
        public Builder image(final com.aliyun.ros.cdk.core.IResolvable image) {
            this.props.image(image);
            return this;
        }
        /**
         * @return {@code this}
         * @param image This parameter is required.
         */
        public Builder image(final java.util.List<? extends java.lang.Object> image) {
            this.props.image(image);
            return this;
        }

        /**
         * @return {@code this}
         * @param imageCacheName This parameter is required.
         */
        public Builder imageCacheName(final java.lang.String imageCacheName) {
            this.props.imageCacheName(imageCacheName);
            return this;
        }
        /**
         * @return {@code this}
         * @param imageCacheName This parameter is required.
         */
        public Builder imageCacheName(final com.aliyun.ros.cdk.core.IResolvable imageCacheName) {
            this.props.imageCacheName(imageCacheName);
            return this;
        }

        /**
         * @return {@code this}
         * @param securityGroupId This parameter is required.
         */
        public Builder securityGroupId(final java.lang.String securityGroupId) {
            this.props.securityGroupId(securityGroupId);
            return this;
        }
        /**
         * @return {@code this}
         * @param securityGroupId This parameter is required.
         */
        public Builder securityGroupId(final com.aliyun.ros.cdk.core.IResolvable securityGroupId) {
            this.props.securityGroupId(securityGroupId);
            return this;
        }

        /**
         * @return {@code this}
         * @param vSwitchId This parameter is required.
         */
        public Builder vSwitchId(final java.lang.String vSwitchId) {
            this.props.vSwitchId(vSwitchId);
            return this;
        }
        /**
         * @return {@code this}
         * @param vSwitchId This parameter is required.
         */
        public Builder vSwitchId(final com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
            this.props.vSwitchId(vSwitchId);
            return this;
        }

        /**
         * @return {@code this}
         * @param eipInstanceId This parameter is required.
         */
        public Builder eipInstanceId(final java.lang.String eipInstanceId) {
            this.props.eipInstanceId(eipInstanceId);
            return this;
        }
        /**
         * @return {@code this}
         * @param eipInstanceId This parameter is required.
         */
        public Builder eipInstanceId(final com.aliyun.ros.cdk.core.IResolvable eipInstanceId) {
            this.props.eipInstanceId(eipInstanceId);
            return this;
        }

        /**
         * @return {@code this}
         * @param imageRegistryCredential This parameter is required.
         */
        public Builder imageRegistryCredential(final com.aliyun.ros.cdk.core.IResolvable imageRegistryCredential) {
            this.props.imageRegistryCredential(imageRegistryCredential);
            return this;
        }
        /**
         * @return {@code this}
         * @param imageRegistryCredential This parameter is required.
         */
        public Builder imageRegistryCredential(final java.util.List<? extends java.lang.Object> imageRegistryCredential) {
            this.props.imageRegistryCredential(imageRegistryCredential);
            return this;
        }

        /**
         * @return {@code this}
         * @param resourceGroupId This parameter is required.
         */
        public Builder resourceGroupId(final java.lang.String resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }
        /**
         * @return {@code this}
         * @param resourceGroupId This parameter is required.
         */
        public Builder resourceGroupId(final com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.eci.RosImageCache}.
         */
        @Override
        public com.aliyun.ros.cdk.eci.RosImageCache build() {
            return new com.aliyun.ros.cdk.eci.RosImageCache(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
