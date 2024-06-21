package com.aliyun.ros.cdk.kafka;

/**
 * Properties for defining a <code>ConsumerGroup</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-kafka-consumergroup
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-21T05:59:10.445Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.kafka.$Module.class, fqn = "@alicloud/ros-cdk-kafka.ConsumerGroupProps")
@software.amazon.jsii.Jsii.Proxy(ConsumerGroupProps.Jsii$Proxy.class)
public interface ConsumerGroupProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property consumerId: Group name.
     * <p>
     * Value:
     * Can only contain letters, numbers, dashes (-), underscores (_), and at least one English or number.
     * The length is limited to 3 to 128 characters, and more than 128 characters will be automatically intercepted.
     * Once the group name is created, it cannot be modified.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getConsumerId();

    /**
     * Property instanceId: Kafka instance id.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getInstanceId();

    /**
     * Property remark: Remark description.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRemark() {
        return null;
    }

    /**
     * Property tags: Tags to attach to instance.
     * <p>
     * Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.kafka.RosConsumerGroup.TagsProperty> getTags() {
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
        java.lang.Object consumerId;
        java.lang.Object instanceId;
        java.lang.Object remark;
        java.util.List<com.aliyun.ros.cdk.kafka.RosConsumerGroup.TagsProperty> tags;

        /**
         * Sets the value of {@link ConsumerGroupProps#getConsumerId}
         * @param consumerId Property consumerId: Group name. This parameter is required.
         *                   Value:
         *                   Can only contain letters, numbers, dashes (-), underscores (_), and at least one English or number.
         *                   The length is limited to 3 to 128 characters, and more than 128 characters will be automatically intercepted.
         *                   Once the group name is created, it cannot be modified.
         * @return {@code this}
         */
        public Builder consumerId(java.lang.String consumerId) {
            this.consumerId = consumerId;
            return this;
        }

        /**
         * Sets the value of {@link ConsumerGroupProps#getConsumerId}
         * @param consumerId Property consumerId: Group name. This parameter is required.
         *                   Value:
         *                   Can only contain letters, numbers, dashes (-), underscores (_), and at least one English or number.
         *                   The length is limited to 3 to 128 characters, and more than 128 characters will be automatically intercepted.
         *                   Once the group name is created, it cannot be modified.
         * @return {@code this}
         */
        public Builder consumerId(com.aliyun.ros.cdk.core.IResolvable consumerId) {
            this.consumerId = consumerId;
            return this;
        }

        /**
         * Sets the value of {@link ConsumerGroupProps#getInstanceId}
         * @param instanceId Property instanceId: Kafka instance id. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceId(java.lang.String instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link ConsumerGroupProps#getInstanceId}
         * @param instanceId Property instanceId: Kafka instance id. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceId(com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link ConsumerGroupProps#getRemark}
         * @param remark Property remark: Remark description.
         * @return {@code this}
         */
        public Builder remark(java.lang.String remark) {
            this.remark = remark;
            return this;
        }

        /**
         * Sets the value of {@link ConsumerGroupProps#getRemark}
         * @param remark Property remark: Remark description.
         * @return {@code this}
         */
        public Builder remark(com.aliyun.ros.cdk.core.IResolvable remark) {
            this.remark = remark;
            return this;
        }

        /**
         * Sets the value of {@link ConsumerGroupProps#getTags}
         * @param tags Property tags: Tags to attach to instance.
         *             Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.kafka.RosConsumerGroup.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.kafka.RosConsumerGroup.TagsProperty>)tags;
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
        private final java.lang.Object consumerId;
        private final java.lang.Object instanceId;
        private final java.lang.Object remark;
        private final java.util.List<com.aliyun.ros.cdk.kafka.RosConsumerGroup.TagsProperty> tags;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.consumerId = software.amazon.jsii.Kernel.get(this, "consumerId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceId = software.amazon.jsii.Kernel.get(this, "instanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.remark = software.amazon.jsii.Kernel.get(this, "remark", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.kafka.RosConsumerGroup.TagsProperty.class)));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.consumerId = java.util.Objects.requireNonNull(builder.consumerId, "consumerId is required");
            this.instanceId = java.util.Objects.requireNonNull(builder.instanceId, "instanceId is required");
            this.remark = builder.remark;
            this.tags = (java.util.List<com.aliyun.ros.cdk.kafka.RosConsumerGroup.TagsProperty>)builder.tags;
        }

        @Override
        public final java.lang.Object getConsumerId() {
            return this.consumerId;
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
        public final java.util.List<com.aliyun.ros.cdk.kafka.RosConsumerGroup.TagsProperty> getTags() {
            return this.tags;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("consumerId", om.valueToTree(this.getConsumerId()));
            data.set("instanceId", om.valueToTree(this.getInstanceId()));
            if (this.getRemark() != null) {
                data.set("remark", om.valueToTree(this.getRemark()));
            }
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-kafka.ConsumerGroupProps"));
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

            if (!consumerId.equals(that.consumerId)) return false;
            if (!instanceId.equals(that.instanceId)) return false;
            if (this.remark != null ? !this.remark.equals(that.remark) : that.remark != null) return false;
            return this.tags != null ? this.tags.equals(that.tags) : that.tags == null;
        }

        @Override
        public final int hashCode() {
            int result = this.consumerId.hashCode();
            result = 31 * result + (this.instanceId.hashCode());
            result = 31 * result + (this.remark != null ? this.remark.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            return result;
        }
    }
}
