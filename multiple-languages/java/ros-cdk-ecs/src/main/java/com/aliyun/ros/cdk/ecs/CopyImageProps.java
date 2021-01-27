package com.aliyun.ros.cdk.ecs;

/**
 * Properties for defining a `ALIYUN::ECS::CopyImage`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-01-26T09:47:33.625Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.CopyImageProps")
@software.amazon.jsii.Jsii.Proxy(CopyImageProps.Jsii$Proxy.class)
public interface CopyImageProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getDestinationRegionId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getImageId();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getDestinationDescription() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getDestinationImageName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEncrypted() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getKmsKeyId() {
        return null;
    }

    /**
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
        private java.lang.String destinationRegionId;
        private java.lang.String imageId;
        private java.lang.String destinationDescription;
        private java.lang.String destinationImageName;
        private java.lang.Object encrypted;
        private java.lang.String kmsKeyId;
        private java.lang.Object tag;

        /**
         * Sets the value of {@link CopyImageProps#getDestinationRegionId}
         * @param destinationRegionId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder destinationRegionId(java.lang.String destinationRegionId) {
            this.destinationRegionId = destinationRegionId;
            return this;
        }

        /**
         * Sets the value of {@link CopyImageProps#getImageId}
         * @param imageId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder imageId(java.lang.String imageId) {
            this.imageId = imageId;
            return this;
        }

        /**
         * Sets the value of {@link CopyImageProps#getDestinationDescription}
         * @param destinationDescription the value to be set.
         * @return {@code this}
         */
        public Builder destinationDescription(java.lang.String destinationDescription) {
            this.destinationDescription = destinationDescription;
            return this;
        }

        /**
         * Sets the value of {@link CopyImageProps#getDestinationImageName}
         * @param destinationImageName the value to be set.
         * @return {@code this}
         */
        public Builder destinationImageName(java.lang.String destinationImageName) {
            this.destinationImageName = destinationImageName;
            return this;
        }

        /**
         * Sets the value of {@link CopyImageProps#getEncrypted}
         * @param encrypted the value to be set.
         * @return {@code this}
         */
        public Builder encrypted(java.lang.Boolean encrypted) {
            this.encrypted = encrypted;
            return this;
        }

        /**
         * Sets the value of {@link CopyImageProps#getEncrypted}
         * @param encrypted the value to be set.
         * @return {@code this}
         */
        public Builder encrypted(com.aliyun.ros.cdk.core.IResolvable encrypted) {
            this.encrypted = encrypted;
            return this;
        }

        /**
         * Sets the value of {@link CopyImageProps#getKmsKeyId}
         * @param kmsKeyId the value to be set.
         * @return {@code this}
         */
        public Builder kmsKeyId(java.lang.String kmsKeyId) {
            this.kmsKeyId = kmsKeyId;
            return this;
        }

        /**
         * Sets the value of {@link CopyImageProps#getTag}
         * @param tag the value to be set.
         * @return {@code this}
         */
        public Builder tag(com.aliyun.ros.cdk.core.IResolvable tag) {
            this.tag = tag;
            return this;
        }

        /**
         * Sets the value of {@link CopyImageProps#getTag}
         * @param tag the value to be set.
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
            return new Jsii$Proxy(destinationRegionId, imageId, destinationDescription, destinationImageName, encrypted, kmsKeyId, tag);
        }
    }

    /**
     * An implementation for {@link CopyImageProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements CopyImageProps {
        private final java.lang.String destinationRegionId;
        private final java.lang.String imageId;
        private final java.lang.String destinationDescription;
        private final java.lang.String destinationImageName;
        private final java.lang.Object encrypted;
        private final java.lang.String kmsKeyId;
        private final java.lang.Object tag;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.destinationRegionId = software.amazon.jsii.Kernel.get(this, "destinationRegionId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.imageId = software.amazon.jsii.Kernel.get(this, "imageId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.destinationDescription = software.amazon.jsii.Kernel.get(this, "destinationDescription", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.destinationImageName = software.amazon.jsii.Kernel.get(this, "destinationImageName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.encrypted = software.amazon.jsii.Kernel.get(this, "encrypted", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.kmsKeyId = software.amazon.jsii.Kernel.get(this, "kmsKeyId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.tag = software.amazon.jsii.Kernel.get(this, "tag", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final java.lang.String destinationRegionId, final java.lang.String imageId, final java.lang.String destinationDescription, final java.lang.String destinationImageName, final java.lang.Object encrypted, final java.lang.String kmsKeyId, final java.lang.Object tag) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.destinationRegionId = java.util.Objects.requireNonNull(destinationRegionId, "destinationRegionId is required");
            this.imageId = java.util.Objects.requireNonNull(imageId, "imageId is required");
            this.destinationDescription = destinationDescription;
            this.destinationImageName = destinationImageName;
            this.encrypted = encrypted;
            this.kmsKeyId = kmsKeyId;
            this.tag = tag;
        }

        @Override
        public final java.lang.String getDestinationRegionId() {
            return this.destinationRegionId;
        }

        @Override
        public final java.lang.String getImageId() {
            return this.imageId;
        }

        @Override
        public final java.lang.String getDestinationDescription() {
            return this.destinationDescription;
        }

        @Override
        public final java.lang.String getDestinationImageName() {
            return this.destinationImageName;
        }

        @Override
        public final java.lang.Object getEncrypted() {
            return this.encrypted;
        }

        @Override
        public final java.lang.String getKmsKeyId() {
            return this.kmsKeyId;
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
            if (this.destinationDescription != null ? !this.destinationDescription.equals(that.destinationDescription) : that.destinationDescription != null) return false;
            if (this.destinationImageName != null ? !this.destinationImageName.equals(that.destinationImageName) : that.destinationImageName != null) return false;
            if (this.encrypted != null ? !this.encrypted.equals(that.encrypted) : that.encrypted != null) return false;
            if (this.kmsKeyId != null ? !this.kmsKeyId.equals(that.kmsKeyId) : that.kmsKeyId != null) return false;
            return this.tag != null ? this.tag.equals(that.tag) : that.tag == null;
        }

        @Override
        public final int hashCode() {
            int result = this.destinationRegionId.hashCode();
            result = 31 * result + (this.imageId.hashCode());
            result = 31 * result + (this.destinationDescription != null ? this.destinationDescription.hashCode() : 0);
            result = 31 * result + (this.destinationImageName != null ? this.destinationImageName.hashCode() : 0);
            result = 31 * result + (this.encrypted != null ? this.encrypted.hashCode() : 0);
            result = 31 * result + (this.kmsKeyId != null ? this.kmsKeyId.hashCode() : 0);
            result = 31 * result + (this.tag != null ? this.tag.hashCode() : 0);
            return result;
        }
    }
}
