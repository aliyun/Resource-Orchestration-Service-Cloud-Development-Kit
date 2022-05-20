package com.aliyun.ros.cdk.eci;

/**
 * A ROS resource type:  `ALIYUN::ECI::ImageCache`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.59.0 (build eb02c92)", date = "2022-05-20T02:42:01.608Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.eci.$Module.class, fqn = "@alicloud/ros-cdk-eci.ImageCache")
public class ImageCache extends com.aliyun.ros.cdk.core.Resource {

    protected ImageCache(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected ImageCache(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::ECI::ImageCache`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public ImageCache(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.eci.ImageCacheProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::ECI::ImageCache`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public ImageCache(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.eci.ImageCacheProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute ImageCacheId: The ID of the image cache.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrImageCacheId() {
        return software.amazon.jsii.Kernel.get(this, "attrImageCacheId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.eci.ImageCache}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.eci.ImageCache> {
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
        private final com.aliyun.ros.cdk.eci.ImageCacheProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.eci.ImageCacheProps.Builder();
        }

        /**
         * Property image: The image list to be cached.
         * <p>
         * @return {@code this}
         * @param image Property image: The image list to be cached. This parameter is required.
         */
        public Builder image(final com.aliyun.ros.cdk.core.IResolvable image) {
            this.props.image(image);
            return this;
        }
        /**
         * Property image: The image list to be cached.
         * <p>
         * @return {@code this}
         * @param image Property image: The image list to be cached. This parameter is required.
         */
        public Builder image(final java.util.List<? extends java.lang.Object> image) {
            this.props.image(image);
            return this;
        }

        /**
         * Property imageCacheName: Image cache name.
         * <p>
         * @return {@code this}
         * @param imageCacheName Property imageCacheName: Image cache name. This parameter is required.
         */
        public Builder imageCacheName(final java.lang.String imageCacheName) {
            this.props.imageCacheName(imageCacheName);
            return this;
        }
        /**
         * Property imageCacheName: Image cache name.
         * <p>
         * @return {@code this}
         * @param imageCacheName Property imageCacheName: Image cache name. This parameter is required.
         */
        public Builder imageCacheName(final com.aliyun.ros.cdk.core.IResolvable imageCacheName) {
            this.props.imageCacheName(imageCacheName);
            return this;
        }

        /**
         * Property securityGroupId: Security group ID.
         * <p>
         * @return {@code this}
         * @param securityGroupId Property securityGroupId: Security group ID. This parameter is required.
         */
        public Builder securityGroupId(final java.lang.String securityGroupId) {
            this.props.securityGroupId(securityGroupId);
            return this;
        }
        /**
         * Property securityGroupId: Security group ID.
         * <p>
         * @return {@code this}
         * @param securityGroupId Property securityGroupId: Security group ID. This parameter is required.
         */
        public Builder securityGroupId(final com.aliyun.ros.cdk.core.IResolvable securityGroupId) {
            this.props.securityGroupId(securityGroupId);
            return this;
        }

        /**
         * Property vSwitchId: VSwitch ID.
         * <p>
         * @return {@code this}
         * @param vSwitchId Property vSwitchId: VSwitch ID. This parameter is required.
         */
        public Builder vSwitchId(final java.lang.String vSwitchId) {
            this.props.vSwitchId(vSwitchId);
            return this;
        }
        /**
         * Property vSwitchId: VSwitch ID.
         * <p>
         * @return {@code this}
         * @param vSwitchId Property vSwitchId: VSwitch ID. This parameter is required.
         */
        public Builder vSwitchId(final com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
            this.props.vSwitchId(vSwitchId);
            return this;
        }

        /**
         * Property eipInstanceId: If you want to pull the public network image, you need to configure the public network ip or configure the switch NAT gateway.
         * <p>
         * @return {@code this}
         * @param eipInstanceId Property eipInstanceId: If you want to pull the public network image, you need to configure the public network ip or configure the switch NAT gateway. This parameter is required.
         */
        public Builder eipInstanceId(final java.lang.String eipInstanceId) {
            this.props.eipInstanceId(eipInstanceId);
            return this;
        }
        /**
         * Property eipInstanceId: If you want to pull the public network image, you need to configure the public network ip or configure the switch NAT gateway.
         * <p>
         * @return {@code this}
         * @param eipInstanceId Property eipInstanceId: If you want to pull the public network image, you need to configure the public network ip or configure the switch NAT gateway. This parameter is required.
         */
        public Builder eipInstanceId(final com.aliyun.ros.cdk.core.IResolvable eipInstanceId) {
            this.props.eipInstanceId(eipInstanceId);
            return this;
        }

        /**
         * Property imageRegistryCredential: Private image password.
         * <p>
         * Alibaba Cloud ACR image can be left blank.
         * <p>
         * @return {@code this}
         * @param imageRegistryCredential Property imageRegistryCredential: Private image password. This parameter is required.
         */
        public Builder imageRegistryCredential(final com.aliyun.ros.cdk.core.IResolvable imageRegistryCredential) {
            this.props.imageRegistryCredential(imageRegistryCredential);
            return this;
        }
        /**
         * Property imageRegistryCredential: Private image password.
         * <p>
         * Alibaba Cloud ACR image can be left blank.
         * <p>
         * @return {@code this}
         * @param imageRegistryCredential Property imageRegistryCredential: Private image password. This parameter is required.
         */
        public Builder imageRegistryCredential(final java.util.List<? extends java.lang.Object> imageRegistryCredential) {
            this.props.imageRegistryCredential(imageRegistryCredential);
            return this;
        }

        /**
         * Property resourceGroupId: Resource group id.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: Resource group id. This parameter is required.
         */
        public Builder resourceGroupId(final java.lang.String resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }
        /**
         * Property resourceGroupId: Resource group id.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: Resource group id. This parameter is required.
         */
        public Builder resourceGroupId(final com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.eci.ImageCache}.
         */
        @Override
        public com.aliyun.ros.cdk.eci.ImageCache build() {
            return new com.aliyun.ros.cdk.eci.ImageCache(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
