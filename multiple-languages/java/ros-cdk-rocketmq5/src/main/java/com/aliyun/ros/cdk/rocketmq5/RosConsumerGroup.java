package com.aliyun.ros.cdk.rocketmq5;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::ROCKETMQ5::ConsumerGroup</code>, which is used to create a consumer group in ApsaraMQ for RocketMQ 5.0.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-08-22T08:56:23.870Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.rocketmq5.$Module.class, fqn = "@alicloud/ros-cdk-rocketmq5.RosConsumerGroup")
public class RosConsumerGroup extends com.aliyun.ros.cdk.core.RosResource {

    protected RosConsumerGroup(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosConsumerGroup(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.rocketmq5.RosConsumerGroup.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosConsumerGroup(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.rocketmq5.RosConsumerGroupProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrConsumerGroupId() {
        return software.amazon.jsii.Kernel.get(this, "attrConsumerGroupId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDeliveryOrderType() {
        return software.amazon.jsii.Kernel.get(this, "attrDeliveryOrderType", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getConsumeRetryPolicy() {
        return software.amazon.jsii.Kernel.get(this, "consumeRetryPolicy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setConsumeRetryPolicy(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "consumeRetryPolicy", java.util.Objects.requireNonNull(value, "consumeRetryPolicy is required"));
    }

    /**
     */
    public void setConsumeRetryPolicy(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.rocketmq5.RosConsumerGroup.ConsumeRetryPolicyProperty value) {
        software.amazon.jsii.Kernel.set(this, "consumeRetryPolicy", java.util.Objects.requireNonNull(value, "consumeRetryPolicy is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getConsumerGroupId() {
        return software.amazon.jsii.Kernel.get(this, "consumerGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setConsumerGroupId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "consumerGroupId", java.util.Objects.requireNonNull(value, "consumerGroupId is required"));
    }

    /**
     */
    public void setConsumerGroupId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "consumerGroupId", java.util.Objects.requireNonNull(value, "consumerGroupId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getDeliveryOrderType() {
        return software.amazon.jsii.Kernel.get(this, "deliveryOrderType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDeliveryOrderType(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "deliveryOrderType", java.util.Objects.requireNonNull(value, "deliveryOrderType is required"));
    }

    /**
     */
    public void setDeliveryOrderType(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "deliveryOrderType", java.util.Objects.requireNonNull(value, "deliveryOrderType is required"));
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
    public @org.jetbrains.annotations.Nullable java.lang.Object getRemark() {
        return software.amazon.jsii.Kernel.get(this, "remark", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRemark(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "remark", value);
    }

    /**
     */
    public void setRemark(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "remark", value);
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.rocketmq5.$Module.class, fqn = "@alicloud/ros-cdk-rocketmq5.RosConsumerGroup.ConsumeRetryPolicyProperty")
    @software.amazon.jsii.Jsii.Proxy(ConsumeRetryPolicyProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface ConsumeRetryPolicyProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getRetryPolicy();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getMaxRetryTimes() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link ConsumeRetryPolicyProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link ConsumeRetryPolicyProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<ConsumeRetryPolicyProperty> {
            java.lang.Object retryPolicy;
            java.lang.Object maxRetryTimes;

            /**
             * Sets the value of {@link ConsumeRetryPolicyProperty#getRetryPolicy}
             * @param retryPolicy the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder retryPolicy(java.lang.String retryPolicy) {
                this.retryPolicy = retryPolicy;
                return this;
            }

            /**
             * Sets the value of {@link ConsumeRetryPolicyProperty#getRetryPolicy}
             * @param retryPolicy the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder retryPolicy(com.aliyun.ros.cdk.core.IResolvable retryPolicy) {
                this.retryPolicy = retryPolicy;
                return this;
            }

            /**
             * Sets the value of {@link ConsumeRetryPolicyProperty#getMaxRetryTimes}
             * @param maxRetryTimes the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder maxRetryTimes(java.lang.Number maxRetryTimes) {
                this.maxRetryTimes = maxRetryTimes;
                return this;
            }

            /**
             * Sets the value of {@link ConsumeRetryPolicyProperty#getMaxRetryTimes}
             * @param maxRetryTimes the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder maxRetryTimes(com.aliyun.ros.cdk.core.IResolvable maxRetryTimes) {
                this.maxRetryTimes = maxRetryTimes;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link ConsumeRetryPolicyProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public ConsumeRetryPolicyProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link ConsumeRetryPolicyProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ConsumeRetryPolicyProperty {
            private final java.lang.Object retryPolicy;
            private final java.lang.Object maxRetryTimes;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.retryPolicy = software.amazon.jsii.Kernel.get(this, "retryPolicy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.maxRetryTimes = software.amazon.jsii.Kernel.get(this, "maxRetryTimes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.retryPolicy = java.util.Objects.requireNonNull(builder.retryPolicy, "retryPolicy is required");
                this.maxRetryTimes = builder.maxRetryTimes;
            }

            @Override
            public final java.lang.Object getRetryPolicy() {
                return this.retryPolicy;
            }

            @Override
            public final java.lang.Object getMaxRetryTimes() {
                return this.maxRetryTimes;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("retryPolicy", om.valueToTree(this.getRetryPolicy()));
                if (this.getMaxRetryTimes() != null) {
                    data.set("maxRetryTimes", om.valueToTree(this.getMaxRetryTimes()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-rocketmq5.RosConsumerGroup.ConsumeRetryPolicyProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                ConsumeRetryPolicyProperty.Jsii$Proxy that = (ConsumeRetryPolicyProperty.Jsii$Proxy) o;

                if (!retryPolicy.equals(that.retryPolicy)) return false;
                return this.maxRetryTimes != null ? this.maxRetryTimes.equals(that.maxRetryTimes) : that.maxRetryTimes == null;
            }

            @Override
            public final int hashCode() {
                int result = this.retryPolicy.hashCode();
                result = 31 * result + (this.maxRetryTimes != null ? this.maxRetryTimes.hashCode() : 0);
                return result;
            }
        }
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.rocketmq5.RosConsumerGroup}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.rocketmq5.RosConsumerGroup> {
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
        private final com.aliyun.ros.cdk.rocketmq5.RosConsumerGroupProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.rocketmq5.RosConsumerGroupProps.Builder();
        }

        /**
         * @return {@code this}
         * @param consumeRetryPolicy This parameter is required.
         */
        public Builder consumeRetryPolicy(final com.aliyun.ros.cdk.core.IResolvable consumeRetryPolicy) {
            this.props.consumeRetryPolicy(consumeRetryPolicy);
            return this;
        }
        /**
         * @return {@code this}
         * @param consumeRetryPolicy This parameter is required.
         */
        public Builder consumeRetryPolicy(final com.aliyun.ros.cdk.rocketmq5.RosConsumerGroup.ConsumeRetryPolicyProperty consumeRetryPolicy) {
            this.props.consumeRetryPolicy(consumeRetryPolicy);
            return this;
        }

        /**
         * @return {@code this}
         * @param consumerGroupId This parameter is required.
         */
        public Builder consumerGroupId(final java.lang.String consumerGroupId) {
            this.props.consumerGroupId(consumerGroupId);
            return this;
        }
        /**
         * @return {@code this}
         * @param consumerGroupId This parameter is required.
         */
        public Builder consumerGroupId(final com.aliyun.ros.cdk.core.IResolvable consumerGroupId) {
            this.props.consumerGroupId(consumerGroupId);
            return this;
        }

        /**
         * @return {@code this}
         * @param deliveryOrderType This parameter is required.
         */
        public Builder deliveryOrderType(final java.lang.String deliveryOrderType) {
            this.props.deliveryOrderType(deliveryOrderType);
            return this;
        }
        /**
         * @return {@code this}
         * @param deliveryOrderType This parameter is required.
         */
        public Builder deliveryOrderType(final com.aliyun.ros.cdk.core.IResolvable deliveryOrderType) {
            this.props.deliveryOrderType(deliveryOrderType);
            return this;
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
         * @param remark This parameter is required.
         */
        public Builder remark(final java.lang.String remark) {
            this.props.remark(remark);
            return this;
        }
        /**
         * @return {@code this}
         * @param remark This parameter is required.
         */
        public Builder remark(final com.aliyun.ros.cdk.core.IResolvable remark) {
            this.props.remark(remark);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.rocketmq5.RosConsumerGroup}.
         */
        @Override
        public com.aliyun.ros.cdk.rocketmq5.RosConsumerGroup build() {
            return new com.aliyun.ros.cdk.rocketmq5.RosConsumerGroup(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
