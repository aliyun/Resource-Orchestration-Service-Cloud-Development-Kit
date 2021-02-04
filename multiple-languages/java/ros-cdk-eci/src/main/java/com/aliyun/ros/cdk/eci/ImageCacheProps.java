package com.aliyun.ros.cdk.eci;

/**
 * Properties for defining a `ALIYUN::ECI::ImageCache`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-02-04T07:29:35.486Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.eci.$Module.class, fqn = "@alicloud/ros-cdk-eci.ImageCacheProps")
@software.amazon.jsii.Jsii.Proxy(ImageCacheProps.Jsii$Proxy.class)
public interface ImageCacheProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.util.List<java.lang.String> getImage();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getImageCacheName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getSecurityGroupId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getVSwitchId();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getEipInstanceId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.util.List<java.lang.String> getImageRegistryCredential() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getResourceGroupId() {
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
        private java.util.List<java.lang.String> image;
        private java.lang.String imageCacheName;
        private java.lang.String securityGroupId;
        private java.lang.String vSwitchId;
        private java.lang.String eipInstanceId;
        private java.util.List<java.lang.String> imageRegistryCredential;
        private java.lang.String resourceGroupId;

        /**
         * Sets the value of {@link ImageCacheProps#getImage}
         * @param image the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder image(java.util.List<java.lang.String> image) {
            this.image = image;
            return this;
        }

        /**
         * Sets the value of {@link ImageCacheProps#getImageCacheName}
         * @param imageCacheName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder imageCacheName(java.lang.String imageCacheName) {
            this.imageCacheName = imageCacheName;
            return this;
        }

        /**
         * Sets the value of {@link ImageCacheProps#getSecurityGroupId}
         * @param securityGroupId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder securityGroupId(java.lang.String securityGroupId) {
            this.securityGroupId = securityGroupId;
            return this;
        }

        /**
         * Sets the value of {@link ImageCacheProps#getVSwitchId}
         * @param vSwitchId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder vSwitchId(java.lang.String vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link ImageCacheProps#getEipInstanceId}
         * @param eipInstanceId the value to be set.
         * @return {@code this}
         */
        public Builder eipInstanceId(java.lang.String eipInstanceId) {
            this.eipInstanceId = eipInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link ImageCacheProps#getImageRegistryCredential}
         * @param imageRegistryCredential the value to be set.
         * @return {@code this}
         */
        public Builder imageRegistryCredential(java.util.List<java.lang.String> imageRegistryCredential) {
            this.imageRegistryCredential = imageRegistryCredential;
            return this;
        }

        /**
         * Sets the value of {@link ImageCacheProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
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
            return new Jsii$Proxy(image, imageCacheName, securityGroupId, vSwitchId, eipInstanceId, imageRegistryCredential, resourceGroupId);
        }
    }

    /**
     * An implementation for {@link ImageCacheProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ImageCacheProps {
        private final java.util.List<java.lang.String> image;
        private final java.lang.String imageCacheName;
        private final java.lang.String securityGroupId;
        private final java.lang.String vSwitchId;
        private final java.lang.String eipInstanceId;
        private final java.util.List<java.lang.String> imageRegistryCredential;
        private final java.lang.String resourceGroupId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.image = software.amazon.jsii.Kernel.get(this, "image", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class)));
            this.imageCacheName = software.amazon.jsii.Kernel.get(this, "imageCacheName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.securityGroupId = software.amazon.jsii.Kernel.get(this, "securityGroupId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.vSwitchId = software.amazon.jsii.Kernel.get(this, "vSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.eipInstanceId = software.amazon.jsii.Kernel.get(this, "eipInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.imageRegistryCredential = software.amazon.jsii.Kernel.get(this, "imageRegistryCredential", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class)));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final java.util.List<java.lang.String> image, final java.lang.String imageCacheName, final java.lang.String securityGroupId, final java.lang.String vSwitchId, final java.lang.String eipInstanceId, final java.util.List<java.lang.String> imageRegistryCredential, final java.lang.String resourceGroupId) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.image = java.util.Objects.requireNonNull(image, "image is required");
            this.imageCacheName = java.util.Objects.requireNonNull(imageCacheName, "imageCacheName is required");
            this.securityGroupId = java.util.Objects.requireNonNull(securityGroupId, "securityGroupId is required");
            this.vSwitchId = java.util.Objects.requireNonNull(vSwitchId, "vSwitchId is required");
            this.eipInstanceId = eipInstanceId;
            this.imageRegistryCredential = imageRegistryCredential;
            this.resourceGroupId = resourceGroupId;
        }

        @Override
        public final java.util.List<java.lang.String> getImage() {
            return this.image;
        }

        @Override
        public final java.lang.String getImageCacheName() {
            return this.imageCacheName;
        }

        @Override
        public final java.lang.String getSecurityGroupId() {
            return this.securityGroupId;
        }

        @Override
        public final java.lang.String getVSwitchId() {
            return this.vSwitchId;
        }

        @Override
        public final java.lang.String getEipInstanceId() {
            return this.eipInstanceId;
        }

        @Override
        public final java.util.List<java.lang.String> getImageRegistryCredential() {
            return this.imageRegistryCredential;
        }

        @Override
        public final java.lang.String getResourceGroupId() {
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
