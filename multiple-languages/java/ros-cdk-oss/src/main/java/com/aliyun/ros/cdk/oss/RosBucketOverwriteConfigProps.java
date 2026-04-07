package com.aliyun.ros.cdk.oss;

/**
 * Properties for defining a <code>RosBucketOverwriteConfig</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oss-bucketoverwriteconfig
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-04-07T05:57:31.757Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.oss.$Module.class, fqn = "@alicloud/ros-cdk-oss.RosBucketOverwriteConfigProps")
@software.amazon.jsii.Jsii.Proxy(RosBucketOverwriteConfigProps.Jsii$Proxy.class)
public interface RosBucketOverwriteConfigProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getBucket();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRule() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosBucketOverwriteConfigProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosBucketOverwriteConfigProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosBucketOverwriteConfigProps> {
        java.lang.Object bucket;
        java.lang.Object rule;

        /**
         * Sets the value of {@link RosBucketOverwriteConfigProps#getBucket}
         * @param bucket the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder bucket(java.lang.String bucket) {
            this.bucket = bucket;
            return this;
        }

        /**
         * Sets the value of {@link RosBucketOverwriteConfigProps#getBucket}
         * @param bucket the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder bucket(com.aliyun.ros.cdk.core.IResolvable bucket) {
            this.bucket = bucket;
            return this;
        }

        /**
         * Sets the value of {@link RosBucketOverwriteConfigProps#getRule}
         * @param rule the value to be set.
         * @return {@code this}
         */
        public Builder rule(com.aliyun.ros.cdk.core.IResolvable rule) {
            this.rule = rule;
            return this;
        }

        /**
         * Sets the value of {@link RosBucketOverwriteConfigProps#getRule}
         * @param rule the value to be set.
         * @return {@code this}
         */
        public Builder rule(java.util.List<? extends java.lang.Object> rule) {
            this.rule = rule;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosBucketOverwriteConfigProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosBucketOverwriteConfigProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosBucketOverwriteConfigProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosBucketOverwriteConfigProps {
        private final java.lang.Object bucket;
        private final java.lang.Object rule;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.bucket = software.amazon.jsii.Kernel.get(this, "bucket", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.rule = software.amazon.jsii.Kernel.get(this, "rule", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.bucket = java.util.Objects.requireNonNull(builder.bucket, "bucket is required");
            this.rule = builder.rule;
        }

        @Override
        public final java.lang.Object getBucket() {
            return this.bucket;
        }

        @Override
        public final java.lang.Object getRule() {
            return this.rule;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("bucket", om.valueToTree(this.getBucket()));
            if (this.getRule() != null) {
                data.set("rule", om.valueToTree(this.getRule()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-oss.RosBucketOverwriteConfigProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosBucketOverwriteConfigProps.Jsii$Proxy that = (RosBucketOverwriteConfigProps.Jsii$Proxy) o;

            if (!bucket.equals(that.bucket)) return false;
            return this.rule != null ? this.rule.equals(that.rule) : that.rule == null;
        }

        @Override
        public final int hashCode() {
            int result = this.bucket.hashCode();
            result = 31 * result + (this.rule != null ? this.rule.hashCode() : 0);
            return result;
        }
    }
}
