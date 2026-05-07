package com.aliyun.ros.cdk.cen;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::CEN::InterRegionTrafficQosQueue</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-05-07T04:16:46.332Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cen.$Module.class, fqn = "@alicloud/ros-cdk-cen.InterRegionTrafficQosQueue")
public class InterRegionTrafficQosQueue extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.cen.IInterRegionTrafficQosQueue {

    protected InterRegionTrafficQosQueue(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected InterRegionTrafficQosQueue(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public InterRegionTrafficQosQueue(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cen.InterRegionTrafficQosQueueProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public InterRegionTrafficQosQueue(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cen.InterRegionTrafficQosQueueProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute Bandwidth: The maximum absolute bandwidth value that can be allocated to the queue.
     * <p>
     * Unit: Mbit/s.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrBandwidth() {
        return software.amazon.jsii.Kernel.get(this, "attrBandwidth", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Dscps: The DSCP value of the traffic packet to be matched in the current queue.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDscps() {
        return software.amazon.jsii.Kernel.get(this, "attrDscps", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute EffectiveBandwidth: The actual bandwidth value of the current queue.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrEffectiveBandwidth() {
        return software.amazon.jsii.Kernel.get(this, "attrEffectiveBandwidth", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute InterRegionTrafficQosQueueDescription: The description of the queue.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrInterRegionTrafficQosQueueDescription() {
        return software.amazon.jsii.Kernel.get(this, "attrInterRegionTrafficQosQueueDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute InterRegionTrafficQosQueueId: The ID of the queue.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrInterRegionTrafficQosQueueId() {
        return software.amazon.jsii.Kernel.get(this, "attrInterRegionTrafficQosQueueId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute InterRegionTrafficQosQueueName: The name of the queue.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrInterRegionTrafficQosQueueName() {
        return software.amazon.jsii.Kernel.get(this, "attrInterRegionTrafficQosQueueName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute RemainBandwidthPercent: The maximum percentage of inter-region bandwidth that can be allocated to the queue.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrRemainBandwidthPercent() {
        return software.amazon.jsii.Kernel.get(this, "attrRemainBandwidthPercent", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute TrafficQosPolicyId: The ID of the QoS policy.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrTrafficQosPolicyId() {
        return software.amazon.jsii.Kernel.get(this, "attrTrafficQosPolicyId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cen.InterRegionTrafficQosQueueProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.cen.InterRegionTrafficQosQueueProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.cen.InterRegionTrafficQosQueue}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.cen.InterRegionTrafficQosQueue> {
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
        private final com.aliyun.ros.cdk.cen.InterRegionTrafficQosQueueProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.cen.InterRegionTrafficQosQueueProps.Builder();
        }

        /**
         * Property dscps: The DSCP value of the traffic packet to be matched in the current queue, ranging from 0 to 63.
         * <p>
         * @return {@code this}
         * @param dscps Property dscps: The DSCP value of the traffic packet to be matched in the current queue, ranging from 0 to 63. This parameter is required.
         */
        public Builder dscps(final com.aliyun.ros.cdk.core.IResolvable dscps) {
            this.props.dscps(dscps);
            return this;
        }
        /**
         * Property dscps: The DSCP value of the traffic packet to be matched in the current queue, ranging from 0 to 63.
         * <p>
         * @return {@code this}
         * @param dscps Property dscps: The DSCP value of the traffic packet to be matched in the current queue, ranging from 0 to 63. This parameter is required.
         */
        public Builder dscps(final java.util.List<? extends java.lang.Object> dscps) {
            this.props.dscps(dscps);
            return this;
        }

        /**
         * Property trafficQosPolicyId: The ID of the QoS policy.
         * <p>
         * @return {@code this}
         * @param trafficQosPolicyId Property trafficQosPolicyId: The ID of the QoS policy. This parameter is required.
         */
        public Builder trafficQosPolicyId(final java.lang.String trafficQosPolicyId) {
            this.props.trafficQosPolicyId(trafficQosPolicyId);
            return this;
        }
        /**
         * Property trafficQosPolicyId: The ID of the QoS policy.
         * <p>
         * @return {@code this}
         * @param trafficQosPolicyId Property trafficQosPolicyId: The ID of the QoS policy. This parameter is required.
         */
        public Builder trafficQosPolicyId(final com.aliyun.ros.cdk.core.IResolvable trafficQosPolicyId) {
            this.props.trafficQosPolicyId(trafficQosPolicyId);
            return this;
        }

        /**
         * Property bandwidth: The maximum absolute bandwidth value that can be allocated to the queue.
         * <p>
         * Unit: Mbit/s.
         * <p>
         * <ul>
         * <li>The value specifies an absolute bandwidth. For example, a value of 20 specifies that the queue can consume at most 20 Mbit/s of bandwidth.</li>
         * <li>The sum of the bandwidth values specified for all queues that belong to the same inter-region connection cannot exceed the maximum bandwidth of the inter-region connection.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param bandwidth Property bandwidth: The maximum absolute bandwidth value that can be allocated to the queue. This parameter is required.
         */
        public Builder bandwidth(final java.lang.Number bandwidth) {
            this.props.bandwidth(bandwidth);
            return this;
        }
        /**
         * Property bandwidth: The maximum absolute bandwidth value that can be allocated to the queue.
         * <p>
         * Unit: Mbit/s.
         * <p>
         * <ul>
         * <li>The value specifies an absolute bandwidth. For example, a value of 20 specifies that the queue can consume at most 20 Mbit/s of bandwidth.</li>
         * <li>The sum of the bandwidth values specified for all queues that belong to the same inter-region connection cannot exceed the maximum bandwidth of the inter-region connection.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param bandwidth Property bandwidth: The maximum absolute bandwidth value that can be allocated to the queue. This parameter is required.
         */
        public Builder bandwidth(final com.aliyun.ros.cdk.core.IResolvable bandwidth) {
            this.props.bandwidth(bandwidth);
            return this;
        }

        /**
         * Property interRegionTrafficQosQueueDescription: The description of the queue.
         * <p>
         * This parameter is optional. If you enter a description, it must be 1 to 256 characters in length and cannot start with http:// or https://.
         * <p>
         * @return {@code this}
         * @param interRegionTrafficQosQueueDescription Property interRegionTrafficQosQueueDescription: The description of the queue. This parameter is required.
         */
        public Builder interRegionTrafficQosQueueDescription(final java.lang.String interRegionTrafficQosQueueDescription) {
            this.props.interRegionTrafficQosQueueDescription(interRegionTrafficQosQueueDescription);
            return this;
        }
        /**
         * Property interRegionTrafficQosQueueDescription: The description of the queue.
         * <p>
         * This parameter is optional. If you enter a description, it must be 1 to 256 characters in length and cannot start with http:// or https://.
         * <p>
         * @return {@code this}
         * @param interRegionTrafficQosQueueDescription Property interRegionTrafficQosQueueDescription: The description of the queue. This parameter is required.
         */
        public Builder interRegionTrafficQosQueueDescription(final com.aliyun.ros.cdk.core.IResolvable interRegionTrafficQosQueueDescription) {
            this.props.interRegionTrafficQosQueueDescription(interRegionTrafficQosQueueDescription);
            return this;
        }

        /**
         * Property interRegionTrafficQosQueueName: The name of the queue.
         * <p>
         * The name can be empty or 1 to 128 characters in length, and cannot start with http:// or https://.
         * <p>
         * @return {@code this}
         * @param interRegionTrafficQosQueueName Property interRegionTrafficQosQueueName: The name of the queue. This parameter is required.
         */
        public Builder interRegionTrafficQosQueueName(final java.lang.String interRegionTrafficQosQueueName) {
            this.props.interRegionTrafficQosQueueName(interRegionTrafficQosQueueName);
            return this;
        }
        /**
         * Property interRegionTrafficQosQueueName: The name of the queue.
         * <p>
         * The name can be empty or 1 to 128 characters in length, and cannot start with http:// or https://.
         * <p>
         * @return {@code this}
         * @param interRegionTrafficQosQueueName Property interRegionTrafficQosQueueName: The name of the queue. This parameter is required.
         */
        public Builder interRegionTrafficQosQueueName(final com.aliyun.ros.cdk.core.IResolvable interRegionTrafficQosQueueName) {
            this.props.interRegionTrafficQosQueueName(interRegionTrafficQosQueueName);
            return this;
        }

        /**
         * Property remainBandwidthPercent: The maximum percentage of inter-region bandwidth that can be allocated to the queue.
         * <p>
         * <ul>
         * <li>Unit: percentage. For example, a value of 20 specifies that the queue can consume at most 20% of inter-region bandwidth.
         * <p>
         * <ul>
         * <li>The sum of the percentage values specified for all queues that belong to the same inter-region connection cannot exceed 100%.</li>
         * </ul></li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param remainBandwidthPercent Property remainBandwidthPercent: The maximum percentage of inter-region bandwidth that can be allocated to the queue. This parameter is required.
         */
        public Builder remainBandwidthPercent(final java.lang.Number remainBandwidthPercent) {
            this.props.remainBandwidthPercent(remainBandwidthPercent);
            return this;
        }
        /**
         * Property remainBandwidthPercent: The maximum percentage of inter-region bandwidth that can be allocated to the queue.
         * <p>
         * <ul>
         * <li>Unit: percentage. For example, a value of 20 specifies that the queue can consume at most 20% of inter-region bandwidth.
         * <p>
         * <ul>
         * <li>The sum of the percentage values specified for all queues that belong to the same inter-region connection cannot exceed 100%.</li>
         * </ul></li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param remainBandwidthPercent Property remainBandwidthPercent: The maximum percentage of inter-region bandwidth that can be allocated to the queue. This parameter is required.
         */
        public Builder remainBandwidthPercent(final com.aliyun.ros.cdk.core.IResolvable remainBandwidthPercent) {
            this.props.remainBandwidthPercent(remainBandwidthPercent);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.cen.InterRegionTrafficQosQueue}.
         */
        @Override
        public com.aliyun.ros.cdk.cen.InterRegionTrafficQosQueue build() {
            return new com.aliyun.ros.cdk.cen.InterRegionTrafficQosQueue(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
