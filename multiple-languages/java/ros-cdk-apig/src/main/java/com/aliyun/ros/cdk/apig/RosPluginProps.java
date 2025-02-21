package com.aliyun.ros.cdk.apig;

/**
 * Properties for defining a <code>RosPlugin</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-plugin
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-02-21T03:23:11.737Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apig.$Module.class, fqn = "@alicloud/ros-cdk-apig.RosPluginProps")
@software.amazon.jsii.Jsii.Proxy(RosPluginProps.Jsii$Proxy.class)
public interface RosPluginProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getGatewayId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPluginClassId();

    /**
     * @return a {@link Builder} of {@link RosPluginProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosPluginProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosPluginProps> {
        java.lang.Object gatewayId;
        java.lang.Object pluginClassId;

        /**
         * Sets the value of {@link RosPluginProps#getGatewayId}
         * @param gatewayId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder gatewayId(java.lang.String gatewayId) {
            this.gatewayId = gatewayId;
            return this;
        }

        /**
         * Sets the value of {@link RosPluginProps#getGatewayId}
         * @param gatewayId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder gatewayId(com.aliyun.ros.cdk.core.IResolvable gatewayId) {
            this.gatewayId = gatewayId;
            return this;
        }

        /**
         * Sets the value of {@link RosPluginProps#getPluginClassId}
         * @param pluginClassId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder pluginClassId(java.lang.String pluginClassId) {
            this.pluginClassId = pluginClassId;
            return this;
        }

        /**
         * Sets the value of {@link RosPluginProps#getPluginClassId}
         * @param pluginClassId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder pluginClassId(com.aliyun.ros.cdk.core.IResolvable pluginClassId) {
            this.pluginClassId = pluginClassId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosPluginProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosPluginProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosPluginProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosPluginProps {
        private final java.lang.Object gatewayId;
        private final java.lang.Object pluginClassId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.gatewayId = software.amazon.jsii.Kernel.get(this, "gatewayId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.pluginClassId = software.amazon.jsii.Kernel.get(this, "pluginClassId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.gatewayId = java.util.Objects.requireNonNull(builder.gatewayId, "gatewayId is required");
            this.pluginClassId = java.util.Objects.requireNonNull(builder.pluginClassId, "pluginClassId is required");
        }

        @Override
        public final java.lang.Object getGatewayId() {
            return this.gatewayId;
        }

        @Override
        public final java.lang.Object getPluginClassId() {
            return this.pluginClassId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("gatewayId", om.valueToTree(this.getGatewayId()));
            data.set("pluginClassId", om.valueToTree(this.getPluginClassId()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-apig.RosPluginProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosPluginProps.Jsii$Proxy that = (RosPluginProps.Jsii$Proxy) o;

            if (!gatewayId.equals(that.gatewayId)) return false;
            return this.pluginClassId.equals(that.pluginClassId);
        }

        @Override
        public final int hashCode() {
            int result = this.gatewayId.hashCode();
            result = 31 * result + (this.pluginClassId.hashCode());
            return result;
        }
    }
}
