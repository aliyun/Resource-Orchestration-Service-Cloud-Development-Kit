package com.aliyun.ros.cdk.vpc;

/**
 * A ROS resource type:  `ALIYUN::VPC::VpnConnection`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.80.0 (build bce6a1d)", date = "2023-04-26T03:02:21.517Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.VpnConnection")
public class VpnConnection extends com.aliyun.ros.cdk.core.Resource {

    protected VpnConnection(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected VpnConnection(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::VPC::VpnConnection`.
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
     * Create a new `ALIYUN::VPC::VpnConnection`.
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
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.vpc.VpnConnection}.
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
