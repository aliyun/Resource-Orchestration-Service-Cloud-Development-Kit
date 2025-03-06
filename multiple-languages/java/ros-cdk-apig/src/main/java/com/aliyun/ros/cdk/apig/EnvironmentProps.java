package com.aliyun.ros.cdk.apig;

/**
 * Properties for defining a <code>Environment</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-environment
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:01.592Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apig.$Module.class, fqn = "@alicloud/ros-cdk-apig.EnvironmentProps")
@software.amazon.jsii.Jsii.Proxy(EnvironmentProps.Jsii$Proxy.class)
public interface EnvironmentProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property environmentName: The name of the environment.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getEnvironmentName();

    /**
     * Property gatewayId: Gateway id.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getGatewayId();

    /**
     * Property description: Description of the environment, which can include information such as the purpose of the environment and its owner.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link EnvironmentProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link EnvironmentProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<EnvironmentProps> {
        java.lang.Object environmentName;
        java.lang.Object gatewayId;
        java.lang.Object description;

        /**
         * Sets the value of {@link EnvironmentProps#getEnvironmentName}
         * @param environmentName Property environmentName: The name of the environment. This parameter is required.
         * @return {@code this}
         */
        public Builder environmentName(java.lang.String environmentName) {
            this.environmentName = environmentName;
            return this;
        }

        /**
         * Sets the value of {@link EnvironmentProps#getEnvironmentName}
         * @param environmentName Property environmentName: The name of the environment. This parameter is required.
         * @return {@code this}
         */
        public Builder environmentName(com.aliyun.ros.cdk.core.IResolvable environmentName) {
            this.environmentName = environmentName;
            return this;
        }

        /**
         * Sets the value of {@link EnvironmentProps#getGatewayId}
         * @param gatewayId Property gatewayId: Gateway id. This parameter is required.
         * @return {@code this}
         */
        public Builder gatewayId(java.lang.String gatewayId) {
            this.gatewayId = gatewayId;
            return this;
        }

        /**
         * Sets the value of {@link EnvironmentProps#getGatewayId}
         * @param gatewayId Property gatewayId: Gateway id. This parameter is required.
         * @return {@code this}
         */
        public Builder gatewayId(com.aliyun.ros.cdk.core.IResolvable gatewayId) {
            this.gatewayId = gatewayId;
            return this;
        }

        /**
         * Sets the value of {@link EnvironmentProps#getDescription}
         * @param description Property description: Description of the environment, which can include information such as the purpose of the environment and its owner.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link EnvironmentProps#getDescription}
         * @param description Property description: Description of the environment, which can include information such as the purpose of the environment and its owner.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link EnvironmentProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public EnvironmentProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link EnvironmentProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements EnvironmentProps {
        private final java.lang.Object environmentName;
        private final java.lang.Object gatewayId;
        private final java.lang.Object description;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.environmentName = software.amazon.jsii.Kernel.get(this, "environmentName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.gatewayId = software.amazon.jsii.Kernel.get(this, "gatewayId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.environmentName = java.util.Objects.requireNonNull(builder.environmentName, "environmentName is required");
            this.gatewayId = java.util.Objects.requireNonNull(builder.gatewayId, "gatewayId is required");
            this.description = builder.description;
        }

        @Override
        public final java.lang.Object getEnvironmentName() {
            return this.environmentName;
        }

        @Override
        public final java.lang.Object getGatewayId() {
            return this.gatewayId;
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

            data.set("environmentName", om.valueToTree(this.getEnvironmentName()));
            data.set("gatewayId", om.valueToTree(this.getGatewayId()));
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-apig.EnvironmentProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            EnvironmentProps.Jsii$Proxy that = (EnvironmentProps.Jsii$Proxy) o;

            if (!environmentName.equals(that.environmentName)) return false;
            if (!gatewayId.equals(that.gatewayId)) return false;
            return this.description != null ? this.description.equals(that.description) : that.description == null;
        }

        @Override
        public final int hashCode() {
            int result = this.environmentName.hashCode();
            result = 31 * result + (this.gatewayId.hashCode());
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            return result;
        }
    }
}
