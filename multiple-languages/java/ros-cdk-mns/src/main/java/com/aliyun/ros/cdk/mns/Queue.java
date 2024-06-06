package com.aliyun.ros.cdk.mns;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::MNS::Queue</code>, which is used to create a queue to contain messages.
 * <p>
 * Queues can be classified into standard and delayed queues.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-06T03:35:15.811Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.mns.$Module.class, fqn = "@alicloud/ros-cdk-mns.Queue")
public class Queue extends com.aliyun.ros.cdk.core.Resource {

    protected Queue(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Queue(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public Queue(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.mns.QueueProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public Queue(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.mns.QueueProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute ARN.WithSlash: The ARN: acs:mns:$region:$accountid:/queues/$queueName.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrArnWithSlash() {
        return software.amazon.jsii.Kernel.get(this, "attrArnWithSlash", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute QueueName: Queue name.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrQueueName() {
        return software.amazon.jsii.Kernel.get(this, "attrQueueName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute QueueUrl: URL of created queue.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrQueueUrl() {
        return software.amazon.jsii.Kernel.get(this, "attrQueueUrl", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.mns.QueueProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.mns.QueueProps.class));
    }

    protected void setProps(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.mns.QueueProps value) {
        software.amazon.jsii.Kernel.set(this, "props", java.util.Objects.requireNonNull(value, "props is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.mns.Queue}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.mns.Queue> {
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
        private final com.aliyun.ros.cdk.mns.QueueProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.mns.QueueProps.Builder();
        }

        /**
         * Property queueName: Queue name.
         * <p>
         * @return {@code this}
         * @param queueName Property queueName: Queue name. This parameter is required.
         */
        public Builder queueName(final java.lang.String queueName) {
            this.props.queueName(queueName);
            return this;
        }
        /**
         * Property queueName: Queue name.
         * <p>
         * @return {@code this}
         * @param queueName Property queueName: Queue name. This parameter is required.
         */
        public Builder queueName(final com.aliyun.ros.cdk.core.IResolvable queueName) {
            this.props.queueName(queueName);
            return this;
        }

        /**
         * Property delaySeconds: It is measured in seconds.
         * <p>
         * All messages sent to the queue can be consumed until the DelaySeconds expires.
         * An integer between 0 and 604800 (7 days). The default value is 0
         * <p>
         * @return {@code this}
         * @param delaySeconds Property delaySeconds: It is measured in seconds. This parameter is required.
         */
        public Builder delaySeconds(final java.lang.Number delaySeconds) {
            this.props.delaySeconds(delaySeconds);
            return this;
        }
        /**
         * Property delaySeconds: It is measured in seconds.
         * <p>
         * All messages sent to the queue can be consumed until the DelaySeconds expires.
         * An integer between 0 and 604800 (7 days). The default value is 0
         * <p>
         * @return {@code this}
         * @param delaySeconds Property delaySeconds: It is measured in seconds. This parameter is required.
         */
        public Builder delaySeconds(final com.aliyun.ros.cdk.core.IResolvable delaySeconds) {
            this.props.delaySeconds(delaySeconds);
            return this;
        }

        /**
         * Property loggingEnabled: Whether to enable log management.
         * <p>
         * "true" indicates that log management is enabled, whereas "false" indicates that log management is disabled.
         * The default value is false
         * <p>
         * @return {@code this}
         * @param loggingEnabled Property loggingEnabled: Whether to enable log management. This parameter is required.
         */
        public Builder loggingEnabled(final java.lang.Boolean loggingEnabled) {
            this.props.loggingEnabled(loggingEnabled);
            return this;
        }
        /**
         * Property loggingEnabled: Whether to enable log management.
         * <p>
         * "true" indicates that log management is enabled, whereas "false" indicates that log management is disabled.
         * The default value is false
         * <p>
         * @return {@code this}
         * @param loggingEnabled Property loggingEnabled: Whether to enable log management. This parameter is required.
         */
        public Builder loggingEnabled(final com.aliyun.ros.cdk.core.IResolvable loggingEnabled) {
            this.props.loggingEnabled(loggingEnabled);
            return this;
        }

        /**
         * Property maximumMessageSize: Maximum body length of a message sent to the queue, measured in bytes.
         * <p>
         * An integer between 1024 (1K) and 65536 (64K). The default value is 65536 (64K).
         * <p>
         * @return {@code this}
         * @param maximumMessageSize Property maximumMessageSize: Maximum body length of a message sent to the queue, measured in bytes. This parameter is required.
         */
        public Builder maximumMessageSize(final java.lang.Number maximumMessageSize) {
            this.props.maximumMessageSize(maximumMessageSize);
            return this;
        }
        /**
         * Property maximumMessageSize: Maximum body length of a message sent to the queue, measured in bytes.
         * <p>
         * An integer between 1024 (1K) and 65536 (64K). The default value is 65536 (64K).
         * <p>
         * @return {@code this}
         * @param maximumMessageSize Property maximumMessageSize: Maximum body length of a message sent to the queue, measured in bytes. This parameter is required.
         */
        public Builder maximumMessageSize(final com.aliyun.ros.cdk.core.IResolvable maximumMessageSize) {
            this.props.maximumMessageSize(maximumMessageSize);
            return this;
        }

        /**
         * Property messageRetentionPeriod: Maximum lifetime of the message in the queue, measured in seconds.
         * <p>
         * After the time specified by this parameter expires, the message will be deleted no matter whether it has been consumed or not.
         * An integer between 60 (1 minute) and 1296000 (15 days). The default value is 345600 (4 days)
         * <p>
         * @return {@code this}
         * @param messageRetentionPeriod Property messageRetentionPeriod: Maximum lifetime of the message in the queue, measured in seconds. This parameter is required.
         */
        public Builder messageRetentionPeriod(final java.lang.Number messageRetentionPeriod) {
            this.props.messageRetentionPeriod(messageRetentionPeriod);
            return this;
        }
        /**
         * Property messageRetentionPeriod: Maximum lifetime of the message in the queue, measured in seconds.
         * <p>
         * After the time specified by this parameter expires, the message will be deleted no matter whether it has been consumed or not.
         * An integer between 60 (1 minute) and 1296000 (15 days). The default value is 345600 (4 days)
         * <p>
         * @return {@code this}
         * @param messageRetentionPeriod Property messageRetentionPeriod: Maximum lifetime of the message in the queue, measured in seconds. This parameter is required.
         */
        public Builder messageRetentionPeriod(final com.aliyun.ros.cdk.core.IResolvable messageRetentionPeriod) {
            this.props.messageRetentionPeriod(messageRetentionPeriod);
            return this;
        }

        /**
         * Property pollingWaitSeconds: It is the maximum time that a ReceiveMessage request could be waiting for any incoming messages, while there are no message in the queue.
         * <p>
         * Measured in seconds.
         * An integer between 0 and 30 seconds. The default value is 0 (seconds)
         * <p>
         * @return {@code this}
         * @param pollingWaitSeconds Property pollingWaitSeconds: It is the maximum time that a ReceiveMessage request could be waiting for any incoming messages, while there are no message in the queue. This parameter is required.
         */
        public Builder pollingWaitSeconds(final java.lang.Number pollingWaitSeconds) {
            this.props.pollingWaitSeconds(pollingWaitSeconds);
            return this;
        }
        /**
         * Property pollingWaitSeconds: It is the maximum time that a ReceiveMessage request could be waiting for any incoming messages, while there are no message in the queue.
         * <p>
         * Measured in seconds.
         * An integer between 0 and 30 seconds. The default value is 0 (seconds)
         * <p>
         * @return {@code this}
         * @param pollingWaitSeconds Property pollingWaitSeconds: It is the maximum time that a ReceiveMessage request could be waiting for any incoming messages, while there are no message in the queue. This parameter is required.
         */
        public Builder pollingWaitSeconds(final com.aliyun.ros.cdk.core.IResolvable pollingWaitSeconds) {
            this.props.pollingWaitSeconds(pollingWaitSeconds);
            return this;
        }

        /**
         * Property visibilityTimeout: Duration in which a message stays in Inactive status after it is consumed from the queue.
         * <p>
         * Measured in seconds.
         * An integer between 1 and 43200 (12 hours). The default value is 30 (seconds)
         * <p>
         * @return {@code this}
         * @param visibilityTimeout Property visibilityTimeout: Duration in which a message stays in Inactive status after it is consumed from the queue. This parameter is required.
         */
        public Builder visibilityTimeout(final java.lang.Number visibilityTimeout) {
            this.props.visibilityTimeout(visibilityTimeout);
            return this;
        }
        /**
         * Property visibilityTimeout: Duration in which a message stays in Inactive status after it is consumed from the queue.
         * <p>
         * Measured in seconds.
         * An integer between 1 and 43200 (12 hours). The default value is 30 (seconds)
         * <p>
         * @return {@code this}
         * @param visibilityTimeout Property visibilityTimeout: Duration in which a message stays in Inactive status after it is consumed from the queue. This parameter is required.
         */
        public Builder visibilityTimeout(final com.aliyun.ros.cdk.core.IResolvable visibilityTimeout) {
            this.props.visibilityTimeout(visibilityTimeout);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.mns.Queue}.
         */
        @Override
        public com.aliyun.ros.cdk.mns.Queue build() {
            return new com.aliyun.ros.cdk.mns.Queue(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
