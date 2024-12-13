package com.aliyun.ros.cdk.ossdeployment;

/**
 * Source information.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-12-13T06:45:13.543Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ossdeployment.$Module.class, fqn = "@alicloud/ros-cdk-ossdeployment.SourceConfig")
@software.amazon.jsii.Jsii.Proxy(SourceConfig.Jsii$Proxy.class)
public interface SourceConfig extends software.amazon.jsii.JsiiSerializable {

    /**
     * The name of source bucket to deploy from.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getBucket();

    /**
     * An object key in the source bucket to deploy from.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getObjectKey();

    /**
     * The name of source local file to deploy from.
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getFileName() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link SourceConfig}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link SourceConfig}
     */
    public static final class Builder implements software.amazon.jsii.Builder<SourceConfig> {
        java.lang.Object bucket;
        java.lang.Object objectKey;
        java.lang.String fileName;

        /**
         * Sets the value of {@link SourceConfig#getBucket}
         * @param bucket The name of source bucket to deploy from. This parameter is required.
         * @return {@code this}
         */
        public Builder bucket(java.lang.String bucket) {
            this.bucket = bucket;
            return this;
        }

        /**
         * Sets the value of {@link SourceConfig#getBucket}
         * @param bucket The name of source bucket to deploy from. This parameter is required.
         * @return {@code this}
         */
        public Builder bucket(com.aliyun.ros.cdk.core.IResolvable bucket) {
            this.bucket = bucket;
            return this;
        }

        /**
         * Sets the value of {@link SourceConfig#getObjectKey}
         * @param objectKey An object key in the source bucket to deploy from. This parameter is required.
         * @return {@code this}
         */
        public Builder objectKey(java.lang.String objectKey) {
            this.objectKey = objectKey;
            return this;
        }

        /**
         * Sets the value of {@link SourceConfig#getObjectKey}
         * @param objectKey An object key in the source bucket to deploy from. This parameter is required.
         * @return {@code this}
         */
        public Builder objectKey(com.aliyun.ros.cdk.core.IResolvable objectKey) {
            this.objectKey = objectKey;
            return this;
        }

        /**
         * Sets the value of {@link SourceConfig#getFileName}
         * @param fileName The name of source local file to deploy from.
         * @return {@code this}
         */
        public Builder fileName(java.lang.String fileName) {
            this.fileName = fileName;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link SourceConfig}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public SourceConfig build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link SourceConfig}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements SourceConfig {
        private final java.lang.Object bucket;
        private final java.lang.Object objectKey;
        private final java.lang.String fileName;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.bucket = software.amazon.jsii.Kernel.get(this, "bucket", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.objectKey = software.amazon.jsii.Kernel.get(this, "objectKey", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.fileName = software.amazon.jsii.Kernel.get(this, "fileName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.bucket = java.util.Objects.requireNonNull(builder.bucket, "bucket is required");
            this.objectKey = java.util.Objects.requireNonNull(builder.objectKey, "objectKey is required");
            this.fileName = builder.fileName;
        }

        @Override
        public final java.lang.Object getBucket() {
            return this.bucket;
        }

        @Override
        public final java.lang.Object getObjectKey() {
            return this.objectKey;
        }

        @Override
        public final java.lang.String getFileName() {
            return this.fileName;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("bucket", om.valueToTree(this.getBucket()));
            data.set("objectKey", om.valueToTree(this.getObjectKey()));
            if (this.getFileName() != null) {
                data.set("fileName", om.valueToTree(this.getFileName()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ossdeployment.SourceConfig"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            SourceConfig.Jsii$Proxy that = (SourceConfig.Jsii$Proxy) o;

            if (!bucket.equals(that.bucket)) return false;
            if (!objectKey.equals(that.objectKey)) return false;
            return this.fileName != null ? this.fileName.equals(that.fileName) : that.fileName == null;
        }

        @Override
        public final int hashCode() {
            int result = this.bucket.hashCode();
            result = 31 * result + (this.objectKey.hashCode());
            result = 31 * result + (this.fileName != null ? this.fileName.hashCode() : 0);
            return result;
        }
    }
}
