package com.aliyun.ros.cdk.amqp;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::AMQP::Exchange</code>, which is used to create an exchange.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-03T08:19:49.591Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.amqp.$Module.class, fqn = "@alicloud/ros-cdk-amqp.RosExchange")
public class RosExchange extends com.aliyun.ros.cdk.core.RosResource {

    protected RosExchange(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosExchange(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.amqp.RosExchange.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosExchange(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.amqp.RosExchangeProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrExchangeName() {
        return software.amazon.jsii.Kernel.get(this, "attrExchangeName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAutoDeleteState() {
        return software.amazon.jsii.Kernel.get(this, "autoDeleteState", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAutoDeleteState(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "autoDeleteState", java.util.Objects.requireNonNull(value, "autoDeleteState is required"));
    }

    /**
     */
    public void setAutoDeleteState(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "autoDeleteState", java.util.Objects.requireNonNull(value, "autoDeleteState is required"));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getExchangeName() {
        return software.amazon.jsii.Kernel.get(this, "exchangeName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setExchangeName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "exchangeName", java.util.Objects.requireNonNull(value, "exchangeName is required"));
    }

    /**
     */
    public void setExchangeName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "exchangeName", java.util.Objects.requireNonNull(value, "exchangeName is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getExchangeType() {
        return software.amazon.jsii.Kernel.get(this, "exchangeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setExchangeType(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "exchangeType", java.util.Objects.requireNonNull(value, "exchangeType is required"));
    }

    /**
     */
    public void setExchangeType(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "exchangeType", java.util.Objects.requireNonNull(value, "exchangeType is required"));
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
    public @org.jetbrains.annotations.NotNull java.lang.Object getInternal() {
        return software.amazon.jsii.Kernel.get(this, "internal", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setInternal(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "internal", java.util.Objects.requireNonNull(value, "internal is required"));
    }

    /**
     */
    public void setInternal(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "internal", java.util.Objects.requireNonNull(value, "internal is required"));
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
    public @org.jetbrains.annotations.Nullable java.lang.Object getAlternateExchange() {
        return software.amazon.jsii.Kernel.get(this, "alternateExchange", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAlternateExchange(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "alternateExchange", value);
    }

    /**
     */
    public void setAlternateExchange(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "alternateExchange", value);
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.amqp.RosExchange}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.amqp.RosExchange> {
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
        private final com.aliyun.ros.cdk.amqp.RosExchangeProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.amqp.RosExchangeProps.Builder();
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
         * @param exchangeName This parameter is required.
         */
        public Builder exchangeName(final java.lang.String exchangeName) {
            this.props.exchangeName(exchangeName);
            return this;
        }
        /**
         * @return {@code this}
         * @param exchangeName This parameter is required.
         */
        public Builder exchangeName(final com.aliyun.ros.cdk.core.IResolvable exchangeName) {
            this.props.exchangeName(exchangeName);
            return this;
        }

        /**
         * @return {@code this}
         * @param exchangeType This parameter is required.
         */
        public Builder exchangeType(final java.lang.String exchangeType) {
            this.props.exchangeType(exchangeType);
            return this;
        }
        /**
         * @return {@code this}
         * @param exchangeType This parameter is required.
         */
        public Builder exchangeType(final com.aliyun.ros.cdk.core.IResolvable exchangeType) {
            this.props.exchangeType(exchangeType);
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
         * @param internal This parameter is required.
         */
        public Builder internal(final java.lang.Boolean internal) {
            this.props.internal(internal);
            return this;
        }
        /**
         * @return {@code this}
         * @param internal This parameter is required.
         */
        public Builder internal(final com.aliyun.ros.cdk.core.IResolvable internal) {
            this.props.internal(internal);
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
         * @param alternateExchange This parameter is required.
         */
        public Builder alternateExchange(final java.lang.String alternateExchange) {
            this.props.alternateExchange(alternateExchange);
            return this;
        }
        /**
         * @return {@code this}
         * @param alternateExchange This parameter is required.
         */
        public Builder alternateExchange(final com.aliyun.ros.cdk.core.IResolvable alternateExchange) {
            this.props.alternateExchange(alternateExchange);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.amqp.RosExchange}.
         */
        @Override
        public com.aliyun.ros.cdk.amqp.RosExchange build() {
            return new com.aliyun.ros.cdk.amqp.RosExchange(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
