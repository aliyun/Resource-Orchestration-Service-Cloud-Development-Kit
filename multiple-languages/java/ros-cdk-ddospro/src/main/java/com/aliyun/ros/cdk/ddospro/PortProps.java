package com.aliyun.ros.cdk.ddospro;

/**
 * Properties for defining a <code>Port</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ddospro-port
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-10-18T08:56:28.290Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ddospro.$Module.class, fqn = "@alicloud/ros-cdk-ddospro.PortProps")
@software.amazon.jsii.Jsii.Proxy(PortProps.Jsii$Proxy.class)
public interface PortProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property frontendProtocol: The type of the protocol.
     * <p>
     * Valid values:
     * tcp
     * udp
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getFrontendProtocol();

    /**
     * Property instanceId: The ID of the Anti-DDoS Pro or Anti-DDoS Premium instance to which the port forwarding rule belongs.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getInstanceId();

    /**
     * Property realServers: An array that consists of the IP addresses of origin servers.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getRealServers();

    /**
     * Property backendPort: The port of the origin server.
     * <p>
     * Valid values: 0 to 65535.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getBackendPort() {
        return null;
    }

    /**
     * Property frontendPort: The forwarding port.
     * <p>
     * Valid values: 0 to 65535.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getFrontendPort() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link PortProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link PortProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<PortProps> {
        java.lang.Object frontendProtocol;
        java.lang.Object instanceId;
        java.lang.Object realServers;
        java.lang.Object backendPort;
        java.lang.Object frontendPort;

        /**
         * Sets the value of {@link PortProps#getFrontendProtocol}
         * @param frontendProtocol Property frontendProtocol: The type of the protocol. This parameter is required.
         *                         Valid values:
         *                         tcp
         *                         udp
         * @return {@code this}
         */
        public Builder frontendProtocol(java.lang.String frontendProtocol) {
            this.frontendProtocol = frontendProtocol;
            return this;
        }

        /**
         * Sets the value of {@link PortProps#getFrontendProtocol}
         * @param frontendProtocol Property frontendProtocol: The type of the protocol. This parameter is required.
         *                         Valid values:
         *                         tcp
         *                         udp
         * @return {@code this}
         */
        public Builder frontendProtocol(com.aliyun.ros.cdk.core.IResolvable frontendProtocol) {
            this.frontendProtocol = frontendProtocol;
            return this;
        }

        /**
         * Sets the value of {@link PortProps#getInstanceId}
         * @param instanceId Property instanceId: The ID of the Anti-DDoS Pro or Anti-DDoS Premium instance to which the port forwarding rule belongs. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceId(java.lang.String instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link PortProps#getInstanceId}
         * @param instanceId Property instanceId: The ID of the Anti-DDoS Pro or Anti-DDoS Premium instance to which the port forwarding rule belongs. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceId(com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link PortProps#getRealServers}
         * @param realServers Property realServers: An array that consists of the IP addresses of origin servers. This parameter is required.
         * @return {@code this}
         */
        public Builder realServers(com.aliyun.ros.cdk.core.IResolvable realServers) {
            this.realServers = realServers;
            return this;
        }

        /**
         * Sets the value of {@link PortProps#getRealServers}
         * @param realServers Property realServers: An array that consists of the IP addresses of origin servers. This parameter is required.
         * @return {@code this}
         */
        public Builder realServers(java.util.List<? extends java.lang.Object> realServers) {
            this.realServers = realServers;
            return this;
        }

        /**
         * Sets the value of {@link PortProps#getBackendPort}
         * @param backendPort Property backendPort: The port of the origin server.
         *                    Valid values: 0 to 65535.
         * @return {@code this}
         */
        public Builder backendPort(java.lang.String backendPort) {
            this.backendPort = backendPort;
            return this;
        }

        /**
         * Sets the value of {@link PortProps#getBackendPort}
         * @param backendPort Property backendPort: The port of the origin server.
         *                    Valid values: 0 to 65535.
         * @return {@code this}
         */
        public Builder backendPort(com.aliyun.ros.cdk.core.IResolvable backendPort) {
            this.backendPort = backendPort;
            return this;
        }

        /**
         * Sets the value of {@link PortProps#getFrontendPort}
         * @param frontendPort Property frontendPort: The forwarding port.
         *                     Valid values: 0 to 65535.
         * @return {@code this}
         */
        public Builder frontendPort(java.lang.String frontendPort) {
            this.frontendPort = frontendPort;
            return this;
        }

        /**
         * Sets the value of {@link PortProps#getFrontendPort}
         * @param frontendPort Property frontendPort: The forwarding port.
         *                     Valid values: 0 to 65535.
         * @return {@code this}
         */
        public Builder frontendPort(com.aliyun.ros.cdk.core.IResolvable frontendPort) {
            this.frontendPort = frontendPort;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link PortProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public PortProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link PortProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements PortProps {
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
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ddospro.PortProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            PortProps.Jsii$Proxy that = (PortProps.Jsii$Proxy) o;

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
