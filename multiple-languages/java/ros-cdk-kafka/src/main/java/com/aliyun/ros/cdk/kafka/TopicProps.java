package com.aliyun.ros.cdk.kafka;

/**
 * Properties for defining a `ALIYUN::KAFKA::Topic`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.27.0 (build 07d848a)", date = "2021-04-07T04:01:42.663Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.kafka.$Module.class, fqn = "@alicloud/ros-cdk-kafka.TopicProps")
@software.amazon.jsii.Jsii.Proxy(TopicProps.Jsii$Proxy.class)
public interface TopicProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property instanceId: The ID of the Message Queue for Apache Kafka instance where the topic is located.
     * <p>
     * You can call the GetInstanceList operation to query instances.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getInstanceId();

    /**
     * Property remark: The description of the topic.
     * <p>
     * The value of this parameter must meet the following
     * requirements:
     * The value can only contain letters, digits, hyphens (-), and underscores (_).
     * The value must be 3 to 64 characters in length.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getRemark();

    /**
     * Property topic: The name of the topic.
     * <p>
     * The value of this parameter must meet the following requirements:
     * The name can only contain letters, digits, hyphens (-), and underscores (_).
     * The name must be 3 to 64 characters in length, and will be automatically truncated
     * if it contains more characters.
     * The name cannot be modified after being created.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getTopic();

    /**
     * Property partitionNum: The number of partitions in the topic.
     * <p>
     * Valid values:
     * 1 to 48
     * We recommend that you set the number of partitions to a multiple of 6 to reduce the
     * risk of data skew.Note:For special requirements,submit a ticket.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPartitionNum() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link TopicProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link TopicProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<TopicProps> {
        private java.lang.Object instanceId;
        private java.lang.Object remark;
        private java.lang.Object topic;
        private java.lang.Object partitionNum;

        /**
         * Sets the value of {@link TopicProps#getInstanceId}
         * @param instanceId Property instanceId: The ID of the Message Queue for Apache Kafka instance where the topic is located. This parameter is required.
         *                   You can call the GetInstanceList operation to query instances.
         * @return {@code this}
         */
        public Builder instanceId(java.lang.String instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link TopicProps#getInstanceId}
         * @param instanceId Property instanceId: The ID of the Message Queue for Apache Kafka instance where the topic is located. This parameter is required.
         *                   You can call the GetInstanceList operation to query instances.
         * @return {@code this}
         */
        public Builder instanceId(com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link TopicProps#getRemark}
         * @param remark Property remark: The description of the topic. This parameter is required.
         *               The value of this parameter must meet the following
         *               requirements:
         *               The value can only contain letters, digits, hyphens (-), and underscores (_).
         *               The value must be 3 to 64 characters in length.
         * @return {@code this}
         */
        public Builder remark(java.lang.String remark) {
            this.remark = remark;
            return this;
        }

        /**
         * Sets the value of {@link TopicProps#getRemark}
         * @param remark Property remark: The description of the topic. This parameter is required.
         *               The value of this parameter must meet the following
         *               requirements:
         *               The value can only contain letters, digits, hyphens (-), and underscores (_).
         *               The value must be 3 to 64 characters in length.
         * @return {@code this}
         */
        public Builder remark(com.aliyun.ros.cdk.core.IResolvable remark) {
            this.remark = remark;
            return this;
        }

        /**
         * Sets the value of {@link TopicProps#getTopic}
         * @param topic Property topic: The name of the topic. This parameter is required.
         *              The value of this parameter must meet the following requirements:
         *              The name can only contain letters, digits, hyphens (-), and underscores (_).
         *              The name must be 3 to 64 characters in length, and will be automatically truncated
         *              if it contains more characters.
         *              The name cannot be modified after being created.
         * @return {@code this}
         */
        public Builder topic(java.lang.String topic) {
            this.topic = topic;
            return this;
        }

        /**
         * Sets the value of {@link TopicProps#getTopic}
         * @param topic Property topic: The name of the topic. This parameter is required.
         *              The value of this parameter must meet the following requirements:
         *              The name can only contain letters, digits, hyphens (-), and underscores (_).
         *              The name must be 3 to 64 characters in length, and will be automatically truncated
         *              if it contains more characters.
         *              The name cannot be modified after being created.
         * @return {@code this}
         */
        public Builder topic(com.aliyun.ros.cdk.core.IResolvable topic) {
            this.topic = topic;
            return this;
        }

        /**
         * Sets the value of {@link TopicProps#getPartitionNum}
         * @param partitionNum Property partitionNum: The number of partitions in the topic.
         *                     Valid values:
         *                     1 to 48
         *                     We recommend that you set the number of partitions to a multiple of 6 to reduce the
         *                     risk of data skew.Note:For special requirements,submit a ticket.
         * @return {@code this}
         */
        public Builder partitionNum(java.lang.Number partitionNum) {
            this.partitionNum = partitionNum;
            return this;
        }

        /**
         * Sets the value of {@link TopicProps#getPartitionNum}
         * @param partitionNum Property partitionNum: The number of partitions in the topic.
         *                     Valid values:
         *                     1 to 48
         *                     We recommend that you set the number of partitions to a multiple of 6 to reduce the
         *                     risk of data skew.Note:For special requirements,submit a ticket.
         * @return {@code this}
         */
        public Builder partitionNum(com.aliyun.ros.cdk.core.IResolvable partitionNum) {
            this.partitionNum = partitionNum;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link TopicProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public TopicProps build() {
            return new Jsii$Proxy(instanceId, remark, topic, partitionNum);
        }
    }

    /**
     * An implementation for {@link TopicProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements TopicProps {
        private final java.lang.Object instanceId;
        private final java.lang.Object remark;
        private final java.lang.Object topic;
        private final java.lang.Object partitionNum;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.instanceId = software.amazon.jsii.Kernel.get(this, "instanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.remark = software.amazon.jsii.Kernel.get(this, "remark", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.topic = software.amazon.jsii.Kernel.get(this, "topic", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.partitionNum = software.amazon.jsii.Kernel.get(this, "partitionNum", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final java.lang.Object instanceId, final java.lang.Object remark, final java.lang.Object topic, final java.lang.Object partitionNum) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.instanceId = java.util.Objects.requireNonNull(instanceId, "instanceId is required");
            this.remark = java.util.Objects.requireNonNull(remark, "remark is required");
            this.topic = java.util.Objects.requireNonNull(topic, "topic is required");
            this.partitionNum = partitionNum;
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
        public final java.lang.Object getTopic() {
            return this.topic;
        }

        @Override
        public final java.lang.Object getPartitionNum() {
            return this.partitionNum;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("instanceId", om.valueToTree(this.getInstanceId()));
            data.set("remark", om.valueToTree(this.getRemark()));
            data.set("topic", om.valueToTree(this.getTopic()));
            if (this.getPartitionNum() != null) {
                data.set("partitionNum", om.valueToTree(this.getPartitionNum()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-kafka.TopicProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            TopicProps.Jsii$Proxy that = (TopicProps.Jsii$Proxy) o;

            if (!instanceId.equals(that.instanceId)) return false;
            if (!remark.equals(that.remark)) return false;
            if (!topic.equals(that.topic)) return false;
            return this.partitionNum != null ? this.partitionNum.equals(that.partitionNum) : that.partitionNum == null;
        }

        @Override
        public final int hashCode() {
            int result = this.instanceId.hashCode();
            result = 31 * result + (this.remark.hashCode());
            result = 31 * result + (this.topic.hashCode());
            result = 31 * result + (this.partitionNum != null ? this.partitionNum.hashCode() : 0);
            return result;
        }
    }
}
