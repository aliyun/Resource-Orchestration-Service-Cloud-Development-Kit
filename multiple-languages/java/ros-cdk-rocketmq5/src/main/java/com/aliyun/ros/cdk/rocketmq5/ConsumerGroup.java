package com.aliyun.ros.cdk.rocketmq5;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::ROCKETMQ5::ConsumerGroup</code>, which is used to create a consumer group in ApsaraMQ for RocketMQ 5.0.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-03T08:19:54.231Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.rocketmq5.$Module.class, fqn = "@alicloud/ros-cdk-rocketmq5.ConsumerGroup")
public class ConsumerGroup extends com.aliyun.ros.cdk.core.Resource {

    protected ConsumerGroup(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected ConsumerGroup(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public ConsumerGroup(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.rocketmq5.ConsumerGroupProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public ConsumerGroup(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.rocketmq5.ConsumerGroupProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute ConsumerGroupId: The ID of the consumer group.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrConsumerGroupId() {
        return software.amazon.jsii.Kernel.get(this, "attrConsumerGroupId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute DeliveryOrderType: Delivery sequence of consumer group.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDeliveryOrderType() {
        return software.amazon.jsii.Kernel.get(this, "attrDeliveryOrderType", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute InstanceId: The ID of the instance.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.rocketmq5.ConsumerGroupProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.rocketmq5.ConsumerGroupProps.class));
    }

    protected void setProps(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.rocketmq5.ConsumerGroupProps value) {
        software.amazon.jsii.Kernel.set(this, "props", java.util.Objects.requireNonNull(value, "props is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.rocketmq5.ConsumerGroup}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.rocketmq5.ConsumerGroup> {
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
        private final com.aliyun.ros.cdk.rocketmq5.ConsumerGroupProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.rocketmq5.ConsumerGroupProps.Builder();
        }

        /**
         * Property consumeRetryPolicy: The consumption retry policy of the consumer group to be created.
         * <p>
         * @return {@code this}
         * @param consumeRetryPolicy Property consumeRetryPolicy: The consumption retry policy of the consumer group to be created. This parameter is required.
         */
        public Builder consumeRetryPolicy(final com.aliyun.ros.cdk.core.IResolvable consumeRetryPolicy) {
            this.props.consumeRetryPolicy(consumeRetryPolicy);
            return this;
        }
        /**
         * Property consumeRetryPolicy: The consumption retry policy of the consumer group to be created.
         * <p>
         * @return {@code this}
         * @param consumeRetryPolicy Property consumeRetryPolicy: The consumption retry policy of the consumer group to be created. This parameter is required.
         */
        public Builder consumeRetryPolicy(final com.aliyun.ros.cdk.rocketmq5.RosConsumerGroup.ConsumeRetryPolicyProperty consumeRetryPolicy) {
            this.props.consumeRetryPolicy(consumeRetryPolicy);
            return this;
        }

        /**
         * Property consumerGroupId: The ID of the consumer group to be created.
         * <p>
         * Used to identify consumer groups, globally unique.
         * The value description is as follows:
         * Character limitation: supports letters a~z or A-Z, numbers 0-9, underscore (_), dash (-) and percent sign (%).
         * Length limit: 1-60 characters.
         * <p>
         * @return {@code this}
         * @param consumerGroupId Property consumerGroupId: The ID of the consumer group to be created. This parameter is required.
         */
        public Builder consumerGroupId(final java.lang.String consumerGroupId) {
            this.props.consumerGroupId(consumerGroupId);
            return this;
        }
        /**
         * Property consumerGroupId: The ID of the consumer group to be created.
         * <p>
         * Used to identify consumer groups, globally unique.
         * The value description is as follows:
         * Character limitation: supports letters a~z or A-Z, numbers 0-9, underscore (_), dash (-) and percent sign (%).
         * Length limit: 1-60 characters.
         * <p>
         * @return {@code this}
         * @param consumerGroupId Property consumerGroupId: The ID of the consumer group to be created. This parameter is required.
         */
        public Builder consumerGroupId(final com.aliyun.ros.cdk.core.IResolvable consumerGroupId) {
            this.props.consumerGroupId(consumerGroupId);
            return this;
        }

        /**
         * Property deliveryOrderType: Delivery sequence of the consumer group to be created.
         * <p>
         * @return {@code this}
         * @param deliveryOrderType Property deliveryOrderType: Delivery sequence of the consumer group to be created. This parameter is required.
         */
        public Builder deliveryOrderType(final java.lang.String deliveryOrderType) {
            this.props.deliveryOrderType(deliveryOrderType);
            return this;
        }
        /**
         * Property deliveryOrderType: Delivery sequence of the consumer group to be created.
         * <p>
         * @return {@code this}
         * @param deliveryOrderType Property deliveryOrderType: Delivery sequence of the consumer group to be created. This parameter is required.
         */
        public Builder deliveryOrderType(final com.aliyun.ros.cdk.core.IResolvable deliveryOrderType) {
            this.props.deliveryOrderType(deliveryOrderType);
            return this;
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
         * Property remark: The remark of the consumer group to be created.
         * <p>
         * @return {@code this}
         * @param remark Property remark: The remark of the consumer group to be created. This parameter is required.
         */
        public Builder remark(final java.lang.String remark) {
            this.props.remark(remark);
            return this;
        }
        /**
         * Property remark: The remark of the consumer group to be created.
         * <p>
         * @return {@code this}
         * @param remark Property remark: The remark of the consumer group to be created. This parameter is required.
         */
        public Builder remark(final com.aliyun.ros.cdk.core.IResolvable remark) {
            this.props.remark(remark);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.rocketmq5.ConsumerGroup}.
         */
        @Override
        public com.aliyun.ros.cdk.rocketmq5.ConsumerGroup build() {
            return new com.aliyun.ros.cdk.rocketmq5.ConsumerGroup(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
