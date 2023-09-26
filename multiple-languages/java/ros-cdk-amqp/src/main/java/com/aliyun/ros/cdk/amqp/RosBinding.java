package com.aliyun.ros.cdk.amqp;

/**
 * A ROS template type:  <code>ALIYUN::AMQP::Binding</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-09-25T10:01:44.149Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.amqp.$Module.class, fqn = "@alicloud/ros-cdk-amqp.RosBinding")
public class RosBinding extends com.aliyun.ros.cdk.core.RosResource {

    protected RosBinding(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosBinding(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.amqp.RosBinding.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * Create a new <code>ALIYUN::AMQP::Binding</code>.
     * <p>
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosBinding(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.amqp.RosBindingProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getArgument() {
        return software.amazon.jsii.Kernel.get(this, "argument", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setArgument(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "argument", java.util.Objects.requireNonNull(value, "argument is required"));
    }

    /**
     */
    public void setArgument(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "argument", java.util.Objects.requireNonNull(value, "argument is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getBindingKey() {
        return software.amazon.jsii.Kernel.get(this, "bindingKey", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setBindingKey(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "bindingKey", java.util.Objects.requireNonNull(value, "bindingKey is required"));
    }

    /**
     */
    public void setBindingKey(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "bindingKey", java.util.Objects.requireNonNull(value, "bindingKey is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getBindingType() {
        return software.amazon.jsii.Kernel.get(this, "bindingType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setBindingType(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "bindingType", java.util.Objects.requireNonNull(value, "bindingType is required"));
    }

    /**
     */
    public void setBindingType(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "bindingType", java.util.Objects.requireNonNull(value, "bindingType is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getDestinationName() {
        return software.amazon.jsii.Kernel.get(this, "destinationName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDestinationName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "destinationName", java.util.Objects.requireNonNull(value, "destinationName is required"));
    }

    /**
     */
    public void setDestinationName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "destinationName", java.util.Objects.requireNonNull(value, "destinationName is required"));
    }

    /**
     * A factory method that creates a new instance of this class from an object containing the properties of this ROS resource.
     */
    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    /**
     * A factory method that creates a new instance of this class from an object containing the properties of this ROS resource.
     */
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
    public @org.jetbrains.annotations.NotNull java.lang.Object getSourceExchange() {
        return software.amazon.jsii.Kernel.get(this, "sourceExchange", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSourceExchange(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "sourceExchange", java.util.Objects.requireNonNull(value, "sourceExchange is required"));
    }

    /**
     */
    public void setSourceExchange(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "sourceExchange", java.util.Objects.requireNonNull(value, "sourceExchange is required"));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.amqp.RosBinding}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.amqp.RosBinding> {
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
        private final com.aliyun.ros.cdk.amqp.RosBindingProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.amqp.RosBindingProps.Builder();
        }

        /**
         * @return {@code this}
         * @param argument This parameter is required.
         */
        public Builder argument(final java.lang.String argument) {
            this.props.argument(argument);
            return this;
        }
        /**
         * @return {@code this}
         * @param argument This parameter is required.
         */
        public Builder argument(final com.aliyun.ros.cdk.core.IResolvable argument) {
            this.props.argument(argument);
            return this;
        }

        /**
         * @return {@code this}
         * @param bindingKey This parameter is required.
         */
        public Builder bindingKey(final java.lang.String bindingKey) {
            this.props.bindingKey(bindingKey);
            return this;
        }
        /**
         * @return {@code this}
         * @param bindingKey This parameter is required.
         */
        public Builder bindingKey(final com.aliyun.ros.cdk.core.IResolvable bindingKey) {
            this.props.bindingKey(bindingKey);
            return this;
        }

        /**
         * @return {@code this}
         * @param bindingType This parameter is required.
         */
        public Builder bindingType(final java.lang.String bindingType) {
            this.props.bindingType(bindingType);
            return this;
        }
        /**
         * @return {@code this}
         * @param bindingType This parameter is required.
         */
        public Builder bindingType(final com.aliyun.ros.cdk.core.IResolvable bindingType) {
            this.props.bindingType(bindingType);
            return this;
        }

        /**
         * @return {@code this}
         * @param destinationName This parameter is required.
         */
        public Builder destinationName(final java.lang.String destinationName) {
            this.props.destinationName(destinationName);
            return this;
        }
        /**
         * @return {@code this}
         * @param destinationName This parameter is required.
         */
        public Builder destinationName(final com.aliyun.ros.cdk.core.IResolvable destinationName) {
            this.props.destinationName(destinationName);
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
         * @param sourceExchange This parameter is required.
         */
        public Builder sourceExchange(final java.lang.String sourceExchange) {
            this.props.sourceExchange(sourceExchange);
            return this;
        }
        /**
         * @return {@code this}
         * @param sourceExchange This parameter is required.
         */
        public Builder sourceExchange(final com.aliyun.ros.cdk.core.IResolvable sourceExchange) {
            this.props.sourceExchange(sourceExchange);
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
         * @return a newly built instance of {@link com.aliyun.ros.cdk.amqp.RosBinding}.
         */
        @Override
        public com.aliyun.ros.cdk.amqp.RosBinding build() {
            return new com.aliyun.ros.cdk.amqp.RosBinding(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
