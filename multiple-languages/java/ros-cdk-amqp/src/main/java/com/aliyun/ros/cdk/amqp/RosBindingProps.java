package com.aliyun.ros.cdk.amqp;

/**
 * Properties for defining a `ALIYUN::AMQP::Binding`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.71.0 (build f1f58ae)", date = "2022-11-30T05:21:17.920Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.amqp.$Module.class, fqn = "@alicloud/ros-cdk-amqp.RosBindingProps")
@software.amazon.jsii.Jsii.Proxy(RosBindingProps.Jsii$Proxy.class)
public interface RosBindingProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getArgument();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getBindingKey();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getBindingType();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDestinationName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getInstanceId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSourceExchange();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getVirtualHost();

    /**
     * @return a {@link Builder} of {@link RosBindingProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosBindingProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosBindingProps> {
        java.lang.Object argument;
        java.lang.Object bindingKey;
        java.lang.Object bindingType;
        java.lang.Object destinationName;
        java.lang.Object instanceId;
        java.lang.Object sourceExchange;
        java.lang.Object virtualHost;

        /**
         * Sets the value of {@link RosBindingProps#getArgument}
         * @param argument the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder argument(java.lang.String argument) {
            this.argument = argument;
            return this;
        }

        /**
         * Sets the value of {@link RosBindingProps#getArgument}
         * @param argument the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder argument(com.aliyun.ros.cdk.core.IResolvable argument) {
            this.argument = argument;
            return this;
        }

        /**
         * Sets the value of {@link RosBindingProps#getBindingKey}
         * @param bindingKey the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder bindingKey(java.lang.String bindingKey) {
            this.bindingKey = bindingKey;
            return this;
        }

        /**
         * Sets the value of {@link RosBindingProps#getBindingKey}
         * @param bindingKey the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder bindingKey(com.aliyun.ros.cdk.core.IResolvable bindingKey) {
            this.bindingKey = bindingKey;
            return this;
        }

        /**
         * Sets the value of {@link RosBindingProps#getBindingType}
         * @param bindingType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder bindingType(java.lang.String bindingType) {
            this.bindingType = bindingType;
            return this;
        }

        /**
         * Sets the value of {@link RosBindingProps#getBindingType}
         * @param bindingType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder bindingType(com.aliyun.ros.cdk.core.IResolvable bindingType) {
            this.bindingType = bindingType;
            return this;
        }

        /**
         * Sets the value of {@link RosBindingProps#getDestinationName}
         * @param destinationName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder destinationName(java.lang.String destinationName) {
            this.destinationName = destinationName;
            return this;
        }

        /**
         * Sets the value of {@link RosBindingProps#getDestinationName}
         * @param destinationName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder destinationName(com.aliyun.ros.cdk.core.IResolvable destinationName) {
            this.destinationName = destinationName;
            return this;
        }

        /**
         * Sets the value of {@link RosBindingProps#getInstanceId}
         * @param instanceId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceId(java.lang.String instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link RosBindingProps#getInstanceId}
         * @param instanceId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceId(com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link RosBindingProps#getSourceExchange}
         * @param sourceExchange the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder sourceExchange(java.lang.String sourceExchange) {
            this.sourceExchange = sourceExchange;
            return this;
        }

        /**
         * Sets the value of {@link RosBindingProps#getSourceExchange}
         * @param sourceExchange the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder sourceExchange(com.aliyun.ros.cdk.core.IResolvable sourceExchange) {
            this.sourceExchange = sourceExchange;
            return this;
        }

        /**
         * Sets the value of {@link RosBindingProps#getVirtualHost}
         * @param virtualHost the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder virtualHost(java.lang.String virtualHost) {
            this.virtualHost = virtualHost;
            return this;
        }

        /**
         * Sets the value of {@link RosBindingProps#getVirtualHost}
         * @param virtualHost the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder virtualHost(com.aliyun.ros.cdk.core.IResolvable virtualHost) {
            this.virtualHost = virtualHost;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosBindingProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosBindingProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosBindingProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosBindingProps {
        private final java.lang.Object argument;
        private final java.lang.Object bindingKey;
        private final java.lang.Object bindingType;
        private final java.lang.Object destinationName;
        private final java.lang.Object instanceId;
        private final java.lang.Object sourceExchange;
        private final java.lang.Object virtualHost;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.argument = software.amazon.jsii.Kernel.get(this, "argument", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.bindingKey = software.amazon.jsii.Kernel.get(this, "bindingKey", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.bindingType = software.amazon.jsii.Kernel.get(this, "bindingType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.destinationName = software.amazon.jsii.Kernel.get(this, "destinationName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceId = software.amazon.jsii.Kernel.get(this, "instanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.sourceExchange = software.amazon.jsii.Kernel.get(this, "sourceExchange", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.virtualHost = software.amazon.jsii.Kernel.get(this, "virtualHost", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.argument = java.util.Objects.requireNonNull(builder.argument, "argument is required");
            this.bindingKey = java.util.Objects.requireNonNull(builder.bindingKey, "bindingKey is required");
            this.bindingType = java.util.Objects.requireNonNull(builder.bindingType, "bindingType is required");
            this.destinationName = java.util.Objects.requireNonNull(builder.destinationName, "destinationName is required");
            this.instanceId = java.util.Objects.requireNonNull(builder.instanceId, "instanceId is required");
            this.sourceExchange = java.util.Objects.requireNonNull(builder.sourceExchange, "sourceExchange is required");
            this.virtualHost = java.util.Objects.requireNonNull(builder.virtualHost, "virtualHost is required");
        }

        @Override
        public final java.lang.Object getArgument() {
            return this.argument;
        }

        @Override
        public final java.lang.Object getBindingKey() {
            return this.bindingKey;
        }

        @Override
        public final java.lang.Object getBindingType() {
            return this.bindingType;
        }

        @Override
        public final java.lang.Object getDestinationName() {
            return this.destinationName;
        }

        @Override
        public final java.lang.Object getInstanceId() {
            return this.instanceId;
        }

        @Override
        public final java.lang.Object getSourceExchange() {
            return this.sourceExchange;
        }

        @Override
        public final java.lang.Object getVirtualHost() {
            return this.virtualHost;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("argument", om.valueToTree(this.getArgument()));
            data.set("bindingKey", om.valueToTree(this.getBindingKey()));
            data.set("bindingType", om.valueToTree(this.getBindingType()));
            data.set("destinationName", om.valueToTree(this.getDestinationName()));
            data.set("instanceId", om.valueToTree(this.getInstanceId()));
            data.set("sourceExchange", om.valueToTree(this.getSourceExchange()));
            data.set("virtualHost", om.valueToTree(this.getVirtualHost()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-amqp.RosBindingProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosBindingProps.Jsii$Proxy that = (RosBindingProps.Jsii$Proxy) o;

            if (!argument.equals(that.argument)) return false;
            if (!bindingKey.equals(that.bindingKey)) return false;
            if (!bindingType.equals(that.bindingType)) return false;
            if (!destinationName.equals(that.destinationName)) return false;
            if (!instanceId.equals(that.instanceId)) return false;
            if (!sourceExchange.equals(that.sourceExchange)) return false;
            return this.virtualHost.equals(that.virtualHost);
        }

        @Override
        public final int hashCode() {
            int result = this.argument.hashCode();
            result = 31 * result + (this.bindingKey.hashCode());
            result = 31 * result + (this.bindingType.hashCode());
            result = 31 * result + (this.destinationName.hashCode());
            result = 31 * result + (this.instanceId.hashCode());
            result = 31 * result + (this.sourceExchange.hashCode());
            result = 31 * result + (this.virtualHost.hashCode());
            return result;
        }
    }
}
