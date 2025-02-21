package com.aliyun.ros.cdk.dts;

/**
 * Properties for defining a <code>ConsumerGroup</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dts-consumergroup
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-02-21T03:23:14.271Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.dts.$Module.class, fqn = "@alicloud/ros-cdk-dts.ConsumerGroupProps")
@software.amazon.jsii.Jsii.Proxy(ConsumerGroupProps.Jsii$Proxy.class)
public interface ConsumerGroupProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property consumerGroupName: Consumer group name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getConsumerGroupName();

    /**
     * Property consumerGroupPassword: Password of consumer group.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getConsumerGroupPassword();

    /**
     * Property consumerGroupUserName: User name of consumer group.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getConsumerGroupUserName();

    /**
     * Property subscriptionInstanceId: Subscription instance ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSubscriptionInstanceId();

    /**
     * @return a {@link Builder} of {@link ConsumerGroupProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link ConsumerGroupProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<ConsumerGroupProps> {
        java.lang.Object consumerGroupName;
        java.lang.Object consumerGroupPassword;
        java.lang.Object consumerGroupUserName;
        java.lang.Object subscriptionInstanceId;

        /**
         * Sets the value of {@link ConsumerGroupProps#getConsumerGroupName}
         * @param consumerGroupName Property consumerGroupName: Consumer group name. This parameter is required.
         * @return {@code this}
         */
        public Builder consumerGroupName(java.lang.String consumerGroupName) {
            this.consumerGroupName = consumerGroupName;
            return this;
        }

        /**
         * Sets the value of {@link ConsumerGroupProps#getConsumerGroupName}
         * @param consumerGroupName Property consumerGroupName: Consumer group name. This parameter is required.
         * @return {@code this}
         */
        public Builder consumerGroupName(com.aliyun.ros.cdk.core.IResolvable consumerGroupName) {
            this.consumerGroupName = consumerGroupName;
            return this;
        }

        /**
         * Sets the value of {@link ConsumerGroupProps#getConsumerGroupPassword}
         * @param consumerGroupPassword Property consumerGroupPassword: Password of consumer group. This parameter is required.
         * @return {@code this}
         */
        public Builder consumerGroupPassword(java.lang.String consumerGroupPassword) {
            this.consumerGroupPassword = consumerGroupPassword;
            return this;
        }

        /**
         * Sets the value of {@link ConsumerGroupProps#getConsumerGroupPassword}
         * @param consumerGroupPassword Property consumerGroupPassword: Password of consumer group. This parameter is required.
         * @return {@code this}
         */
        public Builder consumerGroupPassword(com.aliyun.ros.cdk.core.IResolvable consumerGroupPassword) {
            this.consumerGroupPassword = consumerGroupPassword;
            return this;
        }

        /**
         * Sets the value of {@link ConsumerGroupProps#getConsumerGroupUserName}
         * @param consumerGroupUserName Property consumerGroupUserName: User name of consumer group. This parameter is required.
         * @return {@code this}
         */
        public Builder consumerGroupUserName(java.lang.String consumerGroupUserName) {
            this.consumerGroupUserName = consumerGroupUserName;
            return this;
        }

        /**
         * Sets the value of {@link ConsumerGroupProps#getConsumerGroupUserName}
         * @param consumerGroupUserName Property consumerGroupUserName: User name of consumer group. This parameter is required.
         * @return {@code this}
         */
        public Builder consumerGroupUserName(com.aliyun.ros.cdk.core.IResolvable consumerGroupUserName) {
            this.consumerGroupUserName = consumerGroupUserName;
            return this;
        }

        /**
         * Sets the value of {@link ConsumerGroupProps#getSubscriptionInstanceId}
         * @param subscriptionInstanceId Property subscriptionInstanceId: Subscription instance ID. This parameter is required.
         * @return {@code this}
         */
        public Builder subscriptionInstanceId(java.lang.String subscriptionInstanceId) {
            this.subscriptionInstanceId = subscriptionInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link ConsumerGroupProps#getSubscriptionInstanceId}
         * @param subscriptionInstanceId Property subscriptionInstanceId: Subscription instance ID. This parameter is required.
         * @return {@code this}
         */
        public Builder subscriptionInstanceId(com.aliyun.ros.cdk.core.IResolvable subscriptionInstanceId) {
            this.subscriptionInstanceId = subscriptionInstanceId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link ConsumerGroupProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public ConsumerGroupProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link ConsumerGroupProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ConsumerGroupProps {
        private final java.lang.Object consumerGroupName;
        private final java.lang.Object consumerGroupPassword;
        private final java.lang.Object consumerGroupUserName;
        private final java.lang.Object subscriptionInstanceId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.consumerGroupName = software.amazon.jsii.Kernel.get(this, "consumerGroupName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.consumerGroupPassword = software.amazon.jsii.Kernel.get(this, "consumerGroupPassword", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.consumerGroupUserName = software.amazon.jsii.Kernel.get(this, "consumerGroupUserName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.subscriptionInstanceId = software.amazon.jsii.Kernel.get(this, "subscriptionInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.consumerGroupName = java.util.Objects.requireNonNull(builder.consumerGroupName, "consumerGroupName is required");
            this.consumerGroupPassword = java.util.Objects.requireNonNull(builder.consumerGroupPassword, "consumerGroupPassword is required");
            this.consumerGroupUserName = java.util.Objects.requireNonNull(builder.consumerGroupUserName, "consumerGroupUserName is required");
            this.subscriptionInstanceId = java.util.Objects.requireNonNull(builder.subscriptionInstanceId, "subscriptionInstanceId is required");
        }

        @Override
        public final java.lang.Object getConsumerGroupName() {
            return this.consumerGroupName;
        }

        @Override
        public final java.lang.Object getConsumerGroupPassword() {
            return this.consumerGroupPassword;
        }

        @Override
        public final java.lang.Object getConsumerGroupUserName() {
            return this.consumerGroupUserName;
        }

        @Override
        public final java.lang.Object getSubscriptionInstanceId() {
            return this.subscriptionInstanceId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("consumerGroupName", om.valueToTree(this.getConsumerGroupName()));
            data.set("consumerGroupPassword", om.valueToTree(this.getConsumerGroupPassword()));
            data.set("consumerGroupUserName", om.valueToTree(this.getConsumerGroupUserName()));
            data.set("subscriptionInstanceId", om.valueToTree(this.getSubscriptionInstanceId()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-dts.ConsumerGroupProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            ConsumerGroupProps.Jsii$Proxy that = (ConsumerGroupProps.Jsii$Proxy) o;

            if (!consumerGroupName.equals(that.consumerGroupName)) return false;
            if (!consumerGroupPassword.equals(that.consumerGroupPassword)) return false;
            if (!consumerGroupUserName.equals(that.consumerGroupUserName)) return false;
            return this.subscriptionInstanceId.equals(that.subscriptionInstanceId);
        }

        @Override
        public final int hashCode() {
            int result = this.consumerGroupName.hashCode();
            result = 31 * result + (this.consumerGroupPassword.hashCode());
            result = 31 * result + (this.consumerGroupUserName.hashCode());
            result = 31 * result + (this.subscriptionInstanceId.hashCode());
            return result;
        }
    }
}
