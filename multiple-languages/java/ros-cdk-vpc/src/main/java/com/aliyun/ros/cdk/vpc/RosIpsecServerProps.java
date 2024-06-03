package com.aliyun.ros.cdk.vpc;

/**
 * Properties for defining a <code>RosIpsecServer</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-ipsecserver
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-03T08:19:54.857Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.RosIpsecServerProps")
@software.amazon.jsii.Jsii.Proxy(RosIpsecServerProps.Jsii$Proxy.class)
public interface RosIpsecServerProps extends software.amazon.jsii.JsiiSerializable {

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
    default @org.jetbrains.annotations.Nullable java.lang.Object getEffectImmediately() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIkeConfig() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIpsecConfig() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIpsecServerName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPsk() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPskEnabled() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosIpsecServerProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosIpsecServerProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosIpsecServerProps> {
        java.lang.Object clientIpPool;
        java.lang.Object localSubnet;
        java.lang.Object vpnGatewayId;
        java.lang.Object effectImmediately;
        java.lang.Object ikeConfig;
        java.lang.Object ipsecConfig;
        java.lang.Object ipsecServerName;
        java.lang.Object psk;
        java.lang.Object pskEnabled;

        /**
         * Sets the value of {@link RosIpsecServerProps#getClientIpPool}
         * @param clientIpPool the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder clientIpPool(java.lang.String clientIpPool) {
            this.clientIpPool = clientIpPool;
            return this;
        }

        /**
         * Sets the value of {@link RosIpsecServerProps#getClientIpPool}
         * @param clientIpPool the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder clientIpPool(com.aliyun.ros.cdk.core.IResolvable clientIpPool) {
            this.clientIpPool = clientIpPool;
            return this;
        }

        /**
         * Sets the value of {@link RosIpsecServerProps#getLocalSubnet}
         * @param localSubnet the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder localSubnet(java.lang.String localSubnet) {
            this.localSubnet = localSubnet;
            return this;
        }

        /**
         * Sets the value of {@link RosIpsecServerProps#getLocalSubnet}
         * @param localSubnet the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder localSubnet(com.aliyun.ros.cdk.core.IResolvable localSubnet) {
            this.localSubnet = localSubnet;
            return this;
        }

        /**
         * Sets the value of {@link RosIpsecServerProps#getVpnGatewayId}
         * @param vpnGatewayId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder vpnGatewayId(java.lang.String vpnGatewayId) {
            this.vpnGatewayId = vpnGatewayId;
            return this;
        }

        /**
         * Sets the value of {@link RosIpsecServerProps#getVpnGatewayId}
         * @param vpnGatewayId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder vpnGatewayId(com.aliyun.ros.cdk.core.IResolvable vpnGatewayId) {
            this.vpnGatewayId = vpnGatewayId;
            return this;
        }

        /**
         * Sets the value of {@link RosIpsecServerProps#getEffectImmediately}
         * @param effectImmediately the value to be set.
         * @return {@code this}
         */
        public Builder effectImmediately(java.lang.Boolean effectImmediately) {
            this.effectImmediately = effectImmediately;
            return this;
        }

        /**
         * Sets the value of {@link RosIpsecServerProps#getEffectImmediately}
         * @param effectImmediately the value to be set.
         * @return {@code this}
         */
        public Builder effectImmediately(com.aliyun.ros.cdk.core.IResolvable effectImmediately) {
            this.effectImmediately = effectImmediately;
            return this;
        }

        /**
         * Sets the value of {@link RosIpsecServerProps#getIkeConfig}
         * @param ikeConfig the value to be set.
         * @return {@code this}
         */
        public Builder ikeConfig(com.aliyun.ros.cdk.core.IResolvable ikeConfig) {
            this.ikeConfig = ikeConfig;
            return this;
        }

        /**
         * Sets the value of {@link RosIpsecServerProps#getIkeConfig}
         * @param ikeConfig the value to be set.
         * @return {@code this}
         */
        public Builder ikeConfig(com.aliyun.ros.cdk.vpc.RosIpsecServer.IkeConfigProperty ikeConfig) {
            this.ikeConfig = ikeConfig;
            return this;
        }

        /**
         * Sets the value of {@link RosIpsecServerProps#getIpsecConfig}
         * @param ipsecConfig the value to be set.
         * @return {@code this}
         */
        public Builder ipsecConfig(com.aliyun.ros.cdk.core.IResolvable ipsecConfig) {
            this.ipsecConfig = ipsecConfig;
            return this;
        }

        /**
         * Sets the value of {@link RosIpsecServerProps#getIpsecConfig}
         * @param ipsecConfig the value to be set.
         * @return {@code this}
         */
        public Builder ipsecConfig(com.aliyun.ros.cdk.vpc.RosIpsecServer.IpsecConfigProperty ipsecConfig) {
            this.ipsecConfig = ipsecConfig;
            return this;
        }

        /**
         * Sets the value of {@link RosIpsecServerProps#getIpsecServerName}
         * @param ipsecServerName the value to be set.
         * @return {@code this}
         */
        public Builder ipsecServerName(java.lang.String ipsecServerName) {
            this.ipsecServerName = ipsecServerName;
            return this;
        }

        /**
         * Sets the value of {@link RosIpsecServerProps#getIpsecServerName}
         * @param ipsecServerName the value to be set.
         * @return {@code this}
         */
        public Builder ipsecServerName(com.aliyun.ros.cdk.core.IResolvable ipsecServerName) {
            this.ipsecServerName = ipsecServerName;
            return this;
        }

        /**
         * Sets the value of {@link RosIpsecServerProps#getPsk}
         * @param psk the value to be set.
         * @return {@code this}
         */
        public Builder psk(java.lang.String psk) {
            this.psk = psk;
            return this;
        }

        /**
         * Sets the value of {@link RosIpsecServerProps#getPsk}
         * @param psk the value to be set.
         * @return {@code this}
         */
        public Builder psk(com.aliyun.ros.cdk.core.IResolvable psk) {
            this.psk = psk;
            return this;
        }

        /**
         * Sets the value of {@link RosIpsecServerProps#getPskEnabled}
         * @param pskEnabled the value to be set.
         * @return {@code this}
         */
        public Builder pskEnabled(java.lang.Boolean pskEnabled) {
            this.pskEnabled = pskEnabled;
            return this;
        }

        /**
         * Sets the value of {@link RosIpsecServerProps#getPskEnabled}
         * @param pskEnabled the value to be set.
         * @return {@code this}
         */
        public Builder pskEnabled(com.aliyun.ros.cdk.core.IResolvable pskEnabled) {
            this.pskEnabled = pskEnabled;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosIpsecServerProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosIpsecServerProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosIpsecServerProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosIpsecServerProps {
        private final java.lang.Object clientIpPool;
        private final java.lang.Object localSubnet;
        private final java.lang.Object vpnGatewayId;
        private final java.lang.Object effectImmediately;
        private final java.lang.Object ikeConfig;
        private final java.lang.Object ipsecConfig;
        private final java.lang.Object ipsecServerName;
        private final java.lang.Object psk;
        private final java.lang.Object pskEnabled;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.clientIpPool = software.amazon.jsii.Kernel.get(this, "clientIpPool", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.localSubnet = software.amazon.jsii.Kernel.get(this, "localSubnet", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vpnGatewayId = software.amazon.jsii.Kernel.get(this, "vpnGatewayId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.effectImmediately = software.amazon.jsii.Kernel.get(this, "effectImmediately", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ikeConfig = software.amazon.jsii.Kernel.get(this, "ikeConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ipsecConfig = software.amazon.jsii.Kernel.get(this, "ipsecConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ipsecServerName = software.amazon.jsii.Kernel.get(this, "ipsecServerName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.psk = software.amazon.jsii.Kernel.get(this, "psk", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.pskEnabled = software.amazon.jsii.Kernel.get(this, "pskEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.clientIpPool = java.util.Objects.requireNonNull(builder.clientIpPool, "clientIpPool is required");
            this.localSubnet = java.util.Objects.requireNonNull(builder.localSubnet, "localSubnet is required");
            this.vpnGatewayId = java.util.Objects.requireNonNull(builder.vpnGatewayId, "vpnGatewayId is required");
            this.effectImmediately = builder.effectImmediately;
            this.ikeConfig = builder.ikeConfig;
            this.ipsecConfig = builder.ipsecConfig;
            this.ipsecServerName = builder.ipsecServerName;
            this.psk = builder.psk;
            this.pskEnabled = builder.pskEnabled;
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
        public final java.lang.Object getEffectImmediately() {
            return this.effectImmediately;
        }

        @Override
        public final java.lang.Object getIkeConfig() {
            return this.ikeConfig;
        }

        @Override
        public final java.lang.Object getIpsecConfig() {
            return this.ipsecConfig;
        }

        @Override
        public final java.lang.Object getIpsecServerName() {
            return this.ipsecServerName;
        }

        @Override
        public final java.lang.Object getPsk() {
            return this.psk;
        }

        @Override
        public final java.lang.Object getPskEnabled() {
            return this.pskEnabled;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("clientIpPool", om.valueToTree(this.getClientIpPool()));
            data.set("localSubnet", om.valueToTree(this.getLocalSubnet()));
            data.set("vpnGatewayId", om.valueToTree(this.getVpnGatewayId()));
            if (this.getEffectImmediately() != null) {
                data.set("effectImmediately", om.valueToTree(this.getEffectImmediately()));
            }
            if (this.getIkeConfig() != null) {
                data.set("ikeConfig", om.valueToTree(this.getIkeConfig()));
            }
            if (this.getIpsecConfig() != null) {
                data.set("ipsecConfig", om.valueToTree(this.getIpsecConfig()));
            }
            if (this.getIpsecServerName() != null) {
                data.set("ipsecServerName", om.valueToTree(this.getIpsecServerName()));
            }
            if (this.getPsk() != null) {
                data.set("psk", om.valueToTree(this.getPsk()));
            }
            if (this.getPskEnabled() != null) {
                data.set("pskEnabled", om.valueToTree(this.getPskEnabled()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-vpc.RosIpsecServerProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosIpsecServerProps.Jsii$Proxy that = (RosIpsecServerProps.Jsii$Proxy) o;

            if (!clientIpPool.equals(that.clientIpPool)) return false;
            if (!localSubnet.equals(that.localSubnet)) return false;
            if (!vpnGatewayId.equals(that.vpnGatewayId)) return false;
            if (this.effectImmediately != null ? !this.effectImmediately.equals(that.effectImmediately) : that.effectImmediately != null) return false;
            if (this.ikeConfig != null ? !this.ikeConfig.equals(that.ikeConfig) : that.ikeConfig != null) return false;
            if (this.ipsecConfig != null ? !this.ipsecConfig.equals(that.ipsecConfig) : that.ipsecConfig != null) return false;
            if (this.ipsecServerName != null ? !this.ipsecServerName.equals(that.ipsecServerName) : that.ipsecServerName != null) return false;
            if (this.psk != null ? !this.psk.equals(that.psk) : that.psk != null) return false;
            return this.pskEnabled != null ? this.pskEnabled.equals(that.pskEnabled) : that.pskEnabled == null;
        }

        @Override
        public final int hashCode() {
            int result = this.clientIpPool.hashCode();
            result = 31 * result + (this.localSubnet.hashCode());
            result = 31 * result + (this.vpnGatewayId.hashCode());
            result = 31 * result + (this.effectImmediately != null ? this.effectImmediately.hashCode() : 0);
            result = 31 * result + (this.ikeConfig != null ? this.ikeConfig.hashCode() : 0);
            result = 31 * result + (this.ipsecConfig != null ? this.ipsecConfig.hashCode() : 0);
            result = 31 * result + (this.ipsecServerName != null ? this.ipsecServerName.hashCode() : 0);
            result = 31 * result + (this.psk != null ? this.psk.hashCode() : 0);
            result = 31 * result + (this.pskEnabled != null ? this.pskEnabled.hashCode() : 0);
            return result;
        }
    }
}
