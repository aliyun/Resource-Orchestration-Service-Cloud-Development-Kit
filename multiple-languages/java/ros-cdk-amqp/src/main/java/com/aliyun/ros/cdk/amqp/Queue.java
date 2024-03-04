package com.aliyun.ros.cdk.amqp;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::AMQP::Queue</code>, which is used to create a queue.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-03-01T09:16:49.917Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.amqp.$Module.class, fqn = "@alicloud/ros-cdk-amqp.Queue")
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
    public Queue(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.amqp.QueueProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public Queue(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.amqp.QueueProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute QueueName: The name of the queue.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrQueueName() {
        return software.amazon.jsii.Kernel.get(this, "attrQueueName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.amqp.QueueProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.amqp.QueueProps.class));
    }

    protected void setProps(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.amqp.QueueProps value) {
        software.amazon.jsii.Kernel.set(this, "props", java.util.Objects.requireNonNull(value, "props is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.amqp.Queue}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.amqp.Queue> {
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
        private final com.aliyun.ros.cdk.amqp.QueueProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.amqp.QueueProps.Builder();
        }

        /**
         * Property instanceId: InstanceId.
         * <p>
         * @return {@code this}
         * @param instanceId Property instanceId: InstanceId. This parameter is required.
         */
        public Builder instanceId(final java.lang.String instanceId) {
            this.props.instanceId(instanceId);
            return this;
        }
        /**
         * Property instanceId: InstanceId.
         * <p>
         * @return {@code this}
         * @param instanceId Property instanceId: InstanceId. This parameter is required.
         */
        public Builder instanceId(final com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.props.instanceId(instanceId);
            return this;
        }

        /**
         * Property queueName: The name of the queue.
         * <p>
         * @return {@code this}
         * @param queueName Property queueName: The name of the queue. This parameter is required.
         */
        public Builder queueName(final java.lang.String queueName) {
            this.props.queueName(queueName);
            return this;
        }
        /**
         * Property queueName: The name of the queue.
         * <p>
         * @return {@code this}
         * @param queueName Property queueName: The name of the queue. This parameter is required.
         */
        public Builder queueName(final com.aliyun.ros.cdk.core.IResolvable queueName) {
            this.props.queueName(queueName);
            return this;
        }

        /**
         * Property virtualHost: The name of the virtual host.
         * <p>
         * @return {@code this}
         * @param virtualHost Property virtualHost: The name of the virtual host. This parameter is required.
         */
        public Builder virtualHost(final java.lang.String virtualHost) {
            this.props.virtualHost(virtualHost);
            return this;
        }
        /**
         * Property virtualHost: The name of the virtual host.
         * <p>
         * @return {@code this}
         * @param virtualHost Property virtualHost: The name of the virtual host. This parameter is required.
         */
        public Builder virtualHost(final com.aliyun.ros.cdk.core.IResolvable virtualHost) {
            this.props.virtualHost(virtualHost);
            return this;
        }

        /**
         * Property autoDeleteState: Specifies whether the Auto Delete attribute is configured.
         * <p>
         * Valid values:
         * true: The Auto Delete attribute is configured. The queue is automatically deleted after the last subscription from consumers to this queue is canceled.
         * false: The Auto Delete attribute is not configured.
         * <p>
         * @return {@code this}
         * @param autoDeleteState Property autoDeleteState: Specifies whether the Auto Delete attribute is configured. This parameter is required.
         */
        public Builder autoDeleteState(final java.lang.Boolean autoDeleteState) {
            this.props.autoDeleteState(autoDeleteState);
            return this;
        }
        /**
         * Property autoDeleteState: Specifies whether the Auto Delete attribute is configured.
         * <p>
         * Valid values:
         * true: The Auto Delete attribute is configured. The queue is automatically deleted after the last subscription from consumers to this queue is canceled.
         * false: The Auto Delete attribute is not configured.
         * <p>
         * @return {@code this}
         * @param autoDeleteState Property autoDeleteState: Specifies whether the Auto Delete attribute is configured. This parameter is required.
         */
        public Builder autoDeleteState(final com.aliyun.ros.cdk.core.IResolvable autoDeleteState) {
            this.props.autoDeleteState(autoDeleteState);
            return this;
        }

        /**
         * Property autoExpireState: The validity period after which the queue is automatically deleted.
         * <p>
         * If the queue is not accessed within a specified period of time, it is automatically deleted.
         * <p>
         * @return {@code this}
         * @param autoExpireState Property autoExpireState: The validity period after which the queue is automatically deleted. This parameter is required.
         */
        public Builder autoExpireState(final java.lang.Number autoExpireState) {
            this.props.autoExpireState(autoExpireState);
            return this;
        }
        /**
         * Property autoExpireState: The validity period after which the queue is automatically deleted.
         * <p>
         * If the queue is not accessed within a specified period of time, it is automatically deleted.
         * <p>
         * @return {@code this}
         * @param autoExpireState Property autoExpireState: The validity period after which the queue is automatically deleted. This parameter is required.
         */
        public Builder autoExpireState(final com.aliyun.ros.cdk.core.IResolvable autoExpireState) {
            this.props.autoExpireState(autoExpireState);
            return this;
        }

        /**
         * Property deadLetterExchange: The dead-letter exchange.
         * <p>
         * A dead-letter exchange is used to receive rejected messages.
         * If a consumer rejects a message that cannot be retried, this message is routed to a specified dead-letter exchange.
         * Then, the dead-letter exchange routes the message to the queue that is bound to the dead-letter exchange.
         * <p>
         * @return {@code this}
         * @param deadLetterExchange Property deadLetterExchange: The dead-letter exchange. This parameter is required.
         */
        public Builder deadLetterExchange(final java.lang.String deadLetterExchange) {
            this.props.deadLetterExchange(deadLetterExchange);
            return this;
        }
        /**
         * Property deadLetterExchange: The dead-letter exchange.
         * <p>
         * A dead-letter exchange is used to receive rejected messages.
         * If a consumer rejects a message that cannot be retried, this message is routed to a specified dead-letter exchange.
         * Then, the dead-letter exchange routes the message to the queue that is bound to the dead-letter exchange.
         * <p>
         * @return {@code this}
         * @param deadLetterExchange Property deadLetterExchange: The dead-letter exchange. This parameter is required.
         */
        public Builder deadLetterExchange(final com.aliyun.ros.cdk.core.IResolvable deadLetterExchange) {
            this.props.deadLetterExchange(deadLetterExchange);
            return this;
        }

        /**
         * Property deadLetterRoutingKey: The dead letter routing key.
         * <p>
         * @return {@code this}
         * @param deadLetterRoutingKey Property deadLetterRoutingKey: The dead letter routing key. This parameter is required.
         */
        public Builder deadLetterRoutingKey(final java.lang.String deadLetterRoutingKey) {
            this.props.deadLetterRoutingKey(deadLetterRoutingKey);
            return this;
        }
        /**
         * Property deadLetterRoutingKey: The dead letter routing key.
         * <p>
         * @return {@code this}
         * @param deadLetterRoutingKey Property deadLetterRoutingKey: The dead letter routing key. This parameter is required.
         */
        public Builder deadLetterRoutingKey(final com.aliyun.ros.cdk.core.IResolvable deadLetterRoutingKey) {
            this.props.deadLetterRoutingKey(deadLetterRoutingKey);
            return this;
        }

        /**
         * Property exclusiveState: Specifies whether the queue is an exclusive queue.
         * <p>
         * Valid values:
         * true: The queue is an exclusive queue. It can be used only for the connection that declares the exclusive queue. After the connection is closed, the exclusive queue is automatically deleted.
         * false: The Auto Delete attribute is not configured.
         * <p>
         * @return {@code this}
         * @param exclusiveState Property exclusiveState: Specifies whether the queue is an exclusive queue. This parameter is required.
         */
        public Builder exclusiveState(final java.lang.Boolean exclusiveState) {
            this.props.exclusiveState(exclusiveState);
            return this;
        }
        /**
         * Property exclusiveState: Specifies whether the queue is an exclusive queue.
         * <p>
         * Valid values:
         * true: The queue is an exclusive queue. It can be used only for the connection that declares the exclusive queue. After the connection is closed, the exclusive queue is automatically deleted.
         * false: The Auto Delete attribute is not configured.
         * <p>
         * @return {@code this}
         * @param exclusiveState Property exclusiveState: Specifies whether the queue is an exclusive queue. This parameter is required.
         */
        public Builder exclusiveState(final com.aliyun.ros.cdk.core.IResolvable exclusiveState) {
            this.props.exclusiveState(exclusiveState);
            return this;
        }

        /**
         * Property maximumPriority: The priority function is not supported.
         * <p>
         * @return {@code this}
         * @param maximumPriority Property maximumPriority: The priority function is not supported. This parameter is required.
         */
        public Builder maximumPriority(final java.lang.Number maximumPriority) {
            this.props.maximumPriority(maximumPriority);
            return this;
        }
        /**
         * Property maximumPriority: The priority function is not supported.
         * <p>
         * @return {@code this}
         * @param maximumPriority Property maximumPriority: The priority function is not supported. This parameter is required.
         */
        public Builder maximumPriority(final com.aliyun.ros.cdk.core.IResolvable maximumPriority) {
            this.props.maximumPriority(maximumPriority);
            return this;
        }

        /**
         * Property maxLength: The maximum number of messages that can be stored in the queue.
         * <p>
         * If this threshold is exceeded, the earliest messages that are routed to the queue are discarded.
         * <p>
         * @return {@code this}
         * @param maxLength Property maxLength: The maximum number of messages that can be stored in the queue. This parameter is required.
         */
        public Builder maxLength(final java.lang.Number maxLength) {
            this.props.maxLength(maxLength);
            return this;
        }
        /**
         * Property maxLength: The maximum number of messages that can be stored in the queue.
         * <p>
         * If this threshold is exceeded, the earliest messages that are routed to the queue are discarded.
         * <p>
         * @return {@code this}
         * @param maxLength Property maxLength: The maximum number of messages that can be stored in the queue. This parameter is required.
         */
        public Builder maxLength(final com.aliyun.ros.cdk.core.IResolvable maxLength) {
            this.props.maxLength(maxLength);
            return this;
        }

        /**
         * Property messageTtl: The message TTL of the queue If a message is retained in the Queue longer than the configured message lifetime, the message expires.
         * <p>
         * The value of message lifetime must be a non-negative integer, up to 1 day.
         * The unit is milliseconds
         * <p>
         * @return {@code this}
         * @param messageTtl Property messageTtl: The message TTL of the queue If a message is retained in the Queue longer than the configured message lifetime, the message expires. This parameter is required.
         */
        public Builder messageTtl(final java.lang.Number messageTtl) {
            this.props.messageTtl(messageTtl);
            return this;
        }
        /**
         * Property messageTtl: The message TTL of the queue If a message is retained in the Queue longer than the configured message lifetime, the message expires.
         * <p>
         * The value of message lifetime must be a non-negative integer, up to 1 day.
         * The unit is milliseconds
         * <p>
         * @return {@code this}
         * @param messageTtl Property messageTtl: The message TTL of the queue If a message is retained in the Queue longer than the configured message lifetime, the message expires. This parameter is required.
         */
        public Builder messageTtl(final com.aliyun.ros.cdk.core.IResolvable messageTtl) {
            this.props.messageTtl(messageTtl);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.amqp.Queue}.
         */
        @Override
        public com.aliyun.ros.cdk.amqp.Queue build() {
            return new com.aliyun.ros.cdk.amqp.Queue(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
