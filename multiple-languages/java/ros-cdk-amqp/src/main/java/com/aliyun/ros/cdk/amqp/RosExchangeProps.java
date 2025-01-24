package com.aliyun.ros.cdk.amqp;

/**
 * Properties for defining a <code>RosExchange</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-amqp-exchange
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-01-23T09:30:34.565Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.amqp.$Module.class, fqn = "@alicloud/ros-cdk-amqp.RosExchangeProps")
@software.amazon.jsii.Jsii.Proxy(RosExchangeProps.Jsii$Proxy.class)
public interface RosExchangeProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAutoDeleteState();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getExchangeName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getExchangeType();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getInstanceId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getInternal();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getVirtualHost();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAlternateExchange() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getXDelayedType() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosExchangeProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosExchangeProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosExchangeProps> {
        java.lang.Object autoDeleteState;
        java.lang.Object exchangeName;
        java.lang.Object exchangeType;
        java.lang.Object instanceId;
        java.lang.Object internal;
        java.lang.Object virtualHost;
        java.lang.Object alternateExchange;
        java.lang.Object xDelayedType;

        /**
         * Sets the value of {@link RosExchangeProps#getAutoDeleteState}
         * @param autoDeleteState the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder autoDeleteState(java.lang.Boolean autoDeleteState) {
            this.autoDeleteState = autoDeleteState;
            return this;
        }

        /**
         * Sets the value of {@link RosExchangeProps#getAutoDeleteState}
         * @param autoDeleteState the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder autoDeleteState(com.aliyun.ros.cdk.core.IResolvable autoDeleteState) {
            this.autoDeleteState = autoDeleteState;
            return this;
        }

        /**
         * Sets the value of {@link RosExchangeProps#getExchangeName}
         * @param exchangeName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder exchangeName(java.lang.String exchangeName) {
            this.exchangeName = exchangeName;
            return this;
        }

        /**
         * Sets the value of {@link RosExchangeProps#getExchangeName}
         * @param exchangeName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder exchangeName(com.aliyun.ros.cdk.core.IResolvable exchangeName) {
            this.exchangeName = exchangeName;
            return this;
        }

        /**
         * Sets the value of {@link RosExchangeProps#getExchangeType}
         * @param exchangeType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder exchangeType(java.lang.String exchangeType) {
            this.exchangeType = exchangeType;
            return this;
        }

        /**
         * Sets the value of {@link RosExchangeProps#getExchangeType}
         * @param exchangeType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder exchangeType(com.aliyun.ros.cdk.core.IResolvable exchangeType) {
            this.exchangeType = exchangeType;
            return this;
        }

        /**
         * Sets the value of {@link RosExchangeProps#getInstanceId}
         * @param instanceId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceId(java.lang.String instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link RosExchangeProps#getInstanceId}
         * @param instanceId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceId(com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link RosExchangeProps#getInternal}
         * @param internal the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder internal(java.lang.Boolean internal) {
            this.internal = internal;
            return this;
        }

        /**
         * Sets the value of {@link RosExchangeProps#getInternal}
         * @param internal the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder internal(com.aliyun.ros.cdk.core.IResolvable internal) {
            this.internal = internal;
            return this;
        }

        /**
         * Sets the value of {@link RosExchangeProps#getVirtualHost}
         * @param virtualHost the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder virtualHost(java.lang.String virtualHost) {
            this.virtualHost = virtualHost;
            return this;
        }

        /**
         * Sets the value of {@link RosExchangeProps#getVirtualHost}
         * @param virtualHost the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder virtualHost(com.aliyun.ros.cdk.core.IResolvable virtualHost) {
            this.virtualHost = virtualHost;
            return this;
        }

        /**
         * Sets the value of {@link RosExchangeProps#getAlternateExchange}
         * @param alternateExchange the value to be set.
         * @return {@code this}
         */
        public Builder alternateExchange(java.lang.String alternateExchange) {
            this.alternateExchange = alternateExchange;
            return this;
        }

        /**
         * Sets the value of {@link RosExchangeProps#getAlternateExchange}
         * @param alternateExchange the value to be set.
         * @return {@code this}
         */
        public Builder alternateExchange(com.aliyun.ros.cdk.core.IResolvable alternateExchange) {
            this.alternateExchange = alternateExchange;
            return this;
        }

        /**
         * Sets the value of {@link RosExchangeProps#getXDelayedType}
         * @param xDelayedType the value to be set.
         * @return {@code this}
         */
        public Builder xDelayedType(java.lang.String xDelayedType) {
            this.xDelayedType = xDelayedType;
            return this;
        }

        /**
         * Sets the value of {@link RosExchangeProps#getXDelayedType}
         * @param xDelayedType the value to be set.
         * @return {@code this}
         */
        public Builder xDelayedType(com.aliyun.ros.cdk.core.IResolvable xDelayedType) {
            this.xDelayedType = xDelayedType;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosExchangeProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosExchangeProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosExchangeProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosExchangeProps {
        private final java.lang.Object autoDeleteState;
        private final java.lang.Object exchangeName;
        private final java.lang.Object exchangeType;
        private final java.lang.Object instanceId;
        private final java.lang.Object internal;
        private final java.lang.Object virtualHost;
        private final java.lang.Object alternateExchange;
        private final java.lang.Object xDelayedType;

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
            this.xDelayedType = software.amazon.jsii.Kernel.get(this, "xDelayedType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
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
            this.xDelayedType = builder.xDelayedType;
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
        public final java.lang.Object getXDelayedType() {
            return this.xDelayedType;
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
            if (this.getXDelayedType() != null) {
                data.set("xDelayedType", om.valueToTree(this.getXDelayedType()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-amqp.RosExchangeProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosExchangeProps.Jsii$Proxy that = (RosExchangeProps.Jsii$Proxy) o;

            if (!autoDeleteState.equals(that.autoDeleteState)) return false;
            if (!exchangeName.equals(that.exchangeName)) return false;
            if (!exchangeType.equals(that.exchangeType)) return false;
            if (!instanceId.equals(that.instanceId)) return false;
            if (!internal.equals(that.internal)) return false;
            if (!virtualHost.equals(that.virtualHost)) return false;
            if (this.alternateExchange != null ? !this.alternateExchange.equals(that.alternateExchange) : that.alternateExchange != null) return false;
            return this.xDelayedType != null ? this.xDelayedType.equals(that.xDelayedType) : that.xDelayedType == null;
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
            result = 31 * result + (this.xDelayedType != null ? this.xDelayedType.hashCode() : 0);
            return result;
        }
    }
}
