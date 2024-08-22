package com.aliyun.ros.cdk.vpc;

/**
 * Properties for defining a <code>VpnAttachment</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-vpnattachment
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-08-22T08:56:24.934Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.VpnAttachmentProps")
@software.amazon.jsii.Jsii.Proxy(VpnAttachmentProps.Jsii$Proxy.class)
public interface VpnAttachmentProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property customerGatewayId: The ID of the user gateway.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getCustomerGatewayId();

    /**
     * Property localSubnet: A network segment on the VPC side that needs to be interconnected with the local IDC for the second phase negotiation.
     * <p>
     * Multiple network segments are separated by commas, for example: 192.168.1.0/24, 192.168.2.0/24.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getLocalSubnet();

    /**
     * Property remoteSubnet: The network segment of the local IDC is used for the second phase negotiation.
     * <p>
     * Multiple network segments are separated by commas, for example: 192.168.3.0/24, 192.168.4.0/24.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getRemoteSubnet();

    /**
     * Property autoConfigRoute: Specifies whether to automatically configure routes.
     * <p>
     * Valid values:
     * true (default)
     * false
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAutoConfigRoute() {
        return null;
    }

    /**
     * Property bgpConfig: The Border Gateway Protocol (BGP) configuration.
     * <p>
     * This parameter is required when the VPN gateway has dynamic BGP enabled.
     * Before you configure BGP, we recommend that you learn about how BGP works and its limits. For more information, see VPN Gateway supports BGP dynamic routing.
     * We recommend that you use a private ASN to establish a connection with Alibaba Cloud over BGP.
     * Refer to the relevant documentation for the private ASN range.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getBgpConfig() {
        return null;
    }

    /**
     * Property effectImmediately: Whether to delete the currently negotiated IPsec tunnel and re-initiate the negotiation.
     * <p>
     * Value:
     * True: Negotiate immediately after the configuration is complete.
     * False (default): Negotiate when traffic enters.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEffectImmediately() {
        return null;
    }

    /**
     * Property enableDpd: Specifies whether to enable the dead peer detection (DPD) feature.
     * <p>
     * Valid values:
     * true (default) The initiator of the IPsec-VPN connection sends DPD packets to verify the existence and availability of the peer. If no response is received from the peer within a specified period of time, the connection fails. ISAKMP SAs and IPsec SAs are deleted. The IPsec tunnel is also deleted.
     * false: disables DPD. The IPsec initiator does not send DPD packets.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEnableDpd() {
        return null;
    }

    /**
     * Property enableNatTraversal: Specifies whether to enable NAT traversal.
     * <p>
     * Valid values:
     * true (default) After NAT traversal is enabled, the initiator does not check the UDP ports during IKE negotiations and can automatically discover NAT gateway devices along the VPN tunnel.
     * false
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEnableNatTraversal() {
        return null;
    }

    /**
     * Property healthCheckConfig: Whether to enable the health check configuration.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getHealthCheckConfig() {
        return null;
    }

    /**
     * Property ikeConfig: Configuration information for the first phase of negotiation.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIkeConfig() {
        return null;
    }

    /**
     * Property ipsecConfig: Configuration information for the second phase negotiation.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIpsecConfig() {
        return null;
    }

    /**
     * Property name: The name of the IPsec connection.
     * <p>
     * The length is 2-128 characters and must start with a letter or Chinese. It can contain numbers, periods (.), underscores (_) and dashes (-), but cannot start with http:// or https:// .
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getName() {
        return null;
    }

    /**
     * Property networkType: The network type of the IPsec connection.
     * <p>
     * Value: public|private.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getNetworkType() {
        return null;
    }

    /**
     * Property remoteCaCert: The peer CA certificate when a ShangMi (SM) VPN gateway is used to establish the IPsec-VPN connection.
     * <p>
     * This parameter is required when an SM VPN gateway is used to establish the IPsec-VPN connection.
     * You can ignore this parameter when a standard VPN gateway is used to create the IPsec-VPN connection.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRemoteCaCert() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link VpnAttachmentProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link VpnAttachmentProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<VpnAttachmentProps> {
        java.lang.Object customerGatewayId;
        java.lang.Object localSubnet;
        java.lang.Object remoteSubnet;
        java.lang.Object autoConfigRoute;
        java.lang.Object bgpConfig;
        java.lang.Object effectImmediately;
        java.lang.Object enableDpd;
        java.lang.Object enableNatTraversal;
        java.lang.Object healthCheckConfig;
        java.lang.Object ikeConfig;
        java.lang.Object ipsecConfig;
        java.lang.Object name;
        java.lang.Object networkType;
        java.lang.Object remoteCaCert;

        /**
         * Sets the value of {@link VpnAttachmentProps#getCustomerGatewayId}
         * @param customerGatewayId Property customerGatewayId: The ID of the user gateway. This parameter is required.
         * @return {@code this}
         */
        public Builder customerGatewayId(java.lang.String customerGatewayId) {
            this.customerGatewayId = customerGatewayId;
            return this;
        }

        /**
         * Sets the value of {@link VpnAttachmentProps#getCustomerGatewayId}
         * @param customerGatewayId Property customerGatewayId: The ID of the user gateway. This parameter is required.
         * @return {@code this}
         */
        public Builder customerGatewayId(com.aliyun.ros.cdk.core.IResolvable customerGatewayId) {
            this.customerGatewayId = customerGatewayId;
            return this;
        }

        /**
         * Sets the value of {@link VpnAttachmentProps#getLocalSubnet}
         * @param localSubnet Property localSubnet: A network segment on the VPC side that needs to be interconnected with the local IDC for the second phase negotiation. This parameter is required.
         *                    Multiple network segments are separated by commas, for example: 192.168.1.0/24, 192.168.2.0/24.
         * @return {@code this}
         */
        public Builder localSubnet(java.lang.String localSubnet) {
            this.localSubnet = localSubnet;
            return this;
        }

        /**
         * Sets the value of {@link VpnAttachmentProps#getLocalSubnet}
         * @param localSubnet Property localSubnet: A network segment on the VPC side that needs to be interconnected with the local IDC for the second phase negotiation. This parameter is required.
         *                    Multiple network segments are separated by commas, for example: 192.168.1.0/24, 192.168.2.0/24.
         * @return {@code this}
         */
        public Builder localSubnet(com.aliyun.ros.cdk.core.IResolvable localSubnet) {
            this.localSubnet = localSubnet;
            return this;
        }

        /**
         * Sets the value of {@link VpnAttachmentProps#getRemoteSubnet}
         * @param remoteSubnet Property remoteSubnet: The network segment of the local IDC is used for the second phase negotiation. This parameter is required.
         *                     Multiple network segments are separated by commas, for example: 192.168.3.0/24, 192.168.4.0/24.
         * @return {@code this}
         */
        public Builder remoteSubnet(java.lang.String remoteSubnet) {
            this.remoteSubnet = remoteSubnet;
            return this;
        }

        /**
         * Sets the value of {@link VpnAttachmentProps#getRemoteSubnet}
         * @param remoteSubnet Property remoteSubnet: The network segment of the local IDC is used for the second phase negotiation. This parameter is required.
         *                     Multiple network segments are separated by commas, for example: 192.168.3.0/24, 192.168.4.0/24.
         * @return {@code this}
         */
        public Builder remoteSubnet(com.aliyun.ros.cdk.core.IResolvable remoteSubnet) {
            this.remoteSubnet = remoteSubnet;
            return this;
        }

        /**
         * Sets the value of {@link VpnAttachmentProps#getAutoConfigRoute}
         * @param autoConfigRoute Property autoConfigRoute: Specifies whether to automatically configure routes.
         *                        Valid values:
         *                        true (default)
         *                        false
         * @return {@code this}
         */
        public Builder autoConfigRoute(java.lang.Boolean autoConfigRoute) {
            this.autoConfigRoute = autoConfigRoute;
            return this;
        }

        /**
         * Sets the value of {@link VpnAttachmentProps#getAutoConfigRoute}
         * @param autoConfigRoute Property autoConfigRoute: Specifies whether to automatically configure routes.
         *                        Valid values:
         *                        true (default)
         *                        false
         * @return {@code this}
         */
        public Builder autoConfigRoute(com.aliyun.ros.cdk.core.IResolvable autoConfigRoute) {
            this.autoConfigRoute = autoConfigRoute;
            return this;
        }

        /**
         * Sets the value of {@link VpnAttachmentProps#getBgpConfig}
         * @param bgpConfig Property bgpConfig: The Border Gateway Protocol (BGP) configuration.
         *                  This parameter is required when the VPN gateway has dynamic BGP enabled.
         *                  Before you configure BGP, we recommend that you learn about how BGP works and its limits. For more information, see VPN Gateway supports BGP dynamic routing.
         *                  We recommend that you use a private ASN to establish a connection with Alibaba Cloud over BGP.
         *                  Refer to the relevant documentation for the private ASN range.
         * @return {@code this}
         */
        public Builder bgpConfig(com.aliyun.ros.cdk.core.IResolvable bgpConfig) {
            this.bgpConfig = bgpConfig;
            return this;
        }

        /**
         * Sets the value of {@link VpnAttachmentProps#getBgpConfig}
         * @param bgpConfig Property bgpConfig: The Border Gateway Protocol (BGP) configuration.
         *                  This parameter is required when the VPN gateway has dynamic BGP enabled.
         *                  Before you configure BGP, we recommend that you learn about how BGP works and its limits. For more information, see VPN Gateway supports BGP dynamic routing.
         *                  We recommend that you use a private ASN to establish a connection with Alibaba Cloud over BGP.
         *                  Refer to the relevant documentation for the private ASN range.
         * @return {@code this}
         */
        public Builder bgpConfig(com.aliyun.ros.cdk.vpc.RosVpnAttachment.BgpConfigProperty bgpConfig) {
            this.bgpConfig = bgpConfig;
            return this;
        }

        /**
         * Sets the value of {@link VpnAttachmentProps#getEffectImmediately}
         * @param effectImmediately Property effectImmediately: Whether to delete the currently negotiated IPsec tunnel and re-initiate the negotiation.
         *                          Value:
         *                          True: Negotiate immediately after the configuration is complete.
         *                          False (default): Negotiate when traffic enters.
         * @return {@code this}
         */
        public Builder effectImmediately(java.lang.Boolean effectImmediately) {
            this.effectImmediately = effectImmediately;
            return this;
        }

        /**
         * Sets the value of {@link VpnAttachmentProps#getEffectImmediately}
         * @param effectImmediately Property effectImmediately: Whether to delete the currently negotiated IPsec tunnel and re-initiate the negotiation.
         *                          Value:
         *                          True: Negotiate immediately after the configuration is complete.
         *                          False (default): Negotiate when traffic enters.
         * @return {@code this}
         */
        public Builder effectImmediately(com.aliyun.ros.cdk.core.IResolvable effectImmediately) {
            this.effectImmediately = effectImmediately;
            return this;
        }

        /**
         * Sets the value of {@link VpnAttachmentProps#getEnableDpd}
         * @param enableDpd Property enableDpd: Specifies whether to enable the dead peer detection (DPD) feature.
         *                  Valid values:
         *                  true (default) The initiator of the IPsec-VPN connection sends DPD packets to verify the existence and availability of the peer. If no response is received from the peer within a specified period of time, the connection fails. ISAKMP SAs and IPsec SAs are deleted. The IPsec tunnel is also deleted.
         *                  false: disables DPD. The IPsec initiator does not send DPD packets.
         * @return {@code this}
         */
        public Builder enableDpd(java.lang.Boolean enableDpd) {
            this.enableDpd = enableDpd;
            return this;
        }

        /**
         * Sets the value of {@link VpnAttachmentProps#getEnableDpd}
         * @param enableDpd Property enableDpd: Specifies whether to enable the dead peer detection (DPD) feature.
         *                  Valid values:
         *                  true (default) The initiator of the IPsec-VPN connection sends DPD packets to verify the existence and availability of the peer. If no response is received from the peer within a specified period of time, the connection fails. ISAKMP SAs and IPsec SAs are deleted. The IPsec tunnel is also deleted.
         *                  false: disables DPD. The IPsec initiator does not send DPD packets.
         * @return {@code this}
         */
        public Builder enableDpd(com.aliyun.ros.cdk.core.IResolvable enableDpd) {
            this.enableDpd = enableDpd;
            return this;
        }

        /**
         * Sets the value of {@link VpnAttachmentProps#getEnableNatTraversal}
         * @param enableNatTraversal Property enableNatTraversal: Specifies whether to enable NAT traversal.
         *                           Valid values:
         *                           true (default) After NAT traversal is enabled, the initiator does not check the UDP ports during IKE negotiations and can automatically discover NAT gateway devices along the VPN tunnel.
         *                           false
         * @return {@code this}
         */
        public Builder enableNatTraversal(java.lang.Boolean enableNatTraversal) {
            this.enableNatTraversal = enableNatTraversal;
            return this;
        }

        /**
         * Sets the value of {@link VpnAttachmentProps#getEnableNatTraversal}
         * @param enableNatTraversal Property enableNatTraversal: Specifies whether to enable NAT traversal.
         *                           Valid values:
         *                           true (default) After NAT traversal is enabled, the initiator does not check the UDP ports during IKE negotiations and can automatically discover NAT gateway devices along the VPN tunnel.
         *                           false
         * @return {@code this}
         */
        public Builder enableNatTraversal(com.aliyun.ros.cdk.core.IResolvable enableNatTraversal) {
            this.enableNatTraversal = enableNatTraversal;
            return this;
        }

        /**
         * Sets the value of {@link VpnAttachmentProps#getHealthCheckConfig}
         * @param healthCheckConfig Property healthCheckConfig: Whether to enable the health check configuration.
         * @return {@code this}
         */
        public Builder healthCheckConfig(com.aliyun.ros.cdk.core.IResolvable healthCheckConfig) {
            this.healthCheckConfig = healthCheckConfig;
            return this;
        }

        /**
         * Sets the value of {@link VpnAttachmentProps#getHealthCheckConfig}
         * @param healthCheckConfig Property healthCheckConfig: Whether to enable the health check configuration.
         * @return {@code this}
         */
        public Builder healthCheckConfig(com.aliyun.ros.cdk.vpc.RosVpnAttachment.HealthCheckConfigProperty healthCheckConfig) {
            this.healthCheckConfig = healthCheckConfig;
            return this;
        }

        /**
         * Sets the value of {@link VpnAttachmentProps#getIkeConfig}
         * @param ikeConfig Property ikeConfig: Configuration information for the first phase of negotiation.
         * @return {@code this}
         */
        public Builder ikeConfig(com.aliyun.ros.cdk.core.IResolvable ikeConfig) {
            this.ikeConfig = ikeConfig;
            return this;
        }

        /**
         * Sets the value of {@link VpnAttachmentProps#getIkeConfig}
         * @param ikeConfig Property ikeConfig: Configuration information for the first phase of negotiation.
         * @return {@code this}
         */
        public Builder ikeConfig(com.aliyun.ros.cdk.vpc.RosVpnAttachment.IkeConfigProperty ikeConfig) {
            this.ikeConfig = ikeConfig;
            return this;
        }

        /**
         * Sets the value of {@link VpnAttachmentProps#getIpsecConfig}
         * @param ipsecConfig Property ipsecConfig: Configuration information for the second phase negotiation.
         * @return {@code this}
         */
        public Builder ipsecConfig(com.aliyun.ros.cdk.core.IResolvable ipsecConfig) {
            this.ipsecConfig = ipsecConfig;
            return this;
        }

        /**
         * Sets the value of {@link VpnAttachmentProps#getIpsecConfig}
         * @param ipsecConfig Property ipsecConfig: Configuration information for the second phase negotiation.
         * @return {@code this}
         */
        public Builder ipsecConfig(com.aliyun.ros.cdk.vpc.RosVpnAttachment.IpsecConfigProperty ipsecConfig) {
            this.ipsecConfig = ipsecConfig;
            return this;
        }

        /**
         * Sets the value of {@link VpnAttachmentProps#getName}
         * @param name Property name: The name of the IPsec connection.
         *             The length is 2-128 characters and must start with a letter or Chinese. It can contain numbers, periods (.), underscores (_) and dashes (-), but cannot start with http:// or https:// .
         * @return {@code this}
         */
        public Builder name(java.lang.String name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link VpnAttachmentProps#getName}
         * @param name Property name: The name of the IPsec connection.
         *             The length is 2-128 characters and must start with a letter or Chinese. It can contain numbers, periods (.), underscores (_) and dashes (-), but cannot start with http:// or https:// .
         * @return {@code this}
         */
        public Builder name(com.aliyun.ros.cdk.core.IResolvable name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link VpnAttachmentProps#getNetworkType}
         * @param networkType Property networkType: The network type of the IPsec connection.
         *                    Value: public|private.
         * @return {@code this}
         */
        public Builder networkType(java.lang.String networkType) {
            this.networkType = networkType;
            return this;
        }

        /**
         * Sets the value of {@link VpnAttachmentProps#getNetworkType}
         * @param networkType Property networkType: The network type of the IPsec connection.
         *                    Value: public|private.
         * @return {@code this}
         */
        public Builder networkType(com.aliyun.ros.cdk.core.IResolvable networkType) {
            this.networkType = networkType;
            return this;
        }

        /**
         * Sets the value of {@link VpnAttachmentProps#getRemoteCaCert}
         * @param remoteCaCert Property remoteCaCert: The peer CA certificate when a ShangMi (SM) VPN gateway is used to establish the IPsec-VPN connection.
         *                     This parameter is required when an SM VPN gateway is used to establish the IPsec-VPN connection.
         *                     You can ignore this parameter when a standard VPN gateway is used to create the IPsec-VPN connection.
         * @return {@code this}
         */
        public Builder remoteCaCert(java.lang.String remoteCaCert) {
            this.remoteCaCert = remoteCaCert;
            return this;
        }

        /**
         * Sets the value of {@link VpnAttachmentProps#getRemoteCaCert}
         * @param remoteCaCert Property remoteCaCert: The peer CA certificate when a ShangMi (SM) VPN gateway is used to establish the IPsec-VPN connection.
         *                     This parameter is required when an SM VPN gateway is used to establish the IPsec-VPN connection.
         *                     You can ignore this parameter when a standard VPN gateway is used to create the IPsec-VPN connection.
         * @return {@code this}
         */
        public Builder remoteCaCert(com.aliyun.ros.cdk.core.IResolvable remoteCaCert) {
            this.remoteCaCert = remoteCaCert;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link VpnAttachmentProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public VpnAttachmentProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link VpnAttachmentProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements VpnAttachmentProps {
        private final java.lang.Object customerGatewayId;
        private final java.lang.Object localSubnet;
        private final java.lang.Object remoteSubnet;
        private final java.lang.Object autoConfigRoute;
        private final java.lang.Object bgpConfig;
        private final java.lang.Object effectImmediately;
        private final java.lang.Object enableDpd;
        private final java.lang.Object enableNatTraversal;
        private final java.lang.Object healthCheckConfig;
        private final java.lang.Object ikeConfig;
        private final java.lang.Object ipsecConfig;
        private final java.lang.Object name;
        private final java.lang.Object networkType;
        private final java.lang.Object remoteCaCert;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.customerGatewayId = software.amazon.jsii.Kernel.get(this, "customerGatewayId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.localSubnet = software.amazon.jsii.Kernel.get(this, "localSubnet", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.remoteSubnet = software.amazon.jsii.Kernel.get(this, "remoteSubnet", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.autoConfigRoute = software.amazon.jsii.Kernel.get(this, "autoConfigRoute", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.bgpConfig = software.amazon.jsii.Kernel.get(this, "bgpConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.effectImmediately = software.amazon.jsii.Kernel.get(this, "effectImmediately", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.enableDpd = software.amazon.jsii.Kernel.get(this, "enableDpd", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.enableNatTraversal = software.amazon.jsii.Kernel.get(this, "enableNatTraversal", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.healthCheckConfig = software.amazon.jsii.Kernel.get(this, "healthCheckConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ikeConfig = software.amazon.jsii.Kernel.get(this, "ikeConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ipsecConfig = software.amazon.jsii.Kernel.get(this, "ipsecConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.networkType = software.amazon.jsii.Kernel.get(this, "networkType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.remoteCaCert = software.amazon.jsii.Kernel.get(this, "remoteCaCert", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.customerGatewayId = java.util.Objects.requireNonNull(builder.customerGatewayId, "customerGatewayId is required");
            this.localSubnet = java.util.Objects.requireNonNull(builder.localSubnet, "localSubnet is required");
            this.remoteSubnet = java.util.Objects.requireNonNull(builder.remoteSubnet, "remoteSubnet is required");
            this.autoConfigRoute = builder.autoConfigRoute;
            this.bgpConfig = builder.bgpConfig;
            this.effectImmediately = builder.effectImmediately;
            this.enableDpd = builder.enableDpd;
            this.enableNatTraversal = builder.enableNatTraversal;
            this.healthCheckConfig = builder.healthCheckConfig;
            this.ikeConfig = builder.ikeConfig;
            this.ipsecConfig = builder.ipsecConfig;
            this.name = builder.name;
            this.networkType = builder.networkType;
            this.remoteCaCert = builder.remoteCaCert;
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
        public final java.lang.Object getAutoConfigRoute() {
            return this.autoConfigRoute;
        }

        @Override
        public final java.lang.Object getBgpConfig() {
            return this.bgpConfig;
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
        public final java.lang.Object getNetworkType() {
            return this.networkType;
        }

        @Override
        public final java.lang.Object getRemoteCaCert() {
            return this.remoteCaCert;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("customerGatewayId", om.valueToTree(this.getCustomerGatewayId()));
            data.set("localSubnet", om.valueToTree(this.getLocalSubnet()));
            data.set("remoteSubnet", om.valueToTree(this.getRemoteSubnet()));
            if (this.getAutoConfigRoute() != null) {
                data.set("autoConfigRoute", om.valueToTree(this.getAutoConfigRoute()));
            }
            if (this.getBgpConfig() != null) {
                data.set("bgpConfig", om.valueToTree(this.getBgpConfig()));
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
            if (this.getNetworkType() != null) {
                data.set("networkType", om.valueToTree(this.getNetworkType()));
            }
            if (this.getRemoteCaCert() != null) {
                data.set("remoteCaCert", om.valueToTree(this.getRemoteCaCert()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-vpc.VpnAttachmentProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            VpnAttachmentProps.Jsii$Proxy that = (VpnAttachmentProps.Jsii$Proxy) o;

            if (!customerGatewayId.equals(that.customerGatewayId)) return false;
            if (!localSubnet.equals(that.localSubnet)) return false;
            if (!remoteSubnet.equals(that.remoteSubnet)) return false;
            if (this.autoConfigRoute != null ? !this.autoConfigRoute.equals(that.autoConfigRoute) : that.autoConfigRoute != null) return false;
            if (this.bgpConfig != null ? !this.bgpConfig.equals(that.bgpConfig) : that.bgpConfig != null) return false;
            if (this.effectImmediately != null ? !this.effectImmediately.equals(that.effectImmediately) : that.effectImmediately != null) return false;
            if (this.enableDpd != null ? !this.enableDpd.equals(that.enableDpd) : that.enableDpd != null) return false;
            if (this.enableNatTraversal != null ? !this.enableNatTraversal.equals(that.enableNatTraversal) : that.enableNatTraversal != null) return false;
            if (this.healthCheckConfig != null ? !this.healthCheckConfig.equals(that.healthCheckConfig) : that.healthCheckConfig != null) return false;
            if (this.ikeConfig != null ? !this.ikeConfig.equals(that.ikeConfig) : that.ikeConfig != null) return false;
            if (this.ipsecConfig != null ? !this.ipsecConfig.equals(that.ipsecConfig) : that.ipsecConfig != null) return false;
            if (this.name != null ? !this.name.equals(that.name) : that.name != null) return false;
            if (this.networkType != null ? !this.networkType.equals(that.networkType) : that.networkType != null) return false;
            return this.remoteCaCert != null ? this.remoteCaCert.equals(that.remoteCaCert) : that.remoteCaCert == null;
        }

        @Override
        public final int hashCode() {
            int result = this.customerGatewayId.hashCode();
            result = 31 * result + (this.localSubnet.hashCode());
            result = 31 * result + (this.remoteSubnet.hashCode());
            result = 31 * result + (this.autoConfigRoute != null ? this.autoConfigRoute.hashCode() : 0);
            result = 31 * result + (this.bgpConfig != null ? this.bgpConfig.hashCode() : 0);
            result = 31 * result + (this.effectImmediately != null ? this.effectImmediately.hashCode() : 0);
            result = 31 * result + (this.enableDpd != null ? this.enableDpd.hashCode() : 0);
            result = 31 * result + (this.enableNatTraversal != null ? this.enableNatTraversal.hashCode() : 0);
            result = 31 * result + (this.healthCheckConfig != null ? this.healthCheckConfig.hashCode() : 0);
            result = 31 * result + (this.ikeConfig != null ? this.ikeConfig.hashCode() : 0);
            result = 31 * result + (this.ipsecConfig != null ? this.ipsecConfig.hashCode() : 0);
            result = 31 * result + (this.name != null ? this.name.hashCode() : 0);
            result = 31 * result + (this.networkType != null ? this.networkType.hashCode() : 0);
            result = 31 * result + (this.remoteCaCert != null ? this.remoteCaCert.hashCode() : 0);
            return result;
        }
    }
}
