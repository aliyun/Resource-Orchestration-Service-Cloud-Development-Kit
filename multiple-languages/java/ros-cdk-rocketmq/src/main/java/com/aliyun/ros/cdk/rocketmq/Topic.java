package com.aliyun.ros.cdk.rocketmq;

/**
 * A ROS resource type:  `ALIYUN::ROCKETMQ::Topic`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.27.0 (build 07d848a)", date = "2021-04-07T04:01:43.013Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.rocketmq.$Module.class, fqn = "@alicloud/ros-cdk-rocketmq.Topic")
public class Topic extends com.aliyun.ros.cdk.core.Resource {

    protected Topic(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Topic(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::ROCKETMQ::Topic`.
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
    public Topic(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.rocketmq.TopicProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::ROCKETMQ::Topic`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public Topic(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.rocketmq.TopicProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute InstanceId: The ID of the instance.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute MessageType: The type of the message.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrMessageType() {
        return software.amazon.jsii.Kernel.get(this, "attrMessageType", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Topic: The name of the topic.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrTopic() {
        return software.amazon.jsii.Kernel.get(this, "attrTopic", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.rocketmq.Topic}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.rocketmq.Topic> {
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
        private final com.aliyun.ros.cdk.rocketmq.TopicProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.rocketmq.TopicProps.Builder();
        }

        /**
         * Property instanceId: The ID of the instance.
         * <p>
         * @return {@code this}
         * @param instanceId Property instanceId: The ID of the instance. This parameter is required.
         */
        public Builder instanceId(final java.lang.String instanceId) {
            this.props.instanceId(instanceId);
            return this;
        }
        /**
         * Property instanceId: The ID of the instance.
         * <p>
         * @return {@code this}
         * @param instanceId Property instanceId: The ID of the instance. This parameter is required.
         */
        public Builder instanceId(final com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.props.instanceId(instanceId);
            return this;
        }

        /**
         * Property messageType: The type of the message.
         * <p>
         * Valid values:
         * 0: normal message
         * 1: partitionally ordered message
         * 2: globally ordered message
         * 4: transactional message
         * 5: scheduled/delayed message
         * <p>
         * @return {@code this}
         * @param messageType Property messageType: The type of the message. This parameter is required.
         */
        public Builder messageType(final java.lang.Number messageType) {
            this.props.messageType(messageType);
            return this;
        }
        /**
         * Property messageType: The type of the message.
         * <p>
         * Valid values:
         * 0: normal message
         * 1: partitionally ordered message
         * 2: globally ordered message
         * 4: transactional message
         * 5: scheduled/delayed message
         * <p>
         * @return {@code this}
         * @param messageType Property messageType: The type of the message. This parameter is required.
         */
        public Builder messageType(final com.aliyun.ros.cdk.core.IResolvable messageType) {
            this.props.messageType(messageType);
            return this;
        }

        /**
         * Property topic: The name of the topic you want to create.
         * <p>
         * Note:
         * "CID" and "GID" are the reserved fields of a group ID, and they cannot be the start of a topic name.
         * If namespaces are available in the instance for which the topic is created, the topic name must be unique in the instance and can be duplicated across instances.
         * If no namespaces are available in the instance, the topic name must be unique both in the instance and across instances.
         * <p>
         * @return {@code this}
         * @param topic Property topic: The name of the topic you want to create. This parameter is required.
         */
        public Builder topic(final java.lang.String topic) {
            this.props.topic(topic);
            return this;
        }
        /**
         * Property topic: The name of the topic you want to create.
         * <p>
         * Note:
         * "CID" and "GID" are the reserved fields of a group ID, and they cannot be the start of a topic name.
         * If namespaces are available in the instance for which the topic is created, the topic name must be unique in the instance and can be duplicated across instances.
         * If no namespaces are available in the instance, the topic name must be unique both in the instance and across instances.
         * <p>
         * @return {@code this}
         * @param topic Property topic: The name of the topic you want to create. This parameter is required.
         */
        public Builder topic(final com.aliyun.ros.cdk.core.IResolvable topic) {
            this.props.topic(topic);
            return this;
        }

        /**
         * Property perm: Set the read-write mode for the topic Valid values.: 6: Both read and write operations are supported. 4: Write operation is prohibited. 2: Read operation is prohibited.
         * <p>
         * @return {@code this}
         * @param perm Property perm: Set the read-write mode for the topic Valid values.: 6: Both read and write operations are supported. 4: Write operation is prohibited. 2: Read operation is prohibited. This parameter is required.
         */
        public Builder perm(final java.lang.Number perm) {
            this.props.perm(perm);
            return this;
        }
        /**
         * Property perm: Set the read-write mode for the topic Valid values.: 6: Both read and write operations are supported. 4: Write operation is prohibited. 2: Read operation is prohibited.
         * <p>
         * @return {@code this}
         * @param perm Property perm: Set the read-write mode for the topic Valid values.: 6: Both read and write operations are supported. 4: Write operation is prohibited. 2: Read operation is prohibited. This parameter is required.
         */
        public Builder perm(final com.aliyun.ros.cdk.core.IResolvable perm) {
            this.props.perm(perm);
            return this;
        }

        /**
         * Property remark: The remarks on the request.
         * <p>
         * This parameter can be left blank.
         * <p>
         * @return {@code this}
         * @param remark Property remark: The remarks on the request. This parameter is required.
         */
        public Builder remark(final java.lang.String remark) {
            this.props.remark(remark);
            return this;
        }
        /**
         * Property remark: The remarks on the request.
         * <p>
         * This parameter can be left blank.
         * <p>
         * @return {@code this}
         * @param remark Property remark: The remarks on the request. This parameter is required.
         */
        public Builder remark(final com.aliyun.ros.cdk.core.IResolvable remark) {
            this.props.remark(remark);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.rocketmq.Topic}.
         */
        @Override
        public com.aliyun.ros.cdk.rocketmq.Topic build() {
            return new com.aliyun.ros.cdk.rocketmq.Topic(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
