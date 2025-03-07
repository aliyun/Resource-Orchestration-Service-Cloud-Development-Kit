package com.aliyun.ros.cdk.appflow;

/**
 * Properties for defining a <code>RosUserAuthConfig</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-appflow-userauthconfig
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:01.910Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.appflow.$Module.class, fqn = "@alicloud/ros-cdk-appflow.RosUserAuthConfigProps")
@software.amazon.jsii.Jsii.Proxy(RosUserAuthConfigProps.Jsii$Proxy.class)
public interface RosUserAuthConfigProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAuthConfig();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAuthConfigName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getConnectorId();

    /**
     * @return a {@link Builder} of {@link RosUserAuthConfigProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosUserAuthConfigProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosUserAuthConfigProps> {
        java.lang.Object authConfig;
        java.lang.Object authConfigName;
        java.lang.Object connectorId;

        /**
         * Sets the value of {@link RosUserAuthConfigProps#getAuthConfig}
         * @param authConfig the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder authConfig(com.aliyun.ros.cdk.core.IResolvable authConfig) {
            this.authConfig = authConfig;
            return this;
        }

        /**
         * Sets the value of {@link RosUserAuthConfigProps#getAuthConfig}
         * @param authConfig the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder authConfig(java.util.Map<java.lang.String, ? extends java.lang.Object> authConfig) {
            this.authConfig = authConfig;
            return this;
        }

        /**
         * Sets the value of {@link RosUserAuthConfigProps#getAuthConfigName}
         * @param authConfigName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder authConfigName(java.lang.String authConfigName) {
            this.authConfigName = authConfigName;
            return this;
        }

        /**
         * Sets the value of {@link RosUserAuthConfigProps#getAuthConfigName}
         * @param authConfigName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder authConfigName(com.aliyun.ros.cdk.core.IResolvable authConfigName) {
            this.authConfigName = authConfigName;
            return this;
        }

        /**
         * Sets the value of {@link RosUserAuthConfigProps#getConnectorId}
         * @param connectorId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder connectorId(java.lang.String connectorId) {
            this.connectorId = connectorId;
            return this;
        }

        /**
         * Sets the value of {@link RosUserAuthConfigProps#getConnectorId}
         * @param connectorId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder connectorId(com.aliyun.ros.cdk.core.IResolvable connectorId) {
            this.connectorId = connectorId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosUserAuthConfigProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosUserAuthConfigProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosUserAuthConfigProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosUserAuthConfigProps {
        private final java.lang.Object authConfig;
        private final java.lang.Object authConfigName;
        private final java.lang.Object connectorId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.authConfig = software.amazon.jsii.Kernel.get(this, "authConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.authConfigName = software.amazon.jsii.Kernel.get(this, "authConfigName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.connectorId = software.amazon.jsii.Kernel.get(this, "connectorId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.authConfig = java.util.Objects.requireNonNull(builder.authConfig, "authConfig is required");
            this.authConfigName = java.util.Objects.requireNonNull(builder.authConfigName, "authConfigName is required");
            this.connectorId = java.util.Objects.requireNonNull(builder.connectorId, "connectorId is required");
        }

        @Override
        public final java.lang.Object getAuthConfig() {
            return this.authConfig;
        }

        @Override
        public final java.lang.Object getAuthConfigName() {
            return this.authConfigName;
        }

        @Override
        public final java.lang.Object getConnectorId() {
            return this.connectorId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("authConfig", om.valueToTree(this.getAuthConfig()));
            data.set("authConfigName", om.valueToTree(this.getAuthConfigName()));
            data.set("connectorId", om.valueToTree(this.getConnectorId()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-appflow.RosUserAuthConfigProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosUserAuthConfigProps.Jsii$Proxy that = (RosUserAuthConfigProps.Jsii$Proxy) o;

            if (!authConfig.equals(that.authConfig)) return false;
            if (!authConfigName.equals(that.authConfigName)) return false;
            return this.connectorId.equals(that.connectorId);
        }

        @Override
        public final int hashCode() {
            int result = this.authConfig.hashCode();
            result = 31 * result + (this.authConfigName.hashCode());
            result = 31 * result + (this.connectorId.hashCode());
            return result;
        }
    }
}
