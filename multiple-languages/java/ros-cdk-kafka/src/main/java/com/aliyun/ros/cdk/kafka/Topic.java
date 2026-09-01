package com.aliyun.ros.cdk.kafka;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::KAFKA::Topic</code>, which is used to create a topic.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-08-31T09:51:39.134Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.kafka.$Module.class, fqn = "@alicloud/ros-cdk-kafka.Topic")
public class Topic extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.kafka.ITopic {

    protected Topic(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Topic(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public Topic(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.kafka.TopicProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public Topic(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.kafka.TopicProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute Arn: The Alibaba Cloud Resource Name (ARN).
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrArn() {
        return software.amazon.jsii.Kernel.get(this, "attrArn", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute InstanceId: The ID of the Message Queue for Apache Kafka instance where the topic is located.
     * <p>
     * You can call the GetInstanceList operation to query instances.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Topic: Topic name.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrTopic() {
        return software.amazon.jsii.Kernel.get(this, "attrTopic", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.kafka.TopicProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.kafka.TopicProps.class));
    }

    protected @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    protected void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    protected @org.jetbrains.annotations.NotNull java.lang.String getId() {
        return software.amazon.jsii.Kernel.get(this, "id", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    protected void setId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "id", java.util.Objects.requireNonNull(value, "id is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.kafka.Topic}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.kafka.Topic> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         * @param enableResourcePropertyConstraint
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id) {
            return new Builder(scope, id, null);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.kafka.TopicProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.kafka.TopicProps.Builder();
        }

        /**
         * Property instanceId: The ID of the Message Queue for Apache Kafka instance where the topic is located.
         * <p>
         * You can call the GetInstanceList operation to query instances.
         * <p>
         * @return {@code this}
         * @param instanceId Property instanceId: The ID of the Message Queue for Apache Kafka instance where the topic is located. This parameter is required.
         */
        public Builder instanceId(final java.lang.String instanceId) {
            this.props.instanceId(instanceId);
            return this;
        }
        /**
         * Property instanceId: The ID of the Message Queue for Apache Kafka instance where the topic is located.
         * <p>
         * You can call the GetInstanceList operation to query instances.
         * <p>
         * @return {@code this}
         * @param instanceId Property instanceId: The ID of the Message Queue for Apache Kafka instance where the topic is located. This parameter is required.
         */
        public Builder instanceId(final com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.props.instanceId(instanceId);
            return this;
        }

        /**
         * Property remark: The description of the topic.
         * <p>
         * The value of this parameter must meet the following
         * requirements:
         * The value can only contain letters, digits, hyphens (-), and underscores (_).
         * The value must be 3 to 64 characters in length.
         * <p>
         * @return {@code this}
         * @param remark Property remark: The description of the topic. This parameter is required.
         */
        public Builder remark(final java.lang.String remark) {
            this.props.remark(remark);
            return this;
        }
        /**
         * Property remark: The description of the topic.
         * <p>
         * The value of this parameter must meet the following
         * requirements:
         * The value can only contain letters, digits, hyphens (-), and underscores (_).
         * The value must be 3 to 64 characters in length.
         * <p>
         * @return {@code this}
         * @param remark Property remark: The description of the topic. This parameter is required.
         */
        public Builder remark(final com.aliyun.ros.cdk.core.IResolvable remark) {
            this.props.remark(remark);
            return this;
        }

        /**
         * Property topic: The name of the topic.
         * <p>
         * <ul>
         * <li>Reserved instance: The name can contain uppercase letters, lowercase letters,
         * digits, underscores (_), hyphens (-), and periods (.). The name must be 3 to 64
         * characters in length.</li>
         * <li>Serverless instance: The name can contain uppercase letters, lowercase letters,
         * digits, underscores (_), hyphens (-), and periods (.). The name must be 1 to 249
         * characters in length.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param topic Property topic: The name of the topic. This parameter is required.
         */
        public Builder topic(final java.lang.String topic) {
            this.props.topic(topic);
            return this;
        }
        /**
         * Property topic: The name of the topic.
         * <p>
         * <ul>
         * <li>Reserved instance: The name can contain uppercase letters, lowercase letters,
         * digits, underscores (_), hyphens (-), and periods (.). The name must be 3 to 64
         * characters in length.</li>
         * <li>Serverless instance: The name can contain uppercase letters, lowercase letters,
         * digits, underscores (_), hyphens (-), and periods (.). The name must be 1 to 249
         * characters in length.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param topic Property topic: The name of the topic. This parameter is required.
         */
        public Builder topic(final com.aliyun.ros.cdk.core.IResolvable topic) {
            this.props.topic(topic);
            return this;
        }

        /**
         * Property compactTopic: The log cleanup policy for the topic.
         * <p>
         * This parameter is available when the Local Storage mode is specified for the topic. Valid values:
         * false: uses the default log cleanup policy.
         * true: uses the Apache Kafka log compaction policy.
         * <p>
         * @return {@code this}
         * @param compactTopic Property compactTopic: The log cleanup policy for the topic. This parameter is required.
         */
        public Builder compactTopic(final java.lang.Boolean compactTopic) {
            this.props.compactTopic(compactTopic);
            return this;
        }
        /**
         * Property compactTopic: The log cleanup policy for the topic.
         * <p>
         * This parameter is available when the Local Storage mode is specified for the topic. Valid values:
         * false: uses the default log cleanup policy.
         * true: uses the Apache Kafka log compaction policy.
         * <p>
         * @return {@code this}
         * @param compactTopic Property compactTopic: The log cleanup policy for the topic. This parameter is required.
         */
        public Builder compactTopic(final com.aliyun.ros.cdk.core.IResolvable compactTopic) {
            this.props.compactTopic(compactTopic);
            return this;
        }

        /**
         * Property config: The advanced configurations of the topic.
         * <p>
         * <ul>
         * <li>Configure this parameter in the JSON format.</li>
         * <li>This parameter is available only if LocalTopic is set to true.</li>
         * <li>The following configurations are supported for reserved instances:</li>
         * <li>retention.ms: The message retention period. The value must be an integer from
         * 3,600,000 to 31,536,000,000. Unit: milliseconds.</li>
         * <li>max.message.bytes: The maximum size of a message that can be sent. The value
         * must be an integer from 1,048,576 to 10,485,760. Unit: bytes.</li>
         * <li>message.timestamp.type: The timestamp type of a message. Valid values:
         * CreateTime or LogAppendTime. CreateTime indicates that the message timestamp is
         * the time when the producer creates the message. If you do not specify a
         * timestamp, the client time is used. LogAppendTime indicates that the message
         * timestamp is the time when the server stores the message. The default value is
         * CreateTime. We recommend that you set this parameter to LogAppendTime.</li>
         * <li>The following configurations are supported for Serverless instances:</li>
         * <li>retention.hours: The message retention period. The value is of the string type.
         * The value must be an integer from 24 to 8,760.</li>
         * <li>max.message.bytes: The maximum size of a message that can be sent. The value is
         * of the string type. The value must be an integer from 1,048,576 to 10,485,760.</li>
         * <li>message.timestamp.type: The timestamp type of a message. Valid values:
         * CreateTime or LogAppendTime. CreateTime indicates that the message timestamp is
         * the time when the producer creates the message. If you do not specify a
         * timestamp, the client time is used. LogAppendTime indicates that the message
         * timestamp is the time when the server stores the message. The default value is
         * CreateTime. We recommend that you set this parameter to LogAppendTime.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param config Property config: The advanced configurations of the topic. This parameter is required.
         */
        public Builder config(final com.aliyun.ros.cdk.core.IResolvable config) {
            this.props.config(config);
            return this;
        }
        /**
         * Property config: The advanced configurations of the topic.
         * <p>
         * <ul>
         * <li>Configure this parameter in the JSON format.</li>
         * <li>This parameter is available only if LocalTopic is set to true.</li>
         * <li>The following configurations are supported for reserved instances:</li>
         * <li>retention.ms: The message retention period. The value must be an integer from
         * 3,600,000 to 31,536,000,000. Unit: milliseconds.</li>
         * <li>max.message.bytes: The maximum size of a message that can be sent. The value
         * must be an integer from 1,048,576 to 10,485,760. Unit: bytes.</li>
         * <li>message.timestamp.type: The timestamp type of a message. Valid values:
         * CreateTime or LogAppendTime. CreateTime indicates that the message timestamp is
         * the time when the producer creates the message. If you do not specify a
         * timestamp, the client time is used. LogAppendTime indicates that the message
         * timestamp is the time when the server stores the message. The default value is
         * CreateTime. We recommend that you set this parameter to LogAppendTime.</li>
         * <li>The following configurations are supported for Serverless instances:</li>
         * <li>retention.hours: The message retention period. The value is of the string type.
         * The value must be an integer from 24 to 8,760.</li>
         * <li>max.message.bytes: The maximum size of a message that can be sent. The value is
         * of the string type. The value must be an integer from 1,048,576 to 10,485,760.</li>
         * <li>message.timestamp.type: The timestamp type of a message. Valid values:
         * CreateTime or LogAppendTime. CreateTime indicates that the message timestamp is
         * the time when the producer creates the message. If you do not specify a
         * timestamp, the client time is used. LogAppendTime indicates that the message
         * timestamp is the time when the server stores the message. The default value is
         * CreateTime. We recommend that you set this parameter to LogAppendTime.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param config Property config: The advanced configurations of the topic. This parameter is required.
         */
        public Builder config(final java.util.Map<java.lang.String, ? extends java.lang.Object> config) {
            this.props.config(config);
            return this;
        }

        /**
         * Property localTopic: The storage engine of the topic.
         * <p>
         * Valid values:
         * false: the Cloud Storage mode.
         * true: the Local Storage mode.
         * <p>
         * @return {@code this}
         * @param localTopic Property localTopic: The storage engine of the topic. This parameter is required.
         */
        public Builder localTopic(final java.lang.Boolean localTopic) {
            this.props.localTopic(localTopic);
            return this;
        }
        /**
         * Property localTopic: The storage engine of the topic.
         * <p>
         * Valid values:
         * false: the Cloud Storage mode.
         * true: the Local Storage mode.
         * <p>
         * @return {@code this}
         * @param localTopic Property localTopic: The storage engine of the topic. This parameter is required.
         */
        public Builder localTopic(final com.aliyun.ros.cdk.core.IResolvable localTopic) {
            this.props.localTopic(localTopic);
            return this;
        }

        /**
         * Property minInsyncReplicas: The minimum number of ISR sync replicas.
         * <p>
         * This parameter can only be specified if the LocalTopic value is true.
         * The value must be less than the number of Topic copies.
         * The number of synchronous replicas is limited to 1~3.
         * <p>
         * @return {@code this}
         * @param minInsyncReplicas Property minInsyncReplicas: The minimum number of ISR sync replicas. This parameter is required.
         */
        public Builder minInsyncReplicas(final java.lang.Number minInsyncReplicas) {
            this.props.minInsyncReplicas(minInsyncReplicas);
            return this;
        }
        /**
         * Property minInsyncReplicas: The minimum number of ISR sync replicas.
         * <p>
         * This parameter can only be specified if the LocalTopic value is true.
         * The value must be less than the number of Topic copies.
         * The number of synchronous replicas is limited to 1~3.
         * <p>
         * @return {@code this}
         * @param minInsyncReplicas Property minInsyncReplicas: The minimum number of ISR sync replicas. This parameter is required.
         */
        public Builder minInsyncReplicas(final com.aliyun.ros.cdk.core.IResolvable minInsyncReplicas) {
            this.props.minInsyncReplicas(minInsyncReplicas);
            return this;
        }

        /**
         * Property partitionNum: The number of partitions in the topic.
         * <p>
         * <ul>
         * <li>The value must be an integer from 1 to 360.</li>
         * <li>The console suggests a number of partitions based on the instance type. Follow
         * the suggestion to reduce the risk of data skew.
         * Default value:</li>
         * <li>Reserved instance: 12</li>
         * <li>Serverless instance: 3</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param partitionNum Property partitionNum: The number of partitions in the topic. This parameter is required.
         */
        public Builder partitionNum(final java.lang.Number partitionNum) {
            this.props.partitionNum(partitionNum);
            return this;
        }
        /**
         * Property partitionNum: The number of partitions in the topic.
         * <p>
         * <ul>
         * <li>The value must be an integer from 1 to 360.</li>
         * <li>The console suggests a number of partitions based on the instance type. Follow
         * the suggestion to reduce the risk of data skew.
         * Default value:</li>
         * <li>Reserved instance: 12</li>
         * <li>Serverless instance: 3</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param partitionNum Property partitionNum: The number of partitions in the topic. This parameter is required.
         */
        public Builder partitionNum(final com.aliyun.ros.cdk.core.IResolvable partitionNum) {
            this.props.partitionNum(partitionNum);
            return this;
        }

        /**
         * Property replicationFactor: The number of copies of the topic.
         * <p>
         * This parameter can only be specified if the LocalTopic value is true.
         * The number of copies is limited to 1~3.
         * Note When the number of replicas is 1, there is a risk of data loss. Please set it carefully.
         * <p>
         * @return {@code this}
         * @param replicationFactor Property replicationFactor: The number of copies of the topic. This parameter is required.
         */
        public Builder replicationFactor(final java.lang.Number replicationFactor) {
            this.props.replicationFactor(replicationFactor);
            return this;
        }
        /**
         * Property replicationFactor: The number of copies of the topic.
         * <p>
         * This parameter can only be specified if the LocalTopic value is true.
         * The number of copies is limited to 1~3.
         * Note When the number of replicas is 1, there is a risk of data loss. Please set it carefully.
         * <p>
         * @return {@code this}
         * @param replicationFactor Property replicationFactor: The number of copies of the topic. This parameter is required.
         */
        public Builder replicationFactor(final com.aliyun.ros.cdk.core.IResolvable replicationFactor) {
            this.props.replicationFactor(replicationFactor);
            return this;
        }

        /**
         * Property tags: Tags to attach to instance.
         * <p>
         * Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
         * <p>
         * @return {@code this}
         * @param tags Property tags: Tags to attach to instance. This parameter is required.
         */
        public Builder tags(final java.util.List<? extends com.aliyun.ros.cdk.kafka.RosTopic.TagsProperty> tags) {
            this.props.tags(tags);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.kafka.Topic}.
         */
        @Override
        public com.aliyun.ros.cdk.kafka.Topic build() {
            return new com.aliyun.ros.cdk.kafka.Topic(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
