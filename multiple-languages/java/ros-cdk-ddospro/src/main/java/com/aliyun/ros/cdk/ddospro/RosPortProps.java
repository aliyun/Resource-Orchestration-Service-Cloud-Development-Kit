package com.aliyun.ros.cdk.ddospro;

/**
 * Properties for defining a <code>RosPort</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ddospro-port
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:03.746Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ddospro.$Module.class, fqn = "@alicloud/ros-cdk-ddospro.RosPortProps")
@software.amazon.jsii.Jsii.Proxy(RosPortProps.Jsii$Proxy.class)
public interface RosPortProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getFrontendProtocol();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getInstanceId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getRealServers();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getBackendPort() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getFrontendPort() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosPortProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosPortProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosPortProps> {
        java.lang.Object frontendProtocol;
        java.lang.Object instanceId;
        java.lang.Object realServers;
        java.lang.Object backendPort;
        java.lang.Object frontendPort;

        /**
         * Sets the value of {@link RosPortProps#getFrontendProtocol}
         * @param frontendProtocol the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder frontendProtocol(java.lang.String frontendProtocol) {
            this.frontendProtocol = frontendProtocol;
            return this;
        }

        /**
         * Sets the value of {@link RosPortProps#getFrontendProtocol}
         * @param frontendProtocol the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder frontendProtocol(com.aliyun.ros.cdk.core.IResolvable frontendProtocol) {
            this.frontendProtocol = frontendProtocol;
            return this;
        }

        /**
         * Sets the value of {@link RosPortProps#getInstanceId}
         * @param instanceId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceId(java.lang.String instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link RosPortProps#getInstanceId}
         * @param instanceId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceId(com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link RosPortProps#getRealServers}
         * @param realServers the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder realServers(com.aliyun.ros.cdk.core.IResolvable realServers) {
            this.realServers = realServers;
            return this;
        }

        /**
         * Sets the value of {@link RosPortProps#getRealServers}
         * @param realServers the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder realServers(java.util.List<? extends java.lang.Object> realServers) {
            this.realServers = realServers;
            return this;
        }

        /**
         * Sets the value of {@link RosPortProps#getBackendPort}
         * @param backendPort the value to be set.
         * @return {@code this}
         */
        public Builder backendPort(java.lang.String backendPort) {
            this.backendPort = backendPort;
            return this;
        }

        /**
         * Sets the value of {@link RosPortProps#getBackendPort}
         * @param backendPort the value to be set.
         * @return {@code this}
         */
        public Builder backendPort(com.aliyun.ros.cdk.core.IResolvable backendPort) {
            this.backendPort = backendPort;
            return this;
        }

        /**
         * Sets the value of {@link RosPortProps#getFrontendPort}
         * @param frontendPort the value to be set.
         * @return {@code this}
         */
        public Builder frontendPort(java.lang.String frontendPort) {
            this.frontendPort = frontendPort;
            return this;
        }

        /**
         * Sets the value of {@link RosPortProps#getFrontendPort}
         * @param frontendPort the value to be set.
         * @return {@code this}
         */
        public Builder frontendPort(com.aliyun.ros.cdk.core.IResolvable frontendPort) {
            this.frontendPort = frontendPort;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosPortProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosPortProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosPortProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosPortProps {
        private final java.lang.Object frontendProtocol;
        private final java.lang.Object instanceId;
        private final java.lang.Object realServers;
        private final java.lang.Object backendPort;
        private final java.lang.Object frontendPort;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.frontendProtocol = software.amazon.jsii.Kernel.get(this, "frontendProtocol", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceId = software.amazon.jsii.Kernel.get(this, "instanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.realServers = software.amazon.jsii.Kernel.get(this, "realServers", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.backendPort = software.amazon.jsii.Kernel.get(this, "backendPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.frontendPort = software.amazon.jsii.Kernel.get(this, "frontendPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.frontendProtocol = java.util.Objects.requireNonNull(builder.frontendProtocol, "frontendProtocol is required");
            this.instanceId = java.util.Objects.requireNonNull(builder.instanceId, "instanceId is required");
            this.realServers = java.util.Objects.requireNonNull(builder.realServers, "realServers is required");
            this.backendPort = builder.backendPort;
            this.frontendPort = builder.frontendPort;
        }

        @Override
        public final java.lang.Object getFrontendProtocol() {
            return this.frontendProtocol;
        }

        @Override
        public final java.lang.Object getInstanceId() {
            return this.instanceId;
        }

        @Override
        public final java.lang.Object getRealServers() {
            return this.realServers;
        }

        @Override
        public final java.lang.Object getBackendPort() {
            return this.backendPort;
        }

        @Override
        public final java.lang.Object getFrontendPort() {
            return this.frontendPort;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("frontendProtocol", om.valueToTree(this.getFrontendProtocol()));
            data.set("instanceId", om.valueToTree(this.getInstanceId()));
            data.set("realServers", om.valueToTree(this.getRealServers()));
            if (this.getBackendPort() != null) {
                data.set("backendPort", om.valueToTree(this.getBackendPort()));
            }
            if (this.getFrontendPort() != null) {
                data.set("frontendPort", om.valueToTree(this.getFrontendPort()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ddospro.RosPortProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosPortProps.Jsii$Proxy that = (RosPortProps.Jsii$Proxy) o;

            if (!frontendProtocol.equals(that.frontendProtocol)) return false;
            if (!instanceId.equals(that.instanceId)) return false;
            if (!realServers.equals(that.realServers)) return false;
            if (this.backendPort != null ? !this.backendPort.equals(that.backendPort) : that.backendPort != null) return false;
            return this.frontendPort != null ? this.frontendPort.equals(that.frontendPort) : that.frontendPort == null;
        }

        @Override
        public final int hashCode() {
            int result = this.frontendProtocol.hashCode();
            result = 31 * result + (this.instanceId.hashCode());
            result = 31 * result + (this.realServers.hashCode());
            result = 31 * result + (this.backendPort != null ? this.backendPort.hashCode() : 0);
            result = 31 * result + (this.frontendPort != null ? this.frontendPort.hashCode() : 0);
            return result;
        }
    }
}
