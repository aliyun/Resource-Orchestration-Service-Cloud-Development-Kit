package com.aliyun.ros.cdk.amqp;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::AMQP::Binding</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-08-31T07:03:33.209Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.amqp.$Module.class, fqn = "@alicloud/ros-cdk-amqp.Binding")
public class Binding extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.amqp.IBinding {

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

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.amqp.BindingProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.amqp.BindingProps.class));
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
         * Property argument: The key-value pairs for the message header attributes.
         * <p>
         * The message header
         * attributes consist of one or more key-value pairs. The x-match attribute is
         * required. Other attributes are custom. The x-match attribute supports the
         * following values:
         * <p>
         * <ul>
         * <li>all: This is the default value. All key-value pairs in the message header must
         * match.</li>
         * <li>any: At least one key-value pair in the message header must match.
         * Separate attributes with semicolons (;) and separate keys from values with colons
         * (:). Example: x-match:all;type:report;format:pdf
         * This parameter is valid only for headers exchanges. For other types of exchanges,
         * this parameter is ignored.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param argument Property argument: The key-value pairs for the message header attributes. This parameter is required.
         */
        public Builder argument(final java.lang.String argument) {
            this.props.argument(argument);
            return this;
        }
        /**
         * Property argument: The key-value pairs for the message header attributes.
         * <p>
         * The message header
         * attributes consist of one or more key-value pairs. The x-match attribute is
         * required. Other attributes are custom. The x-match attribute supports the
         * following values:
         * <p>
         * <ul>
         * <li>all: This is the default value. All key-value pairs in the message header must
         * match.</li>
         * <li>any: At least one key-value pair in the message header must match.
         * Separate attributes with semicolons (;) and separate keys from values with colons
         * (:). Example: x-match:all;type:report;format:pdf
         * This parameter is valid only for headers exchanges. For other types of exchanges,
         * this parameter is ignored.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param argument Property argument: The key-value pairs for the message header attributes. This parameter is required.
         */
        public Builder argument(final com.aliyun.ros.cdk.core.IResolvable argument) {
            this.props.argument(argument);
            return this;
        }

        /**
         * Property bindingKey: The binding key.
         * <p>
         * <ul>
         * <li>If the source exchange is not a topic exchange:</li>
         * <li>It can contain letters, digits, hyphens (-), underscores (_), periods (.),
         * forward slashes (/), and at signs (&#64;).</li>
         * <li>The length must be 1 to 255 characters.</li>
         * <li>If the source exchange is a topic exchange:</li>
         * <li>It can contain letters, digits, hyphens (-), underscores (_), asterisks (*),
         * periods (.), number signs (#), forward slashes (/), and at signs (&#64;).</li>
         * <li>The key cannot start or end with a period (.). If the key starts with a number
         * sign (#) or an asterisk (<em>), a period (.) must immediately follow. If the key
         * ends with a number sign (#) or an asterisk (</em>), a period (.) must immediately
         * precede it. If a number sign (#) or an asterisk (*) is in the middle of the key,
         * it must have a period (.) on both sides.</li>
         * <li>The length must be 1 to 255 characters.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param bindingKey Property bindingKey: The binding key. This parameter is required.
         */
        public Builder bindingKey(final java.lang.String bindingKey) {
            this.props.bindingKey(bindingKey);
            return this;
        }
        /**
         * Property bindingKey: The binding key.
         * <p>
         * <ul>
         * <li>If the source exchange is not a topic exchange:</li>
         * <li>It can contain letters, digits, hyphens (-), underscores (_), periods (.),
         * forward slashes (/), and at signs (&#64;).</li>
         * <li>The length must be 1 to 255 characters.</li>
         * <li>If the source exchange is a topic exchange:</li>
         * <li>It can contain letters, digits, hyphens (-), underscores (_), asterisks (*),
         * periods (.), number signs (#), forward slashes (/), and at signs (&#64;).</li>
         * <li>The key cannot start or end with a period (.). If the key starts with a number
         * sign (#) or an asterisk (<em>), a period (.) must immediately follow. If the key
         * ends with a number sign (#) or an asterisk (</em>), a period (.) must immediately
         * precede it. If a number sign (#) or an asterisk (*) is in the middle of the key,
         * it must have a period (.) on both sides.</li>
         * <li>The length must be 1 to 255 characters.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param bindingKey Property bindingKey: The binding key. This parameter is required.
         */
        public Builder bindingKey(final com.aliyun.ros.cdk.core.IResolvable bindingKey) {
            this.props.bindingKey(bindingKey);
            return this;
        }

        /**
         * Property bindingType: The type of the destination object.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>0: Queue</li>
         * <li>1: Exchange</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param bindingType Property bindingType: The type of the destination object. This parameter is required.
         */
        public Builder bindingType(final java.lang.String bindingType) {
            this.props.bindingType(bindingType);
            return this;
        }
        /**
         * Property bindingType: The type of the destination object.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>0: Queue</li>
         * <li>1: Exchange</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param bindingType Property bindingType: The type of the destination object. This parameter is required.
         */
        public Builder bindingType(final com.aliyun.ros.cdk.core.IResolvable bindingType) {
            this.props.bindingType(bindingType);
            return this;
        }

        /**
         * Property destinationName: The name of the binding destination.
         * <p>
         * The destination must be created in the
         * console. It must belong to the same vhost as <code>SourceExchange</code>. The <code>VirtualHost</code>
         * parameter specifies the vhost.
         * <p>
         * @return {@code this}
         * @param destinationName Property destinationName: The name of the binding destination. This parameter is required.
         */
        public Builder destinationName(final java.lang.String destinationName) {
            this.props.destinationName(destinationName);
            return this;
        }
        /**
         * Property destinationName: The name of the binding destination.
         * <p>
         * The destination must be created in the
         * console. It must belong to the same vhost as <code>SourceExchange</code>. The <code>VirtualHost</code>
         * parameter specifies the vhost.
         * <p>
         * @return {@code this}
         * @param destinationName Property destinationName: The name of the binding destination. This parameter is required.
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
