package com.aliyun.ros.cdk.amqp;

/**
 * Properties for defining a <code>RosAccount</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-amqp-account
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-09-28T10:11:20.840Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.amqp.$Module.class, fqn = "@alicloud/ros-cdk-amqp.RosAccountProps")
@software.amazon.jsii.Jsii.Proxy(RosAccountProps.Jsii$Proxy.class)
public interface RosAccountProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAccountAccessKey();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAccountAccessKeySecret();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getInstanceId();

    /**
     * @return a {@link Builder} of {@link RosAccountProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosAccountProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosAccountProps> {
        java.lang.Object accountAccessKey;
        java.lang.Object accountAccessKeySecret;
        java.lang.Object instanceId;

        /**
         * Sets the value of {@link RosAccountProps#getAccountAccessKey}
         * @param accountAccessKey the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder accountAccessKey(java.lang.String accountAccessKey) {
            this.accountAccessKey = accountAccessKey;
            return this;
        }

        /**
         * Sets the value of {@link RosAccountProps#getAccountAccessKey}
         * @param accountAccessKey the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder accountAccessKey(com.aliyun.ros.cdk.core.IResolvable accountAccessKey) {
            this.accountAccessKey = accountAccessKey;
            return this;
        }

        /**
         * Sets the value of {@link RosAccountProps#getAccountAccessKeySecret}
         * @param accountAccessKeySecret the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder accountAccessKeySecret(java.lang.String accountAccessKeySecret) {
            this.accountAccessKeySecret = accountAccessKeySecret;
            return this;
        }

        /**
         * Sets the value of {@link RosAccountProps#getAccountAccessKeySecret}
         * @param accountAccessKeySecret the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder accountAccessKeySecret(com.aliyun.ros.cdk.core.IResolvable accountAccessKeySecret) {
            this.accountAccessKeySecret = accountAccessKeySecret;
            return this;
        }

        /**
         * Sets the value of {@link RosAccountProps#getInstanceId}
         * @param instanceId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceId(java.lang.String instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link RosAccountProps#getInstanceId}
         * @param instanceId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceId(com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosAccountProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosAccountProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosAccountProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosAccountProps {
        private final java.lang.Object accountAccessKey;
        private final java.lang.Object accountAccessKeySecret;
        private final java.lang.Object instanceId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.accountAccessKey = software.amazon.jsii.Kernel.get(this, "accountAccessKey", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.accountAccessKeySecret = software.amazon.jsii.Kernel.get(this, "accountAccessKeySecret", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceId = software.amazon.jsii.Kernel.get(this, "instanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.accountAccessKey = java.util.Objects.requireNonNull(builder.accountAccessKey, "accountAccessKey is required");
            this.accountAccessKeySecret = java.util.Objects.requireNonNull(builder.accountAccessKeySecret, "accountAccessKeySecret is required");
            this.instanceId = java.util.Objects.requireNonNull(builder.instanceId, "instanceId is required");
        }

        @Override
        public final java.lang.Object getAccountAccessKey() {
            return this.accountAccessKey;
        }

        @Override
        public final java.lang.Object getAccountAccessKeySecret() {
            return this.accountAccessKeySecret;
        }

        @Override
        public final java.lang.Object getInstanceId() {
            return this.instanceId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("accountAccessKey", om.valueToTree(this.getAccountAccessKey()));
            data.set("accountAccessKeySecret", om.valueToTree(this.getAccountAccessKeySecret()));
            data.set("instanceId", om.valueToTree(this.getInstanceId()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-amqp.RosAccountProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosAccountProps.Jsii$Proxy that = (RosAccountProps.Jsii$Proxy) o;

            if (!accountAccessKey.equals(that.accountAccessKey)) return false;
            if (!accountAccessKeySecret.equals(that.accountAccessKeySecret)) return false;
            return this.instanceId.equals(that.instanceId);
        }

        @Override
        public final int hashCode() {
            int result = this.accountAccessKey.hashCode();
            result = 31 * result + (this.accountAccessKeySecret.hashCode());
            result = 31 * result + (this.instanceId.hashCode());
            return result;
        }
    }
}
