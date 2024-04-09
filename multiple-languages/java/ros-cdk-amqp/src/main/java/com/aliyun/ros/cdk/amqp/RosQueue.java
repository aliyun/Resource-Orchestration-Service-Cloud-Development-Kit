package com.aliyun.ros.cdk.amqp;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::AMQP::Queue</code>, which is used to create a queue.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-04-09T06:05:30.252Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.amqp.$Module.class, fqn = "@alicloud/ros-cdk-amqp.RosQueue")
public class RosQueue extends com.aliyun.ros.cdk.core.RosResource {

    protected RosQueue(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosQueue(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.amqp.RosQueue.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosQueue(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.amqp.RosQueueProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), java.util.Objects.requireNonNull(enableResourcePropertyConstraint, "enableResourcePropertyConstraint is required") });
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> renderProperties(final @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> props) {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.call(this, "renderProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class)), new Object[] { java.util.Objects.requireNonNull(props, "props is required") }));
    }

    /**
     * The resource type name for this resource class.
     */
    public final static java.lang.String ROS_RESOURCE_TYPE_NAME;

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrQueueName() {
        return software.amazon.jsii.Kernel.get(this, "attrQueueName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "instanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setInstanceId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "instanceId", java.util.Objects.requireNonNull(value, "instanceId is required"));
    }

    /**
     */
    public void setInstanceId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "instanceId", java.util.Objects.requireNonNull(value, "instanceId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getQueueName() {
        return software.amazon.jsii.Kernel.get(this, "queueName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setQueueName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "queueName", java.util.Objects.requireNonNull(value, "queueName is required"));
    }

    /**
     */
    public void setQueueName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "queueName", java.util.Objects.requireNonNull(value, "queueName is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getVirtualHost() {
        return software.amazon.jsii.Kernel.get(this, "virtualHost", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setVirtualHost(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "virtualHost", java.util.Objects.requireNonNull(value, "virtualHost is required"));
    }

    /**
     */
    public void setVirtualHost(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "virtualHost", java.util.Objects.requireNonNull(value, "virtualHost is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAutoDeleteState() {
        return software.amazon.jsii.Kernel.get(this, "autoDeleteState", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAutoDeleteState(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "autoDeleteState", value);
    }

    /**
     */
    public void setAutoDeleteState(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "autoDeleteState", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAutoExpireState() {
        return software.amazon.jsii.Kernel.get(this, "autoExpireState", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAutoExpireState(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "autoExpireState", value);
    }

    /**
     */
    public void setAutoExpireState(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "autoExpireState", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDeadLetterExchange() {
        return software.amazon.jsii.Kernel.get(this, "deadLetterExchange", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDeadLetterExchange(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "deadLetterExchange", value);
    }

    /**
     */
    public void setDeadLetterExchange(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "deadLetterExchange", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDeadLetterRoutingKey() {
        return software.amazon.jsii.Kernel.get(this, "deadLetterRoutingKey", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDeadLetterRoutingKey(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "deadLetterRoutingKey", value);
    }

    /**
     */
    public void setDeadLetterRoutingKey(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "deadLetterRoutingKey", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getExclusiveState() {
        return software.amazon.jsii.Kernel.get(this, "exclusiveState", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setExclusiveState(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "exclusiveState", value);
    }

    /**
     */
    public void setExclusiveState(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "exclusiveState", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getMaximumPriority() {
        return software.amazon.jsii.Kernel.get(this, "maximumPriority", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setMaximumPriority(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "maximumPriority", value);
    }

    /**
     */
    public void setMaximumPriority(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "maximumPriority", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getMaxLength() {
        return software.amazon.jsii.Kernel.get(this, "maxLength", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setMaxLength(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "maxLength", value);
    }

    /**
     */
    public void setMaxLength(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "maxLength", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getMessageTtl() {
        return software.amazon.jsii.Kernel.get(this, "messageTtl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setMessageTtl(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "messageTtl", value);
    }

    /**
     */
    public void setMessageTtl(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "messageTtl", value);
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.amqp.RosQueue}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.amqp.RosQueue> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
         * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
         * @param enableResourcePropertyConstraint This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.amqp.RosQueueProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.amqp.RosQueueProps.Builder();
        }

        /**
         * @return {@code this}
         * @param instanceId This parameter is required.
         */
        public Builder instanceId(final java.lang.String instanceId) {
            this.props.instanceId(instanceId);
            return this;
        }
        /**
         * @return {@code this}
         * @param instanceId This parameter is required.
         */
        public Builder instanceId(final com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.props.instanceId(instanceId);
            return this;
        }

        /**
         * @return {@code this}
         * @param queueName This parameter is required.
         */
        public Builder queueName(final java.lang.String queueName) {
            this.props.queueName(queueName);
            return this;
        }
        /**
         * @return {@code this}
         * @param queueName This parameter is required.
         */
        public Builder queueName(final com.aliyun.ros.cdk.core.IResolvable queueName) {
            this.props.queueName(queueName);
            return this;
        }

        /**
         * @return {@code this}
         * @param virtualHost This parameter is required.
         */
        public Builder virtualHost(final java.lang.String virtualHost) {
            this.props.virtualHost(virtualHost);
            return this;
        }
        /**
         * @return {@code this}
         * @param virtualHost This parameter is required.
         */
        public Builder virtualHost(final com.aliyun.ros.cdk.core.IResolvable virtualHost) {
            this.props.virtualHost(virtualHost);
            return this;
        }

        /**
         * @return {@code this}
         * @param autoDeleteState This parameter is required.
         */
        public Builder autoDeleteState(final java.lang.Boolean autoDeleteState) {
            this.props.autoDeleteState(autoDeleteState);
            return this;
        }
        /**
         * @return {@code this}
         * @param autoDeleteState This parameter is required.
         */
        public Builder autoDeleteState(final com.aliyun.ros.cdk.core.IResolvable autoDeleteState) {
            this.props.autoDeleteState(autoDeleteState);
            return this;
        }

        /**
         * @return {@code this}
         * @param autoExpireState This parameter is required.
         */
        public Builder autoExpireState(final java.lang.Number autoExpireState) {
            this.props.autoExpireState(autoExpireState);
            return this;
        }
        /**
         * @return {@code this}
         * @param autoExpireState This parameter is required.
         */
        public Builder autoExpireState(final com.aliyun.ros.cdk.core.IResolvable autoExpireState) {
            this.props.autoExpireState(autoExpireState);
            return this;
        }

        /**
         * @return {@code this}
         * @param deadLetterExchange This parameter is required.
         */
        public Builder deadLetterExchange(final java.lang.String deadLetterExchange) {
            this.props.deadLetterExchange(deadLetterExchange);
            return this;
        }
        /**
         * @return {@code this}
         * @param deadLetterExchange This parameter is required.
         */
        public Builder deadLetterExchange(final com.aliyun.ros.cdk.core.IResolvable deadLetterExchange) {
            this.props.deadLetterExchange(deadLetterExchange);
            return this;
        }

        /**
         * @return {@code this}
         * @param deadLetterRoutingKey This parameter is required.
         */
        public Builder deadLetterRoutingKey(final java.lang.String deadLetterRoutingKey) {
            this.props.deadLetterRoutingKey(deadLetterRoutingKey);
            return this;
        }
        /**
         * @return {@code this}
         * @param deadLetterRoutingKey This parameter is required.
         */
        public Builder deadLetterRoutingKey(final com.aliyun.ros.cdk.core.IResolvable deadLetterRoutingKey) {
            this.props.deadLetterRoutingKey(deadLetterRoutingKey);
            return this;
        }

        /**
         * @return {@code this}
         * @param exclusiveState This parameter is required.
         */
        public Builder exclusiveState(final java.lang.Boolean exclusiveState) {
            this.props.exclusiveState(exclusiveState);
            return this;
        }
        /**
         * @return {@code this}
         * @param exclusiveState This parameter is required.
         */
        public Builder exclusiveState(final com.aliyun.ros.cdk.core.IResolvable exclusiveState) {
            this.props.exclusiveState(exclusiveState);
            return this;
        }

        /**
         * @return {@code this}
         * @param maximumPriority This parameter is required.
         */
        public Builder maximumPriority(final java.lang.Number maximumPriority) {
            this.props.maximumPriority(maximumPriority);
            return this;
        }
        /**
         * @return {@code this}
         * @param maximumPriority This parameter is required.
         */
        public Builder maximumPriority(final com.aliyun.ros.cdk.core.IResolvable maximumPriority) {
            this.props.maximumPriority(maximumPriority);
            return this;
        }

        /**
         * @return {@code this}
         * @param maxLength This parameter is required.
         */
        public Builder maxLength(final java.lang.Number maxLength) {
            this.props.maxLength(maxLength);
            return this;
        }
        /**
         * @return {@code this}
         * @param maxLength This parameter is required.
         */
        public Builder maxLength(final com.aliyun.ros.cdk.core.IResolvable maxLength) {
            this.props.maxLength(maxLength);
            return this;
        }

        /**
         * @return {@code this}
         * @param messageTtl This parameter is required.
         */
        public Builder messageTtl(final java.lang.Number messageTtl) {
            this.props.messageTtl(messageTtl);
            return this;
        }
        /**
         * @return {@code this}
         * @param messageTtl This parameter is required.
         */
        public Builder messageTtl(final com.aliyun.ros.cdk.core.IResolvable messageTtl) {
            this.props.messageTtl(messageTtl);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.amqp.RosQueue}.
         */
        @Override
        public com.aliyun.ros.cdk.amqp.RosQueue build() {
            return new com.aliyun.ros.cdk.amqp.RosQueue(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
