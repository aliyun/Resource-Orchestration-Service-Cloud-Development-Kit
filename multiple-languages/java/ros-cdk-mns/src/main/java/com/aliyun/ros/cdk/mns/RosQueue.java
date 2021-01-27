package com.aliyun.ros.cdk.mns;

/**
 * A ROS template type:  `ALIYUN::MNS::Queue`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-01-26T09:47:34.080Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.mns.$Module.class, fqn = "@alicloud/ros-cdk-mns.RosQueue")
public class RosQueue extends com.aliyun.ros.cdk.core.RosResource {

    protected RosQueue(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosQueue(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.mns.RosQueue.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * Create a new `ALIYUN::MNS::Queue`.
     * <p>
     * @param scope - scope in which this resource is defined. This parameter is required.
     * @param id - scoped id of the resource. This parameter is required.
     * @param props - resource properties. This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosQueue(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.mns.RosQueueProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrArnWithSlash() {
        return software.amazon.jsii.Kernel.get(this, "attrArnWithSlash", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrQueueUrl() {
        return software.amazon.jsii.Kernel.get(this, "attrQueueUrl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
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
    public @org.jetbrains.annotations.NotNull java.lang.String getQueueName() {
        return software.amazon.jsii.Kernel.get(this, "queueName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setQueueName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "queueName", java.util.Objects.requireNonNull(value, "queueName is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Number getDelaySeconds() {
        return software.amazon.jsii.Kernel.get(this, "delaySeconds", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
    }

    /**
     */
    public void setDelaySeconds(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "delaySeconds", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getLoggingEnabled() {
        return software.amazon.jsii.Kernel.get(this, "loggingEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setLoggingEnabled(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "loggingEnabled", value);
    }

    /**
     */
    public void setLoggingEnabled(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "loggingEnabled", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Number getMaximumMessageSize() {
        return software.amazon.jsii.Kernel.get(this, "maximumMessageSize", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
    }

    /**
     */
    public void setMaximumMessageSize(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "maximumMessageSize", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Number getMessageRetentionPeriod() {
        return software.amazon.jsii.Kernel.get(this, "messageRetentionPeriod", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
    }

    /**
     */
    public void setMessageRetentionPeriod(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "messageRetentionPeriod", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Number getPollingWaitSeconds() {
        return software.amazon.jsii.Kernel.get(this, "pollingWaitSeconds", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
    }

    /**
     */
    public void setPollingWaitSeconds(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "pollingWaitSeconds", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Number getVisibilityTimeout() {
        return software.amazon.jsii.Kernel.get(this, "visibilityTimeout", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
    }

    /**
     */
    public void setVisibilityTimeout(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "visibilityTimeout", value);
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.mns.RosQueue}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.mns.RosQueue> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope - scope in which this resource is defined. This parameter is required.
         * @param id - scoped id of the resource. This parameter is required.
         * @param enableResourcePropertyConstraint This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.mns.RosQueueProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.mns.RosQueueProps.Builder();
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
         * @param delaySeconds This parameter is required.
         */
        public Builder delaySeconds(final java.lang.Number delaySeconds) {
            this.props.delaySeconds(delaySeconds);
            return this;
        }

        /**
         * @return {@code this}
         * @param loggingEnabled This parameter is required.
         */
        public Builder loggingEnabled(final java.lang.Boolean loggingEnabled) {
            this.props.loggingEnabled(loggingEnabled);
            return this;
        }
        /**
         * @return {@code this}
         * @param loggingEnabled This parameter is required.
         */
        public Builder loggingEnabled(final com.aliyun.ros.cdk.core.IResolvable loggingEnabled) {
            this.props.loggingEnabled(loggingEnabled);
            return this;
        }

        /**
         * @return {@code this}
         * @param maximumMessageSize This parameter is required.
         */
        public Builder maximumMessageSize(final java.lang.Number maximumMessageSize) {
            this.props.maximumMessageSize(maximumMessageSize);
            return this;
        }

        /**
         * @return {@code this}
         * @param messageRetentionPeriod This parameter is required.
         */
        public Builder messageRetentionPeriod(final java.lang.Number messageRetentionPeriod) {
            this.props.messageRetentionPeriod(messageRetentionPeriod);
            return this;
        }

        /**
         * @return {@code this}
         * @param pollingWaitSeconds This parameter is required.
         */
        public Builder pollingWaitSeconds(final java.lang.Number pollingWaitSeconds) {
            this.props.pollingWaitSeconds(pollingWaitSeconds);
            return this;
        }

        /**
         * @return {@code this}
         * @param visibilityTimeout This parameter is required.
         */
        public Builder visibilityTimeout(final java.lang.Number visibilityTimeout) {
            this.props.visibilityTimeout(visibilityTimeout);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.mns.RosQueue}.
         */
        @Override
        public com.aliyun.ros.cdk.mns.RosQueue build() {
            return new com.aliyun.ros.cdk.mns.RosQueue(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
