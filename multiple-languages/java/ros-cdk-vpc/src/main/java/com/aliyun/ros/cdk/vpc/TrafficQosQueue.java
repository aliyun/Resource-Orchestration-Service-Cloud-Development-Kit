package com.aliyun.ros.cdk.vpc;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::VPC::TrafficQosQueue</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-05-07T04:16:55.309Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.TrafficQosQueue")
public class TrafficQosQueue extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.vpc.ITrafficQosQueue {

    protected TrafficQosQueue(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected TrafficQosQueue(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public TrafficQosQueue(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.TrafficQosQueueProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public TrafficQosQueue(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.TrafficQosQueueProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute BandwidthPercent: QoS queue bandwidth percentage.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrBandwidthPercent() {
        return software.amazon.jsii.Kernel.get(this, "attrBandwidthPercent", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute QosId: The ID of the QoS policy.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrQosId() {
        return software.amazon.jsii.Kernel.get(this, "attrQosId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute QueueDescription: The description of the QoS queue.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrQueueDescription() {
        return software.amazon.jsii.Kernel.get(this, "attrQueueDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute QueueId: The ID of the QoS queue.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrQueueId() {
        return software.amazon.jsii.Kernel.get(this, "attrQueueId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute QueueName: The name of the QoS queue.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrQueueName() {
        return software.amazon.jsii.Kernel.get(this, "attrQueueName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute QueueType: QoS queue type.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrQueueType() {
        return software.amazon.jsii.Kernel.get(this, "attrQueueType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.TrafficQosQueueProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.vpc.TrafficQosQueueProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.vpc.TrafficQosQueue}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.vpc.TrafficQosQueue> {
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
        private final com.aliyun.ros.cdk.vpc.TrafficQosQueueProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.vpc.TrafficQosQueueProps.Builder();
        }

        /**
         * Property qosId: The ID of the QoS policy.
         * <p>
         * @return {@code this}
         * @param qosId Property qosId: The ID of the QoS policy. This parameter is required.
         */
        public Builder qosId(final java.lang.String qosId) {
            this.props.qosId(qosId);
            return this;
        }
        /**
         * Property qosId: The ID of the QoS policy.
         * <p>
         * @return {@code this}
         * @param qosId Property qosId: The ID of the QoS policy. This parameter is required.
         */
        public Builder qosId(final com.aliyun.ros.cdk.core.IResolvable qosId) {
            this.props.qosId(qosId);
            return this;
        }

        /**
         * Property queueType: QoS queue type, value: - <strong>High</strong>: High priority queue.
         * <p>
         * <ul>
         * <li><strong>Medium</strong>: Normal priority queue.</li>
         * <li><strong>Default</strong>: the Default priority queue.</li>
         * </ul>
         * <p>
         * <blockquote>
         * <p>
         * Default priority queue cannot be created.
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param queueType Property queueType: QoS queue type, value: - <strong>High</strong>: High priority queue. This parameter is required.
         */
        public Builder queueType(final java.lang.String queueType) {
            this.props.queueType(queueType);
            return this;
        }
        /**
         * Property queueType: QoS queue type, value: - <strong>High</strong>: High priority queue.
         * <p>
         * <ul>
         * <li><strong>Medium</strong>: Normal priority queue.</li>
         * <li><strong>Default</strong>: the Default priority queue.</li>
         * </ul>
         * <p>
         * <blockquote>
         * <p>
         * Default priority queue cannot be created.
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param queueType Property queueType: QoS queue type, value: - <strong>High</strong>: High priority queue. This parameter is required.
         */
        public Builder queueType(final com.aliyun.ros.cdk.core.IResolvable queueType) {
            this.props.queueType(queueType);
            return this;
        }

        /**
         * Property bandwidthPercent: QoS queue bandwidth percentage.
         * <p>
         * <ul>
         * <li>When the QoS queue type is <strong>Medium</strong>, this field must be entered. Valid values: 1 to 100.</li>
         * <li>When the QoS queue type is <strong>Default</strong>, this field is "-".</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param bandwidthPercent Property bandwidthPercent: QoS queue bandwidth percentage. This parameter is required.
         */
        public Builder bandwidthPercent(final java.lang.String bandwidthPercent) {
            this.props.bandwidthPercent(bandwidthPercent);
            return this;
        }
        /**
         * Property bandwidthPercent: QoS queue bandwidth percentage.
         * <p>
         * <ul>
         * <li>When the QoS queue type is <strong>Medium</strong>, this field must be entered. Valid values: 1 to 100.</li>
         * <li>When the QoS queue type is <strong>Default</strong>, this field is "-".</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param bandwidthPercent Property bandwidthPercent: QoS queue bandwidth percentage. This parameter is required.
         */
        public Builder bandwidthPercent(final com.aliyun.ros.cdk.core.IResolvable bandwidthPercent) {
            this.props.bandwidthPercent(bandwidthPercent);
            return this;
        }

        /**
         * Property queueDescription: The description of the QoS queue.
         * <p>
         * The length is 0 to 256 characters and cannot start with 'http:// 'or 'https.
         * <p>
         * @return {@code this}
         * @param queueDescription Property queueDescription: The description of the QoS queue. This parameter is required.
         */
        public Builder queueDescription(final java.lang.String queueDescription) {
            this.props.queueDescription(queueDescription);
            return this;
        }
        /**
         * Property queueDescription: The description of the QoS queue.
         * <p>
         * The length is 0 to 256 characters and cannot start with 'http:// 'or 'https.
         * <p>
         * @return {@code this}
         * @param queueDescription Property queueDescription: The description of the QoS queue. This parameter is required.
         */
        public Builder queueDescription(final com.aliyun.ros.cdk.core.IResolvable queueDescription) {
            this.props.queueDescription(queueDescription);
            return this;
        }

        /**
         * Property queueName: The name of the QoS queue.
         * <p>
         * The length is 0 to 128 characters and cannot start with 'http:// 'or 'https.
         * <p>
         * @return {@code this}
         * @param queueName Property queueName: The name of the QoS queue. This parameter is required.
         */
        public Builder queueName(final java.lang.String queueName) {
            this.props.queueName(queueName);
            return this;
        }
        /**
         * Property queueName: The name of the QoS queue.
         * <p>
         * The length is 0 to 128 characters and cannot start with 'http:// 'or 'https.
         * <p>
         * @return {@code this}
         * @param queueName Property queueName: The name of the QoS queue. This parameter is required.
         */
        public Builder queueName(final com.aliyun.ros.cdk.core.IResolvable queueName) {
            this.props.queueName(queueName);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.vpc.TrafficQosQueue}.
         */
        @Override
        public com.aliyun.ros.cdk.vpc.TrafficQosQueue build() {
            return new com.aliyun.ros.cdk.vpc.TrafficQosQueue(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
