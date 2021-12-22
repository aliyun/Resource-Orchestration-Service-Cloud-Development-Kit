package com.aliyun.ros.cdk.kafka;

/**
 * A ROS resource type:  `ALIYUN::KAFKA::Topic`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.49.0 (build e322d87)", date = "2021-12-21T15:12:58.258Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.kafka.$Module.class, fqn = "@alicloud/ros-cdk-kafka.Topic")
public class Topic extends com.aliyun.ros.cdk.core.Resource {

    protected Topic(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Topic(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::KAFKA::Topic`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
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
     * Create a new `ALIYUN::KAFKA::Topic`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
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
     * Attribute InstanceId: The ID of the Message Queue for Apache Kafka instance where the topic is located.
     * <p>
     * You can call the GetInstanceList operation to query instances.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Topic: Topic name.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrTopic() {
        return software.amazon.jsii.Kernel.get(this, "attrTopic", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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
         * The value of this parameter must meet the following requirements:
         * The name can only contain letters, digits, hyphens (-), and underscores (_).
         * The name must be 3 to 64 characters in length, and will be automatically truncated
         * if it contains more characters.
         * The name cannot be modified after being created.
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
         * The value of this parameter must meet the following requirements:
         * The name can only contain letters, digits, hyphens (-), and underscores (_).
         * The name must be 3 to 64 characters in length, and will be automatically truncated
         * if it contains more characters.
         * The name cannot be modified after being created.
         * <p>
         * @return {@code this}
         * @param topic Property topic: The name of the topic. This parameter is required.
         */
        public Builder topic(final com.aliyun.ros.cdk.core.IResolvable topic) {
            this.props.topic(topic);
            return this;
        }

        /**
         * Property partitionNum: The number of partitions in the topic.
         * <p>
         * Valid values:
         * 1 to 48
         * We recommend that you set the number of partitions to a multiple of 6 to reduce the
         * risk of data skew.Note:For special requirements,submit a ticket.
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
         * Valid values:
         * 1 to 48
         * We recommend that you set the number of partitions to a multiple of 6 to reduce the
         * risk of data skew.Note:For special requirements,submit a ticket.
         * <p>
         * @return {@code this}
         * @param partitionNum Property partitionNum: The number of partitions in the topic. This parameter is required.
         */
        public Builder partitionNum(final com.aliyun.ros.cdk.core.IResolvable partitionNum) {
            this.props.partitionNum(partitionNum);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.kafka.Topic}.
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
