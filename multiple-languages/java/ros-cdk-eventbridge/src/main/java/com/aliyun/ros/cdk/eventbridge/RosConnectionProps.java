package com.aliyun.ros.cdk.eventbridge;

/**
 * Properties for defining a <code>RosConnection</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-eventbridge-connection
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T12:01:25.417Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.eventbridge.$Module.class, fqn = "@alicloud/ros-cdk-eventbridge.RosConnectionProps")
@software.amazon.jsii.Jsii.Proxy(RosConnectionProps.Jsii$Proxy.class)
public interface RosConnectionProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getConnectionName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getNetworkParameters();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAuthParameters() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosConnectionProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosConnectionProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosConnectionProps> {
        java.lang.Object connectionName;
        java.lang.Object networkParameters;
        java.lang.Object authParameters;
        java.lang.Object description;

        /**
         * Sets the value of {@link RosConnectionProps#getConnectionName}
         * @param connectionName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder connectionName(java.lang.String connectionName) {
            this.connectionName = connectionName;
            return this;
        }

        /**
         * Sets the value of {@link RosConnectionProps#getConnectionName}
         * @param connectionName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder connectionName(com.aliyun.ros.cdk.core.IResolvable connectionName) {
            this.connectionName = connectionName;
            return this;
        }

        /**
         * Sets the value of {@link RosConnectionProps#getNetworkParameters}
         * @param networkParameters the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder networkParameters(com.aliyun.ros.cdk.core.IResolvable networkParameters) {
            this.networkParameters = networkParameters;
            return this;
        }

        /**
         * Sets the value of {@link RosConnectionProps#getNetworkParameters}
         * @param networkParameters the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder networkParameters(com.aliyun.ros.cdk.eventbridge.RosConnection.NetworkParametersProperty networkParameters) {
            this.networkParameters = networkParameters;
            return this;
        }

        /**
         * Sets the value of {@link RosConnectionProps#getAuthParameters}
         * @param authParameters the value to be set.
         * @return {@code this}
         */
        public Builder authParameters(com.aliyun.ros.cdk.core.IResolvable authParameters) {
            this.authParameters = authParameters;
            return this;
        }

        /**
         * Sets the value of {@link RosConnectionProps#getAuthParameters}
         * @param authParameters the value to be set.
         * @return {@code this}
         */
        public Builder authParameters(com.aliyun.ros.cdk.eventbridge.RosConnection.AuthParametersProperty authParameters) {
            this.authParameters = authParameters;
            return this;
        }

        /**
         * Sets the value of {@link RosConnectionProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosConnectionProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosConnectionProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosConnectionProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosConnectionProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosConnectionProps {
        private final java.lang.Object connectionName;
        private final java.lang.Object networkParameters;
        private final java.lang.Object authParameters;
        private final java.lang.Object description;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.connectionName = software.amazon.jsii.Kernel.get(this, "connectionName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.networkParameters = software.amazon.jsii.Kernel.get(this, "networkParameters", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.authParameters = software.amazon.jsii.Kernel.get(this, "authParameters", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.connectionName = java.util.Objects.requireNonNull(builder.connectionName, "connectionName is required");
            this.networkParameters = java.util.Objects.requireNonNull(builder.networkParameters, "networkParameters is required");
            this.authParameters = builder.authParameters;
            this.description = builder.description;
        }

        @Override
        public final java.lang.Object getConnectionName() {
            return this.connectionName;
        }

        @Override
        public final java.lang.Object getNetworkParameters() {
            return this.networkParameters;
        }

        @Override
        public final java.lang.Object getAuthParameters() {
            return this.authParameters;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("connectionName", om.valueToTree(this.getConnectionName()));
            data.set("networkParameters", om.valueToTree(this.getNetworkParameters()));
            if (this.getAuthParameters() != null) {
                data.set("authParameters", om.valueToTree(this.getAuthParameters()));
            }
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-eventbridge.RosConnectionProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosConnectionProps.Jsii$Proxy that = (RosConnectionProps.Jsii$Proxy) o;

            if (!connectionName.equals(that.connectionName)) return false;
            if (!networkParameters.equals(that.networkParameters)) return false;
            if (this.authParameters != null ? !this.authParameters.equals(that.authParameters) : that.authParameters != null) return false;
            return this.description != null ? this.description.equals(that.description) : that.description == null;
        }

        @Override
        public final int hashCode() {
            int result = this.connectionName.hashCode();
            result = 31 * result + (this.networkParameters.hashCode());
            result = 31 * result + (this.authParameters != null ? this.authParameters.hashCode() : 0);
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            return result;
        }
    }
}
