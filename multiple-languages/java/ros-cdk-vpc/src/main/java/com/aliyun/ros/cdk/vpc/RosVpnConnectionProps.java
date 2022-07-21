package com.aliyun.ros.cdk.vpc;

/**
 * Properties for defining a `ALIYUN::VPC::VpnConnection`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.62.0 (build 293ac17)", date = "2022-07-21T02:24:26.841Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.RosVpnConnectionProps")
@software.amazon.jsii.Jsii.Proxy(RosVpnConnectionProps.Jsii$Proxy.class)
public interface RosVpnConnectionProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getCustomerGatewayId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getLocalSubnet();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getRemoteSubnet();

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
    default @org.jetbrains.annotations.Nullable java.lang.Object getHealthCheckConfig() {
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
    default @org.jetbrains.annotations.Nullable java.lang.Object getName() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosVpnConnectionProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosVpnConnectionProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosVpnConnectionProps> {
        java.lang.Object customerGatewayId;
        java.lang.Object localSubnet;
        java.lang.Object remoteSubnet;
        java.lang.Object vpnGatewayId;
        java.lang.Object effectImmediately;
        java.lang.Object healthCheckConfig;
        java.lang.Object ikeConfig;
        java.lang.Object ipsecConfig;
        java.lang.Object name;

        /**
         * Sets the value of {@link RosVpnConnectionProps#getCustomerGatewayId}
         * @param customerGatewayId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder customerGatewayId(java.lang.String customerGatewayId) {
            this.customerGatewayId = customerGatewayId;
            return this;
        }

        /**
         * Sets the value of {@link RosVpnConnectionProps#getCustomerGatewayId}
         * @param customerGatewayId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder customerGatewayId(com.aliyun.ros.cdk.core.IResolvable customerGatewayId) {
            this.customerGatewayId = customerGatewayId;
            return this;
        }

        /**
         * Sets the value of {@link RosVpnConnectionProps#getLocalSubnet}
         * @param localSubnet the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder localSubnet(java.lang.String localSubnet) {
            this.localSubnet = localSubnet;
            return this;
        }

        /**
         * Sets the value of {@link RosVpnConnectionProps#getLocalSubnet}
         * @param localSubnet the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder localSubnet(com.aliyun.ros.cdk.core.IResolvable localSubnet) {
            this.localSubnet = localSubnet;
            return this;
        }

        /**
         * Sets the value of {@link RosVpnConnectionProps#getRemoteSubnet}
         * @param remoteSubnet the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder remoteSubnet(java.lang.String remoteSubnet) {
            this.remoteSubnet = remoteSubnet;
            return this;
        }

        /**
         * Sets the value of {@link RosVpnConnectionProps#getRemoteSubnet}
         * @param remoteSubnet the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder remoteSubnet(com.aliyun.ros.cdk.core.IResolvable remoteSubnet) {
            this.remoteSubnet = remoteSubnet;
            return this;
        }

        /**
         * Sets the value of {@link RosVpnConnectionProps#getVpnGatewayId}
         * @param vpnGatewayId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder vpnGatewayId(java.lang.String vpnGatewayId) {
            this.vpnGatewayId = vpnGatewayId;
            return this;
        }

        /**
         * Sets the value of {@link RosVpnConnectionProps#getVpnGatewayId}
         * @param vpnGatewayId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder vpnGatewayId(com.aliyun.ros.cdk.core.IResolvable vpnGatewayId) {
            this.vpnGatewayId = vpnGatewayId;
            return this;
        }

        /**
         * Sets the value of {@link RosVpnConnectionProps#getEffectImmediately}
         * @param effectImmediately the value to be set.
         * @return {@code this}
         */
        public Builder effectImmediately(java.lang.Boolean effectImmediately) {
            this.effectImmediately = effectImmediately;
            return this;
        }

        /**
         * Sets the value of {@link RosVpnConnectionProps#getEffectImmediately}
         * @param effectImmediately the value to be set.
         * @return {@code this}
         */
        public Builder effectImmediately(com.aliyun.ros.cdk.core.IResolvable effectImmediately) {
            this.effectImmediately = effectImmediately;
            return this;
        }

        /**
         * Sets the value of {@link RosVpnConnectionProps#getHealthCheckConfig}
         * @param healthCheckConfig the value to be set.
         * @return {@code this}
         */
        public Builder healthCheckConfig(com.aliyun.ros.cdk.core.IResolvable healthCheckConfig) {
            this.healthCheckConfig = healthCheckConfig;
            return this;
        }

        /**
         * Sets the value of {@link RosVpnConnectionProps#getHealthCheckConfig}
         * @param healthCheckConfig the value to be set.
         * @return {@code this}
         */
        public Builder healthCheckConfig(com.aliyun.ros.cdk.vpc.RosVpnConnection.HealthCheckConfigProperty healthCheckConfig) {
            this.healthCheckConfig = healthCheckConfig;
            return this;
        }

        /**
         * Sets the value of {@link RosVpnConnectionProps#getIkeConfig}
         * @param ikeConfig the value to be set.
         * @return {@code this}
         */
        public Builder ikeConfig(com.aliyun.ros.cdk.core.IResolvable ikeConfig) {
            this.ikeConfig = ikeConfig;
            return this;
        }

        /**
         * Sets the value of {@link RosVpnConnectionProps#getIkeConfig}
         * @param ikeConfig the value to be set.
         * @return {@code this}
         */
        public Builder ikeConfig(com.aliyun.ros.cdk.vpc.RosVpnConnection.IkeConfigProperty ikeConfig) {
            this.ikeConfig = ikeConfig;
            return this;
        }

        /**
         * Sets the value of {@link RosVpnConnectionProps#getIpsecConfig}
         * @param ipsecConfig the value to be set.
         * @return {@code this}
         */
        public Builder ipsecConfig(com.aliyun.ros.cdk.core.IResolvable ipsecConfig) {
            this.ipsecConfig = ipsecConfig;
            return this;
        }

        /**
         * Sets the value of {@link RosVpnConnectionProps#getIpsecConfig}
         * @param ipsecConfig the value to be set.
         * @return {@code this}
         */
        public Builder ipsecConfig(com.aliyun.ros.cdk.vpc.RosVpnConnection.IpsecConfigProperty ipsecConfig) {
            this.ipsecConfig = ipsecConfig;
            return this;
        }

        /**
         * Sets the value of {@link RosVpnConnectionProps#getName}
         * @param name the value to be set.
         * @return {@code this}
         */
        public Builder name(java.lang.String name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link RosVpnConnectionProps#getName}
         * @param name the value to be set.
         * @return {@code this}
         */
        public Builder name(com.aliyun.ros.cdk.core.IResolvable name) {
            this.name = name;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosVpnConnectionProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosVpnConnectionProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosVpnConnectionProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosVpnConnectionProps {
        private final java.lang.Object customerGatewayId;
        private final java.lang.Object localSubnet;
        private final java.lang.Object remoteSubnet;
        private final java.lang.Object vpnGatewayId;
        private final java.lang.Object effectImmediately;
        private final java.lang.Object healthCheckConfig;
        private final java.lang.Object ikeConfig;
        private final java.lang.Object ipsecConfig;
        private final java.lang.Object name;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.customerGatewayId = software.amazon.jsii.Kernel.get(this, "customerGatewayId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.localSubnet = software.amazon.jsii.Kernel.get(this, "localSubnet", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.remoteSubnet = software.amazon.jsii.Kernel.get(this, "remoteSubnet", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vpnGatewayId = software.amazon.jsii.Kernel.get(this, "vpnGatewayId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.effectImmediately = software.amazon.jsii.Kernel.get(this, "effectImmediately", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.healthCheckConfig = software.amazon.jsii.Kernel.get(this, "healthCheckConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ikeConfig = software.amazon.jsii.Kernel.get(this, "ikeConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ipsecConfig = software.amazon.jsii.Kernel.get(this, "ipsecConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.customerGatewayId = java.util.Objects.requireNonNull(builder.customerGatewayId, "customerGatewayId is required");
            this.localSubnet = java.util.Objects.requireNonNull(builder.localSubnet, "localSubnet is required");
            this.remoteSubnet = java.util.Objects.requireNonNull(builder.remoteSubnet, "remoteSubnet is required");
            this.vpnGatewayId = java.util.Objects.requireNonNull(builder.vpnGatewayId, "vpnGatewayId is required");
            this.effectImmediately = builder.effectImmediately;
            this.healthCheckConfig = builder.healthCheckConfig;
            this.ikeConfig = builder.ikeConfig;
            this.ipsecConfig = builder.ipsecConfig;
            this.name = builder.name;
        }

        @Override
        public final java.lang.Object getCustomerGatewayId() {
            return this.customerGatewayId;
        }

        @Override
        public final java.lang.Object getLocalSubnet() {
            return this.localSubnet;
        }

        @Override
        public final java.lang.Object getRemoteSubnet() {
            return this.remoteSubnet;
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
        public final java.lang.Object getHealthCheckConfig() {
            return this.healthCheckConfig;
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
        public final java.lang.Object getName() {
            return this.name;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("customerGatewayId", om.valueToTree(this.getCustomerGatewayId()));
            data.set("localSubnet", om.valueToTree(this.getLocalSubnet()));
            data.set("remoteSubnet", om.valueToTree(this.getRemoteSubnet()));
            data.set("vpnGatewayId", om.valueToTree(this.getVpnGatewayId()));
            if (this.getEffectImmediately() != null) {
                data.set("effectImmediately", om.valueToTree(this.getEffectImmediately()));
            }
            if (this.getHealthCheckConfig() != null) {
                data.set("healthCheckConfig", om.valueToTree(this.getHealthCheckConfig()));
            }
            if (this.getIkeConfig() != null) {
                data.set("ikeConfig", om.valueToTree(this.getIkeConfig()));
            }
            if (this.getIpsecConfig() != null) {
                data.set("ipsecConfig", om.valueToTree(this.getIpsecConfig()));
            }
            if (this.getName() != null) {
                data.set("name", om.valueToTree(this.getName()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-vpc.RosVpnConnectionProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosVpnConnectionProps.Jsii$Proxy that = (RosVpnConnectionProps.Jsii$Proxy) o;

            if (!customerGatewayId.equals(that.customerGatewayId)) return false;
            if (!localSubnet.equals(that.localSubnet)) return false;
            if (!remoteSubnet.equals(that.remoteSubnet)) return false;
            if (!vpnGatewayId.equals(that.vpnGatewayId)) return false;
            if (this.effectImmediately != null ? !this.effectImmediately.equals(that.effectImmediately) : that.effectImmediately != null) return false;
            if (this.healthCheckConfig != null ? !this.healthCheckConfig.equals(that.healthCheckConfig) : that.healthCheckConfig != null) return false;
            if (this.ikeConfig != null ? !this.ikeConfig.equals(that.ikeConfig) : that.ikeConfig != null) return false;
            if (this.ipsecConfig != null ? !this.ipsecConfig.equals(that.ipsecConfig) : that.ipsecConfig != null) return false;
            return this.name != null ? this.name.equals(that.name) : that.name == null;
        }

        @Override
        public final int hashCode() {
            int result = this.customerGatewayId.hashCode();
            result = 31 * result + (this.localSubnet.hashCode());
            result = 31 * result + (this.remoteSubnet.hashCode());
            result = 31 * result + (this.vpnGatewayId.hashCode());
            result = 31 * result + (this.effectImmediately != null ? this.effectImmediately.hashCode() : 0);
            result = 31 * result + (this.healthCheckConfig != null ? this.healthCheckConfig.hashCode() : 0);
            result = 31 * result + (this.ikeConfig != null ? this.ikeConfig.hashCode() : 0);
            result = 31 * result + (this.ipsecConfig != null ? this.ipsecConfig.hashCode() : 0);
            result = 31 * result + (this.name != null ? this.name.hashCode() : 0);
            return result;
        }
    }
}
