package com.aliyun.ros.cdk.vpc;

/**
 * Properties for defining a <code>ALIYUN::VPC::VpnConnection</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-11-07T09:08:37.691Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.RosVpnConnectionProps")
@software.amazon.jsii.Jsii.Proxy(RosVpnConnectionProps.Jsii$Proxy.class)
public interface RosVpnConnectionProps extends software.amazon.jsii.JsiiSerializable {

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
    default @org.jetbrains.annotations.Nullable java.lang.Object getAutoConfigRoute() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getBgpConfig() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCustomerGatewayId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEffectImmediately() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEnableDpd() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEnableNatTraversal() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEnableTunnelsBgp() {
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
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRemoteCaCertificate() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTunnelOptionsSpecification() {
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
        java.lang.Object localSubnet;
        java.lang.Object remoteSubnet;
        java.lang.Object vpnGatewayId;
        java.lang.Object autoConfigRoute;
        java.lang.Object bgpConfig;
        java.lang.Object customerGatewayId;
        java.lang.Object effectImmediately;
        java.lang.Object enableDpd;
        java.lang.Object enableNatTraversal;
        java.lang.Object enableTunnelsBgp;
        java.lang.Object healthCheckConfig;
        java.lang.Object ikeConfig;
        java.lang.Object ipsecConfig;
        java.lang.Object name;
        java.lang.Object remoteCaCertificate;
        java.lang.Object tunnelOptionsSpecification;

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
         * Sets the value of {@link RosVpnConnectionProps#getAutoConfigRoute}
         * @param autoConfigRoute the value to be set.
         * @return {@code this}
         */
        public Builder autoConfigRoute(java.lang.Boolean autoConfigRoute) {
            this.autoConfigRoute = autoConfigRoute;
            return this;
        }

        /**
         * Sets the value of {@link RosVpnConnectionProps#getAutoConfigRoute}
         * @param autoConfigRoute the value to be set.
         * @return {@code this}
         */
        public Builder autoConfigRoute(com.aliyun.ros.cdk.core.IResolvable autoConfigRoute) {
            this.autoConfigRoute = autoConfigRoute;
            return this;
        }

        /**
         * Sets the value of {@link RosVpnConnectionProps#getBgpConfig}
         * @param bgpConfig the value to be set.
         * @return {@code this}
         */
        public Builder bgpConfig(com.aliyun.ros.cdk.core.IResolvable bgpConfig) {
            this.bgpConfig = bgpConfig;
            return this;
        }

        /**
         * Sets the value of {@link RosVpnConnectionProps#getBgpConfig}
         * @param bgpConfig the value to be set.
         * @return {@code this}
         */
        public Builder bgpConfig(com.aliyun.ros.cdk.vpc.RosVpnConnection.BgpConfigProperty bgpConfig) {
            this.bgpConfig = bgpConfig;
            return this;
        }

        /**
         * Sets the value of {@link RosVpnConnectionProps#getCustomerGatewayId}
         * @param customerGatewayId the value to be set.
         * @return {@code this}
         */
        public Builder customerGatewayId(java.lang.String customerGatewayId) {
            this.customerGatewayId = customerGatewayId;
            return this;
        }

        /**
         * Sets the value of {@link RosVpnConnectionProps#getCustomerGatewayId}
         * @param customerGatewayId the value to be set.
         * @return {@code this}
         */
        public Builder customerGatewayId(com.aliyun.ros.cdk.core.IResolvable customerGatewayId) {
            this.customerGatewayId = customerGatewayId;
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
         * Sets the value of {@link RosVpnConnectionProps#getEnableDpd}
         * @param enableDpd the value to be set.
         * @return {@code this}
         */
        public Builder enableDpd(java.lang.Boolean enableDpd) {
            this.enableDpd = enableDpd;
            return this;
        }

        /**
         * Sets the value of {@link RosVpnConnectionProps#getEnableDpd}
         * @param enableDpd the value to be set.
         * @return {@code this}
         */
        public Builder enableDpd(com.aliyun.ros.cdk.core.IResolvable enableDpd) {
            this.enableDpd = enableDpd;
            return this;
        }

        /**
         * Sets the value of {@link RosVpnConnectionProps#getEnableNatTraversal}
         * @param enableNatTraversal the value to be set.
         * @return {@code this}
         */
        public Builder enableNatTraversal(java.lang.Boolean enableNatTraversal) {
            this.enableNatTraversal = enableNatTraversal;
            return this;
        }

        /**
         * Sets the value of {@link RosVpnConnectionProps#getEnableNatTraversal}
         * @param enableNatTraversal the value to be set.
         * @return {@code this}
         */
        public Builder enableNatTraversal(com.aliyun.ros.cdk.core.IResolvable enableNatTraversal) {
            this.enableNatTraversal = enableNatTraversal;
            return this;
        }

        /**
         * Sets the value of {@link RosVpnConnectionProps#getEnableTunnelsBgp}
         * @param enableTunnelsBgp the value to be set.
         * @return {@code this}
         */
        public Builder enableTunnelsBgp(java.lang.Boolean enableTunnelsBgp) {
            this.enableTunnelsBgp = enableTunnelsBgp;
            return this;
        }

        /**
         * Sets the value of {@link RosVpnConnectionProps#getEnableTunnelsBgp}
         * @param enableTunnelsBgp the value to be set.
         * @return {@code this}
         */
        public Builder enableTunnelsBgp(com.aliyun.ros.cdk.core.IResolvable enableTunnelsBgp) {
            this.enableTunnelsBgp = enableTunnelsBgp;
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
         * Sets the value of {@link RosVpnConnectionProps#getRemoteCaCertificate}
         * @param remoteCaCertificate the value to be set.
         * @return {@code this}
         */
        public Builder remoteCaCertificate(java.lang.String remoteCaCertificate) {
            this.remoteCaCertificate = remoteCaCertificate;
            return this;
        }

        /**
         * Sets the value of {@link RosVpnConnectionProps#getRemoteCaCertificate}
         * @param remoteCaCertificate the value to be set.
         * @return {@code this}
         */
        public Builder remoteCaCertificate(com.aliyun.ros.cdk.core.IResolvable remoteCaCertificate) {
            this.remoteCaCertificate = remoteCaCertificate;
            return this;
        }

        /**
         * Sets the value of {@link RosVpnConnectionProps#getTunnelOptionsSpecification}
         * @param tunnelOptionsSpecification the value to be set.
         * @return {@code this}
         */
        public Builder tunnelOptionsSpecification(com.aliyun.ros.cdk.core.IResolvable tunnelOptionsSpecification) {
            this.tunnelOptionsSpecification = tunnelOptionsSpecification;
            return this;
        }

        /**
         * Sets the value of {@link RosVpnConnectionProps#getTunnelOptionsSpecification}
         * @param tunnelOptionsSpecification the value to be set.
         * @return {@code this}
         */
        public Builder tunnelOptionsSpecification(java.util.List<? extends java.lang.Object> tunnelOptionsSpecification) {
            this.tunnelOptionsSpecification = tunnelOptionsSpecification;
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
        private final java.lang.Object localSubnet;
        private final java.lang.Object remoteSubnet;
        private final java.lang.Object vpnGatewayId;
        private final java.lang.Object autoConfigRoute;
        private final java.lang.Object bgpConfig;
        private final java.lang.Object customerGatewayId;
        private final java.lang.Object effectImmediately;
        private final java.lang.Object enableDpd;
        private final java.lang.Object enableNatTraversal;
        private final java.lang.Object enableTunnelsBgp;
        private final java.lang.Object healthCheckConfig;
        private final java.lang.Object ikeConfig;
        private final java.lang.Object ipsecConfig;
        private final java.lang.Object name;
        private final java.lang.Object remoteCaCertificate;
        private final java.lang.Object tunnelOptionsSpecification;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.localSubnet = software.amazon.jsii.Kernel.get(this, "localSubnet", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.remoteSubnet = software.amazon.jsii.Kernel.get(this, "remoteSubnet", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vpnGatewayId = software.amazon.jsii.Kernel.get(this, "vpnGatewayId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.autoConfigRoute = software.amazon.jsii.Kernel.get(this, "autoConfigRoute", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.bgpConfig = software.amazon.jsii.Kernel.get(this, "bgpConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.customerGatewayId = software.amazon.jsii.Kernel.get(this, "customerGatewayId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.effectImmediately = software.amazon.jsii.Kernel.get(this, "effectImmediately", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.enableDpd = software.amazon.jsii.Kernel.get(this, "enableDpd", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.enableNatTraversal = software.amazon.jsii.Kernel.get(this, "enableNatTraversal", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.enableTunnelsBgp = software.amazon.jsii.Kernel.get(this, "enableTunnelsBgp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.healthCheckConfig = software.amazon.jsii.Kernel.get(this, "healthCheckConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ikeConfig = software.amazon.jsii.Kernel.get(this, "ikeConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ipsecConfig = software.amazon.jsii.Kernel.get(this, "ipsecConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.remoteCaCertificate = software.amazon.jsii.Kernel.get(this, "remoteCaCertificate", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tunnelOptionsSpecification = software.amazon.jsii.Kernel.get(this, "tunnelOptionsSpecification", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.localSubnet = java.util.Objects.requireNonNull(builder.localSubnet, "localSubnet is required");
            this.remoteSubnet = java.util.Objects.requireNonNull(builder.remoteSubnet, "remoteSubnet is required");
            this.vpnGatewayId = java.util.Objects.requireNonNull(builder.vpnGatewayId, "vpnGatewayId is required");
            this.autoConfigRoute = builder.autoConfigRoute;
            this.bgpConfig = builder.bgpConfig;
            this.customerGatewayId = builder.customerGatewayId;
            this.effectImmediately = builder.effectImmediately;
            this.enableDpd = builder.enableDpd;
            this.enableNatTraversal = builder.enableNatTraversal;
            this.enableTunnelsBgp = builder.enableTunnelsBgp;
            this.healthCheckConfig = builder.healthCheckConfig;
            this.ikeConfig = builder.ikeConfig;
            this.ipsecConfig = builder.ipsecConfig;
            this.name = builder.name;
            this.remoteCaCertificate = builder.remoteCaCertificate;
            this.tunnelOptionsSpecification = builder.tunnelOptionsSpecification;
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
        public final java.lang.Object getAutoConfigRoute() {
            return this.autoConfigRoute;
        }

        @Override
        public final java.lang.Object getBgpConfig() {
            return this.bgpConfig;
        }

        @Override
        public final java.lang.Object getCustomerGatewayId() {
            return this.customerGatewayId;
        }

        @Override
        public final java.lang.Object getEffectImmediately() {
            return this.effectImmediately;
        }

        @Override
        public final java.lang.Object getEnableDpd() {
            return this.enableDpd;
        }

        @Override
        public final java.lang.Object getEnableNatTraversal() {
            return this.enableNatTraversal;
        }

        @Override
        public final java.lang.Object getEnableTunnelsBgp() {
            return this.enableTunnelsBgp;
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
        public final java.lang.Object getRemoteCaCertificate() {
            return this.remoteCaCertificate;
        }

        @Override
        public final java.lang.Object getTunnelOptionsSpecification() {
            return this.tunnelOptionsSpecification;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("localSubnet", om.valueToTree(this.getLocalSubnet()));
            data.set("remoteSubnet", om.valueToTree(this.getRemoteSubnet()));
            data.set("vpnGatewayId", om.valueToTree(this.getVpnGatewayId()));
            if (this.getAutoConfigRoute() != null) {
                data.set("autoConfigRoute", om.valueToTree(this.getAutoConfigRoute()));
            }
            if (this.getBgpConfig() != null) {
                data.set("bgpConfig", om.valueToTree(this.getBgpConfig()));
            }
            if (this.getCustomerGatewayId() != null) {
                data.set("customerGatewayId", om.valueToTree(this.getCustomerGatewayId()));
            }
            if (this.getEffectImmediately() != null) {
                data.set("effectImmediately", om.valueToTree(this.getEffectImmediately()));
            }
            if (this.getEnableDpd() != null) {
                data.set("enableDpd", om.valueToTree(this.getEnableDpd()));
            }
            if (this.getEnableNatTraversal() != null) {
                data.set("enableNatTraversal", om.valueToTree(this.getEnableNatTraversal()));
            }
            if (this.getEnableTunnelsBgp() != null) {
                data.set("enableTunnelsBgp", om.valueToTree(this.getEnableTunnelsBgp()));
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
            if (this.getRemoteCaCertificate() != null) {
                data.set("remoteCaCertificate", om.valueToTree(this.getRemoteCaCertificate()));
            }
            if (this.getTunnelOptionsSpecification() != null) {
                data.set("tunnelOptionsSpecification", om.valueToTree(this.getTunnelOptionsSpecification()));
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

            if (!localSubnet.equals(that.localSubnet)) return false;
            if (!remoteSubnet.equals(that.remoteSubnet)) return false;
            if (!vpnGatewayId.equals(that.vpnGatewayId)) return false;
            if (this.autoConfigRoute != null ? !this.autoConfigRoute.equals(that.autoConfigRoute) : that.autoConfigRoute != null) return false;
            if (this.bgpConfig != null ? !this.bgpConfig.equals(that.bgpConfig) : that.bgpConfig != null) return false;
            if (this.customerGatewayId != null ? !this.customerGatewayId.equals(that.customerGatewayId) : that.customerGatewayId != null) return false;
            if (this.effectImmediately != null ? !this.effectImmediately.equals(that.effectImmediately) : that.effectImmediately != null) return false;
            if (this.enableDpd != null ? !this.enableDpd.equals(that.enableDpd) : that.enableDpd != null) return false;
            if (this.enableNatTraversal != null ? !this.enableNatTraversal.equals(that.enableNatTraversal) : that.enableNatTraversal != null) return false;
            if (this.enableTunnelsBgp != null ? !this.enableTunnelsBgp.equals(that.enableTunnelsBgp) : that.enableTunnelsBgp != null) return false;
            if (this.healthCheckConfig != null ? !this.healthCheckConfig.equals(that.healthCheckConfig) : that.healthCheckConfig != null) return false;
            if (this.ikeConfig != null ? !this.ikeConfig.equals(that.ikeConfig) : that.ikeConfig != null) return false;
            if (this.ipsecConfig != null ? !this.ipsecConfig.equals(that.ipsecConfig) : that.ipsecConfig != null) return false;
            if (this.name != null ? !this.name.equals(that.name) : that.name != null) return false;
            if (this.remoteCaCertificate != null ? !this.remoteCaCertificate.equals(that.remoteCaCertificate) : that.remoteCaCertificate != null) return false;
            return this.tunnelOptionsSpecification != null ? this.tunnelOptionsSpecification.equals(that.tunnelOptionsSpecification) : that.tunnelOptionsSpecification == null;
        }

        @Override
        public final int hashCode() {
            int result = this.localSubnet.hashCode();
            result = 31 * result + (this.remoteSubnet.hashCode());
            result = 31 * result + (this.vpnGatewayId.hashCode());
            result = 31 * result + (this.autoConfigRoute != null ? this.autoConfigRoute.hashCode() : 0);
            result = 31 * result + (this.bgpConfig != null ? this.bgpConfig.hashCode() : 0);
            result = 31 * result + (this.customerGatewayId != null ? this.customerGatewayId.hashCode() : 0);
            result = 31 * result + (this.effectImmediately != null ? this.effectImmediately.hashCode() : 0);
            result = 31 * result + (this.enableDpd != null ? this.enableDpd.hashCode() : 0);
            result = 31 * result + (this.enableNatTraversal != null ? this.enableNatTraversal.hashCode() : 0);
            result = 31 * result + (this.enableTunnelsBgp != null ? this.enableTunnelsBgp.hashCode() : 0);
            result = 31 * result + (this.healthCheckConfig != null ? this.healthCheckConfig.hashCode() : 0);
            result = 31 * result + (this.ikeConfig != null ? this.ikeConfig.hashCode() : 0);
            result = 31 * result + (this.ipsecConfig != null ? this.ipsecConfig.hashCode() : 0);
            result = 31 * result + (this.name != null ? this.name.hashCode() : 0);
            result = 31 * result + (this.remoteCaCertificate != null ? this.remoteCaCertificate.hashCode() : 0);
            result = 31 * result + (this.tunnelOptionsSpecification != null ? this.tunnelOptionsSpecification.hashCode() : 0);
            return result;
        }
    }
}
