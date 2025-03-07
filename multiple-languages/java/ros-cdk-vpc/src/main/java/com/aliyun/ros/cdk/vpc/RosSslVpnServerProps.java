package com.aliyun.ros.cdk.vpc;

/**
 * Properties for defining a <code>RosSslVpnServer</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-sslvpnserver
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:11.467Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.RosSslVpnServerProps")
@software.amazon.jsii.Jsii.Proxy(RosSslVpnServerProps.Jsii$Proxy.class)
public interface RosSslVpnServerProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getClientIpPool();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getLocalSubnet();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getVpnGatewayId();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCipher() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCompress() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEnableMultiFactorAuth() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIDaaSApplicationId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIDaaSInstanceId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIDaaSRegionId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPort() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getProto() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosSslVpnServerProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosSslVpnServerProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosSslVpnServerProps> {
        java.lang.Object clientIpPool;
        java.lang.Object localSubnet;
        java.lang.Object vpnGatewayId;
        java.lang.Object cipher;
        java.lang.Object compress;
        java.lang.Object enableMultiFactorAuth;
        java.lang.Object iDaaSApplicationId;
        java.lang.Object iDaaSInstanceId;
        java.lang.Object iDaaSRegionId;
        java.lang.Object name;
        java.lang.Object port;
        java.lang.Object proto;

        /**
         * Sets the value of {@link RosSslVpnServerProps#getClientIpPool}
         * @param clientIpPool the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder clientIpPool(java.lang.String clientIpPool) {
            this.clientIpPool = clientIpPool;
            return this;
        }

        /**
         * Sets the value of {@link RosSslVpnServerProps#getClientIpPool}
         * @param clientIpPool the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder clientIpPool(com.aliyun.ros.cdk.core.IResolvable clientIpPool) {
            this.clientIpPool = clientIpPool;
            return this;
        }

        /**
         * Sets the value of {@link RosSslVpnServerProps#getLocalSubnet}
         * @param localSubnet the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder localSubnet(java.lang.String localSubnet) {
            this.localSubnet = localSubnet;
            return this;
        }

        /**
         * Sets the value of {@link RosSslVpnServerProps#getLocalSubnet}
         * @param localSubnet the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder localSubnet(com.aliyun.ros.cdk.core.IResolvable localSubnet) {
            this.localSubnet = localSubnet;
            return this;
        }

        /**
         * Sets the value of {@link RosSslVpnServerProps#getVpnGatewayId}
         * @param vpnGatewayId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder vpnGatewayId(java.lang.String vpnGatewayId) {
            this.vpnGatewayId = vpnGatewayId;
            return this;
        }

        /**
         * Sets the value of {@link RosSslVpnServerProps#getVpnGatewayId}
         * @param vpnGatewayId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder vpnGatewayId(com.aliyun.ros.cdk.core.IResolvable vpnGatewayId) {
            this.vpnGatewayId = vpnGatewayId;
            return this;
        }

        /**
         * Sets the value of {@link RosSslVpnServerProps#getCipher}
         * @param cipher the value to be set.
         * @return {@code this}
         */
        public Builder cipher(java.lang.String cipher) {
            this.cipher = cipher;
            return this;
        }

        /**
         * Sets the value of {@link RosSslVpnServerProps#getCipher}
         * @param cipher the value to be set.
         * @return {@code this}
         */
        public Builder cipher(com.aliyun.ros.cdk.core.IResolvable cipher) {
            this.cipher = cipher;
            return this;
        }

        /**
         * Sets the value of {@link RosSslVpnServerProps#getCompress}
         * @param compress the value to be set.
         * @return {@code this}
         */
        public Builder compress(java.lang.Boolean compress) {
            this.compress = compress;
            return this;
        }

        /**
         * Sets the value of {@link RosSslVpnServerProps#getCompress}
         * @param compress the value to be set.
         * @return {@code this}
         */
        public Builder compress(com.aliyun.ros.cdk.core.IResolvable compress) {
            this.compress = compress;
            return this;
        }

        /**
         * Sets the value of {@link RosSslVpnServerProps#getEnableMultiFactorAuth}
         * @param enableMultiFactorAuth the value to be set.
         * @return {@code this}
         */
        public Builder enableMultiFactorAuth(java.lang.Boolean enableMultiFactorAuth) {
            this.enableMultiFactorAuth = enableMultiFactorAuth;
            return this;
        }

        /**
         * Sets the value of {@link RosSslVpnServerProps#getEnableMultiFactorAuth}
         * @param enableMultiFactorAuth the value to be set.
         * @return {@code this}
         */
        public Builder enableMultiFactorAuth(com.aliyun.ros.cdk.core.IResolvable enableMultiFactorAuth) {
            this.enableMultiFactorAuth = enableMultiFactorAuth;
            return this;
        }

        /**
         * Sets the value of {@link RosSslVpnServerProps#getIDaaSApplicationId}
         * @param iDaaSApplicationId the value to be set.
         * @return {@code this}
         */
        public Builder iDaaSApplicationId(java.lang.String iDaaSApplicationId) {
            this.iDaaSApplicationId = iDaaSApplicationId;
            return this;
        }

        /**
         * Sets the value of {@link RosSslVpnServerProps#getIDaaSApplicationId}
         * @param iDaaSApplicationId the value to be set.
         * @return {@code this}
         */
        public Builder iDaaSApplicationId(com.aliyun.ros.cdk.core.IResolvable iDaaSApplicationId) {
            this.iDaaSApplicationId = iDaaSApplicationId;
            return this;
        }

        /**
         * Sets the value of {@link RosSslVpnServerProps#getIDaaSInstanceId}
         * @param iDaaSInstanceId the value to be set.
         * @return {@code this}
         */
        public Builder iDaaSInstanceId(java.lang.String iDaaSInstanceId) {
            this.iDaaSInstanceId = iDaaSInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link RosSslVpnServerProps#getIDaaSInstanceId}
         * @param iDaaSInstanceId the value to be set.
         * @return {@code this}
         */
        public Builder iDaaSInstanceId(com.aliyun.ros.cdk.core.IResolvable iDaaSInstanceId) {
            this.iDaaSInstanceId = iDaaSInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link RosSslVpnServerProps#getIDaaSRegionId}
         * @param iDaaSRegionId the value to be set.
         * @return {@code this}
         */
        public Builder iDaaSRegionId(java.lang.String iDaaSRegionId) {
            this.iDaaSRegionId = iDaaSRegionId;
            return this;
        }

        /**
         * Sets the value of {@link RosSslVpnServerProps#getIDaaSRegionId}
         * @param iDaaSRegionId the value to be set.
         * @return {@code this}
         */
        public Builder iDaaSRegionId(com.aliyun.ros.cdk.core.IResolvable iDaaSRegionId) {
            this.iDaaSRegionId = iDaaSRegionId;
            return this;
        }

        /**
         * Sets the value of {@link RosSslVpnServerProps#getName}
         * @param name the value to be set.
         * @return {@code this}
         */
        public Builder name(java.lang.String name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link RosSslVpnServerProps#getName}
         * @param name the value to be set.
         * @return {@code this}
         */
        public Builder name(com.aliyun.ros.cdk.core.IResolvable name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link RosSslVpnServerProps#getPort}
         * @param port the value to be set.
         * @return {@code this}
         */
        public Builder port(java.lang.Number port) {
            this.port = port;
            return this;
        }

        /**
         * Sets the value of {@link RosSslVpnServerProps#getPort}
         * @param port the value to be set.
         * @return {@code this}
         */
        public Builder port(com.aliyun.ros.cdk.core.IResolvable port) {
            this.port = port;
            return this;
        }

        /**
         * Sets the value of {@link RosSslVpnServerProps#getProto}
         * @param proto the value to be set.
         * @return {@code this}
         */
        public Builder proto(java.lang.String proto) {
            this.proto = proto;
            return this;
        }

        /**
         * Sets the value of {@link RosSslVpnServerProps#getProto}
         * @param proto the value to be set.
         * @return {@code this}
         */
        public Builder proto(com.aliyun.ros.cdk.core.IResolvable proto) {
            this.proto = proto;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosSslVpnServerProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosSslVpnServerProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosSslVpnServerProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosSslVpnServerProps {
        private final java.lang.Object clientIpPool;
        private final java.lang.Object localSubnet;
        private final java.lang.Object vpnGatewayId;
        private final java.lang.Object cipher;
        private final java.lang.Object compress;
        private final java.lang.Object enableMultiFactorAuth;
        private final java.lang.Object iDaaSApplicationId;
        private final java.lang.Object iDaaSInstanceId;
        private final java.lang.Object iDaaSRegionId;
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
            this.enableMultiFactorAuth = software.amazon.jsii.Kernel.get(this, "enableMultiFactorAuth", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.iDaaSApplicationId = software.amazon.jsii.Kernel.get(this, "iDaaSApplicationId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.iDaaSInstanceId = software.amazon.jsii.Kernel.get(this, "iDaaSInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.iDaaSRegionId = software.amazon.jsii.Kernel.get(this, "iDaaSRegionId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.port = software.amazon.jsii.Kernel.get(this, "port", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.proto = software.amazon.jsii.Kernel.get(this, "proto", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.clientIpPool = java.util.Objects.requireNonNull(builder.clientIpPool, "clientIpPool is required");
            this.localSubnet = java.util.Objects.requireNonNull(builder.localSubnet, "localSubnet is required");
            this.vpnGatewayId = java.util.Objects.requireNonNull(builder.vpnGatewayId, "vpnGatewayId is required");
            this.cipher = builder.cipher;
            this.compress = builder.compress;
            this.enableMultiFactorAuth = builder.enableMultiFactorAuth;
            this.iDaaSApplicationId = builder.iDaaSApplicationId;
            this.iDaaSInstanceId = builder.iDaaSInstanceId;
            this.iDaaSRegionId = builder.iDaaSRegionId;
            this.name = builder.name;
            this.port = builder.port;
            this.proto = builder.proto;
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
        public final java.lang.Object getEnableMultiFactorAuth() {
            return this.enableMultiFactorAuth;
        }

        @Override
        public final java.lang.Object getIDaaSApplicationId() {
            return this.iDaaSApplicationId;
        }

        @Override
        public final java.lang.Object getIDaaSInstanceId() {
            return this.iDaaSInstanceId;
        }

        @Override
        public final java.lang.Object getIDaaSRegionId() {
            return this.iDaaSRegionId;
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
            if (this.getEnableMultiFactorAuth() != null) {
                data.set("enableMultiFactorAuth", om.valueToTree(this.getEnableMultiFactorAuth()));
            }
            if (this.getIDaaSApplicationId() != null) {
                data.set("iDaaSApplicationId", om.valueToTree(this.getIDaaSApplicationId()));
            }
            if (this.getIDaaSInstanceId() != null) {
                data.set("iDaaSInstanceId", om.valueToTree(this.getIDaaSInstanceId()));
            }
            if (this.getIDaaSRegionId() != null) {
                data.set("iDaaSRegionId", om.valueToTree(this.getIDaaSRegionId()));
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
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-vpc.RosSslVpnServerProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosSslVpnServerProps.Jsii$Proxy that = (RosSslVpnServerProps.Jsii$Proxy) o;

            if (!clientIpPool.equals(that.clientIpPool)) return false;
            if (!localSubnet.equals(that.localSubnet)) return false;
            if (!vpnGatewayId.equals(that.vpnGatewayId)) return false;
            if (this.cipher != null ? !this.cipher.equals(that.cipher) : that.cipher != null) return false;
            if (this.compress != null ? !this.compress.equals(that.compress) : that.compress != null) return false;
            if (this.enableMultiFactorAuth != null ? !this.enableMultiFactorAuth.equals(that.enableMultiFactorAuth) : that.enableMultiFactorAuth != null) return false;
            if (this.iDaaSApplicationId != null ? !this.iDaaSApplicationId.equals(that.iDaaSApplicationId) : that.iDaaSApplicationId != null) return false;
            if (this.iDaaSInstanceId != null ? !this.iDaaSInstanceId.equals(that.iDaaSInstanceId) : that.iDaaSInstanceId != null) return false;
            if (this.iDaaSRegionId != null ? !this.iDaaSRegionId.equals(that.iDaaSRegionId) : that.iDaaSRegionId != null) return false;
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
            result = 31 * result + (this.enableMultiFactorAuth != null ? this.enableMultiFactorAuth.hashCode() : 0);
            result = 31 * result + (this.iDaaSApplicationId != null ? this.iDaaSApplicationId.hashCode() : 0);
            result = 31 * result + (this.iDaaSInstanceId != null ? this.iDaaSInstanceId.hashCode() : 0);
            result = 31 * result + (this.iDaaSRegionId != null ? this.iDaaSRegionId.hashCode() : 0);
            result = 31 * result + (this.name != null ? this.name.hashCode() : 0);
            result = 31 * result + (this.port != null ? this.port.hashCode() : 0);
            result = 31 * result + (this.proto != null ? this.proto.hashCode() : 0);
            return result;
        }
    }
}
