package com.aliyun.ros.cdk.vpc;

/**
 * Properties for defining a `ALIYUN::VPC::SslVpnServer`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-01-26T09:47:34.708Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.SslVpnServerProps")
@software.amazon.jsii.Jsii.Proxy(SslVpnServerProps.Jsii$Proxy.class)
public interface SslVpnServerProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getClientIpPool();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getLocalSubnet();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getVpnGatewayId();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getCipher() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCompress() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Number getPort() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getProto() {
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
        private java.lang.String clientIpPool;
        private java.lang.String localSubnet;
        private java.lang.String vpnGatewayId;
        private java.lang.String cipher;
        private java.lang.Object compress;
        private java.lang.String name;
        private java.lang.Number port;
        private java.lang.String proto;

        /**
         * Sets the value of {@link SslVpnServerProps#getClientIpPool}
         * @param clientIpPool the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder clientIpPool(java.lang.String clientIpPool) {
            this.clientIpPool = clientIpPool;
            return this;
        }

        /**
         * Sets the value of {@link SslVpnServerProps#getLocalSubnet}
         * @param localSubnet the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder localSubnet(java.lang.String localSubnet) {
            this.localSubnet = localSubnet;
            return this;
        }

        /**
         * Sets the value of {@link SslVpnServerProps#getVpnGatewayId}
         * @param vpnGatewayId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder vpnGatewayId(java.lang.String vpnGatewayId) {
            this.vpnGatewayId = vpnGatewayId;
            return this;
        }

        /**
         * Sets the value of {@link SslVpnServerProps#getCipher}
         * @param cipher the value to be set.
         * @return {@code this}
         */
        public Builder cipher(java.lang.String cipher) {
            this.cipher = cipher;
            return this;
        }

        /**
         * Sets the value of {@link SslVpnServerProps#getCompress}
         * @param compress the value to be set.
         * @return {@code this}
         */
        public Builder compress(java.lang.Boolean compress) {
            this.compress = compress;
            return this;
        }

        /**
         * Sets the value of {@link SslVpnServerProps#getCompress}
         * @param compress the value to be set.
         * @return {@code this}
         */
        public Builder compress(com.aliyun.ros.cdk.core.IResolvable compress) {
            this.compress = compress;
            return this;
        }

        /**
         * Sets the value of {@link SslVpnServerProps#getName}
         * @param name the value to be set.
         * @return {@code this}
         */
        public Builder name(java.lang.String name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link SslVpnServerProps#getPort}
         * @param port the value to be set.
         * @return {@code this}
         */
        public Builder port(java.lang.Number port) {
            this.port = port;
            return this;
        }

        /**
         * Sets the value of {@link SslVpnServerProps#getProto}
         * @param proto the value to be set.
         * @return {@code this}
         */
        public Builder proto(java.lang.String proto) {
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
        private final java.lang.String clientIpPool;
        private final java.lang.String localSubnet;
        private final java.lang.String vpnGatewayId;
        private final java.lang.String cipher;
        private final java.lang.Object compress;
        private final java.lang.String name;
        private final java.lang.Number port;
        private final java.lang.String proto;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.clientIpPool = software.amazon.jsii.Kernel.get(this, "clientIpPool", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.localSubnet = software.amazon.jsii.Kernel.get(this, "localSubnet", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.vpnGatewayId = software.amazon.jsii.Kernel.get(this, "vpnGatewayId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.cipher = software.amazon.jsii.Kernel.get(this, "cipher", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.compress = software.amazon.jsii.Kernel.get(this, "compress", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.port = software.amazon.jsii.Kernel.get(this, "port", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
            this.proto = software.amazon.jsii.Kernel.get(this, "proto", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final java.lang.String clientIpPool, final java.lang.String localSubnet, final java.lang.String vpnGatewayId, final java.lang.String cipher, final java.lang.Object compress, final java.lang.String name, final java.lang.Number port, final java.lang.String proto) {
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
        public final java.lang.String getClientIpPool() {
            return this.clientIpPool;
        }

        @Override
        public final java.lang.String getLocalSubnet() {
            return this.localSubnet;
        }

        @Override
        public final java.lang.String getVpnGatewayId() {
            return this.vpnGatewayId;
        }

        @Override
        public final java.lang.String getCipher() {
            return this.cipher;
        }

        @Override
        public final java.lang.Object getCompress() {
            return this.compress;
        }

        @Override
        public final java.lang.String getName() {
            return this.name;
        }

        @Override
        public final java.lang.Number getPort() {
            return this.port;
        }

        @Override
        public final java.lang.String getProto() {
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
