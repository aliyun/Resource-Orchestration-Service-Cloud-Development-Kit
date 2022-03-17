package com.aliyun.ros.cdk.eci;

/**
 * Properties for defining a `ALIYUN::ECI::ImageCache`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.55.1 (build 07d2d90)", date = "2022-03-17T08:21:15.011Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.eci.$Module.class, fqn = "@alicloud/ros-cdk-eci.ImageCacheProps")
@software.amazon.jsii.Jsii.Proxy(ImageCacheProps.Jsii$Proxy.class)
public interface ImageCacheProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property image: The image list to be cached.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getImage();

    /**
     * Property imageCacheName: Image cache name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getImageCacheName();

    /**
     * Property securityGroupId: Security group ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSecurityGroupId();

    /**
     * Property vSwitchId: VSwitch ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getVSwitchId();

    /**
     * Property eipInstanceId: If you want to pull the public network image, you need to configure the public network ip or configure the switch NAT gateway.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEipInstanceId() {
        return null;
    }

    /**
     * Property imageRegistryCredential: Private image password.
     * <p>
     * Alibaba Cloud ACR image can be left blank.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getImageRegistryCredential() {
        return null;
    }

    /**
     * Property resourceGroupId: Resource group.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link ImageCacheProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link ImageCacheProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<ImageCacheProps> {
        java.lang.Object image;
        java.lang.Object imageCacheName;
        java.lang.Object securityGroupId;
        java.lang.Object vSwitchId;
        java.lang.Object eipInstanceId;
        java.lang.Object imageRegistryCredential;
        java.lang.Object resourceGroupId;

        /**
         * Sets the value of {@link ImageCacheProps#getImage}
         * @param image Property image: The image list to be cached. This parameter is required.
         * @return {@code this}
         */
        public Builder image(com.aliyun.ros.cdk.core.IResolvable image) {
            this.image = image;
            return this;
        }

        /**
         * Sets the value of {@link ImageCacheProps#getImage}
         * @param image Property image: The image list to be cached. This parameter is required.
         * @return {@code this}
         */
        public Builder image(java.util.List<? extends java.lang.Object> image) {
            this.image = image;
            return this;
        }

        /**
         * Sets the value of {@link ImageCacheProps#getImageCacheName}
         * @param imageCacheName Property imageCacheName: Image cache name. This parameter is required.
         * @return {@code this}
         */
        public Builder imageCacheName(java.lang.String imageCacheName) {
            this.imageCacheName = imageCacheName;
            return this;
        }

        /**
         * Sets the value of {@link ImageCacheProps#getImageCacheName}
         * @param imageCacheName Property imageCacheName: Image cache name. This parameter is required.
         * @return {@code this}
         */
        public Builder imageCacheName(com.aliyun.ros.cdk.core.IResolvable imageCacheName) {
            this.imageCacheName = imageCacheName;
            return this;
        }

        /**
         * Sets the value of {@link ImageCacheProps#getSecurityGroupId}
         * @param securityGroupId Property securityGroupId: Security group ID. This parameter is required.
         * @return {@code this}
         */
        public Builder securityGroupId(java.lang.String securityGroupId) {
            this.securityGroupId = securityGroupId;
            return this;
        }

        /**
         * Sets the value of {@link ImageCacheProps#getSecurityGroupId}
         * @param securityGroupId Property securityGroupId: Security group ID. This parameter is required.
         * @return {@code this}
         */
        public Builder securityGroupId(com.aliyun.ros.cdk.core.IResolvable securityGroupId) {
            this.securityGroupId = securityGroupId;
            return this;
        }

        /**
         * Sets the value of {@link ImageCacheProps#getVSwitchId}
         * @param vSwitchId Property vSwitchId: VSwitch ID. This parameter is required.
         * @return {@code this}
         */
        public Builder vSwitchId(java.lang.String vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link ImageCacheProps#getVSwitchId}
         * @param vSwitchId Property vSwitchId: VSwitch ID. This parameter is required.
         * @return {@code this}
         */
        public Builder vSwitchId(com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link ImageCacheProps#getEipInstanceId}
         * @param eipInstanceId Property eipInstanceId: If you want to pull the public network image, you need to configure the public network ip or configure the switch NAT gateway.
         * @return {@code this}
         */
        public Builder eipInstanceId(java.lang.String eipInstanceId) {
            this.eipInstanceId = eipInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link ImageCacheProps#getEipInstanceId}
         * @param eipInstanceId Property eipInstanceId: If you want to pull the public network image, you need to configure the public network ip or configure the switch NAT gateway.
         * @return {@code this}
         */
        public Builder eipInstanceId(com.aliyun.ros.cdk.core.IResolvable eipInstanceId) {
            this.eipInstanceId = eipInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link ImageCacheProps#getImageRegistryCredential}
         * @param imageRegistryCredential Property imageRegistryCredential: Private image password.
         *                                Alibaba Cloud ACR image can be left blank.
         * @return {@code this}
         */
        public Builder imageRegistryCredential(com.aliyun.ros.cdk.core.IResolvable imageRegistryCredential) {
            this.imageRegistryCredential = imageRegistryCredential;
            return this;
        }

        /**
         * Sets the value of {@link ImageCacheProps#getImageRegistryCredential}
         * @param imageRegistryCredential Property imageRegistryCredential: Private image password.
         *                                Alibaba Cloud ACR image can be left blank.
         * @return {@code this}
         */
        public Builder imageRegistryCredential(java.util.List<? extends java.lang.Object> imageRegistryCredential) {
            this.imageRegistryCredential = imageRegistryCredential;
            return this;
        }

        /**
         * Sets the value of {@link ImageCacheProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: Resource group.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link ImageCacheProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: Resource group.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link ImageCacheProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public ImageCacheProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link ImageCacheProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ImageCacheProps {
        private final java.lang.Object image;
        private final java.lang.Object imageCacheName;
        private final java.lang.Object securityGroupId;
        private final java.lang.Object vSwitchId;
        private final java.lang.Object eipInstanceId;
        private final java.lang.Object imageRegistryCredential;
        private final java.lang.Object resourceGroupId;

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
            this.eipInstanceId = software.amazon.jsii.Kernel.get(this, "eipInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.imageRegistryCredential = software.amazon.jsii.Kernel.get(this, "imageRegistryCredential", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
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
            this.eipInstanceId = builder.eipInstanceId;
            this.imageRegistryCredential = builder.imageRegistryCredential;
            this.resourceGroupId = builder.resourceGroupId;
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
        public final java.lang.Object getEipInstanceId() {
            return this.eipInstanceId;
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
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("image", om.valueToTree(this.getImage()));
            data.set("imageCacheName", om.valueToTree(this.getImageCacheName()));
            data.set("securityGroupId", om.valueToTree(this.getSecurityGroupId()));
            data.set("vSwitchId", om.valueToTree(this.getVSwitchId()));
            if (this.getEipInstanceId() != null) {
                data.set("eipInstanceId", om.valueToTree(this.getEipInstanceId()));
            }
            if (this.getImageRegistryCredential() != null) {
                data.set("imageRegistryCredential", om.valueToTree(this.getImageRegistryCredential()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-eci.ImageCacheProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            ImageCacheProps.Jsii$Proxy that = (ImageCacheProps.Jsii$Proxy) o;

            if (!image.equals(that.image)) return false;
            if (!imageCacheName.equals(that.imageCacheName)) return false;
            if (!securityGroupId.equals(that.securityGroupId)) return false;
            if (!vSwitchId.equals(that.vSwitchId)) return false;
            if (this.eipInstanceId != null ? !this.eipInstanceId.equals(that.eipInstanceId) : that.eipInstanceId != null) return false;
            if (this.imageRegistryCredential != null ? !this.imageRegistryCredential.equals(that.imageRegistryCredential) : that.imageRegistryCredential != null) return false;
            return this.resourceGroupId != null ? this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.image.hashCode();
            result = 31 * result + (this.imageCacheName.hashCode());
            result = 31 * result + (this.securityGroupId.hashCode());
            result = 31 * result + (this.vSwitchId.hashCode());
            result = 31 * result + (this.eipInstanceId != null ? this.eipInstanceId.hashCode() : 0);
            result = 31 * result + (this.imageRegistryCredential != null ? this.imageRegistryCredential.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            return result;
        }
    }
}
