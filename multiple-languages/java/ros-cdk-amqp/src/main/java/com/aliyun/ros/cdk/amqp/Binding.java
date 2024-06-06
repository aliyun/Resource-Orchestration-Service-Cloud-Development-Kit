package com.aliyun.ros.cdk.amqp;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::AMQP::Binding</code>, which is used to bind a queue or exchange to an exchange.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-06T03:35:12.467Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.amqp.$Module.class, fqn = "@alicloud/ros-cdk-amqp.Binding")
public class Binding extends com.aliyun.ros.cdk.core.Resource {

    protected Binding(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Binding(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public Binding(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.amqp.BindingProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public Binding(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.amqp.BindingProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
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

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.amqp.BindingProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.amqp.BindingProps.class));
    }

    protected void setProps(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.amqp.BindingProps value) {
        software.amazon.jsii.Kernel.set(this, "props", java.util.Objects.requireNonNull(value, "props is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.amqp.Binding}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.amqp.Binding> {
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
        private final com.aliyun.ros.cdk.amqp.BindingProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.amqp.BindingProps.Builder();
        }

        /**
         * Property argument: X-match Attributes.
         * <p>
         * Valid Values:
         * "x-match:all": Default Value, All the Message Header of Key-Value Pairs Stored in the Must Match.
         * "x-match:any": at Least One Pair of the Message Header of Key-Value Pairs Stored in the Must Match.
         * <p>
         * @return {@code this}
         * @param argument Property argument: X-match Attributes. This parameter is required.
         */
        public Builder argument(final java.lang.String argument) {
            this.props.argument(argument);
            return this;
        }
        /**
         * Property argument: X-match Attributes.
         * <p>
         * Valid Values:
         * "x-match:all": Default Value, All the Message Header of Key-Value Pairs Stored in the Must Match.
         * "x-match:any": at Least One Pair of the Message Header of Key-Value Pairs Stored in the Must Match.
         * <p>
         * @return {@code this}
         * @param argument Property argument: X-match Attributes. This parameter is required.
         */
        public Builder argument(final com.aliyun.ros.cdk.core.IResolvable argument) {
            this.props.argument(argument);
            return this;
        }

        /**
         * Property bindingKey: The Binding Key.
         * <p>
         * @return {@code this}
         * @param bindingKey Property bindingKey: The Binding Key. This parameter is required.
         */
        public Builder bindingKey(final java.lang.String bindingKey) {
            this.props.bindingKey(bindingKey);
            return this;
        }
        /**
         * Property bindingKey: The Binding Key.
         * <p>
         * @return {@code this}
         * @param bindingKey Property bindingKey: The Binding Key. This parameter is required.
         */
        public Builder bindingKey(final com.aliyun.ros.cdk.core.IResolvable bindingKey) {
            this.props.bindingKey(bindingKey);
            return this;
        }

        /**
         * Property bindingType: The Target Binding Types.
         * <p>
         * Valid values: EXCHANGE, QUEUE.
         * <p>
         * @return {@code this}
         * @param bindingType Property bindingType: The Target Binding Types. This parameter is required.
         */
        public Builder bindingType(final java.lang.String bindingType) {
            this.props.bindingType(bindingType);
            return this;
        }
        /**
         * Property bindingType: The Target Binding Types.
         * <p>
         * Valid values: EXCHANGE, QUEUE.
         * <p>
         * @return {@code this}
         * @param bindingType Property bindingType: The Target Binding Types. This parameter is required.
         */
        public Builder bindingType(final com.aliyun.ros.cdk.core.IResolvable bindingType) {
            this.props.bindingType(bindingType);
            return this;
        }

        /**
         * Property destinationName: The Target Queue Or Exchange of the Name.
         * <p>
         * @return {@code this}
         * @param destinationName Property destinationName: The Target Queue Or Exchange of the Name. This parameter is required.
         */
        public Builder destinationName(final java.lang.String destinationName) {
            this.props.destinationName(destinationName);
            return this;
        }
        /**
         * Property destinationName: The Target Queue Or Exchange of the Name.
         * <p>
         * @return {@code this}
         * @param destinationName Property destinationName: The Target Queue Or Exchange of the Name. This parameter is required.
         */
        public Builder destinationName(final com.aliyun.ros.cdk.core.IResolvable destinationName) {
            this.props.destinationName(destinationName);
            return this;
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
         * Property sourceExchange: The Source Exchange Name.
         * <p>
         * @return {@code this}
         * @param sourceExchange Property sourceExchange: The Source Exchange Name. This parameter is required.
         */
        public Builder sourceExchange(final java.lang.String sourceExchange) {
            this.props.sourceExchange(sourceExchange);
            return this;
        }
        /**
         * Property sourceExchange: The Source Exchange Name.
         * <p>
         * @return {@code this}
         * @param sourceExchange Property sourceExchange: The Source Exchange Name. This parameter is required.
         */
        public Builder sourceExchange(final com.aliyun.ros.cdk.core.IResolvable sourceExchange) {
            this.props.sourceExchange(sourceExchange);
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
         * @return a newly built instance of {@link com.aliyun.ros.cdk.amqp.Binding}.
         */
        @Override
        public com.aliyun.ros.cdk.amqp.Binding build() {
            return new com.aliyun.ros.cdk.amqp.Binding(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
