package com.aliyun.ros.cdk.oss;

/**
 * Properties for defining a <code>BucketAccessMonitor</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oss-bucketaccessmonitor
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T14:11:59.846Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.oss.$Module.class, fqn = "@alicloud/ros-cdk-oss.BucketAccessMonitorProps")
@software.amazon.jsii.Jsii.Proxy(BucketAccessMonitorProps.Jsii$Proxy.class)
public interface BucketAccessMonitorProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property bucket: The name of the bucket.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getBucket();

    /**
     * @return a {@link Builder} of {@link BucketAccessMonitorProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link BucketAccessMonitorProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<BucketAccessMonitorProps> {
        java.lang.Object bucket;

        /**
         * Sets the value of {@link BucketAccessMonitorProps#getBucket}
         * @param bucket Property bucket: The name of the bucket. This parameter is required.
         * @return {@code this}
         */
        public Builder bucket(java.lang.String bucket) {
            this.bucket = bucket;
            return this;
        }

        /**
         * Sets the value of {@link BucketAccessMonitorProps#getBucket}
         * @param bucket Property bucket: The name of the bucket. This parameter is required.
         * @return {@code this}
         */
        public Builder bucket(com.aliyun.ros.cdk.core.IResolvable bucket) {
            this.bucket = bucket;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link BucketAccessMonitorProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public BucketAccessMonitorProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link BucketAccessMonitorProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements BucketAccessMonitorProps {
        private final java.lang.Object bucket;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.bucket = software.amazon.jsii.Kernel.get(this, "bucket", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.bucket = java.util.Objects.requireNonNull(builder.bucket, "bucket is required");
        }

        @Override
        public final java.lang.Object getBucket() {
            return this.bucket;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("bucket", om.valueToTree(this.getBucket()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-oss.BucketAccessMonitorProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            BucketAccessMonitorProps.Jsii$Proxy that = (BucketAccessMonitorProps.Jsii$Proxy) o;

            return this.bucket.equals(that.bucket);
        }

        @Override
        public final int hashCode() {
            int result = this.bucket.hashCode();
            return result;
        }
    }
}
