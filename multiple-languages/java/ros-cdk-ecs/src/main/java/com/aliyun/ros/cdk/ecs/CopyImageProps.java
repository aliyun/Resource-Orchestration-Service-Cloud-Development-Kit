package com.aliyun.ros.cdk.ecs;

/**
 * Properties for defining a <code>CopyImage</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-copyimage
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-10-18T08:56:28.919Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.CopyImageProps")
@software.amazon.jsii.Jsii.Proxy(CopyImageProps.Jsii$Proxy.class)
public interface CopyImageProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property destinationRegionId: ID of the region to where the destination custom image belongs.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDestinationRegionId();

    /**
     * Property imageId: ID of the source custom image.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getImageId();

    /**
     * Property allowCopyInSameRegion: Whether to allow copying images in the same region.
     * <p>
     * If set to true, the image will not be copied, the source image id will be returned, and the original image will not be deleted.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAllowCopyInSameRegion() {
        return null;
    }

    /**
     * Property destinationDescription: The description of the destination custom image.It cannot begin with http:// or https://.  Default value: null.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDestinationDescription() {
        return null;
    }

    /**
     * Property destinationImageName: Name of the destination custom image.The name is a string of 2 to 128 characters. It must begin with an English or a Chinese character. It can contain A-Z, a-z, Chinese characters, numbers, periods (.), colons (:), underscores (_), and hyphens (-).  Default value: null.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDestinationImageName() {
        return null;
    }

    /**
     * Property encrypted: Whether to encrypt the image.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEncrypted() {
        return null;
    }

    /**
     * Property kmsKeyId: The ID of the key used to encrypt the image.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getKmsKeyId() {
        return null;
    }

    /**
     * Property resourceGroupId: The ID of the resource group to which the image copy belongs.
     * <p>
     * If not provided, the image copy belongs to the default resource group.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     * Property sourceRegionId: ID of the region to where the source image belongs.
     * <p>
     * Default is current region ID.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSourceRegionId() {
        return null;
    }

    /**
     * Property tag:.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTag() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link CopyImageProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link CopyImageProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<CopyImageProps> {
        java.lang.Object destinationRegionId;
        java.lang.Object imageId;
        java.lang.Object allowCopyInSameRegion;
        java.lang.Object destinationDescription;
        java.lang.Object destinationImageName;
        java.lang.Object encrypted;
        java.lang.Object kmsKeyId;
        java.lang.Object resourceGroupId;
        java.lang.Object sourceRegionId;
        java.lang.Object tag;

        /**
         * Sets the value of {@link CopyImageProps#getDestinationRegionId}
         * @param destinationRegionId Property destinationRegionId: ID of the region to where the destination custom image belongs. This parameter is required.
         * @return {@code this}
         */
        public Builder destinationRegionId(java.lang.String destinationRegionId) {
            this.destinationRegionId = destinationRegionId;
            return this;
        }

        /**
         * Sets the value of {@link CopyImageProps#getDestinationRegionId}
         * @param destinationRegionId Property destinationRegionId: ID of the region to where the destination custom image belongs. This parameter is required.
         * @return {@code this}
         */
        public Builder destinationRegionId(com.aliyun.ros.cdk.core.IResolvable destinationRegionId) {
            this.destinationRegionId = destinationRegionId;
            return this;
        }

        /**
         * Sets the value of {@link CopyImageProps#getImageId}
         * @param imageId Property imageId: ID of the source custom image. This parameter is required.
         * @return {@code this}
         */
        public Builder imageId(java.lang.String imageId) {
            this.imageId = imageId;
            return this;
        }

        /**
         * Sets the value of {@link CopyImageProps#getImageId}
         * @param imageId Property imageId: ID of the source custom image. This parameter is required.
         * @return {@code this}
         */
        public Builder imageId(com.aliyun.ros.cdk.core.IResolvable imageId) {
            this.imageId = imageId;
            return this;
        }

        /**
         * Sets the value of {@link CopyImageProps#getAllowCopyInSameRegion}
         * @param allowCopyInSameRegion Property allowCopyInSameRegion: Whether to allow copying images in the same region.
         *                              If set to true, the image will not be copied, the source image id will be returned, and the original image will not be deleted.
         * @return {@code this}
         */
        public Builder allowCopyInSameRegion(java.lang.Boolean allowCopyInSameRegion) {
            this.allowCopyInSameRegion = allowCopyInSameRegion;
            return this;
        }

        /**
         * Sets the value of {@link CopyImageProps#getAllowCopyInSameRegion}
         * @param allowCopyInSameRegion Property allowCopyInSameRegion: Whether to allow copying images in the same region.
         *                              If set to true, the image will not be copied, the source image id will be returned, and the original image will not be deleted.
         * @return {@code this}
         */
        public Builder allowCopyInSameRegion(com.aliyun.ros.cdk.core.IResolvable allowCopyInSameRegion) {
            this.allowCopyInSameRegion = allowCopyInSameRegion;
            return this;
        }

        /**
         * Sets the value of {@link CopyImageProps#getDestinationDescription}
         * @param destinationDescription Property destinationDescription: The description of the destination custom image.It cannot begin with http:// or https://.  Default value: null.
         * @return {@code this}
         */
        public Builder destinationDescription(java.lang.String destinationDescription) {
            this.destinationDescription = destinationDescription;
            return this;
        }

        /**
         * Sets the value of {@link CopyImageProps#getDestinationDescription}
         * @param destinationDescription Property destinationDescription: The description of the destination custom image.It cannot begin with http:// or https://.  Default value: null.
         * @return {@code this}
         */
        public Builder destinationDescription(com.aliyun.ros.cdk.core.IResolvable destinationDescription) {
            this.destinationDescription = destinationDescription;
            return this;
        }

        /**
         * Sets the value of {@link CopyImageProps#getDestinationImageName}
         * @param destinationImageName Property destinationImageName: Name of the destination custom image.The name is a string of 2 to 128 characters. It must begin with an English or a Chinese character. It can contain A-Z, a-z, Chinese characters, numbers, periods (.), colons (:), underscores (_), and hyphens (-).  Default value: null.
         * @return {@code this}
         */
        public Builder destinationImageName(java.lang.String destinationImageName) {
            this.destinationImageName = destinationImageName;
            return this;
        }

        /**
         * Sets the value of {@link CopyImageProps#getDestinationImageName}
         * @param destinationImageName Property destinationImageName: Name of the destination custom image.The name is a string of 2 to 128 characters. It must begin with an English or a Chinese character. It can contain A-Z, a-z, Chinese characters, numbers, periods (.), colons (:), underscores (_), and hyphens (-).  Default value: null.
         * @return {@code this}
         */
        public Builder destinationImageName(com.aliyun.ros.cdk.core.IResolvable destinationImageName) {
            this.destinationImageName = destinationImageName;
            return this;
        }

        /**
         * Sets the value of {@link CopyImageProps#getEncrypted}
         * @param encrypted Property encrypted: Whether to encrypt the image.
         * @return {@code this}
         */
        public Builder encrypted(java.lang.Boolean encrypted) {
            this.encrypted = encrypted;
            return this;
        }

        /**
         * Sets the value of {@link CopyImageProps#getEncrypted}
         * @param encrypted Property encrypted: Whether to encrypt the image.
         * @return {@code this}
         */
        public Builder encrypted(com.aliyun.ros.cdk.core.IResolvable encrypted) {
            this.encrypted = encrypted;
            return this;
        }

        /**
         * Sets the value of {@link CopyImageProps#getKmsKeyId}
         * @param kmsKeyId Property kmsKeyId: The ID of the key used to encrypt the image.
         * @return {@code this}
         */
        public Builder kmsKeyId(java.lang.String kmsKeyId) {
            this.kmsKeyId = kmsKeyId;
            return this;
        }

        /**
         * Sets the value of {@link CopyImageProps#getKmsKeyId}
         * @param kmsKeyId Property kmsKeyId: The ID of the key used to encrypt the image.
         * @return {@code this}
         */
        public Builder kmsKeyId(com.aliyun.ros.cdk.core.IResolvable kmsKeyId) {
            this.kmsKeyId = kmsKeyId;
            return this;
        }

        /**
         * Sets the value of {@link CopyImageProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group to which the image copy belongs.
         *                        If not provided, the image copy belongs to the default resource group.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link CopyImageProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group to which the image copy belongs.
         *                        If not provided, the image copy belongs to the default resource group.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link CopyImageProps#getSourceRegionId}
         * @param sourceRegionId Property sourceRegionId: ID of the region to where the source image belongs.
         *                       Default is current region ID.
         * @return {@code this}
         */
        public Builder sourceRegionId(java.lang.String sourceRegionId) {
            this.sourceRegionId = sourceRegionId;
            return this;
        }

        /**
         * Sets the value of {@link CopyImageProps#getSourceRegionId}
         * @param sourceRegionId Property sourceRegionId: ID of the region to where the source image belongs.
         *                       Default is current region ID.
         * @return {@code this}
         */
        public Builder sourceRegionId(com.aliyun.ros.cdk.core.IResolvable sourceRegionId) {
            this.sourceRegionId = sourceRegionId;
            return this;
        }

        /**
         * Sets the value of {@link CopyImageProps#getTag}
         * @param tag Property tag:.
         * @return {@code this}
         */
        public Builder tag(com.aliyun.ros.cdk.core.IResolvable tag) {
            this.tag = tag;
            return this;
        }

        /**
         * Sets the value of {@link CopyImageProps#getTag}
         * @param tag Property tag:.
         * @return {@code this}
         */
        public Builder tag(java.util.List<? extends java.lang.Object> tag) {
            this.tag = tag;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link CopyImageProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public CopyImageProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link CopyImageProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements CopyImageProps {
        private final java.lang.Object destinationRegionId;
        private final java.lang.Object imageId;
        private final java.lang.Object allowCopyInSameRegion;
        private final java.lang.Object destinationDescription;
        private final java.lang.Object destinationImageName;
        private final java.lang.Object encrypted;
        private final java.lang.Object kmsKeyId;
        private final java.lang.Object resourceGroupId;
        private final java.lang.Object sourceRegionId;
        private final java.lang.Object tag;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.destinationRegionId = software.amazon.jsii.Kernel.get(this, "destinationRegionId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.imageId = software.amazon.jsii.Kernel.get(this, "imageId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.allowCopyInSameRegion = software.amazon.jsii.Kernel.get(this, "allowCopyInSameRegion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.destinationDescription = software.amazon.jsii.Kernel.get(this, "destinationDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.destinationImageName = software.amazon.jsii.Kernel.get(this, "destinationImageName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.encrypted = software.amazon.jsii.Kernel.get(this, "encrypted", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.kmsKeyId = software.amazon.jsii.Kernel.get(this, "kmsKeyId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.sourceRegionId = software.amazon.jsii.Kernel.get(this, "sourceRegionId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tag = software.amazon.jsii.Kernel.get(this, "tag", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.destinationRegionId = java.util.Objects.requireNonNull(builder.destinationRegionId, "destinationRegionId is required");
            this.imageId = java.util.Objects.requireNonNull(builder.imageId, "imageId is required");
            this.allowCopyInSameRegion = builder.allowCopyInSameRegion;
            this.destinationDescription = builder.destinationDescription;
            this.destinationImageName = builder.destinationImageName;
            this.encrypted = builder.encrypted;
            this.kmsKeyId = builder.kmsKeyId;
            this.resourceGroupId = builder.resourceGroupId;
            this.sourceRegionId = builder.sourceRegionId;
            this.tag = builder.tag;
        }

        @Override
        public final java.lang.Object getDestinationRegionId() {
            return this.destinationRegionId;
        }

        @Override
        public final java.lang.Object getImageId() {
            return this.imageId;
        }

        @Override
        public final java.lang.Object getAllowCopyInSameRegion() {
            return this.allowCopyInSameRegion;
        }

        @Override
        public final java.lang.Object getDestinationDescription() {
            return this.destinationDescription;
        }

        @Override
        public final java.lang.Object getDestinationImageName() {
            return this.destinationImageName;
        }

        @Override
        public final java.lang.Object getEncrypted() {
            return this.encrypted;
        }

        @Override
        public final java.lang.Object getKmsKeyId() {
            return this.kmsKeyId;
        }

        @Override
        public final java.lang.Object getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        public final java.lang.Object getSourceRegionId() {
            return this.sourceRegionId;
        }

        @Override
        public final java.lang.Object getTag() {
            return this.tag;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("destinationRegionId", om.valueToTree(this.getDestinationRegionId()));
            data.set("imageId", om.valueToTree(this.getImageId()));
            if (this.getAllowCopyInSameRegion() != null) {
                data.set("allowCopyInSameRegion", om.valueToTree(this.getAllowCopyInSameRegion()));
            }
            if (this.getDestinationDescription() != null) {
                data.set("destinationDescription", om.valueToTree(this.getDestinationDescription()));
            }
            if (this.getDestinationImageName() != null) {
                data.set("destinationImageName", om.valueToTree(this.getDestinationImageName()));
            }
            if (this.getEncrypted() != null) {
                data.set("encrypted", om.valueToTree(this.getEncrypted()));
            }
            if (this.getKmsKeyId() != null) {
                data.set("kmsKeyId", om.valueToTree(this.getKmsKeyId()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }
            if (this.getSourceRegionId() != null) {
                data.set("sourceRegionId", om.valueToTree(this.getSourceRegionId()));
            }
            if (this.getTag() != null) {
                data.set("tag", om.valueToTree(this.getTag()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ecs.CopyImageProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            CopyImageProps.Jsii$Proxy that = (CopyImageProps.Jsii$Proxy) o;

            if (!destinationRegionId.equals(that.destinationRegionId)) return false;
            if (!imageId.equals(that.imageId)) return false;
            if (this.allowCopyInSameRegion != null ? !this.allowCopyInSameRegion.equals(that.allowCopyInSameRegion) : that.allowCopyInSameRegion != null) return false;
            if (this.destinationDescription != null ? !this.destinationDescription.equals(that.destinationDescription) : that.destinationDescription != null) return false;
            if (this.destinationImageName != null ? !this.destinationImageName.equals(that.destinationImageName) : that.destinationImageName != null) return false;
            if (this.encrypted != null ? !this.encrypted.equals(that.encrypted) : that.encrypted != null) return false;
            if (this.kmsKeyId != null ? !this.kmsKeyId.equals(that.kmsKeyId) : that.kmsKeyId != null) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            if (this.sourceRegionId != null ? !this.sourceRegionId.equals(that.sourceRegionId) : that.sourceRegionId != null) return false;
            return this.tag != null ? this.tag.equals(that.tag) : that.tag == null;
        }

        @Override
        public final int hashCode() {
            int result = this.destinationRegionId.hashCode();
            result = 31 * result + (this.imageId.hashCode());
            result = 31 * result + (this.allowCopyInSameRegion != null ? this.allowCopyInSameRegion.hashCode() : 0);
            result = 31 * result + (this.destinationDescription != null ? this.destinationDescription.hashCode() : 0);
            result = 31 * result + (this.destinationImageName != null ? this.destinationImageName.hashCode() : 0);
            result = 31 * result + (this.encrypted != null ? this.encrypted.hashCode() : 0);
            result = 31 * result + (this.kmsKeyId != null ? this.kmsKeyId.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.sourceRegionId != null ? this.sourceRegionId.hashCode() : 0);
            result = 31 * result + (this.tag != null ? this.tag.hashCode() : 0);
            return result;
        }
    }
}
