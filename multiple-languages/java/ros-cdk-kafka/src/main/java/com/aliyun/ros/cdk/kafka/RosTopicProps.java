package com.aliyun.ros.cdk.kafka;

/**
 * Properties for defining a `ALIYUN::KAFKA::Topic`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.71.0 (build f1f58ae)", date = "2022-11-22T06:16:29.571Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.kafka.$Module.class, fqn = "@alicloud/ros-cdk-kafka.RosTopicProps")
@software.amazon.jsii.Jsii.Proxy(RosTopicProps.Jsii$Proxy.class)
public interface RosTopicProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getInstanceId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getRemark();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getTopic();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCompactTopic() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getConfig() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getLocalTopic() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMinInsyncReplicas() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPartitionNum() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getReplicationFactor() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.kafka.RosTopic.TagsProperty> getTags() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosTopicProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosTopicProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosTopicProps> {
        java.lang.Object instanceId;
        java.lang.Object remark;
        java.lang.Object topic;
        java.lang.Object compactTopic;
        java.lang.Object config;
        java.lang.Object localTopic;
        java.lang.Object minInsyncReplicas;
        java.lang.Object partitionNum;
        java.lang.Object replicationFactor;
        java.util.List<com.aliyun.ros.cdk.kafka.RosTopic.TagsProperty> tags;

        /**
         * Sets the value of {@link RosTopicProps#getInstanceId}
         * @param instanceId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceId(java.lang.String instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link RosTopicProps#getInstanceId}
         * @param instanceId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceId(com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link RosTopicProps#getRemark}
         * @param remark the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder remark(java.lang.String remark) {
            this.remark = remark;
            return this;
        }

        /**
         * Sets the value of {@link RosTopicProps#getRemark}
         * @param remark the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder remark(com.aliyun.ros.cdk.core.IResolvable remark) {
            this.remark = remark;
            return this;
        }

        /**
         * Sets the value of {@link RosTopicProps#getTopic}
         * @param topic the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder topic(java.lang.String topic) {
            this.topic = topic;
            return this;
        }

        /**
         * Sets the value of {@link RosTopicProps#getTopic}
         * @param topic the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder topic(com.aliyun.ros.cdk.core.IResolvable topic) {
            this.topic = topic;
            return this;
        }

        /**
         * Sets the value of {@link RosTopicProps#getCompactTopic}
         * @param compactTopic the value to be set.
         * @return {@code this}
         */
        public Builder compactTopic(java.lang.Boolean compactTopic) {
            this.compactTopic = compactTopic;
            return this;
        }

        /**
         * Sets the value of {@link RosTopicProps#getCompactTopic}
         * @param compactTopic the value to be set.
         * @return {@code this}
         */
        public Builder compactTopic(com.aliyun.ros.cdk.core.IResolvable compactTopic) {
            this.compactTopic = compactTopic;
            return this;
        }

        /**
         * Sets the value of {@link RosTopicProps#getConfig}
         * @param config the value to be set.
         * @return {@code this}
         */
        public Builder config(com.aliyun.ros.cdk.core.IResolvable config) {
            this.config = config;
            return this;
        }

        /**
         * Sets the value of {@link RosTopicProps#getConfig}
         * @param config the value to be set.
         * @return {@code this}
         */
        public Builder config(java.util.Map<java.lang.String, ? extends java.lang.Object> config) {
            this.config = config;
            return this;
        }

        /**
         * Sets the value of {@link RosTopicProps#getLocalTopic}
         * @param localTopic the value to be set.
         * @return {@code this}
         */
        public Builder localTopic(java.lang.Boolean localTopic) {
            this.localTopic = localTopic;
            return this;
        }

        /**
         * Sets the value of {@link RosTopicProps#getLocalTopic}
         * @param localTopic the value to be set.
         * @return {@code this}
         */
        public Builder localTopic(com.aliyun.ros.cdk.core.IResolvable localTopic) {
            this.localTopic = localTopic;
            return this;
        }

        /**
         * Sets the value of {@link RosTopicProps#getMinInsyncReplicas}
         * @param minInsyncReplicas the value to be set.
         * @return {@code this}
         */
        public Builder minInsyncReplicas(java.lang.Number minInsyncReplicas) {
            this.minInsyncReplicas = minInsyncReplicas;
            return this;
        }

        /**
         * Sets the value of {@link RosTopicProps#getMinInsyncReplicas}
         * @param minInsyncReplicas the value to be set.
         * @return {@code this}
         */
        public Builder minInsyncReplicas(com.aliyun.ros.cdk.core.IResolvable minInsyncReplicas) {
            this.minInsyncReplicas = minInsyncReplicas;
            return this;
        }

        /**
         * Sets the value of {@link RosTopicProps#getPartitionNum}
         * @param partitionNum the value to be set.
         * @return {@code this}
         */
        public Builder partitionNum(java.lang.Number partitionNum) {
            this.partitionNum = partitionNum;
            return this;
        }

        /**
         * Sets the value of {@link RosTopicProps#getPartitionNum}
         * @param partitionNum the value to be set.
         * @return {@code this}
         */
        public Builder partitionNum(com.aliyun.ros.cdk.core.IResolvable partitionNum) {
            this.partitionNum = partitionNum;
            return this;
        }

        /**
         * Sets the value of {@link RosTopicProps#getReplicationFactor}
         * @param replicationFactor the value to be set.
         * @return {@code this}
         */
        public Builder replicationFactor(java.lang.Number replicationFactor) {
            this.replicationFactor = replicationFactor;
            return this;
        }

        /**
         * Sets the value of {@link RosTopicProps#getReplicationFactor}
         * @param replicationFactor the value to be set.
         * @return {@code this}
         */
        public Builder replicationFactor(com.aliyun.ros.cdk.core.IResolvable replicationFactor) {
            this.replicationFactor = replicationFactor;
            return this;
        }

        /**
         * Sets the value of {@link RosTopicProps#getTags}
         * @param tags the value to be set.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.kafka.RosTopic.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.kafka.RosTopic.TagsProperty>)tags;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosTopicProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosTopicProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosTopicProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosTopicProps {
        private final java.lang.Object instanceId;
        private final java.lang.Object remark;
        private final java.lang.Object topic;
        private final java.lang.Object compactTopic;
        private final java.lang.Object config;
        private final java.lang.Object localTopic;
        private final java.lang.Object minInsyncReplicas;
        private final java.lang.Object partitionNum;
        private final java.lang.Object replicationFactor;
        private final java.util.List<com.aliyun.ros.cdk.kafka.RosTopic.TagsProperty> tags;

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
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.kafka.RosTopic.TagsProperty.class)));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
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
            this.tags = (java.util.List<com.aliyun.ros.cdk.kafka.RosTopic.TagsProperty>)builder.tags;
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
        public final java.util.List<com.aliyun.ros.cdk.kafka.RosTopic.TagsProperty> getTags() {
            return this.tags;
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
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-kafka.RosTopicProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosTopicProps.Jsii$Proxy that = (RosTopicProps.Jsii$Proxy) o;

            if (!instanceId.equals(that.instanceId)) return false;
            if (!remark.equals(that.remark)) return false;
            if (!topic.equals(that.topic)) return false;
            if (this.compactTopic != null ? !this.compactTopic.equals(that.compactTopic) : that.compactTopic != null) return false;
            if (this.config != null ? !this.config.equals(that.config) : that.config != null) return false;
            if (this.localTopic != null ? !this.localTopic.equals(that.localTopic) : that.localTopic != null) return false;
            if (this.minInsyncReplicas != null ? !this.minInsyncReplicas.equals(that.minInsyncReplicas) : that.minInsyncReplicas != null) return false;
            if (this.partitionNum != null ? !this.partitionNum.equals(that.partitionNum) : that.partitionNum != null) return false;
            if (this.replicationFactor != null ? !this.replicationFactor.equals(that.replicationFactor) : that.replicationFactor != null) return false;
            return this.tags != null ? this.tags.equals(that.tags) : that.tags == null;
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
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            return result;
        }
    }
}
