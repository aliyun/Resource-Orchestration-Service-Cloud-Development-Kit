package com.aliyun.ros.cdk.oss;

/**
 * Properties for defining a <code>BucketLogging</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oss-bucketlogging
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-05-07T04:16:55.829Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.oss.$Module.class, fqn = "@alicloud/ros-cdk-oss.BucketLoggingProps")
@software.amazon.jsii.Jsii.Proxy(BucketLoggingProps.Jsii$Proxy.class)
public interface BucketLoggingProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property bucket: The name of the bucket.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getBucket();

    /**
     * Property targetBucket: The bucket that stores access logs.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getTargetBucket();

    /**
     * Property loggingRole: Authorization role used for bucket logging.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getLoggingRole() {
        return null;
    }

    /**
     * Property targetPrefix: The prefix of the saved log objects.
     * <p>
     * This element can be left empty.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTargetPrefix() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link BucketLoggingProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link BucketLoggingProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<BucketLoggingProps> {
        java.lang.Object bucket;
        java.lang.Object targetBucket;
        java.lang.Object loggingRole;
        java.lang.Object targetPrefix;

        /**
         * Sets the value of {@link BucketLoggingProps#getBucket}
         * @param bucket Property bucket: The name of the bucket. This parameter is required.
         * @return {@code this}
         */
        public Builder bucket(java.lang.String bucket) {
            this.bucket = bucket;
            return this;
        }

        /**
         * Sets the value of {@link BucketLoggingProps#getBucket}
         * @param bucket Property bucket: The name of the bucket. This parameter is required.
         * @return {@code this}
         */
        public Builder bucket(com.aliyun.ros.cdk.core.IResolvable bucket) {
            this.bucket = bucket;
            return this;
        }

        /**
         * Sets the value of {@link BucketLoggingProps#getTargetBucket}
         * @param targetBucket Property targetBucket: The bucket that stores access logs. This parameter is required.
         * @return {@code this}
         */
        public Builder targetBucket(java.lang.String targetBucket) {
            this.targetBucket = targetBucket;
            return this;
        }

        /**
         * Sets the value of {@link BucketLoggingProps#getTargetBucket}
         * @param targetBucket Property targetBucket: The bucket that stores access logs. This parameter is required.
         * @return {@code this}
         */
        public Builder targetBucket(com.aliyun.ros.cdk.core.IResolvable targetBucket) {
            this.targetBucket = targetBucket;
            return this;
        }

        /**
         * Sets the value of {@link BucketLoggingProps#getLoggingRole}
         * @param loggingRole Property loggingRole: Authorization role used for bucket logging.
         * @return {@code this}
         */
        public Builder loggingRole(java.lang.String loggingRole) {
            this.loggingRole = loggingRole;
            return this;
        }

        /**
         * Sets the value of {@link BucketLoggingProps#getLoggingRole}
         * @param loggingRole Property loggingRole: Authorization role used for bucket logging.
         * @return {@code this}
         */
        public Builder loggingRole(com.aliyun.ros.cdk.core.IResolvable loggingRole) {
            this.loggingRole = loggingRole;
            return this;
        }

        /**
         * Sets the value of {@link BucketLoggingProps#getTargetPrefix}
         * @param targetPrefix Property targetPrefix: The prefix of the saved log objects.
         *                     This element can be left empty.
         * @return {@code this}
         */
        public Builder targetPrefix(java.lang.String targetPrefix) {
            this.targetPrefix = targetPrefix;
            return this;
        }

        /**
         * Sets the value of {@link BucketLoggingProps#getTargetPrefix}
         * @param targetPrefix Property targetPrefix: The prefix of the saved log objects.
         *                     This element can be left empty.
         * @return {@code this}
         */
        public Builder targetPrefix(com.aliyun.ros.cdk.core.IResolvable targetPrefix) {
            this.targetPrefix = targetPrefix;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link BucketLoggingProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public BucketLoggingProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link BucketLoggingProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements BucketLoggingProps {
        private final java.lang.Object bucket;
        private final java.lang.Object targetBucket;
        private final java.lang.Object loggingRole;
        private final java.lang.Object targetPrefix;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.bucket = software.amazon.jsii.Kernel.get(this, "bucket", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.targetBucket = software.amazon.jsii.Kernel.get(this, "targetBucket", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.loggingRole = software.amazon.jsii.Kernel.get(this, "loggingRole", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.targetPrefix = software.amazon.jsii.Kernel.get(this, "targetPrefix", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.bucket = java.util.Objects.requireNonNull(builder.bucket, "bucket is required");
            this.targetBucket = java.util.Objects.requireNonNull(builder.targetBucket, "targetBucket is required");
            this.loggingRole = builder.loggingRole;
            this.targetPrefix = builder.targetPrefix;
        }

        @Override
        public final java.lang.Object getBucket() {
            return this.bucket;
        }

        @Override
        public final java.lang.Object getTargetBucket() {
            return this.targetBucket;
        }

        @Override
        public final java.lang.Object getLoggingRole() {
            return this.loggingRole;
        }

        @Override
        public final java.lang.Object getTargetPrefix() {
            return this.targetPrefix;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("bucket", om.valueToTree(this.getBucket()));
            data.set("targetBucket", om.valueToTree(this.getTargetBucket()));
            if (this.getLoggingRole() != null) {
                data.set("loggingRole", om.valueToTree(this.getLoggingRole()));
            }
            if (this.getTargetPrefix() != null) {
                data.set("targetPrefix", om.valueToTree(this.getTargetPrefix()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-oss.BucketLoggingProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            BucketLoggingProps.Jsii$Proxy that = (BucketLoggingProps.Jsii$Proxy) o;

            if (!bucket.equals(that.bucket)) return false;
            if (!targetBucket.equals(that.targetBucket)) return false;
            if (this.loggingRole != null ? !this.loggingRole.equals(that.loggingRole) : that.loggingRole != null) return false;
            return this.targetPrefix != null ? this.targetPrefix.equals(that.targetPrefix) : that.targetPrefix == null;
        }

        @Override
        public final int hashCode() {
            int result = this.bucket.hashCode();
            result = 31 * result + (this.targetBucket.hashCode());
            result = 31 * result + (this.loggingRole != null ? this.loggingRole.hashCode() : 0);
            result = 31 * result + (this.targetPrefix != null ? this.targetPrefix.hashCode() : 0);
            return result;
        }
    }
}
