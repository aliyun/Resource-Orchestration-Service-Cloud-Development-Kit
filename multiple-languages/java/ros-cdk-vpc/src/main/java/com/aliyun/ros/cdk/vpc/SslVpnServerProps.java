package com.aliyun.ros.cdk.vpc;

/**
 * Properties for defining a `ALIYUN::VPC::SslVpnServer`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.30.0 (build adae23f)", date = "2021-06-21T09:47:44.262Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.SslVpnServerProps")
@software.amazon.jsii.Jsii.Proxy(SslVpnServerProps.Jsii$Proxy.class)
public interface SslVpnServerProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property clientIpPool: It is the address segment that assigns the access address to the client virtual NIC.
     * <p>
     * It does not refer to the existing intranet segment of the client.
     * When the client accesses the local end through an SSL-VPN connection, the VPN gateway allocates an IP address to the client from the specified client network segment.
     * The network segment cannot conflict with the LocalSubnet address segment.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getClientIpPool();

    /**
     * Property localSubnet: Is the address segment that the client wants to access through an SSL-VPN connection.
     * <p>
     * The local network segment can be the network segment of the VPC, the network segment of the switch, the network segment of the IDC interconnected by the leased line and the VPC, and the network segment of the cloud service such as RDS/OSS.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getLocalSubnet();

    /**
     * Property vpnGatewayId: ID of the VPN gateway.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getVpnGatewayId();

    /**
     * Property cipher: The encryption algorithm used by SSL-VPN.
     * <p>
     * Value:
     * AES-128-CBC (default) | AES-192-CBC | AES-256-CBC | none
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCipher() {
        return null;
    }

    /**
     * Property compress: Whether it is compressed.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCompress() {
        return null;
    }

    /**
     * Property name: The name of the SSL-VPN server.
     * <p>
     * The length is 2-128 characters and must start with a letter or Chinese. It can contain numbers, periods (.), underscores (_), and dashes (-).
     * But it can't start with http:// or https://.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getName() {
        return null;
    }

    /**
     * Property port: The port used by the SSL-VPN server.
     * <p>
     * The default value is 1194. Cannot use the following ports:
     * 22, 2222, 22222, 9000, 9001, 9002, 7505, 80, 443, 53, 68, 123, 4510, 4560, 500, 4500
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPort() {
        return null;
    }

    /**
     * Property proto: The protocol used by the SSL-VPN server.
     * <p>
     * Allowed values: UDP (default) | TCP.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getProto() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link SslVpnServerProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link SslVpnServerProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<SslVpnServerProps> {
        private java.lang.Object clientIpPool;
        private java.lang.Object localSubnet;
        private java.lang.Object vpnGatewayId;
        private java.lang.Object cipher;
        private java.lang.Object compress;
        private java.lang.Object name;
        private java.lang.Object port;
        private java.lang.Object proto;

        /**
         * Sets the value of {@link SslVpnServerProps#getClientIpPool}
         * @param clientIpPool Property clientIpPool: It is the address segment that assigns the access address to the client virtual NIC. This parameter is required.
         *                     It does not refer to the existing intranet segment of the client.
         *                     When the client accesses the local end through an SSL-VPN connection, the VPN gateway allocates an IP address to the client from the specified client network segment.
         *                     The network segment cannot conflict with the LocalSubnet address segment.
         * @return {@code this}
         */
        public Builder clientIpPool(java.lang.String clientIpPool) {
            this.clientIpPool = clientIpPool;
            return this;
        }

        /**
         * Sets the value of {@link SslVpnServerProps#getClientIpPool}
         * @param clientIpPool Property clientIpPool: It is the address segment that assigns the access address to the client virtual NIC. This parameter is required.
         *                     It does not refer to the existing intranet segment of the client.
         *                     When the client accesses the local end through an SSL-VPN connection, the VPN gateway allocates an IP address to the client from the specified client network segment.
         *                     The network segment cannot conflict with the LocalSubnet address segment.
         * @return {@code this}
         */
        public Builder clientIpPool(com.aliyun.ros.cdk.core.IResolvable clientIpPool) {
            this.clientIpPool = clientIpPool;
            return this;
        }

        /**
         * Sets the value of {@link SslVpnServerProps#getLocalSubnet}
         * @param localSubnet Property localSubnet: Is the address segment that the client wants to access through an SSL-VPN connection. This parameter is required.
         *                    The local network segment can be the network segment of the VPC, the network segment of the switch, the network segment of the IDC interconnected by the leased line and the VPC, and the network segment of the cloud service such as RDS/OSS.
         * @return {@code this}
         */
        public Builder localSubnet(java.lang.String localSubnet) {
            this.localSubnet = localSubnet;
            return this;
        }

        /**
         * Sets the value of {@link SslVpnServerProps#getLocalSubnet}
         * @param localSubnet Property localSubnet: Is the address segment that the client wants to access through an SSL-VPN connection. This parameter is required.
         *                    The local network segment can be the network segment of the VPC, the network segment of the switch, the network segment of the IDC interconnected by the leased line and the VPC, and the network segment of the cloud service such as RDS/OSS.
         * @return {@code this}
         */
        public Builder localSubnet(com.aliyun.ros.cdk.core.IResolvable localSubnet) {
            this.localSubnet = localSubnet;
            return this;
        }

        /**
         * Sets the value of {@link SslVpnServerProps#getVpnGatewayId}
         * @param vpnGatewayId Property vpnGatewayId: ID of the VPN gateway. This parameter is required.
         * @return {@code this}
         */
        public Builder vpnGatewayId(java.lang.String vpnGatewayId) {
            this.vpnGatewayId = vpnGatewayId;
            return this;
        }

        /**
         * Sets the value of {@link SslVpnServerProps#getVpnGatewayId}
         * @param vpnGatewayId Property vpnGatewayId: ID of the VPN gateway. This parameter is required.
         * @return {@code this}
         */
        public Builder vpnGatewayId(com.aliyun.ros.cdk.core.IResolvable vpnGatewayId) {
            this.vpnGatewayId = vpnGatewayId;
            return this;
        }

        /**
         * Sets the value of {@link SslVpnServerProps#getCipher}
         * @param cipher Property cipher: The encryption algorithm used by SSL-VPN.
         *               Value:
         *               AES-128-CBC (default) | AES-192-CBC | AES-256-CBC | none
         * @return {@code this}
         */
        public Builder cipher(java.lang.String cipher) {
            this.cipher = cipher;
            return this;
        }

        /**
         * Sets the value of {@link SslVpnServerProps#getCipher}
         * @param cipher Property cipher: The encryption algorithm used by SSL-VPN.
         *               Value:
         *               AES-128-CBC (default) | AES-192-CBC | AES-256-CBC | none
         * @return {@code this}
         */
        public Builder cipher(com.aliyun.ros.cdk.core.IResolvable cipher) {
            this.cipher = cipher;
            return this;
        }

        /**
         * Sets the value of {@link SslVpnServerProps#getCompress}
         * @param compress Property compress: Whether it is compressed.
         * @return {@code this}
         */
        public Builder compress(java.lang.Boolean compress) {
            this.compress = compress;
            return this;
        }

        /**
         * Sets the value of {@link SslVpnServerProps#getCompress}
         * @param compress Property compress: Whether it is compressed.
         * @return {@code this}
         */
        public Builder compress(com.aliyun.ros.cdk.core.IResolvable compress) {
            this.compress = compress;
            return this;
        }

        /**
         * Sets the value of {@link SslVpnServerProps#getName}
         * @param name Property name: The name of the SSL-VPN server.
         *             The length is 2-128 characters and must start with a letter or Chinese. It can contain numbers, periods (.), underscores (_), and dashes (-).
         *             But it can't start with http:// or https://.
         * @return {@code this}
         */
        public Builder name(java.lang.String name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link SslVpnServerProps#getName}
         * @param name Property name: The name of the SSL-VPN server.
         *             The length is 2-128 characters and must start with a letter or Chinese. It can contain numbers, periods (.), underscores (_), and dashes (-).
         *             But it can't start with http:// or https://.
         * @return {@code this}
         */
        public Builder name(com.aliyun.ros.cdk.core.IResolvable name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link SslVpnServerProps#getPort}
         * @param port Property port: The port used by the SSL-VPN server.
         *             The default value is 1194. Cannot use the following ports:
         *             22, 2222, 22222, 9000, 9001, 9002, 7505, 80, 443, 53, 68, 123, 4510, 4560, 500, 4500
         * @return {@code this}
         */
        public Builder port(java.lang.Number port) {
            this.port = port;
            return this;
        }

        /**
         * Sets the value of {@link SslVpnServerProps#getPort}
         * @param port Property port: The port used by the SSL-VPN server.
         *             The default value is 1194. Cannot use the following ports:
         *             22, 2222, 22222, 9000, 9001, 9002, 7505, 80, 443, 53, 68, 123, 4510, 4560, 500, 4500
         * @return {@code this}
         */
        public Builder port(com.aliyun.ros.cdk.core.IResolvable port) {
            this.port = port;
            return this;
        }

        /**
         * Sets the value of {@link SslVpnServerProps#getProto}
         * @param proto Property proto: The protocol used by the SSL-VPN server.
         *              Allowed values: UDP (default) | TCP.
         * @return {@code this}
         */
        public Builder proto(java.lang.String proto) {
            this.proto = proto;
            return this;
        }

        /**
         * Sets the value of {@link SslVpnServerProps#getProto}
         * @param proto Property proto: The protocol used by the SSL-VPN server.
         *              Allowed values: UDP (default) | TCP.
         * @return {@code this}
         */
        public Builder proto(com.aliyun.ros.cdk.core.IResolvable proto) {
            this.proto = proto;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link SslVpnServerProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public SslVpnServerProps build() {
            return new Jsii$Proxy(clientIpPool, localSubnet, vpnGatewayId, cipher, compress, name, port, proto);
        }
    }

    /**
     * An implementation for {@link SslVpnServerProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements SslVpnServerProps {
        private final java.lang.Object clientIpPool;
        private final java.lang.Object localSubnet;
        private final java.lang.Object vpnGatewayId;
        private final java.lang.Object cipher;
        private final java.lang.Object compress;
        private final java.lang.Object name;
        private final java.lang.Object port;
        private final java.lang.Object proto;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.clientIpPool = software.amazon.jsii.Kernel.get(this, "clientIpPool", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.localSubnet = software.amazon.jsii.Kernel.get(this, "localSubnet", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vpnGatewayId = software.amazon.jsii.Kernel.get(this, "vpnGatewayId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.cipher = software.amazon.jsii.Kernel.get(this, "cipher", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.compress = software.amazon.jsii.Kernel.get(this, "compress", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.port = software.amazon.jsii.Kernel.get(this, "port", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.proto = software.amazon.jsii.Kernel.get(this, "proto", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final java.lang.Object clientIpPool, final java.lang.Object localSubnet, final java.lang.Object vpnGatewayId, final java.lang.Object cipher, final java.lang.Object compress, final java.lang.Object name, final java.lang.Object port, final java.lang.Object proto) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.clientIpPool = java.util.Objects.requireNonNull(clientIpPool, "clientIpPool is required");
            this.localSubnet = java.util.Objects.requireNonNull(localSubnet, "localSubnet is required");
            this.vpnGatewayId = java.util.Objects.requireNonNull(vpnGatewayId, "vpnGatewayId is required");
            this.cipher = cipher;
            this.compress = compress;
            this.name = name;
            this.port = port;
            this.proto = proto;
        }

        @Override
        public final java.lang.Object getClientIpPool() {
            return this.clientIpPool;
        }

        @Override
        public final java.lang.Object getLocalSubnet() {
            return this.localSubnet;
        }

        @Override
        public final java.lang.Object getVpnGatewayId() {
            return this.vpnGatewayId;
        }

        @Override
        public final java.lang.Object getCipher() {
            return this.cipher;
        }

        @Override
        public final java.lang.Object getCompress() {
            return this.compress;
        }

        @Override
        public final java.lang.Object getName() {
            return this.name;
        }

        @Override
        public final java.lang.Object getPort() {
            return this.port;
        }

        @Override
        public final java.lang.Object getProto() {
            return this.proto;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("clientIpPool", om.valueToTree(this.getClientIpPool()));
            data.set("localSubnet", om.valueToTree(this.getLocalSubnet()));
            data.set("vpnGatewayId", om.valueToTree(this.getVpnGatewayId()));
            if (this.getCipher() != null) {
                data.set("cipher", om.valueToTree(this.getCipher()));
            }
            if (this.getCompress() != null) {
                data.set("compress", om.valueToTree(this.getCompress()));
            }
            if (this.getName() != null) {
                data.set("name", om.valueToTree(this.getName()));
            }
            if (this.getPort() != null) {
                data.set("port", om.valueToTree(this.getPort()));
            }
            if (this.getProto() != null) {
                data.set("proto", om.valueToTree(this.getProto()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-vpc.SslVpnServerProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            SslVpnServerProps.Jsii$Proxy that = (SslVpnServerProps.Jsii$Proxy) o;

            if (!clientIpPool.equals(that.clientIpPool)) return false;
            if (!localSubnet.equals(that.localSubnet)) return false;
            if (!vpnGatewayId.equals(that.vpnGatewayId)) return false;
            if (this.cipher != null ? !this.cipher.equals(that.cipher) : that.cipher != null) return false;
            if (this.compress != null ? !this.compress.equals(that.compress) : that.compress != null) return false;
            if (this.name != null ? !this.name.equals(that.name) : that.name != null) return false;
            if (this.port != null ? !this.port.equals(that.port) : that.port != null) return false;
            return this.proto != null ? this.proto.equals(that.proto) : that.proto == null;
        }

        @Override
        public final int hashCode() {
            int result = this.clientIpPool.hashCode();
            result = 31 * result + (this.localSubnet.hashCode());
            result = 31 * result + (this.vpnGatewayId.hashCode());
            result = 31 * result + (this.cipher != null ? this.cipher.hashCode() : 0);
            result = 31 * result + (this.compress != null ? this.compress.hashCode() : 0);
            result = 31 * result + (this.name != null ? this.name.hashCode() : 0);
            result = 31 * result + (this.port != null ? this.port.hashCode() : 0);
            result = 31 * result + (this.proto != null ? this.proto.hashCode() : 0);
            return result;
        }
    }
}
