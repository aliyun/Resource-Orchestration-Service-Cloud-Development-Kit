package com.aliyun.ros.cdk.amqp;

/**
 * A ROS resource type:  `ALIYUN::AMQP::Exchange`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.70.0 (build 03c2f6f)", date = "2022-11-04T06:18:40.982Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.amqp.$Module.class, fqn = "@alicloud/ros-cdk-amqp.Exchange")
public class Exchange extends com.aliyun.ros.cdk.core.Resource {

    protected Exchange(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Exchange(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::AMQP::Exchange`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public Exchange(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.amqp.ExchangeProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::AMQP::Exchange`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public Exchange(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.amqp.ExchangeProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute ExchangeName: The name of the exchange.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrExchangeName() {
        return software.amazon.jsii.Kernel.get(this, "attrExchangeName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.amqp.Exchange}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.amqp.Exchange> {
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
        private final com.aliyun.ros.cdk.amqp.ExchangeProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.amqp.ExchangeProps.Builder();
        }

        /**
         * Property autoDeleteState: Specifies whether the Auto Delete attribute is configured.
         * <p>
         * Valid values:
         * true: The Auto Delete attribute is configured. If the last queue that is bound to an exchange is unbound, the exchange is automatically deleted.
         * false: The Auto Delete attribute is not configured. If the last queue that is bound to an exchange is unbound, the exchange is not automatically deleted.
         * <p>
         * @return {@code this}
         * @param autoDeleteState Property autoDeleteState: Specifies whether the Auto Delete attribute is configured. This parameter is required.
         */
        public Builder autoDeleteState(final java.lang.Boolean autoDeleteState) {
            this.props.autoDeleteState(autoDeleteState);
            return this;
        }
        /**
         * Property autoDeleteState: Specifies whether the Auto Delete attribute is configured.
         * <p>
         * Valid values:
         * true: The Auto Delete attribute is configured. If the last queue that is bound to an exchange is unbound, the exchange is automatically deleted.
         * false: The Auto Delete attribute is not configured. If the last queue that is bound to an exchange is unbound, the exchange is not automatically deleted.
         * <p>
         * @return {@code this}
         * @param autoDeleteState Property autoDeleteState: Specifies whether the Auto Delete attribute is configured. This parameter is required.
         */
        public Builder autoDeleteState(final com.aliyun.ros.cdk.core.IResolvable autoDeleteState) {
            this.props.autoDeleteState(autoDeleteState);
            return this;
        }

        /**
         * Property exchangeName: The name of the exchange.
         * <p>
         * @return {@code this}
         * @param exchangeName Property exchangeName: The name of the exchange. This parameter is required.
         */
        public Builder exchangeName(final java.lang.String exchangeName) {
            this.props.exchangeName(exchangeName);
            return this;
        }
        /**
         * Property exchangeName: The name of the exchange.
         * <p>
         * @return {@code this}
         * @param exchangeName Property exchangeName: The name of the exchange. This parameter is required.
         */
        public Builder exchangeName(final com.aliyun.ros.cdk.core.IResolvable exchangeName) {
            this.props.exchangeName(exchangeName);
            return this;
        }

        /**
         * Property exchangeType: The type of the exchange.
         * <p>
         * Valid values:
         * FANOUT: An exchange of this type routes all the received messages to all the queues bound to this exchange. You can use a fanout exchange to broadcast messages.
         * DIRECT: An exchange of this type routes a message to the queue whose binding key is exactly the same as the routing key of the message.
         * TOPIC: This type is similar to the direct exchange type. An exchange of this type routes a message to one or more queues based on the fuzzy match or multi-condition match result between the routing key of the message and the binding keys of the current exchange.
         * HEADERS: Headers Exchange uses the Headers property instead of Routing Key for routing matching. When binding Headers Exchange and Queue, set the key-value pair of the binding property; when sending a message to the Headers Exchange, set the message's Headers property key-value pair and use the message Headers The message is routed to the bound Queue by comparing the attribute key-value pair and the bound attribute key-value pair.
         * <p>
         * @return {@code this}
         * @param exchangeType Property exchangeType: The type of the exchange. This parameter is required.
         */
        public Builder exchangeType(final java.lang.String exchangeType) {
            this.props.exchangeType(exchangeType);
            return this;
        }
        /**
         * Property exchangeType: The type of the exchange.
         * <p>
         * Valid values:
         * FANOUT: An exchange of this type routes all the received messages to all the queues bound to this exchange. You can use a fanout exchange to broadcast messages.
         * DIRECT: An exchange of this type routes a message to the queue whose binding key is exactly the same as the routing key of the message.
         * TOPIC: This type is similar to the direct exchange type. An exchange of this type routes a message to one or more queues based on the fuzzy match or multi-condition match result between the routing key of the message and the binding keys of the current exchange.
         * HEADERS: Headers Exchange uses the Headers property instead of Routing Key for routing matching. When binding Headers Exchange and Queue, set the key-value pair of the binding property; when sending a message to the Headers Exchange, set the message's Headers property key-value pair and use the message Headers The message is routed to the bound Queue by comparing the attribute key-value pair and the bound attribute key-value pair.
         * <p>
         * @return {@code this}
         * @param exchangeType Property exchangeType: The type of the exchange. This parameter is required.
         */
        public Builder exchangeType(final com.aliyun.ros.cdk.core.IResolvable exchangeType) {
            this.props.exchangeType(exchangeType);
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
         * Property internal: Specifies whether an exchange is an internal exchange.
         * <p>
         * Valid values:
         * false: The exchange is not an internal exchange.
         * true: The exchange is an internal exchange.
         * <p>
         * @return {@code this}
         * @param internal Property internal: Specifies whether an exchange is an internal exchange. This parameter is required.
         */
        public Builder internal(final java.lang.Boolean internal) {
            this.props.internal(internal);
            return this;
        }
        /**
         * Property internal: Specifies whether an exchange is an internal exchange.
         * <p>
         * Valid values:
         * false: The exchange is not an internal exchange.
         * true: The exchange is an internal exchange.
         * <p>
         * @return {@code this}
         * @param internal Property internal: Specifies whether an exchange is an internal exchange. This parameter is required.
         */
        public Builder internal(final com.aliyun.ros.cdk.core.IResolvable internal) {
            this.props.internal(internal);
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
         * Property alternateExchange: The alternate exchange.
         * <p>
         * An alternate exchange is configured for an existing exchange. It is used to receive messages that fail to be routed to queues from the existing exchange.
         * <p>
         * @return {@code this}
         * @param alternateExchange Property alternateExchange: The alternate exchange. This parameter is required.
         */
        public Builder alternateExchange(final java.lang.String alternateExchange) {
            this.props.alternateExchange(alternateExchange);
            return this;
        }
        /**
         * Property alternateExchange: The alternate exchange.
         * <p>
         * An alternate exchange is configured for an existing exchange. It is used to receive messages that fail to be routed to queues from the existing exchange.
         * <p>
         * @return {@code this}
         * @param alternateExchange Property alternateExchange: The alternate exchange. This parameter is required.
         */
        public Builder alternateExchange(final com.aliyun.ros.cdk.core.IResolvable alternateExchange) {
            this.props.alternateExchange(alternateExchange);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.amqp.Exchange}.
         */
        @Override
        public com.aliyun.ros.cdk.amqp.Exchange build() {
            return new com.aliyun.ros.cdk.amqp.Exchange(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
