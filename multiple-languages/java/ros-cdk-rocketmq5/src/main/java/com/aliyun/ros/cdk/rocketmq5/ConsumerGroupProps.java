package com.aliyun.ros.cdk.rocketmq5;

/**
 * Properties for defining a <code>ConsumerGroup</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rocketmq5-consumergroup
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-04-09T06:05:35.007Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.rocketmq5.$Module.class, fqn = "@alicloud/ros-cdk-rocketmq5.ConsumerGroupProps")
@software.amazon.jsii.Jsii.Proxy(ConsumerGroupProps.Jsii$Proxy.class)
public interface ConsumerGroupProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property consumeRetryPolicy: The consumption retry policy of the consumer group to be created.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getConsumeRetryPolicy();

    /**
     * Property consumerGroupId: The ID of the consumer group to be created.
     * <p>
     * Used to identify consumer groups, globally unique.
     * The value description is as follows:
     * Character limitation: supports letters a~z or A-Z, numbers 0-9, underscore (_), dash (-) and percent sign (%).
     * Length limit: 1-60 characters.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getConsumerGroupId();

    /**
     * Property deliveryOrderType: Delivery sequence of the consumer group to be created.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDeliveryOrderType();

    /**
     * Property instanceId: The ID of the instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getInstanceId();

    /**
     * Property remark: The remark of the consumer group to be created.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRemark() {
        return null;
    }

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
        java.lang.Object consumeRetryPolicy;
        java.lang.Object consumerGroupId;
        java.lang.Object deliveryOrderType;
        java.lang.Object instanceId;
        java.lang.Object remark;

        /**
         * Sets the value of {@link ConsumerGroupProps#getConsumeRetryPolicy}
         * @param consumeRetryPolicy Property consumeRetryPolicy: The consumption retry policy of the consumer group to be created. This parameter is required.
         * @return {@code this}
         */
        public Builder consumeRetryPolicy(com.aliyun.ros.cdk.core.IResolvable consumeRetryPolicy) {
            this.consumeRetryPolicy = consumeRetryPolicy;
            return this;
        }

        /**
         * Sets the value of {@link ConsumerGroupProps#getConsumeRetryPolicy}
         * @param consumeRetryPolicy Property consumeRetryPolicy: The consumption retry policy of the consumer group to be created. This parameter is required.
         * @return {@code this}
         */
        public Builder consumeRetryPolicy(com.aliyun.ros.cdk.rocketmq5.RosConsumerGroup.ConsumeRetryPolicyProperty consumeRetryPolicy) {
            this.consumeRetryPolicy = consumeRetryPolicy;
            return this;
        }

        /**
         * Sets the value of {@link ConsumerGroupProps#getConsumerGroupId}
         * @param consumerGroupId Property consumerGroupId: The ID of the consumer group to be created. This parameter is required.
         *                        Used to identify consumer groups, globally unique.
         *                        The value description is as follows:
         *                        Character limitation: supports letters a~z or A-Z, numbers 0-9, underscore (_), dash (-) and percent sign (%).
         *                        Length limit: 1-60 characters.
         * @return {@code this}
         */
        public Builder consumerGroupId(java.lang.String consumerGroupId) {
            this.consumerGroupId = consumerGroupId;
            return this;
        }

        /**
         * Sets the value of {@link ConsumerGroupProps#getConsumerGroupId}
         * @param consumerGroupId Property consumerGroupId: The ID of the consumer group to be created. This parameter is required.
         *                        Used to identify consumer groups, globally unique.
         *                        The value description is as follows:
         *                        Character limitation: supports letters a~z or A-Z, numbers 0-9, underscore (_), dash (-) and percent sign (%).
         *                        Length limit: 1-60 characters.
         * @return {@code this}
         */
        public Builder consumerGroupId(com.aliyun.ros.cdk.core.IResolvable consumerGroupId) {
            this.consumerGroupId = consumerGroupId;
            return this;
        }

        /**
         * Sets the value of {@link ConsumerGroupProps#getDeliveryOrderType}
         * @param deliveryOrderType Property deliveryOrderType: Delivery sequence of the consumer group to be created. This parameter is required.
         * @return {@code this}
         */
        public Builder deliveryOrderType(java.lang.String deliveryOrderType) {
            this.deliveryOrderType = deliveryOrderType;
            return this;
        }

        /**
         * Sets the value of {@link ConsumerGroupProps#getDeliveryOrderType}
         * @param deliveryOrderType Property deliveryOrderType: Delivery sequence of the consumer group to be created. This parameter is required.
         * @return {@code this}
         */
        public Builder deliveryOrderType(com.aliyun.ros.cdk.core.IResolvable deliveryOrderType) {
            this.deliveryOrderType = deliveryOrderType;
            return this;
        }

        /**
         * Sets the value of {@link ConsumerGroupProps#getInstanceId}
         * @param instanceId Property instanceId: The ID of the instance. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceId(java.lang.String instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link ConsumerGroupProps#getInstanceId}
         * @param instanceId Property instanceId: The ID of the instance. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceId(com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link ConsumerGroupProps#getRemark}
         * @param remark Property remark: The remark of the consumer group to be created.
         * @return {@code this}
         */
        public Builder remark(java.lang.String remark) {
            this.remark = remark;
            return this;
        }

        /**
         * Sets the value of {@link ConsumerGroupProps#getRemark}
         * @param remark Property remark: The remark of the consumer group to be created.
         * @return {@code this}
         */
        public Builder remark(com.aliyun.ros.cdk.core.IResolvable remark) {
            this.remark = remark;
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
        private final java.lang.Object consumeRetryPolicy;
        private final java.lang.Object consumerGroupId;
        private final java.lang.Object deliveryOrderType;
        private final java.lang.Object instanceId;
        private final java.lang.Object remark;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.consumeRetryPolicy = software.amazon.jsii.Kernel.get(this, "consumeRetryPolicy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.consumerGroupId = software.amazon.jsii.Kernel.get(this, "consumerGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.deliveryOrderType = software.amazon.jsii.Kernel.get(this, "deliveryOrderType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceId = software.amazon.jsii.Kernel.get(this, "instanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.remark = software.amazon.jsii.Kernel.get(this, "remark", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.consumeRetryPolicy = java.util.Objects.requireNonNull(builder.consumeRetryPolicy, "consumeRetryPolicy is required");
            this.consumerGroupId = java.util.Objects.requireNonNull(builder.consumerGroupId, "consumerGroupId is required");
            this.deliveryOrderType = java.util.Objects.requireNonNull(builder.deliveryOrderType, "deliveryOrderType is required");
            this.instanceId = java.util.Objects.requireNonNull(builder.instanceId, "instanceId is required");
            this.remark = builder.remark;
        }

        @Override
        public final java.lang.Object getConsumeRetryPolicy() {
            return this.consumeRetryPolicy;
        }

        @Override
        public final java.lang.Object getConsumerGroupId() {
            return this.consumerGroupId;
        }

        @Override
        public final java.lang.Object getDeliveryOrderType() {
            return this.deliveryOrderType;
        }

        @Override
        public final java.lang.Object getInstanceId() {
            return this.instanceId;
        }

        @Override
        public final java.lang.Object getRemark() {
            return this.remark;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("consumeRetryPolicy", om.valueToTree(this.getConsumeRetryPolicy()));
            data.set("consumerGroupId", om.valueToTree(this.getConsumerGroupId()));
            data.set("deliveryOrderType", om.valueToTree(this.getDeliveryOrderType()));
            data.set("instanceId", om.valueToTree(this.getInstanceId()));
            if (this.getRemark() != null) {
                data.set("remark", om.valueToTree(this.getRemark()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-rocketmq5.ConsumerGroupProps"));
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

            if (!consumeRetryPolicy.equals(that.consumeRetryPolicy)) return false;
            if (!consumerGroupId.equals(that.consumerGroupId)) return false;
            if (!deliveryOrderType.equals(that.deliveryOrderType)) return false;
            if (!instanceId.equals(that.instanceId)) return false;
            return this.remark != null ? this.remark.equals(that.remark) : that.remark == null;
        }

        @Override
        public final int hashCode() {
            int result = this.consumeRetryPolicy.hashCode();
            result = 31 * result + (this.consumerGroupId.hashCode());
            result = 31 * result + (this.deliveryOrderType.hashCode());
            result = 31 * result + (this.instanceId.hashCode());
            result = 31 * result + (this.remark != null ? this.remark.hashCode() : 0);
            return result;
        }
    }
}
