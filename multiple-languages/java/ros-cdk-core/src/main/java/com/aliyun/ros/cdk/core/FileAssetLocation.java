package com.aliyun.ros.cdk.core;

/**
 * The location of the published file asset.
 * <p>
 * This is where the asset
 * can be consumed at runtime.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-21T05:59:07.036Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.core.$Module.class, fqn = "@alicloud/ros-cdk-core.FileAssetLocation")
@software.amazon.jsii.Jsii.Proxy(FileAssetLocation.Jsii$Proxy.class)
public interface FileAssetLocation extends software.amazon.jsii.JsiiSerializable {

    /**
     * The name of the OSS bucket.
     */
    @org.jetbrains.annotations.NotNull java.lang.String getBucketName();

    /**
     * The HTTP URL of this asset on OSS.
     * <p>
     * This value suitable for inclusion in a ROS template, and
     * may be an encoded token.
     * <p>
     * Example value: <code>https://${bucketName}.oss-${region}.aliyuncs.com/${objectKey}</code>
     */
    @org.jetbrains.annotations.NotNull java.lang.String getHttpUrl();

    /**
     * The path of OSS object.
     */
    @org.jetbrains.annotations.NotNull java.lang.String getObjectKey();

    /**
     * The region of the OSS bucket.
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getRegion() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link FileAssetLocation}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link FileAssetLocation}
     */
    public static final class Builder implements software.amazon.jsii.Builder<FileAssetLocation> {
        java.lang.String bucketName;
        java.lang.String httpUrl;
        java.lang.String objectKey;
        java.lang.String region;

        /**
         * Sets the value of {@link FileAssetLocation#getBucketName}
         * @param bucketName The name of the OSS bucket. This parameter is required.
         * @return {@code this}
         */
        public Builder bucketName(java.lang.String bucketName) {
            this.bucketName = bucketName;
            return this;
        }

        /**
         * Sets the value of {@link FileAssetLocation#getHttpUrl}
         * @param httpUrl The HTTP URL of this asset on OSS. This parameter is required.
         *                This value suitable for inclusion in a ROS template, and
         *                may be an encoded token.
         *                <p>
         *                Example value: <code>https://${bucketName}.oss-${region}.aliyuncs.com/${objectKey}</code>
         * @return {@code this}
         */
        public Builder httpUrl(java.lang.String httpUrl) {
            this.httpUrl = httpUrl;
            return this;
        }

        /**
         * Sets the value of {@link FileAssetLocation#getObjectKey}
         * @param objectKey The path of OSS object. This parameter is required.
         * @return {@code this}
         */
        public Builder objectKey(java.lang.String objectKey) {
            this.objectKey = objectKey;
            return this;
        }

        /**
         * Sets the value of {@link FileAssetLocation#getRegion}
         * @param region The region of the OSS bucket.
         * @return {@code this}
         */
        public Builder region(java.lang.String region) {
            this.region = region;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link FileAssetLocation}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public FileAssetLocation build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link FileAssetLocation}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements FileAssetLocation {
        private final java.lang.String bucketName;
        private final java.lang.String httpUrl;
        private final java.lang.String objectKey;
        private final java.lang.String region;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.bucketName = software.amazon.jsii.Kernel.get(this, "bucketName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.httpUrl = software.amazon.jsii.Kernel.get(this, "httpUrl", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.objectKey = software.amazon.jsii.Kernel.get(this, "objectKey", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.region = software.amazon.jsii.Kernel.get(this, "region", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.bucketName = java.util.Objects.requireNonNull(builder.bucketName, "bucketName is required");
            this.httpUrl = java.util.Objects.requireNonNull(builder.httpUrl, "httpUrl is required");
            this.objectKey = java.util.Objects.requireNonNull(builder.objectKey, "objectKey is required");
            this.region = builder.region;
        }

        @Override
        public final java.lang.String getBucketName() {
            return this.bucketName;
        }

        @Override
        public final java.lang.String getHttpUrl() {
            return this.httpUrl;
        }

        @Override
        public final java.lang.String getObjectKey() {
            return this.objectKey;
        }

        @Override
        public final java.lang.String getRegion() {
            return this.region;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("bucketName", om.valueToTree(this.getBucketName()));
            data.set("httpUrl", om.valueToTree(this.getHttpUrl()));
            data.set("objectKey", om.valueToTree(this.getObjectKey()));
            if (this.getRegion() != null) {
                data.set("region", om.valueToTree(this.getRegion()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-core.FileAssetLocation"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            FileAssetLocation.Jsii$Proxy that = (FileAssetLocation.Jsii$Proxy) o;

            if (!bucketName.equals(that.bucketName)) return false;
            if (!httpUrl.equals(that.httpUrl)) return false;
            if (!objectKey.equals(that.objectKey)) return false;
            return this.region != null ? this.region.equals(that.region) : that.region == null;
        }

        @Override
        public final int hashCode() {
            int result = this.bucketName.hashCode();
            result = 31 * result + (this.httpUrl.hashCode());
            result = 31 * result + (this.objectKey.hashCode());
            result = 31 * result + (this.region != null ? this.region.hashCode() : 0);
            return result;
        }
    }
}
