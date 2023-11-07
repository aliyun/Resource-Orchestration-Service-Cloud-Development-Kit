package com.aliyun.ros.cdk.vpc;

/**
 * A ROS resource type:  <code>ALIYUN::VPC::VpnConnection</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-11-07T09:08:37.741Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.VpnConnection")
public class VpnConnection extends com.aliyun.ros.cdk.core.Resource {

    protected VpnConnection(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected VpnConnection(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new <code>ALIYUN::VPC::VpnConnection</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public VpnConnection(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.VpnConnectionProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new <code>ALIYUN::VPC::VpnConnection</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public VpnConnection(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.VpnConnectionProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute PeerVpnConnectionConfig: Peer vpc connection config.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrPeerVpnConnectionConfig() {
        return software.amazon.jsii.Kernel.get(this, "attrPeerVpnConnectionConfig", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Status: Status of the IPsec connection.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrStatus() {
        return software.amazon.jsii.Kernel.get(this, "attrStatus", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute VpnConnectionId: ID of the IPsec connection.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrVpnConnectionId() {
        return software.amazon.jsii.Kernel.get(this, "attrVpnConnectionId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.vpc.VpnConnection}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.vpc.VpnConnection> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         * @param enableResourcePropertyConstraint
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id) {
            return new Builder(scope, id, null);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.vpc.VpnConnectionProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.vpc.VpnConnectionProps.Builder();
        }

        /**
         * Property localSubnet: A network segment on the VPC side that needs to be interconnected with the local IDC for the second phase negotiation.
         * <p>
         * Multiple network segments are separated by commas, for example: 192.168.1.0/24, 192.168.2.0/24.
         * <p>
         * @return {@code this}
         * @param localSubnet Property localSubnet: A network segment on the VPC side that needs to be interconnected with the local IDC for the second phase negotiation. This parameter is required.
         */
        public Builder localSubnet(final java.lang.String localSubnet) {
            this.props.localSubnet(localSubnet);
            return this;
        }
        /**
         * Property localSubnet: A network segment on the VPC side that needs to be interconnected with the local IDC for the second phase negotiation.
         * <p>
         * Multiple network segments are separated by commas, for example: 192.168.1.0/24, 192.168.2.0/24.
         * <p>
         * @return {@code this}
         * @param localSubnet Property localSubnet: A network segment on the VPC side that needs to be interconnected with the local IDC for the second phase negotiation. This parameter is required.
         */
        public Builder localSubnet(final com.aliyun.ros.cdk.core.IResolvable localSubnet) {
            this.props.localSubnet(localSubnet);
            return this;
        }

        /**
         * Property remoteSubnet: The network segment of the local IDC is used for the second phase negotiation.
         * <p>
         * Multiple network segments are separated by commas, for example: 192.168.3.0/24, 192.168.4.0/24.
         * <p>
         * @return {@code this}
         * @param remoteSubnet Property remoteSubnet: The network segment of the local IDC is used for the second phase negotiation. This parameter is required.
         */
        public Builder remoteSubnet(final java.lang.String remoteSubnet) {
            this.props.remoteSubnet(remoteSubnet);
            return this;
        }
        /**
         * Property remoteSubnet: The network segment of the local IDC is used for the second phase negotiation.
         * <p>
         * Multiple network segments are separated by commas, for example: 192.168.3.0/24, 192.168.4.0/24.
         * <p>
         * @return {@code this}
         * @param remoteSubnet Property remoteSubnet: The network segment of the local IDC is used for the second phase negotiation. This parameter is required.
         */
        public Builder remoteSubnet(final com.aliyun.ros.cdk.core.IResolvable remoteSubnet) {
            this.props.remoteSubnet(remoteSubnet);
            return this;
        }

        /**
         * Property vpnGatewayId: ID of the VPN gateway.
         * <p>
         * @return {@code this}
         * @param vpnGatewayId Property vpnGatewayId: ID of the VPN gateway. This parameter is required.
         */
        public Builder vpnGatewayId(final java.lang.String vpnGatewayId) {
            this.props.vpnGatewayId(vpnGatewayId);
            return this;
        }
        /**
         * Property vpnGatewayId: ID of the VPN gateway.
         * <p>
         * @return {@code this}
         * @param vpnGatewayId Property vpnGatewayId: ID of the VPN gateway. This parameter is required.
         */
        public Builder vpnGatewayId(final com.aliyun.ros.cdk.core.IResolvable vpnGatewayId) {
            this.props.vpnGatewayId(vpnGatewayId);
            return this;
        }

        /**
         * Property autoConfigRoute: Specifies whether to automatically configure routes.
         * <p>
         * Valid values:
         * true (default)
         * false
         * <p>
         * @return {@code this}
         * @param autoConfigRoute Property autoConfigRoute: Specifies whether to automatically configure routes. This parameter is required.
         */
        public Builder autoConfigRoute(final java.lang.Boolean autoConfigRoute) {
            this.props.autoConfigRoute(autoConfigRoute);
            return this;
        }
        /**
         * Property autoConfigRoute: Specifies whether to automatically configure routes.
         * <p>
         * Valid values:
         * true (default)
         * false
         * <p>
         * @return {@code this}
         * @param autoConfigRoute Property autoConfigRoute: Specifies whether to automatically configure routes. This parameter is required.
         */
        public Builder autoConfigRoute(final com.aliyun.ros.cdk.core.IResolvable autoConfigRoute) {
            this.props.autoConfigRoute(autoConfigRoute);
            return this;
        }

        /**
         * Property bgpConfig: The Border Gateway Protocol (BGP) configuration.
         * <p>
         * This parameter is required when the VPN gateway has dynamic BGP enabled.
         * Before you configure BGP, we recommend that you learn about how BGP works and its limits. For more information, see VPN Gateway supports BGP dynamic routing.
         * We recommend that you use a private ASN to establish a connection with Alibaba Cloud over BGP.
         * Refer to the relevant documentation for the private ASN range.
         * <p>
         * @return {@code this}
         * @param bgpConfig Property bgpConfig: The Border Gateway Protocol (BGP) configuration. This parameter is required.
         */
        public Builder bgpConfig(final com.aliyun.ros.cdk.core.IResolvable bgpConfig) {
            this.props.bgpConfig(bgpConfig);
            return this;
        }
        /**
         * Property bgpConfig: The Border Gateway Protocol (BGP) configuration.
         * <p>
         * This parameter is required when the VPN gateway has dynamic BGP enabled.
         * Before you configure BGP, we recommend that you learn about how BGP works and its limits. For more information, see VPN Gateway supports BGP dynamic routing.
         * We recommend that you use a private ASN to establish a connection with Alibaba Cloud over BGP.
         * Refer to the relevant documentation for the private ASN range.
         * <p>
         * @return {@code this}
         * @param bgpConfig Property bgpConfig: The Border Gateway Protocol (BGP) configuration. This parameter is required.
         */
        public Builder bgpConfig(final com.aliyun.ros.cdk.vpc.RosVpnConnection.BgpConfigProperty bgpConfig) {
            this.props.bgpConfig(bgpConfig);
            return this;
        }

        /**
         * Property customerGatewayId: The ID of the user gateway.
         * <p>
         * @return {@code this}
         * @param customerGatewayId Property customerGatewayId: The ID of the user gateway. This parameter is required.
         */
        public Builder customerGatewayId(final java.lang.String customerGatewayId) {
            this.props.customerGatewayId(customerGatewayId);
            return this;
        }
        /**
         * Property customerGatewayId: The ID of the user gateway.
         * <p>
         * @return {@code this}
         * @param customerGatewayId Property customerGatewayId: The ID of the user gateway. This parameter is required.
         */
        public Builder customerGatewayId(final com.aliyun.ros.cdk.core.IResolvable customerGatewayId) {
            this.props.customerGatewayId(customerGatewayId);
            return this;
        }

        /**
         * Property effectImmediately: Whether to delete the currently negotiated IPsec tunnel and re-initiate the negotiation.
         * <p>
         * Value:
         * True: Negotiate immediately after the configuration is complete.
         * False (default): Negotiate when traffic enters.
         * <p>
         * @return {@code this}
         * @param effectImmediately Property effectImmediately: Whether to delete the currently negotiated IPsec tunnel and re-initiate the negotiation. This parameter is required.
         */
        public Builder effectImmediately(final java.lang.Boolean effectImmediately) {
            this.props.effectImmediately(effectImmediately);
            return this;
        }
        /**
         * Property effectImmediately: Whether to delete the currently negotiated IPsec tunnel and re-initiate the negotiation.
         * <p>
         * Value:
         * True: Negotiate immediately after the configuration is complete.
         * False (default): Negotiate when traffic enters.
         * <p>
         * @return {@code this}
         * @param effectImmediately Property effectImmediately: Whether to delete the currently negotiated IPsec tunnel and re-initiate the negotiation. This parameter is required.
         */
        public Builder effectImmediately(final com.aliyun.ros.cdk.core.IResolvable effectImmediately) {
            this.props.effectImmediately(effectImmediately);
            return this;
        }

        /**
         * Property enableDpd: Specifies whether to enable the dead peer detection (DPD) feature.
         * <p>
         * Valid values:
         * true (default) The initiator of the IPsec-VPN connection sends DPD packets to verify the existence and availability of the peer. If no response is received from the peer within a specified period of time, the connection fails. ISAKMP SAs and IPsec SAs are deleted. The IPsec tunnel is also deleted.
         * false: disables DPD. The IPsec initiator does not send DPD packets.
         * <p>
         * @return {@code this}
         * @param enableDpd Property enableDpd: Specifies whether to enable the dead peer detection (DPD) feature. This parameter is required.
         */
        public Builder enableDpd(final java.lang.Boolean enableDpd) {
            this.props.enableDpd(enableDpd);
            return this;
        }
        /**
         * Property enableDpd: Specifies whether to enable the dead peer detection (DPD) feature.
         * <p>
         * Valid values:
         * true (default) The initiator of the IPsec-VPN connection sends DPD packets to verify the existence and availability of the peer. If no response is received from the peer within a specified period of time, the connection fails. ISAKMP SAs and IPsec SAs are deleted. The IPsec tunnel is also deleted.
         * false: disables DPD. The IPsec initiator does not send DPD packets.
         * <p>
         * @return {@code this}
         * @param enableDpd Property enableDpd: Specifies whether to enable the dead peer detection (DPD) feature. This parameter is required.
         */
        public Builder enableDpd(final com.aliyun.ros.cdk.core.IResolvable enableDpd) {
            this.props.enableDpd(enableDpd);
            return this;
        }

        /**
         * Property enableNatTraversal: Specifies whether to enable NAT traversal.
         * <p>
         * Valid values:
         * true (default) After NAT traversal is enabled, the initiator does not check the UDP ports during IKE negotiations and can automatically discover NAT gateway devices along the VPN tunnel.
         * false
         * <p>
         * @return {@code this}
         * @param enableNatTraversal Property enableNatTraversal: Specifies whether to enable NAT traversal. This parameter is required.
         */
        public Builder enableNatTraversal(final java.lang.Boolean enableNatTraversal) {
            this.props.enableNatTraversal(enableNatTraversal);
            return this;
        }
        /**
         * Property enableNatTraversal: Specifies whether to enable NAT traversal.
         * <p>
         * Valid values:
         * true (default) After NAT traversal is enabled, the initiator does not check the UDP ports during IKE negotiations and can automatically discover NAT gateway devices along the VPN tunnel.
         * false
         * <p>
         * @return {@code this}
         * @param enableNatTraversal Property enableNatTraversal: Specifies whether to enable NAT traversal. This parameter is required.
         */
        public Builder enableNatTraversal(final com.aliyun.ros.cdk.core.IResolvable enableNatTraversal) {
            this.props.enableNatTraversal(enableNatTraversal);
            return this;
        }

        /**
         * Property enableTunnelsBgp: Specifies whether to enable the BGP feature for the tunnel.
         * <p>
         * Valid values: true and false. Default value: false.
         * <p>
         * @return {@code this}
         * @param enableTunnelsBgp Property enableTunnelsBgp: Specifies whether to enable the BGP feature for the tunnel. This parameter is required.
         */
        public Builder enableTunnelsBgp(final java.lang.Boolean enableTunnelsBgp) {
            this.props.enableTunnelsBgp(enableTunnelsBgp);
            return this;
        }
        /**
         * Property enableTunnelsBgp: Specifies whether to enable the BGP feature for the tunnel.
         * <p>
         * Valid values: true and false. Default value: false.
         * <p>
         * @return {@code this}
         * @param enableTunnelsBgp Property enableTunnelsBgp: Specifies whether to enable the BGP feature for the tunnel. This parameter is required.
         */
        public Builder enableTunnelsBgp(final com.aliyun.ros.cdk.core.IResolvable enableTunnelsBgp) {
            this.props.enableTunnelsBgp(enableTunnelsBgp);
            return this;
        }

        /**
         * Property healthCheckConfig: Whether to enable the health check configuration.
         * <p>
         * @return {@code this}
         * @param healthCheckConfig Property healthCheckConfig: Whether to enable the health check configuration. This parameter is required.
         */
        public Builder healthCheckConfig(final com.aliyun.ros.cdk.core.IResolvable healthCheckConfig) {
            this.props.healthCheckConfig(healthCheckConfig);
            return this;
        }
        /**
         * Property healthCheckConfig: Whether to enable the health check configuration.
         * <p>
         * @return {@code this}
         * @param healthCheckConfig Property healthCheckConfig: Whether to enable the health check configuration. This parameter is required.
         */
        public Builder healthCheckConfig(final com.aliyun.ros.cdk.vpc.RosVpnConnection.HealthCheckConfigProperty healthCheckConfig) {
            this.props.healthCheckConfig(healthCheckConfig);
            return this;
        }

        /**
         * Property ikeConfig: Configuration information for the first phase of negotiation.
         * <p>
         * @return {@code this}
         * @param ikeConfig Property ikeConfig: Configuration information for the first phase of negotiation. This parameter is required.
         */
        public Builder ikeConfig(final com.aliyun.ros.cdk.core.IResolvable ikeConfig) {
            this.props.ikeConfig(ikeConfig);
            return this;
        }
        /**
         * Property ikeConfig: Configuration information for the first phase of negotiation.
         * <p>
         * @return {@code this}
         * @param ikeConfig Property ikeConfig: Configuration information for the first phase of negotiation. This parameter is required.
         */
        public Builder ikeConfig(final com.aliyun.ros.cdk.vpc.RosVpnConnection.IkeConfigProperty ikeConfig) {
            this.props.ikeConfig(ikeConfig);
            return this;
        }

        /**
         * Property ipsecConfig: Configuration information for the second phase negotiation.
         * <p>
         * @return {@code this}
         * @param ipsecConfig Property ipsecConfig: Configuration information for the second phase negotiation. This parameter is required.
         */
        public Builder ipsecConfig(final com.aliyun.ros.cdk.core.IResolvable ipsecConfig) {
            this.props.ipsecConfig(ipsecConfig);
            return this;
        }
        /**
         * Property ipsecConfig: Configuration information for the second phase negotiation.
         * <p>
         * @return {@code this}
         * @param ipsecConfig Property ipsecConfig: Configuration information for the second phase negotiation. This parameter is required.
         */
        public Builder ipsecConfig(final com.aliyun.ros.cdk.vpc.RosVpnConnection.IpsecConfigProperty ipsecConfig) {
            this.props.ipsecConfig(ipsecConfig);
            return this;
        }

        /**
         * Property name: The name of the IPsec connection.
         * <p>
         * The length is 2-128 characters and must start with a letter or Chinese. It can contain numbers, periods (.), underscores (_) and dashes (-), but cannot start with http:// or https:// .
         * <p>
         * @return {@code this}
         * @param name Property name: The name of the IPsec connection. This parameter is required.
         */
        public Builder name(final java.lang.String name) {
            this.props.name(name);
            return this;
        }
        /**
         * Property name: The name of the IPsec connection.
         * <p>
         * The length is 2-128 characters and must start with a letter or Chinese. It can contain numbers, periods (.), underscores (_) and dashes (-), but cannot start with http:// or https:// .
         * <p>
         * @return {@code this}
         * @param name Property name: The name of the IPsec connection. This parameter is required.
         */
        public Builder name(final com.aliyun.ros.cdk.core.IResolvable name) {
            this.props.name(name);
            return this;
        }

        /**
         * Property remoteCaCertificate: The peer CA certificate when a ShangMi (SM) VPN gateway is used to establish the IPsec-VPN connection.
         * <p>
         * This parameter is required when an SM VPN gateway is used to establish the IPsec-VPN connection.
         * You can ignore this parameter when a standard VPN gateway is used to create the IPsec-VPN connection.
         * <p>
         * @return {@code this}
         * @param remoteCaCertificate Property remoteCaCertificate: The peer CA certificate when a ShangMi (SM) VPN gateway is used to establish the IPsec-VPN connection. This parameter is required.
         */
        public Builder remoteCaCertificate(final java.lang.String remoteCaCertificate) {
            this.props.remoteCaCertificate(remoteCaCertificate);
            return this;
        }
        /**
         * Property remoteCaCertificate: The peer CA certificate when a ShangMi (SM) VPN gateway is used to establish the IPsec-VPN connection.
         * <p>
         * This parameter is required when an SM VPN gateway is used to establish the IPsec-VPN connection.
         * You can ignore this parameter when a standard VPN gateway is used to create the IPsec-VPN connection.
         * <p>
         * @return {@code this}
         * @param remoteCaCertificate Property remoteCaCertificate: The peer CA certificate when a ShangMi (SM) VPN gateway is used to establish the IPsec-VPN connection. This parameter is required.
         */
        public Builder remoteCaCertificate(final com.aliyun.ros.cdk.core.IResolvable remoteCaCertificate) {
            this.props.remoteCaCertificate(remoteCaCertificate);
            return this;
        }

        /**
         * Property tunnelOptionsSpecification: TunnelOptionsSpecification parameters are supported by dual-tunnel IPsec-VPN gateways.
         * <p>
         * You can modify both the active and standby tunnels of the IPsec-VPN connection.
         * <p>
         * @return {@code this}
         * @param tunnelOptionsSpecification Property tunnelOptionsSpecification: TunnelOptionsSpecification parameters are supported by dual-tunnel IPsec-VPN gateways. This parameter is required.
         */
        public Builder tunnelOptionsSpecification(final com.aliyun.ros.cdk.core.IResolvable tunnelOptionsSpecification) {
            this.props.tunnelOptionsSpecification(tunnelOptionsSpecification);
            return this;
        }
        /**
         * Property tunnelOptionsSpecification: TunnelOptionsSpecification parameters are supported by dual-tunnel IPsec-VPN gateways.
         * <p>
         * You can modify both the active and standby tunnels of the IPsec-VPN connection.
         * <p>
         * @return {@code this}
         * @param tunnelOptionsSpecification Property tunnelOptionsSpecification: TunnelOptionsSpecification parameters are supported by dual-tunnel IPsec-VPN gateways. This parameter is required.
         */
        public Builder tunnelOptionsSpecification(final java.util.List<? extends java.lang.Object> tunnelOptionsSpecification) {
            this.props.tunnelOptionsSpecification(tunnelOptionsSpecification);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.vpc.VpnConnection}.
         */
        @Override
        public com.aliyun.ros.cdk.vpc.VpnConnection build() {
            return new com.aliyun.ros.cdk.vpc.VpnConnection(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
