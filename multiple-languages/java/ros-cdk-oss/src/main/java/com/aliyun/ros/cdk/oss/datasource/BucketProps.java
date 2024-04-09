package com.aliyun.ros.cdk.oss.datasource;

/**
 * Properties for defining a <code>Bucket</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-oss-bucket
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-04-09T06:05:34.300Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.oss.$Module.class, fqn = "@alicloud/ros-cdk-oss.datasource.BucketProps")
@software.amazon.jsii.Jsii.Proxy(BucketProps.Jsii$Proxy.class)
public interface BucketProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property bucketName: Bucket name.
     * <p>
     * The naming conventions for buckets are as follows:
     * Only lowercase letters, numbers, and dashes (-) can be included.
     * Must start and end with lowercase letters or numbers.
     * The length must be between 3 and 63 characters.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getBucketName();

    /**
     * @return a {@link Builder} of {@link BucketProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link BucketProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<BucketProps> {
        java.lang.Object bucketName;

        /**
         * Sets the value of {@link BucketProps#getBucketName}
         * @param bucketName Property bucketName: Bucket name. This parameter is required.
         *                   The naming conventions for buckets are as follows:
         *                   Only lowercase letters, numbers, and dashes (-) can be included.
         *                   Must start and end with lowercase letters or numbers.
         *                   The length must be between 3 and 63 characters.
         * @return {@code this}
         */
        public Builder bucketName(java.lang.String bucketName) {
            this.bucketName = bucketName;
            return this;
        }

        /**
         * Sets the value of {@link BucketProps#getBucketName}
         * @param bucketName Property bucketName: Bucket name. This parameter is required.
         *                   The naming conventions for buckets are as follows:
         *                   Only lowercase letters, numbers, and dashes (-) can be included.
         *                   Must start and end with lowercase letters or numbers.
         *                   The length must be between 3 and 63 characters.
         * @return {@code this}
         */
        public Builder bucketName(com.aliyun.ros.cdk.core.IResolvable bucketName) {
            this.bucketName = bucketName;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link BucketProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public BucketProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link BucketProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements BucketProps {
        private final java.lang.Object bucketName;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.bucketName = software.amazon.jsii.Kernel.get(this, "bucketName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.bucketName = java.util.Objects.requireNonNull(builder.bucketName, "bucketName is required");
        }

        @Override
        public final java.lang.Object getBucketName() {
            return this.bucketName;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("bucketName", om.valueToTree(this.getBucketName()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-oss.datasource.BucketProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            BucketProps.Jsii$Proxy that = (BucketProps.Jsii$Proxy) o;

            return this.bucketName.equals(that.bucketName);
        }

        @Override
        public final int hashCode() {
            int result = this.bucketName.hashCode();
            return result;
        }
    }
}
