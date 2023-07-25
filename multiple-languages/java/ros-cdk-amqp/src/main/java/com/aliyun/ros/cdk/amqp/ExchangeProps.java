package com.aliyun.ros.cdk.amqp;

/**
 * Properties for defining a <code>ALIYUN::AMQP::Exchange</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-07-25T03:55:57.981Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.amqp.$Module.class, fqn = "@alicloud/ros-cdk-amqp.ExchangeProps")
@software.amazon.jsii.Jsii.Proxy(ExchangeProps.Jsii$Proxy.class)
public interface ExchangeProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property autoDeleteState: Specifies whether the Auto Delete attribute is configured.
     * <p>
     * Valid values:
     * true: The Auto Delete attribute is configured. If the last queue that is bound to an exchange is unbound, the exchange is automatically deleted.
     * false: The Auto Delete attribute is not configured. If the last queue that is bound to an exchange is unbound, the exchange is not automatically deleted.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAutoDeleteState();

    /**
     * Property exchangeName: The name of the exchange.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getExchangeName();

    /**
     * Property exchangeType: The type of the exchange.
     * <p>
     * Valid values:
     * FANOUT: An exchange of this type routes all the received messages to all the queues bound to this exchange. You can use a fanout exchange to broadcast messages.
     * DIRECT: An exchange of this type routes a message to the queue whose binding key is exactly the same as the routing key of the message.
     * TOPIC: This type is similar to the direct exchange type. An exchange of this type routes a message to one or more queues based on the fuzzy match or multi-condition match result between the routing key of the message and the binding keys of the current exchange.
     * HEADERS: Headers Exchange uses the Headers property instead of Routing Key for routing matching. When binding Headers Exchange and Queue, set the key-value pair of the binding property; when sending a message to the Headers Exchange, set the message's Headers property key-value pair and use the message Headers The message is routed to the bound Queue by comparing the attribute key-value pair and the bound attribute key-value pair.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getExchangeType();

    /**
     * Property instanceId: InstanceId.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getInstanceId();

    /**
     * Property internal: Specifies whether an exchange is an internal exchange.
     * <p>
     * Valid values:
     * false: The exchange is not an internal exchange.
     * true: The exchange is an internal exchange.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getInternal();

    /**
     * Property virtualHost: The name of the virtual host.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getVirtualHost();

    /**
     * Property alternateExchange: The alternate exchange.
     * <p>
     * An alternate exchange is configured for an existing exchange. It is used to receive messages that fail to be routed to queues from the existing exchange.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAlternateExchange() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link ExchangeProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link ExchangeProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<ExchangeProps> {
        java.lang.Object autoDeleteState;
        java.lang.Object exchangeName;
        java.lang.Object exchangeType;
        java.lang.Object instanceId;
        java.lang.Object internal;
        java.lang.Object virtualHost;
        java.lang.Object alternateExchange;

        /**
         * Sets the value of {@link ExchangeProps#getAutoDeleteState}
         * @param autoDeleteState Property autoDeleteState: Specifies whether the Auto Delete attribute is configured. This parameter is required.
         *                        Valid values:
         *                        true: The Auto Delete attribute is configured. If the last queue that is bound to an exchange is unbound, the exchange is automatically deleted.
         *                        false: The Auto Delete attribute is not configured. If the last queue that is bound to an exchange is unbound, the exchange is not automatically deleted.
         * @return {@code this}
         */
        public Builder autoDeleteState(java.lang.Boolean autoDeleteState) {
            this.autoDeleteState = autoDeleteState;
            return this;
        }

        /**
         * Sets the value of {@link ExchangeProps#getAutoDeleteState}
         * @param autoDeleteState Property autoDeleteState: Specifies whether the Auto Delete attribute is configured. This parameter is required.
         *                        Valid values:
         *                        true: The Auto Delete attribute is configured. If the last queue that is bound to an exchange is unbound, the exchange is automatically deleted.
         *                        false: The Auto Delete attribute is not configured. If the last queue that is bound to an exchange is unbound, the exchange is not automatically deleted.
         * @return {@code this}
         */
        public Builder autoDeleteState(com.aliyun.ros.cdk.core.IResolvable autoDeleteState) {
            this.autoDeleteState = autoDeleteState;
            return this;
        }

        /**
         * Sets the value of {@link ExchangeProps#getExchangeName}
         * @param exchangeName Property exchangeName: The name of the exchange. This parameter is required.
         * @return {@code this}
         */
        public Builder exchangeName(java.lang.String exchangeName) {
            this.exchangeName = exchangeName;
            return this;
        }

        /**
         * Sets the value of {@link ExchangeProps#getExchangeName}
         * @param exchangeName Property exchangeName: The name of the exchange. This parameter is required.
         * @return {@code this}
         */
        public Builder exchangeName(com.aliyun.ros.cdk.core.IResolvable exchangeName) {
            this.exchangeName = exchangeName;
            return this;
        }

        /**
         * Sets the value of {@link ExchangeProps#getExchangeType}
         * @param exchangeType Property exchangeType: The type of the exchange. This parameter is required.
         *                     Valid values:
         *                     FANOUT: An exchange of this type routes all the received messages to all the queues bound to this exchange. You can use a fanout exchange to broadcast messages.
         *                     DIRECT: An exchange of this type routes a message to the queue whose binding key is exactly the same as the routing key of the message.
         *                     TOPIC: This type is similar to the direct exchange type. An exchange of this type routes a message to one or more queues based on the fuzzy match or multi-condition match result between the routing key of the message and the binding keys of the current exchange.
         *                     HEADERS: Headers Exchange uses the Headers property instead of Routing Key for routing matching. When binding Headers Exchange and Queue, set the key-value pair of the binding property; when sending a message to the Headers Exchange, set the message's Headers property key-value pair and use the message Headers The message is routed to the bound Queue by comparing the attribute key-value pair and the bound attribute key-value pair.
         * @return {@code this}
         */
        public Builder exchangeType(java.lang.String exchangeType) {
            this.exchangeType = exchangeType;
            return this;
        }

        /**
         * Sets the value of {@link ExchangeProps#getExchangeType}
         * @param exchangeType Property exchangeType: The type of the exchange. This parameter is required.
         *                     Valid values:
         *                     FANOUT: An exchange of this type routes all the received messages to all the queues bound to this exchange. You can use a fanout exchange to broadcast messages.
         *                     DIRECT: An exchange of this type routes a message to the queue whose binding key is exactly the same as the routing key of the message.
         *                     TOPIC: This type is similar to the direct exchange type. An exchange of this type routes a message to one or more queues based on the fuzzy match or multi-condition match result between the routing key of the message and the binding keys of the current exchange.
         *                     HEADERS: Headers Exchange uses the Headers property instead of Routing Key for routing matching. When binding Headers Exchange and Queue, set the key-value pair of the binding property; when sending a message to the Headers Exchange, set the message's Headers property key-value pair and use the message Headers The message is routed to the bound Queue by comparing the attribute key-value pair and the bound attribute key-value pair.
         * @return {@code this}
         */
        public Builder exchangeType(com.aliyun.ros.cdk.core.IResolvable exchangeType) {
            this.exchangeType = exchangeType;
            return this;
        }

        /**
         * Sets the value of {@link ExchangeProps#getInstanceId}
         * @param instanceId Property instanceId: InstanceId. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceId(java.lang.String instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link ExchangeProps#getInstanceId}
         * @param instanceId Property instanceId: InstanceId. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceId(com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link ExchangeProps#getInternal}
         * @param internal Property internal: Specifies whether an exchange is an internal exchange. This parameter is required.
         *                 Valid values:
         *                 false: The exchange is not an internal exchange.
         *                 true: The exchange is an internal exchange.
         * @return {@code this}
         */
        public Builder internal(java.lang.Boolean internal) {
            this.internal = internal;
            return this;
        }

        /**
         * Sets the value of {@link ExchangeProps#getInternal}
         * @param internal Property internal: Specifies whether an exchange is an internal exchange. This parameter is required.
         *                 Valid values:
         *                 false: The exchange is not an internal exchange.
         *                 true: The exchange is an internal exchange.
         * @return {@code this}
         */
        public Builder internal(com.aliyun.ros.cdk.core.IResolvable internal) {
            this.internal = internal;
            return this;
        }

        /**
         * Sets the value of {@link ExchangeProps#getVirtualHost}
         * @param virtualHost Property virtualHost: The name of the virtual host. This parameter is required.
         * @return {@code this}
         */
        public Builder virtualHost(java.lang.String virtualHost) {
            this.virtualHost = virtualHost;
            return this;
        }

        /**
         * Sets the value of {@link ExchangeProps#getVirtualHost}
         * @param virtualHost Property virtualHost: The name of the virtual host. This parameter is required.
         * @return {@code this}
         */
        public Builder virtualHost(com.aliyun.ros.cdk.core.IResolvable virtualHost) {
            this.virtualHost = virtualHost;
            return this;
        }

        /**
         * Sets the value of {@link ExchangeProps#getAlternateExchange}
         * @param alternateExchange Property alternateExchange: The alternate exchange.
         *                          An alternate exchange is configured for an existing exchange. It is used to receive messages that fail to be routed to queues from the existing exchange.
         * @return {@code this}
         */
        public Builder alternateExchange(java.lang.String alternateExchange) {
            this.alternateExchange = alternateExchange;
            return this;
        }

        /**
         * Sets the value of {@link ExchangeProps#getAlternateExchange}
         * @param alternateExchange Property alternateExchange: The alternate exchange.
         *                          An alternate exchange is configured for an existing exchange. It is used to receive messages that fail to be routed to queues from the existing exchange.
         * @return {@code this}
         */
        public Builder alternateExchange(com.aliyun.ros.cdk.core.IResolvable alternateExchange) {
            this.alternateExchange = alternateExchange;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link ExchangeProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public ExchangeProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link ExchangeProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ExchangeProps {
        private final java.lang.Object autoDeleteState;
        private final java.lang.Object exchangeName;
        private final java.lang.Object exchangeType;
        private final java.lang.Object instanceId;
        private final java.lang.Object internal;
        private final java.lang.Object virtualHost;
        private final java.lang.Object alternateExchange;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.autoDeleteState = software.amazon.jsii.Kernel.get(this, "autoDeleteState", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.exchangeName = software.amazon.jsii.Kernel.get(this, "exchangeName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.exchangeType = software.amazon.jsii.Kernel.get(this, "exchangeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceId = software.amazon.jsii.Kernel.get(this, "instanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.internal = software.amazon.jsii.Kernel.get(this, "internal", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.virtualHost = software.amazon.jsii.Kernel.get(this, "virtualHost", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.alternateExchange = software.amazon.jsii.Kernel.get(this, "alternateExchange", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.autoDeleteState = java.util.Objects.requireNonNull(builder.autoDeleteState, "autoDeleteState is required");
            this.exchangeName = java.util.Objects.requireNonNull(builder.exchangeName, "exchangeName is required");
            this.exchangeType = java.util.Objects.requireNonNull(builder.exchangeType, "exchangeType is required");
            this.instanceId = java.util.Objects.requireNonNull(builder.instanceId, "instanceId is required");
            this.internal = java.util.Objects.requireNonNull(builder.internal, "internal is required");
            this.virtualHost = java.util.Objects.requireNonNull(builder.virtualHost, "virtualHost is required");
            this.alternateExchange = builder.alternateExchange;
        }

        @Override
        public final java.lang.Object getAutoDeleteState() {
            return this.autoDeleteState;
        }

        @Override
        public final java.lang.Object getExchangeName() {
            return this.exchangeName;
        }

        @Override
        public final java.lang.Object getExchangeType() {
            return this.exchangeType;
        }

        @Override
        public final java.lang.Object getInstanceId() {
            return this.instanceId;
        }

        @Override
        public final java.lang.Object getInternal() {
            return this.internal;
        }

        @Override
        public final java.lang.Object getVirtualHost() {
            return this.virtualHost;
        }

        @Override
        public final java.lang.Object getAlternateExchange() {
            return this.alternateExchange;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("autoDeleteState", om.valueToTree(this.getAutoDeleteState()));
            data.set("exchangeName", om.valueToTree(this.getExchangeName()));
            data.set("exchangeType", om.valueToTree(this.getExchangeType()));
            data.set("instanceId", om.valueToTree(this.getInstanceId()));
            data.set("internal", om.valueToTree(this.getInternal()));
            data.set("virtualHost", om.valueToTree(this.getVirtualHost()));
            if (this.getAlternateExchange() != null) {
                data.set("alternateExchange", om.valueToTree(this.getAlternateExchange()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-amqp.ExchangeProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            ExchangeProps.Jsii$Proxy that = (ExchangeProps.Jsii$Proxy) o;

            if (!autoDeleteState.equals(that.autoDeleteState)) return false;
            if (!exchangeName.equals(that.exchangeName)) return false;
            if (!exchangeType.equals(that.exchangeType)) return false;
            if (!instanceId.equals(that.instanceId)) return false;
            if (!internal.equals(that.internal)) return false;
            if (!virtualHost.equals(that.virtualHost)) return false;
            return this.alternateExchange != null ? this.alternateExchange.equals(that.alternateExchange) : that.alternateExchange == null;
        }

        @Override
        public final int hashCode() {
            int result = this.autoDeleteState.hashCode();
            result = 31 * result + (this.exchangeName.hashCode());
            result = 31 * result + (this.exchangeType.hashCode());
            result = 31 * result + (this.instanceId.hashCode());
            result = 31 * result + (this.internal.hashCode());
            result = 31 * result + (this.virtualHost.hashCode());
            result = 31 * result + (this.alternateExchange != null ? this.alternateExchange.hashCode() : 0);
            return result;
        }
    }
}
