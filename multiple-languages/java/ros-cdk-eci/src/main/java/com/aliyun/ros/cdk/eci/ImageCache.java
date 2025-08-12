package com.aliyun.ros.cdk.eci;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::ECI::ImageCache</code>, which is used to create an image cache.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-08-12T08:28:46.045Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.eci.$Module.class, fqn = "@alicloud/ros-cdk-eci.ImageCache")
public class ImageCache extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.eci.IImageCache {

    protected ImageCache(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected ImageCache(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
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
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
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
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrImageCacheId() {
        return software.amazon.jsii.Kernel.get(this, "attrImageCacheId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.eci.ImageCacheProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.eci.ImageCacheProps.class));
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

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
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
         * Property acrRegistryInfo: Enterprise Edition access credential configuration information.
         * <p>
         * @return {@code this}
         * @param acrRegistryInfo Property acrRegistryInfo: Enterprise Edition access credential configuration information. This parameter is required.
         */
        public Builder acrRegistryInfo(final com.aliyun.ros.cdk.core.IResolvable acrRegistryInfo) {
            this.props.acrRegistryInfo(acrRegistryInfo);
            return this;
        }
        /**
         * Property acrRegistryInfo: Enterprise Edition access credential configuration information.
         * <p>
         * @return {@code this}
         * @param acrRegistryInfo Property acrRegistryInfo: Enterprise Edition access credential configuration information. This parameter is required.
         */
        public Builder acrRegistryInfo(final java.util.List<? extends java.lang.Object> acrRegistryInfo) {
            this.props.acrRegistryInfo(acrRegistryInfo);
            return this;
        }

        /**
         * Property autoMatchImageCache: Specifies whether to enable reuse of image cache layers.
         * <p>
         * If you enable this feature, and the image cache that you want to createand an existing image cache contain duplicate image layers, the system reuses the duplicate image layers to create the new image cache.
         * This accelerates the creation of the image cache.
         * Valid values: true: enables reuse of image cache layers.
         * false: disables reuse of image cache layers.
         * Default value: false.
         * <p>
         * @return {@code this}
         * @param autoMatchImageCache Property autoMatchImageCache: Specifies whether to enable reuse of image cache layers. This parameter is required.
         */
        public Builder autoMatchImageCache(final java.lang.Boolean autoMatchImageCache) {
            this.props.autoMatchImageCache(autoMatchImageCache);
            return this;
        }
        /**
         * Property autoMatchImageCache: Specifies whether to enable reuse of image cache layers.
         * <p>
         * If you enable this feature, and the image cache that you want to createand an existing image cache contain duplicate image layers, the system reuses the duplicate image layers to create the new image cache.
         * This accelerates the creation of the image cache.
         * Valid values: true: enables reuse of image cache layers.
         * false: disables reuse of image cache layers.
         * Default value: false.
         * <p>
         * @return {@code this}
         * @param autoMatchImageCache Property autoMatchImageCache: Specifies whether to enable reuse of image cache layers. This parameter is required.
         */
        public Builder autoMatchImageCache(final com.aliyun.ros.cdk.core.IResolvable autoMatchImageCache) {
            this.props.autoMatchImageCache(autoMatchImageCache);
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
         * Property imageCacheSize: The size of the image cache.
         * <p>
         * Unit: GiB. Default value: 20.
         * <p>
         * @return {@code this}
         * @param imageCacheSize Property imageCacheSize: The size of the image cache. This parameter is required.
         */
        public Builder imageCacheSize(final java.lang.Number imageCacheSize) {
            this.props.imageCacheSize(imageCacheSize);
            return this;
        }
        /**
         * Property imageCacheSize: The size of the image cache.
         * <p>
         * Unit: GiB. Default value: 20.
         * <p>
         * @return {@code this}
         * @param imageCacheSize Property imageCacheSize: The size of the image cache. This parameter is required.
         */
        public Builder imageCacheSize(final com.aliyun.ros.cdk.core.IResolvable imageCacheSize) {
            this.props.imageCacheSize(imageCacheSize);
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
         * Property retentionDays: The retention period of the image cache.
         * <p>
         * Unit: days. When the retention period ends, the image cache expires and is deleted.
         * By default, image caches never expire.
         * Note: The image caches that fail to be created are only retained for one day.
         * <p>
         * @return {@code this}
         * @param retentionDays Property retentionDays: The retention period of the image cache. This parameter is required.
         */
        public Builder retentionDays(final java.lang.Number retentionDays) {
            this.props.retentionDays(retentionDays);
            return this;
        }
        /**
         * Property retentionDays: The retention period of the image cache.
         * <p>
         * Unit: days. When the retention period ends, the image cache expires and is deleted.
         * By default, image caches never expire.
         * Note: The image caches that fail to be created are only retained for one day.
         * <p>
         * @return {@code this}
         * @param retentionDays Property retentionDays: The retention period of the image cache. This parameter is required.
         */
        public Builder retentionDays(final com.aliyun.ros.cdk.core.IResolvable retentionDays) {
            this.props.retentionDays(retentionDays);
            return this;
        }

        /**
         * Property zoneId: The zone ID of the image cache.
         * <p>
         * @return {@code this}
         * @param zoneId Property zoneId: The zone ID of the image cache. This parameter is required.
         */
        public Builder zoneId(final java.lang.String zoneId) {
            this.props.zoneId(zoneId);
            return this;
        }
        /**
         * Property zoneId: The zone ID of the image cache.
         * <p>
         * @return {@code this}
         * @param zoneId Property zoneId: The zone ID of the image cache. This parameter is required.
         */
        public Builder zoneId(final com.aliyun.ros.cdk.core.IResolvable zoneId) {
            this.props.zoneId(zoneId);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.eci.ImageCache}.
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
