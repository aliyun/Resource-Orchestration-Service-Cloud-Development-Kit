package com.aliyun.ros.cdk.eci;

/**
 * Properties for defining a <code>RosImageCache</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-eci-imagecache
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-04T02:47:54.196Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.eci.$Module.class, fqn = "@alicloud/ros-cdk-eci.RosImageCacheProps")
@software.amazon.jsii.Jsii.Proxy(RosImageCacheProps.Jsii$Proxy.class)
public interface RosImageCacheProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getImage();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getImageCacheName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSecurityGroupId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getVSwitchId();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAcrRegistryInfo() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAutoMatchImageCache() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEipInstanceId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getImageCacheSize() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getImageRegistryCredential() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRetentionDays() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getZoneId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosImageCacheProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosImageCacheProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosImageCacheProps> {
        java.lang.Object image;
        java.lang.Object imageCacheName;
        java.lang.Object securityGroupId;
        java.lang.Object vSwitchId;
        java.lang.Object acrRegistryInfo;
        java.lang.Object autoMatchImageCache;
        java.lang.Object eipInstanceId;
        java.lang.Object imageCacheSize;
        java.lang.Object imageRegistryCredential;
        java.lang.Object resourceGroupId;
        java.lang.Object retentionDays;
        java.lang.Object zoneId;

        /**
         * Sets the value of {@link RosImageCacheProps#getImage}
         * @param image the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder image(com.aliyun.ros.cdk.core.IResolvable image) {
            this.image = image;
            return this;
        }

        /**
         * Sets the value of {@link RosImageCacheProps#getImage}
         * @param image the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder image(java.util.List<? extends java.lang.Object> image) {
            this.image = image;
            return this;
        }

        /**
         * Sets the value of {@link RosImageCacheProps#getImageCacheName}
         * @param imageCacheName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder imageCacheName(java.lang.String imageCacheName) {
            this.imageCacheName = imageCacheName;
            return this;
        }

        /**
         * Sets the value of {@link RosImageCacheProps#getImageCacheName}
         * @param imageCacheName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder imageCacheName(com.aliyun.ros.cdk.core.IResolvable imageCacheName) {
            this.imageCacheName = imageCacheName;
            return this;
        }

        /**
         * Sets the value of {@link RosImageCacheProps#getSecurityGroupId}
         * @param securityGroupId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder securityGroupId(java.lang.String securityGroupId) {
            this.securityGroupId = securityGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosImageCacheProps#getSecurityGroupId}
         * @param securityGroupId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder securityGroupId(com.aliyun.ros.cdk.core.IResolvable securityGroupId) {
            this.securityGroupId = securityGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosImageCacheProps#getVSwitchId}
         * @param vSwitchId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder vSwitchId(java.lang.String vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link RosImageCacheProps#getVSwitchId}
         * @param vSwitchId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder vSwitchId(com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link RosImageCacheProps#getAcrRegistryInfo}
         * @param acrRegistryInfo the value to be set.
         * @return {@code this}
         */
        public Builder acrRegistryInfo(com.aliyun.ros.cdk.core.IResolvable acrRegistryInfo) {
            this.acrRegistryInfo = acrRegistryInfo;
            return this;
        }

        /**
         * Sets the value of {@link RosImageCacheProps#getAcrRegistryInfo}
         * @param acrRegistryInfo the value to be set.
         * @return {@code this}
         */
        public Builder acrRegistryInfo(java.util.List<? extends java.lang.Object> acrRegistryInfo) {
            this.acrRegistryInfo = acrRegistryInfo;
            return this;
        }

        /**
         * Sets the value of {@link RosImageCacheProps#getAutoMatchImageCache}
         * @param autoMatchImageCache the value to be set.
         * @return {@code this}
         */
        public Builder autoMatchImageCache(java.lang.Boolean autoMatchImageCache) {
            this.autoMatchImageCache = autoMatchImageCache;
            return this;
        }

        /**
         * Sets the value of {@link RosImageCacheProps#getAutoMatchImageCache}
         * @param autoMatchImageCache the value to be set.
         * @return {@code this}
         */
        public Builder autoMatchImageCache(com.aliyun.ros.cdk.core.IResolvable autoMatchImageCache) {
            this.autoMatchImageCache = autoMatchImageCache;
            return this;
        }

        /**
         * Sets the value of {@link RosImageCacheProps#getEipInstanceId}
         * @param eipInstanceId the value to be set.
         * @return {@code this}
         */
        public Builder eipInstanceId(java.lang.String eipInstanceId) {
            this.eipInstanceId = eipInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link RosImageCacheProps#getEipInstanceId}
         * @param eipInstanceId the value to be set.
         * @return {@code this}
         */
        public Builder eipInstanceId(com.aliyun.ros.cdk.core.IResolvable eipInstanceId) {
            this.eipInstanceId = eipInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link RosImageCacheProps#getImageCacheSize}
         * @param imageCacheSize the value to be set.
         * @return {@code this}
         */
        public Builder imageCacheSize(java.lang.Number imageCacheSize) {
            this.imageCacheSize = imageCacheSize;
            return this;
        }

        /**
         * Sets the value of {@link RosImageCacheProps#getImageCacheSize}
         * @param imageCacheSize the value to be set.
         * @return {@code this}
         */
        public Builder imageCacheSize(com.aliyun.ros.cdk.core.IResolvable imageCacheSize) {
            this.imageCacheSize = imageCacheSize;
            return this;
        }

        /**
         * Sets the value of {@link RosImageCacheProps#getImageRegistryCredential}
         * @param imageRegistryCredential the value to be set.
         * @return {@code this}
         */
        public Builder imageRegistryCredential(com.aliyun.ros.cdk.core.IResolvable imageRegistryCredential) {
            this.imageRegistryCredential = imageRegistryCredential;
            return this;
        }

        /**
         * Sets the value of {@link RosImageCacheProps#getImageRegistryCredential}
         * @param imageRegistryCredential the value to be set.
         * @return {@code this}
         */
        public Builder imageRegistryCredential(java.util.List<? extends java.lang.Object> imageRegistryCredential) {
            this.imageRegistryCredential = imageRegistryCredential;
            return this;
        }

        /**
         * Sets the value of {@link RosImageCacheProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosImageCacheProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosImageCacheProps#getRetentionDays}
         * @param retentionDays the value to be set.
         * @return {@code this}
         */
        public Builder retentionDays(java.lang.Number retentionDays) {
            this.retentionDays = retentionDays;
            return this;
        }

        /**
         * Sets the value of {@link RosImageCacheProps#getRetentionDays}
         * @param retentionDays the value to be set.
         * @return {@code this}
         */
        public Builder retentionDays(com.aliyun.ros.cdk.core.IResolvable retentionDays) {
            this.retentionDays = retentionDays;
            return this;
        }

        /**
         * Sets the value of {@link RosImageCacheProps#getZoneId}
         * @param zoneId the value to be set.
         * @return {@code this}
         */
        public Builder zoneId(java.lang.String zoneId) {
            this.zoneId = zoneId;
            return this;
        }

        /**
         * Sets the value of {@link RosImageCacheProps#getZoneId}
         * @param zoneId the value to be set.
         * @return {@code this}
         */
        public Builder zoneId(com.aliyun.ros.cdk.core.IResolvable zoneId) {
            this.zoneId = zoneId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosImageCacheProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosImageCacheProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosImageCacheProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosImageCacheProps {
        private final java.lang.Object image;
        private final java.lang.Object imageCacheName;
        private final java.lang.Object securityGroupId;
        private final java.lang.Object vSwitchId;
        private final java.lang.Object acrRegistryInfo;
        private final java.lang.Object autoMatchImageCache;
        private final java.lang.Object eipInstanceId;
        private final java.lang.Object imageCacheSize;
        private final java.lang.Object imageRegistryCredential;
        private final java.lang.Object resourceGroupId;
        private final java.lang.Object retentionDays;
        private final java.lang.Object zoneId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.image = software.amazon.jsii.Kernel.get(this, "image", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.imageCacheName = software.amazon.jsii.Kernel.get(this, "imageCacheName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.securityGroupId = software.amazon.jsii.Kernel.get(this, "securityGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vSwitchId = software.amazon.jsii.Kernel.get(this, "vSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.acrRegistryInfo = software.amazon.jsii.Kernel.get(this, "acrRegistryInfo", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.autoMatchImageCache = software.amazon.jsii.Kernel.get(this, "autoMatchImageCache", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.eipInstanceId = software.amazon.jsii.Kernel.get(this, "eipInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.imageCacheSize = software.amazon.jsii.Kernel.get(this, "imageCacheSize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.imageRegistryCredential = software.amazon.jsii.Kernel.get(this, "imageRegistryCredential", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.retentionDays = software.amazon.jsii.Kernel.get(this, "retentionDays", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.zoneId = software.amazon.jsii.Kernel.get(this, "zoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.image = java.util.Objects.requireNonNull(builder.image, "image is required");
            this.imageCacheName = java.util.Objects.requireNonNull(builder.imageCacheName, "imageCacheName is required");
            this.securityGroupId = java.util.Objects.requireNonNull(builder.securityGroupId, "securityGroupId is required");
            this.vSwitchId = java.util.Objects.requireNonNull(builder.vSwitchId, "vSwitchId is required");
            this.acrRegistryInfo = builder.acrRegistryInfo;
            this.autoMatchImageCache = builder.autoMatchImageCache;
            this.eipInstanceId = builder.eipInstanceId;
            this.imageCacheSize = builder.imageCacheSize;
            this.imageRegistryCredential = builder.imageRegistryCredential;
            this.resourceGroupId = builder.resourceGroupId;
            this.retentionDays = builder.retentionDays;
            this.zoneId = builder.zoneId;
        }

        @Override
        public final java.lang.Object getImage() {
            return this.image;
        }

        @Override
        public final java.lang.Object getImageCacheName() {
            return this.imageCacheName;
        }

        @Override
        public final java.lang.Object getSecurityGroupId() {
            return this.securityGroupId;
        }

        @Override
        public final java.lang.Object getVSwitchId() {
            return this.vSwitchId;
        }

        @Override
        public final java.lang.Object getAcrRegistryInfo() {
            return this.acrRegistryInfo;
        }

        @Override
        public final java.lang.Object getAutoMatchImageCache() {
            return this.autoMatchImageCache;
        }

        @Override
        public final java.lang.Object getEipInstanceId() {
            return this.eipInstanceId;
        }

        @Override
        public final java.lang.Object getImageCacheSize() {
            return this.imageCacheSize;
        }

        @Override
        public final java.lang.Object getImageRegistryCredential() {
            return this.imageRegistryCredential;
        }

        @Override
        public final java.lang.Object getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        public final java.lang.Object getRetentionDays() {
            return this.retentionDays;
        }

        @Override
        public final java.lang.Object getZoneId() {
            return this.zoneId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("image", om.valueToTree(this.getImage()));
            data.set("imageCacheName", om.valueToTree(this.getImageCacheName()));
            data.set("securityGroupId", om.valueToTree(this.getSecurityGroupId()));
            data.set("vSwitchId", om.valueToTree(this.getVSwitchId()));
            if (this.getAcrRegistryInfo() != null) {
                data.set("acrRegistryInfo", om.valueToTree(this.getAcrRegistryInfo()));
            }
            if (this.getAutoMatchImageCache() != null) {
                data.set("autoMatchImageCache", om.valueToTree(this.getAutoMatchImageCache()));
            }
            if (this.getEipInstanceId() != null) {
                data.set("eipInstanceId", om.valueToTree(this.getEipInstanceId()));
            }
            if (this.getImageCacheSize() != null) {
                data.set("imageCacheSize", om.valueToTree(this.getImageCacheSize()));
            }
            if (this.getImageRegistryCredential() != null) {
                data.set("imageRegistryCredential", om.valueToTree(this.getImageRegistryCredential()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }
            if (this.getRetentionDays() != null) {
                data.set("retentionDays", om.valueToTree(this.getRetentionDays()));
            }
            if (this.getZoneId() != null) {
                data.set("zoneId", om.valueToTree(this.getZoneId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-eci.RosImageCacheProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosImageCacheProps.Jsii$Proxy that = (RosImageCacheProps.Jsii$Proxy) o;

            if (!image.equals(that.image)) return false;
            if (!imageCacheName.equals(that.imageCacheName)) return false;
            if (!securityGroupId.equals(that.securityGroupId)) return false;
            if (!vSwitchId.equals(that.vSwitchId)) return false;
            if (this.acrRegistryInfo != null ? !this.acrRegistryInfo.equals(that.acrRegistryInfo) : that.acrRegistryInfo != null) return false;
            if (this.autoMatchImageCache != null ? !this.autoMatchImageCache.equals(that.autoMatchImageCache) : that.autoMatchImageCache != null) return false;
            if (this.eipInstanceId != null ? !this.eipInstanceId.equals(that.eipInstanceId) : that.eipInstanceId != null) return false;
            if (this.imageCacheSize != null ? !this.imageCacheSize.equals(that.imageCacheSize) : that.imageCacheSize != null) return false;
            if (this.imageRegistryCredential != null ? !this.imageRegistryCredential.equals(that.imageRegistryCredential) : that.imageRegistryCredential != null) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            if (this.retentionDays != null ? !this.retentionDays.equals(that.retentionDays) : that.retentionDays != null) return false;
            return this.zoneId != null ? this.zoneId.equals(that.zoneId) : that.zoneId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.image.hashCode();
            result = 31 * result + (this.imageCacheName.hashCode());
            result = 31 * result + (this.securityGroupId.hashCode());
            result = 31 * result + (this.vSwitchId.hashCode());
            result = 31 * result + (this.acrRegistryInfo != null ? this.acrRegistryInfo.hashCode() : 0);
            result = 31 * result + (this.autoMatchImageCache != null ? this.autoMatchImageCache.hashCode() : 0);
            result = 31 * result + (this.eipInstanceId != null ? this.eipInstanceId.hashCode() : 0);
            result = 31 * result + (this.imageCacheSize != null ? this.imageCacheSize.hashCode() : 0);
            result = 31 * result + (this.imageRegistryCredential != null ? this.imageRegistryCredential.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.retentionDays != null ? this.retentionDays.hashCode() : 0);
            result = 31 * result + (this.zoneId != null ? this.zoneId.hashCode() : 0);
            return result;
        }
    }
}
