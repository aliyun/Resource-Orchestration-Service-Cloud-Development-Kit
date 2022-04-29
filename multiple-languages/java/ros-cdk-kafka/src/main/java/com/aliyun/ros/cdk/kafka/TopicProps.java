package com.aliyun.ros.cdk.kafka;

/**
 * Properties for defining a `ALIYUN::KAFKA::Topic`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.57.0 (build f614666)", date = "2022-04-29T01:47:29.603Z")
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
     * Property compactTopic: The log cleanup policy for the topic.
     * <p>
     * This parameter is available when the Local Storage mode is specified for the topic. Valid values:
     * false: uses the default log cleanup policy.
     * true: uses the Apache Kafka log compaction policy.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCompactTopic() {
        return null;
    }

    /**
     * Property config: Supplementary configuration.
     * <p>
     * Currently supports Key as replications. Indicates the number of Topic copies, the value type is Integer, and the value limit is 1~3.
     * This parameter can only be specified if the LocalTopic value is true.
     * NOTE If replications is specified in this parameter, the specified ReplicationFactor parameter no longer takes effect.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getConfig() {
        return null;
    }

    /**
     * Property localTopic: The storage engine of the topic.
     * <p>
     * Valid values:
     * false: the Cloud Storage mode.
     * true: the Local Storage mode.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getLocalTopic() {
        return null;
    }

    /**
     * Property minInsyncReplicas: The minimum number of ISR sync replicas.
     * <p>
     * This parameter can only be specified if the LocalTopic value is true.
     * The value must be less than the number of Topic copies.
     * The number of synchronous replicas is limited to 1~3.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMinInsyncReplicas() {
        return null;
    }

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
     * Property replicationFactor: The number of copies of the topic.
     * <p>
     * This parameter can only be specified if the LocalTopic value is true.
     * The number of copies is limited to 1~3.
     * Note When the number of replicas is 1, there is a risk of data loss. Please set it carefully.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getReplicationFactor() {
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
        java.lang.Object instanceId;
        java.lang.Object remark;
        java.lang.Object topic;
        java.lang.Object compactTopic;
        java.lang.Object config;
        java.lang.Object localTopic;
        java.lang.Object minInsyncReplicas;
        java.lang.Object partitionNum;
        java.lang.Object replicationFactor;

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
         * Sets the value of {@link TopicProps#getCompactTopic}
         * @param compactTopic Property compactTopic: The log cleanup policy for the topic.
         *                     This parameter is available when the Local Storage mode is specified for the topic. Valid values:
         *                     false: uses the default log cleanup policy.
         *                     true: uses the Apache Kafka log compaction policy.
         * @return {@code this}
         */
        public Builder compactTopic(java.lang.Boolean compactTopic) {
            this.compactTopic = compactTopic;
            return this;
        }

        /**
         * Sets the value of {@link TopicProps#getCompactTopic}
         * @param compactTopic Property compactTopic: The log cleanup policy for the topic.
         *                     This parameter is available when the Local Storage mode is specified for the topic. Valid values:
         *                     false: uses the default log cleanup policy.
         *                     true: uses the Apache Kafka log compaction policy.
         * @return {@code this}
         */
        public Builder compactTopic(com.aliyun.ros.cdk.core.IResolvable compactTopic) {
            this.compactTopic = compactTopic;
            return this;
        }

        /**
         * Sets the value of {@link TopicProps#getConfig}
         * @param config Property config: Supplementary configuration.
         *               Currently supports Key as replications. Indicates the number of Topic copies, the value type is Integer, and the value limit is 1~3.
         *               This parameter can only be specified if the LocalTopic value is true.
         *               NOTE If replications is specified in this parameter, the specified ReplicationFactor parameter no longer takes effect.
         * @return {@code this}
         */
        public Builder config(com.aliyun.ros.cdk.core.IResolvable config) {
            this.config = config;
            return this;
        }

        /**
         * Sets the value of {@link TopicProps#getConfig}
         * @param config Property config: Supplementary configuration.
         *               Currently supports Key as replications. Indicates the number of Topic copies, the value type is Integer, and the value limit is 1~3.
         *               This parameter can only be specified if the LocalTopic value is true.
         *               NOTE If replications is specified in this parameter, the specified ReplicationFactor parameter no longer takes effect.
         * @return {@code this}
         */
        public Builder config(java.util.Map<java.lang.String, ? extends java.lang.Object> config) {
            this.config = config;
            return this;
        }

        /**
         * Sets the value of {@link TopicProps#getLocalTopic}
         * @param localTopic Property localTopic: The storage engine of the topic.
         *                   Valid values:
         *                   false: the Cloud Storage mode.
         *                   true: the Local Storage mode.
         * @return {@code this}
         */
        public Builder localTopic(java.lang.Boolean localTopic) {
            this.localTopic = localTopic;
            return this;
        }

        /**
         * Sets the value of {@link TopicProps#getLocalTopic}
         * @param localTopic Property localTopic: The storage engine of the topic.
         *                   Valid values:
         *                   false: the Cloud Storage mode.
         *                   true: the Local Storage mode.
         * @return {@code this}
         */
        public Builder localTopic(com.aliyun.ros.cdk.core.IResolvable localTopic) {
            this.localTopic = localTopic;
            return this;
        }

        /**
         * Sets the value of {@link TopicProps#getMinInsyncReplicas}
         * @param minInsyncReplicas Property minInsyncReplicas: The minimum number of ISR sync replicas.
         *                          This parameter can only be specified if the LocalTopic value is true.
         *                          The value must be less than the number of Topic copies.
         *                          The number of synchronous replicas is limited to 1~3.
         * @return {@code this}
         */
        public Builder minInsyncReplicas(java.lang.Number minInsyncReplicas) {
            this.minInsyncReplicas = minInsyncReplicas;
            return this;
        }

        /**
         * Sets the value of {@link TopicProps#getMinInsyncReplicas}
         * @param minInsyncReplicas Property minInsyncReplicas: The minimum number of ISR sync replicas.
         *                          This parameter can only be specified if the LocalTopic value is true.
         *                          The value must be less than the number of Topic copies.
         *                          The number of synchronous replicas is limited to 1~3.
         * @return {@code this}
         */
        public Builder minInsyncReplicas(com.aliyun.ros.cdk.core.IResolvable minInsyncReplicas) {
            this.minInsyncReplicas = minInsyncReplicas;
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
         * Sets the value of {@link TopicProps#getReplicationFactor}
         * @param replicationFactor Property replicationFactor: The number of copies of the topic.
         *                          This parameter can only be specified if the LocalTopic value is true.
         *                          The number of copies is limited to 1~3.
         *                          Note When the number of replicas is 1, there is a risk of data loss. Please set it carefully.
         * @return {@code this}
         */
        public Builder replicationFactor(java.lang.Number replicationFactor) {
            this.replicationFactor = replicationFactor;
            return this;
        }

        /**
         * Sets the value of {@link TopicProps#getReplicationFactor}
         * @param replicationFactor Property replicationFactor: The number of copies of the topic.
         *                          This parameter can only be specified if the LocalTopic value is true.
         *                          The number of copies is limited to 1~3.
         *                          Note When the number of replicas is 1, there is a risk of data loss. Please set it carefully.
         * @return {@code this}
         */
        public Builder replicationFactor(com.aliyun.ros.cdk.core.IResolvable replicationFactor) {
            this.replicationFactor = replicationFactor;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link TopicProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public TopicProps build() {
            return new Jsii$Proxy(this);
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
        private final java.lang.Object compactTopic;
        private final java.lang.Object config;
        private final java.lang.Object localTopic;
        private final java.lang.Object minInsyncReplicas;
        private final java.lang.Object partitionNum;
        private final java.lang.Object replicationFactor;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.instanceId = software.amazon.jsii.Kernel.get(this, "instanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.remark = software.amazon.jsii.Kernel.get(this, "remark", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.topic = software.amazon.jsii.Kernel.get(this, "topic", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.compactTopic = software.amazon.jsii.Kernel.get(this, "compactTopic", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.config = software.amazon.jsii.Kernel.get(this, "config", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.localTopic = software.amazon.jsii.Kernel.get(this, "localTopic", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.minInsyncReplicas = software.amazon.jsii.Kernel.get(this, "minInsyncReplicas", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.partitionNum = software.amazon.jsii.Kernel.get(this, "partitionNum", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.replicationFactor = software.amazon.jsii.Kernel.get(this, "replicationFactor", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.instanceId = java.util.Objects.requireNonNull(builder.instanceId, "instanceId is required");
            this.remark = java.util.Objects.requireNonNull(builder.remark, "remark is required");
            this.topic = java.util.Objects.requireNonNull(builder.topic, "topic is required");
            this.compactTopic = builder.compactTopic;
            this.config = builder.config;
            this.localTopic = builder.localTopic;
            this.minInsyncReplicas = builder.minInsyncReplicas;
            this.partitionNum = builder.partitionNum;
            this.replicationFactor = builder.replicationFactor;
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
        public final java.lang.Object getCompactTopic() {
            return this.compactTopic;
        }

        @Override
        public final java.lang.Object getConfig() {
            return this.config;
        }

        @Override
        public final java.lang.Object getLocalTopic() {
            return this.localTopic;
        }

        @Override
        public final java.lang.Object getMinInsyncReplicas() {
            return this.minInsyncReplicas;
        }

        @Override
        public final java.lang.Object getPartitionNum() {
            return this.partitionNum;
        }

        @Override
        public final java.lang.Object getReplicationFactor() {
            return this.replicationFactor;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("instanceId", om.valueToTree(this.getInstanceId()));
            data.set("remark", om.valueToTree(this.getRemark()));
            data.set("topic", om.valueToTree(this.getTopic()));
            if (this.getCompactTopic() != null) {
                data.set("compactTopic", om.valueToTree(this.getCompactTopic()));
            }
            if (this.getConfig() != null) {
                data.set("config", om.valueToTree(this.getConfig()));
            }
            if (this.getLocalTopic() != null) {
                data.set("localTopic", om.valueToTree(this.getLocalTopic()));
            }
            if (this.getMinInsyncReplicas() != null) {
                data.set("minInsyncReplicas", om.valueToTree(this.getMinInsyncReplicas()));
            }
            if (this.getPartitionNum() != null) {
                data.set("partitionNum", om.valueToTree(this.getPartitionNum()));
            }
            if (this.getReplicationFactor() != null) {
                data.set("replicationFactor", om.valueToTree(this.getReplicationFactor()));
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
            if (this.compactTopic != null ? !this.compactTopic.equals(that.compactTopic) : that.compactTopic != null) return false;
            if (this.config != null ? !this.config.equals(that.config) : that.config != null) return false;
            if (this.localTopic != null ? !this.localTopic.equals(that.localTopic) : that.localTopic != null) return false;
            if (this.minInsyncReplicas != null ? !this.minInsyncReplicas.equals(that.minInsyncReplicas) : that.minInsyncReplicas != null) return false;
            if (this.partitionNum != null ? !this.partitionNum.equals(that.partitionNum) : that.partitionNum != null) return false;
            return this.replicationFactor != null ? this.replicationFactor.equals(that.replicationFactor) : that.replicationFactor == null;
        }

        @Override
        public final int hashCode() {
            int result = this.instanceId.hashCode();
            result = 31 * result + (this.remark.hashCode());
            result = 31 * result + (this.topic.hashCode());
            result = 31 * result + (this.compactTopic != null ? this.compactTopic.hashCode() : 0);
            result = 31 * result + (this.config != null ? this.config.hashCode() : 0);
            result = 31 * result + (this.localTopic != null ? this.localTopic.hashCode() : 0);
            result = 31 * result + (this.minInsyncReplicas != null ? this.minInsyncReplicas.hashCode() : 0);
            result = 31 * result + (this.partitionNum != null ? this.partitionNum.hashCode() : 0);
            result = 31 * result + (this.replicationFactor != null ? this.replicationFactor.hashCode() : 0);
            return result;
        }
    }
}
