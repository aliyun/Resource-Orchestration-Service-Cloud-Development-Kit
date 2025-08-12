package com.aliyun.ros.cdk.oss;

/**
 * Properties for defining a <code>RosBucketReplication</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oss-bucketreplication
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-08-12T08:28:51.907Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.oss.$Module.class, fqn = "@alicloud/ros-cdk-oss.RosBucketReplicationProps")
@software.amazon.jsii.Jsii.Proxy(RosBucketReplicationProps.Jsii$Proxy.class)
public interface RosBucketReplicationProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getBucketName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getReplicationConfiguration();

    /**
     * @return a {@link Builder} of {@link RosBucketReplicationProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosBucketReplicationProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosBucketReplicationProps> {
        java.lang.Object bucketName;
        java.lang.Object replicationConfiguration;

        /**
         * Sets the value of {@link RosBucketReplicationProps#getBucketName}
         * @param bucketName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder bucketName(java.lang.String bucketName) {
            this.bucketName = bucketName;
            return this;
        }

        /**
         * Sets the value of {@link RosBucketReplicationProps#getBucketName}
         * @param bucketName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder bucketName(com.aliyun.ros.cdk.core.IResolvable bucketName) {
            this.bucketName = bucketName;
            return this;
        }

        /**
         * Sets the value of {@link RosBucketReplicationProps#getReplicationConfiguration}
         * @param replicationConfiguration the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder replicationConfiguration(com.aliyun.ros.cdk.core.IResolvable replicationConfiguration) {
            this.replicationConfiguration = replicationConfiguration;
            return this;
        }

        /**
         * Sets the value of {@link RosBucketReplicationProps#getReplicationConfiguration}
         * @param replicationConfiguration the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder replicationConfiguration(com.aliyun.ros.cdk.oss.RosBucketReplication.ReplicationConfigurationProperty replicationConfiguration) {
            this.replicationConfiguration = replicationConfiguration;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosBucketReplicationProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosBucketReplicationProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosBucketReplicationProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosBucketReplicationProps {
        private final java.lang.Object bucketName;
        private final java.lang.Object replicationConfiguration;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.bucketName = software.amazon.jsii.Kernel.get(this, "bucketName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.replicationConfiguration = software.amazon.jsii.Kernel.get(this, "replicationConfiguration", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.bucketName = java.util.Objects.requireNonNull(builder.bucketName, "bucketName is required");
            this.replicationConfiguration = java.util.Objects.requireNonNull(builder.replicationConfiguration, "replicationConfiguration is required");
        }

        @Override
        public final java.lang.Object getBucketName() {
            return this.bucketName;
        }

        @Override
        public final java.lang.Object getReplicationConfiguration() {
            return this.replicationConfiguration;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("bucketName", om.valueToTree(this.getBucketName()));
            data.set("replicationConfiguration", om.valueToTree(this.getReplicationConfiguration()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-oss.RosBucketReplicationProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosBucketReplicationProps.Jsii$Proxy that = (RosBucketReplicationProps.Jsii$Proxy) o;

            if (!bucketName.equals(that.bucketName)) return false;
            return this.replicationConfiguration.equals(that.replicationConfiguration);
        }

        @Override
        public final int hashCode() {
            int result = this.bucketName.hashCode();
            result = 31 * result + (this.replicationConfiguration.hashCode());
            return result;
        }
    }
}
