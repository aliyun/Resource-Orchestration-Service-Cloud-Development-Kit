package com.aliyun.ros.cdk.rocketmq5.datasource;

/**
 * Properties for defining a <code>ConsumerGroups</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-rocketmq5-consumergroups
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-24T05:57:09.060Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.rocketmq5.$Module.class, fqn = "@alicloud/ros-cdk-rocketmq5.datasource.ConsumerGroupsProps")
@software.amazon.jsii.Jsii.Proxy(ConsumerGroupsProps.Jsii$Proxy.class)
public interface ConsumerGroupsProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property instanceId: Instance ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getInstanceId();

    /**
     * @return a {@link Builder} of {@link ConsumerGroupsProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link ConsumerGroupsProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<ConsumerGroupsProps> {
        java.lang.Object instanceId;

        /**
         * Sets the value of {@link ConsumerGroupsProps#getInstanceId}
         * @param instanceId Property instanceId: Instance ID. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceId(java.lang.String instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link ConsumerGroupsProps#getInstanceId}
         * @param instanceId Property instanceId: Instance ID. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceId(com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link ConsumerGroupsProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public ConsumerGroupsProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link ConsumerGroupsProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ConsumerGroupsProps {
        private final java.lang.Object instanceId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.instanceId = software.amazon.jsii.Kernel.get(this, "instanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.instanceId = java.util.Objects.requireNonNull(builder.instanceId, "instanceId is required");
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

            data.set("instanceId", om.valueToTree(this.getInstanceId()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-rocketmq5.datasource.ConsumerGroupsProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            ConsumerGroupsProps.Jsii$Proxy that = (ConsumerGroupsProps.Jsii$Proxy) o;

            return this.instanceId.equals(that.instanceId);
        }

        @Override
        public final int hashCode() {
            int result = this.instanceId.hashCode();
            return result;
        }
    }
}
