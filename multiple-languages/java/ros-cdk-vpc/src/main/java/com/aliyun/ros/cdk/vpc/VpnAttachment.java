package com.aliyun.ros.cdk.vpc;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::VPC::VpnAttachment</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:25:01.262Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.VpnAttachment")
public class VpnAttachment extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.vpc.IVpnAttachment {

    protected VpnAttachment(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected VpnAttachment(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public VpnAttachment(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.VpnAttachmentProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public VpnAttachment(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.VpnAttachmentProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute InternetIp: The gateway IP address of the IPsec connection.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrInternetIp() {
        return software.amazon.jsii.Kernel.get(this, "attrInternetIp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute PeerVpnAttachmentConfig: Peer vpc Attachment config.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrPeerVpnAttachmentConfig() {
        return software.amazon.jsii.Kernel.get(this, "attrPeerVpnAttachmentConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute VpnAttachmentId: ID of the IPsec attachment.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpnAttachmentId() {
        return software.amazon.jsii.Kernel.get(this, "attrVpnAttachmentId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.VpnAttachmentProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.vpc.VpnAttachmentProps.class));
    }

    protected @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    protected void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    protected @org.jetbrains.annotations.NotNull java.lang.String getId() {
        return software.amazon.jsii.Kernel.get(this, "id", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    protected void setId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "id", java.util.Objects.requireNonNull(value, "id is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.vpc.VpnAttachment}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.vpc.VpnAttachment> {
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
        private final com.aliyun.ros.cdk.vpc.VpnAttachmentProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.vpc.VpnAttachmentProps.Builder();
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
        public Builder bgpConfig(final com.aliyun.ros.cdk.vpc.RosVpnAttachment.BgpConfigProperty bgpConfig) {
            this.props.bgpConfig(bgpConfig);
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
        public Builder healthCheckConfig(final com.aliyun.ros.cdk.vpc.RosVpnAttachment.HealthCheckConfigProperty healthCheckConfig) {
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
        public Builder ikeConfig(final com.aliyun.ros.cdk.vpc.RosVpnAttachment.IkeConfigProperty ikeConfig) {
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
        public Builder ipsecConfig(final com.aliyun.ros.cdk.vpc.RosVpnAttachment.IpsecConfigProperty ipsecConfig) {
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
         * Property networkType: The network type of the IPsec connection.
         * <p>
         * Value: public|private.
         * <p>
         * @return {@code this}
         * @param networkType Property networkType: The network type of the IPsec connection. This parameter is required.
         */
        public Builder networkType(final java.lang.String networkType) {
            this.props.networkType(networkType);
            return this;
        }
        /**
         * Property networkType: The network type of the IPsec connection.
         * <p>
         * Value: public|private.
         * <p>
         * @return {@code this}
         * @param networkType Property networkType: The network type of the IPsec connection. This parameter is required.
         */
        public Builder networkType(final com.aliyun.ros.cdk.core.IResolvable networkType) {
            this.props.networkType(networkType);
            return this;
        }

        /**
         * Property remoteCaCert: The peer CA certificate when a ShangMi (SM) VPN gateway is used to establish the IPsec-VPN connection.
         * <p>
         * This parameter is required when an SM VPN gateway is used to establish the IPsec-VPN connection.
         * You can ignore this parameter when a standard VPN gateway is used to create the IPsec-VPN connection.
         * <p>
         * @return {@code this}
         * @param remoteCaCert Property remoteCaCert: The peer CA certificate when a ShangMi (SM) VPN gateway is used to establish the IPsec-VPN connection. This parameter is required.
         */
        public Builder remoteCaCert(final java.lang.String remoteCaCert) {
            this.props.remoteCaCert(remoteCaCert);
            return this;
        }
        /**
         * Property remoteCaCert: The peer CA certificate when a ShangMi (SM) VPN gateway is used to establish the IPsec-VPN connection.
         * <p>
         * This parameter is required when an SM VPN gateway is used to establish the IPsec-VPN connection.
         * You can ignore this parameter when a standard VPN gateway is used to create the IPsec-VPN connection.
         * <p>
         * @return {@code this}
         * @param remoteCaCert Property remoteCaCert: The peer CA certificate when a ShangMi (SM) VPN gateway is used to establish the IPsec-VPN connection. This parameter is required.
         */
        public Builder remoteCaCert(final com.aliyun.ros.cdk.core.IResolvable remoteCaCert) {
            this.props.remoteCaCert(remoteCaCert);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.vpc.VpnAttachment}.
         */
        @Override
        public com.aliyun.ros.cdk.vpc.VpnAttachment build() {
            return new com.aliyun.ros.cdk.vpc.VpnAttachment(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
