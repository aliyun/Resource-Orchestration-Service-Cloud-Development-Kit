package com.aliyun.ros.cdk.vpc;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::VPC::VpnGateway</code>, which is used to create a VPN gateway.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-08-22T08:56:24.943Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.VpnGateway")
public class VpnGateway extends com.aliyun.ros.cdk.core.Resource {

    protected VpnGateway(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected VpnGateway(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public VpnGateway(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.VpnGatewayProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public VpnGateway(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.VpnGatewayProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute DisasterRecoveryInternetIp: The second IP address assigned by the system to create an IPsec-VPN connection.This attribute is returned only when the VPN gateway supports the dual-tunnel mode.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDisasterRecoveryInternetIp() {
        return software.amazon.jsii.Kernel.get(this, "attrDisasterRecoveryInternetIp", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute DisasterRecoveryVSwitchId: The ID of the second vSwitch associated with the VPN gateway.This attribute is returned only when the VPN gateway supports the dual-tunnel mode.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDisasterRecoveryVSwitchId() {
        return software.amazon.jsii.Kernel.get(this, "attrDisasterRecoveryVSwitchId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute InternetIp: The public IP address of the VPN gateway.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrInternetIp() {
        return software.amazon.jsii.Kernel.get(this, "attrInternetIp", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute OrderId: The order ID.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrOrderId() {
        return software.amazon.jsii.Kernel.get(this, "attrOrderId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Spec: The specification of the VPN gateway.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrSpec() {
        return software.amazon.jsii.Kernel.get(this, "attrSpec", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute SslMaxConnections: The maximum number of concurrent SSL-VPN connections.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrSslMaxConnections() {
        return software.amazon.jsii.Kernel.get(this, "attrSslMaxConnections", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute SslVpnInternetIp: The IP address of the SSL-VPN connection.This attribute is returned only when the VPN gateway is a public VPN gateway and supports only the single-tunnel mode. In addition, the VPN gateway must have the SSL-VPN feature enabled.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrSslVpnInternetIp() {
        return software.amazon.jsii.Kernel.get(this, "attrSslVpnInternetIp", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute VpcId: The ID of the virtual private cloud (VPC) to which the VPN gateway belongs.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrVpcId() {
        return software.amazon.jsii.Kernel.get(this, "attrVpcId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute VpnGatewayId: ID of the VPN gateway.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrVpnGatewayId() {
        return software.amazon.jsii.Kernel.get(this, "attrVpnGatewayId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute VpnType: The type of the VPN gateway.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrVpnType() {
        return software.amazon.jsii.Kernel.get(this, "attrVpnType", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute VSwitchId: The ID of the vSwitch to which the VPN gateway belongs.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrVSwitchId() {
        return software.amazon.jsii.Kernel.get(this, "attrVSwitchId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.VpnGatewayProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.vpc.VpnGatewayProps.class));
    }

    protected void setProps(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.VpnGatewayProps value) {
        software.amazon.jsii.Kernel.set(this, "props", java.util.Objects.requireNonNull(value, "props is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.vpc.VpnGateway}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.vpc.VpnGateway> {
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
        private final com.aliyun.ros.cdk.vpc.VpnGatewayProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.vpc.VpnGatewayProps.Builder();
        }

        /**
         * Property bandwidth: The public network bandwidth of the VPN gateway, in Mbps.
         * <p>
         * Value: 5|10|20|50|100|200.
         * <p>
         * @return {@code this}
         * @param bandwidth Property bandwidth: The public network bandwidth of the VPN gateway, in Mbps. This parameter is required.
         */
        public Builder bandwidth(final java.lang.Number bandwidth) {
            this.props.bandwidth(bandwidth);
            return this;
        }
        /**
         * Property bandwidth: The public network bandwidth of the VPN gateway, in Mbps.
         * <p>
         * Value: 5|10|20|50|100|200.
         * <p>
         * @return {@code this}
         * @param bandwidth Property bandwidth: The public network bandwidth of the VPN gateway, in Mbps. This parameter is required.
         */
        public Builder bandwidth(final com.aliyun.ros.cdk.core.IResolvable bandwidth) {
            this.props.bandwidth(bandwidth);
            return this;
        }

        /**
         * Property vpcId: VPC ID to which the VPN gateway belongs.
         * <p>
         * @return {@code this}
         * @param vpcId Property vpcId: VPC ID to which the VPN gateway belongs. This parameter is required.
         */
        public Builder vpcId(final java.lang.String vpcId) {
            this.props.vpcId(vpcId);
            return this;
        }
        /**
         * Property vpcId: VPC ID to which the VPN gateway belongs.
         * <p>
         * @return {@code this}
         * @param vpcId Property vpcId: VPC ID to which the VPN gateway belongs. This parameter is required.
         */
        public Builder vpcId(final com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.props.vpcId(vpcId);
            return this;
        }

        /**
         * Property autoPay: Whether to automatically pay the bill of the VPN gateway, the value: true: Automatically pays the bill for the VPN gateway.
         * <p>
         * false: Does not automatically pay the bill for the VPN gateway.
         * Default true.
         * <p>
         * @return {@code this}
         * @param autoPay Property autoPay: Whether to automatically pay the bill of the VPN gateway, the value: true: Automatically pays the bill for the VPN gateway. This parameter is required.
         */
        public Builder autoPay(final java.lang.Boolean autoPay) {
            this.props.autoPay(autoPay);
            return this;
        }
        /**
         * Property autoPay: Whether to automatically pay the bill of the VPN gateway, the value: true: Automatically pays the bill for the VPN gateway.
         * <p>
         * false: Does not automatically pay the bill for the VPN gateway.
         * Default true.
         * <p>
         * @return {@code this}
         * @param autoPay Property autoPay: Whether to automatically pay the bill of the VPN gateway, the value: true: Automatically pays the bill for the VPN gateway. This parameter is required.
         */
        public Builder autoPay(final com.aliyun.ros.cdk.core.IResolvable autoPay) {
            this.props.autoPay(autoPay);
            return this;
        }

        /**
         * Property description: Description of the VPN gateway.
         * <p>
         * The length is 2-256 characters and must start with a letter or Chinese, but cannot start with http:// or https://.
         * <p>
         * @return {@code this}
         * @param description Property description: Description of the VPN gateway. This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * Property description: Description of the VPN gateway.
         * <p>
         * The length is 2-256 characters and must start with a letter or Chinese, but cannot start with http:// or https://.
         * <p>
         * @return {@code this}
         * @param description Property description: Description of the VPN gateway. This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * Property disasterRecoveryVSwitchId: The second vSwitch with which you want to associate the VPN gateway.
         * <p>
         * If you call this operation in a region that supports the dual-tunnel mode, this parameter is required.
         * You need to specify two vSwitches in different zones from the VPC associated with the VPN gateway to implement disaster recovery across zones.
         * For a region that supports only one zone, disaster recovery across zones is not supported. We recommend that you specify two vSwitches in the zone to implement high availability. You can specify the same vSwitch.
         * For more information about the regions and zones that support the dual-tunnel mode, see Upgrade a VPN gateway to enable the dual-tunnel mode.
         * <p>
         * @return {@code this}
         * @param disasterRecoveryVSwitchId Property disasterRecoveryVSwitchId: The second vSwitch with which you want to associate the VPN gateway. This parameter is required.
         */
        public Builder disasterRecoveryVSwitchId(final java.lang.String disasterRecoveryVSwitchId) {
            this.props.disasterRecoveryVSwitchId(disasterRecoveryVSwitchId);
            return this;
        }
        /**
         * Property disasterRecoveryVSwitchId: The second vSwitch with which you want to associate the VPN gateway.
         * <p>
         * If you call this operation in a region that supports the dual-tunnel mode, this parameter is required.
         * You need to specify two vSwitches in different zones from the VPC associated with the VPN gateway to implement disaster recovery across zones.
         * For a region that supports only one zone, disaster recovery across zones is not supported. We recommend that you specify two vSwitches in the zone to implement high availability. You can specify the same vSwitch.
         * For more information about the regions and zones that support the dual-tunnel mode, see Upgrade a VPN gateway to enable the dual-tunnel mode.
         * <p>
         * @return {@code this}
         * @param disasterRecoveryVSwitchId Property disasterRecoveryVSwitchId: The second vSwitch with which you want to associate the VPN gateway. This parameter is required.
         */
        public Builder disasterRecoveryVSwitchId(final com.aliyun.ros.cdk.core.IResolvable disasterRecoveryVSwitchId) {
            this.props.disasterRecoveryVSwitchId(disasterRecoveryVSwitchId);
            return this;
        }

        /**
         * Property enableIpsec: Whether to enable IPsec-VPN.
         * <p>
         * The IPsec-VPN feature provides a site-to-site connection. You can securely connect your local data center network to a private network or two proprietary networks by creating an IPsec tunnel. Value:
         * True (default): Enables the IPsec-VPN feature.
         * False: The IPsec-VPN function is not enabled.
         * <p>
         * @return {@code this}
         * @param enableIpsec Property enableIpsec: Whether to enable IPsec-VPN. This parameter is required.
         */
        public Builder enableIpsec(final java.lang.Boolean enableIpsec) {
            this.props.enableIpsec(enableIpsec);
            return this;
        }
        /**
         * Property enableIpsec: Whether to enable IPsec-VPN.
         * <p>
         * The IPsec-VPN feature provides a site-to-site connection. You can securely connect your local data center network to a private network or two proprietary networks by creating an IPsec tunnel. Value:
         * True (default): Enables the IPsec-VPN feature.
         * False: The IPsec-VPN function is not enabled.
         * <p>
         * @return {@code this}
         * @param enableIpsec Property enableIpsec: Whether to enable IPsec-VPN. This parameter is required.
         */
        public Builder enableIpsec(final com.aliyun.ros.cdk.core.IResolvable enableIpsec) {
            this.props.enableIpsec(enableIpsec);
            return this;
        }

        /**
         * Property enableSsl: Enable the SSL-VPN function.
         * <p>
         * Provide point-to-site VPN connection, no need to configure customer gateway, terminal directly access. Value:
         * True: Enable SSL-VPN.
         * False (default): Does not enable SSL-VPN.
         * <p>
         * @return {@code this}
         * @param enableSsl Property enableSsl: Enable the SSL-VPN function. This parameter is required.
         */
        public Builder enableSsl(final java.lang.Boolean enableSsl) {
            this.props.enableSsl(enableSsl);
            return this;
        }
        /**
         * Property enableSsl: Enable the SSL-VPN function.
         * <p>
         * Provide point-to-site VPN connection, no need to configure customer gateway, terminal directly access. Value:
         * True: Enable SSL-VPN.
         * False (default): Does not enable SSL-VPN.
         * <p>
         * @return {@code this}
         * @param enableSsl Property enableSsl: Enable the SSL-VPN function. This parameter is required.
         */
        public Builder enableSsl(final com.aliyun.ros.cdk.core.IResolvable enableSsl) {
            this.props.enableSsl(enableSsl);
            return this;
        }

        /**
         * Property instanceChargeType: Accounting type of the VPN gateway, the value is: PREPAY, POSTPAY.
         * <p>
         * @return {@code this}
         * @param instanceChargeType Property instanceChargeType: Accounting type of the VPN gateway, the value is: PREPAY, POSTPAY. This parameter is required.
         */
        public Builder instanceChargeType(final java.lang.String instanceChargeType) {
            this.props.instanceChargeType(instanceChargeType);
            return this;
        }
        /**
         * Property instanceChargeType: Accounting type of the VPN gateway, the value is: PREPAY, POSTPAY.
         * <p>
         * @return {@code this}
         * @param instanceChargeType Property instanceChargeType: Accounting type of the VPN gateway, the value is: PREPAY, POSTPAY. This parameter is required.
         */
        public Builder instanceChargeType(final com.aliyun.ros.cdk.core.IResolvable instanceChargeType) {
            this.props.instanceChargeType(instanceChargeType);
            return this;
        }

        /**
         * Property name: Name of the VPN gateway.
         * <p>
         * The default value is the ID of the VPN gateway.
         * The length is 2~100 English or Chinese characters. It must start with a large or small letter or Chinese. It can contain numbers, underscores (_) and dashes (-). It cannot start with http:// or https://.
         * <p>
         * @return {@code this}
         * @param name Property name: Name of the VPN gateway. This parameter is required.
         */
        public Builder name(final java.lang.String name) {
            this.props.name(name);
            return this;
        }
        /**
         * Property name: Name of the VPN gateway.
         * <p>
         * The default value is the ID of the VPN gateway.
         * The length is 2~100 English or Chinese characters. It must start with a large or small letter or Chinese. It can contain numbers, underscores (_) and dashes (-). It cannot start with http:// or https://.
         * <p>
         * @return {@code this}
         * @param name Property name: Name of the VPN gateway. This parameter is required.
         */
        public Builder name(final com.aliyun.ros.cdk.core.IResolvable name) {
            this.props.name(name);
            return this;
        }

        /**
         * Property networkType: The network type of the VPN gateway.
         * <p>
         * Valid values: public|private
         * <p>
         * @return {@code this}
         * @param networkType Property networkType: The network type of the VPN gateway. This parameter is required.
         */
        public Builder networkType(final java.lang.String networkType) {
            this.props.networkType(networkType);
            return this;
        }
        /**
         * Property networkType: The network type of the VPN gateway.
         * <p>
         * Valid values: public|private
         * <p>
         * @return {@code this}
         * @param networkType Property networkType: The network type of the VPN gateway. This parameter is required.
         */
        public Builder networkType(final com.aliyun.ros.cdk.core.IResolvable networkType) {
            this.props.networkType(networkType);
            return this;
        }

        /**
         * Property period: Purchase time, value: 1~9|12|24|36.
         * <p>
         * When the value of the InstanceChargeType parameter is PREPAY, this parameter is mandatory.
         * <p>
         * @return {@code this}
         * @param period Property period: Purchase time, value: 1~9|12|24|36. This parameter is required.
         */
        public Builder period(final java.lang.Number period) {
            this.props.period(period);
            return this;
        }
        /**
         * Property period: Purchase time, value: 1~9|12|24|36.
         * <p>
         * When the value of the InstanceChargeType parameter is PREPAY, this parameter is mandatory.
         * <p>
         * @return {@code this}
         * @param period Property period: Purchase time, value: 1~9|12|24|36. This parameter is required.
         */
        public Builder period(final com.aliyun.ros.cdk.core.IResolvable period) {
            this.props.period(period);
            return this;
        }

        /**
         * Property sslConnections: The maximum number of clients allowed to connect at the same time.
         * <p>
         * @return {@code this}
         * @param sslConnections Property sslConnections: The maximum number of clients allowed to connect at the same time. This parameter is required.
         */
        public Builder sslConnections(final java.lang.Number sslConnections) {
            this.props.sslConnections(sslConnections);
            return this;
        }
        /**
         * Property sslConnections: The maximum number of clients allowed to connect at the same time.
         * <p>
         * @return {@code this}
         * @param sslConnections Property sslConnections: The maximum number of clients allowed to connect at the same time. This parameter is required.
         */
        public Builder sslConnections(final com.aliyun.ros.cdk.core.IResolvable sslConnections) {
            this.props.sslConnections(sslConnections);
            return this;
        }

        /**
         * Property tags: Tags to attach to instance.
         * <p>
         * Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
         * <p>
         * @return {@code this}
         * @param tags Property tags: Tags to attach to instance. This parameter is required.
         */
        public Builder tags(final java.util.List<? extends com.aliyun.ros.cdk.vpc.RosVpnGateway.TagsProperty> tags) {
            this.props.tags(tags);
            return this;
        }

        /**
         * Property vpnType: VPN gateway type.
         * <p>
         * @return {@code this}
         * @param vpnType Property vpnType: VPN gateway type. This parameter is required.
         */
        public Builder vpnType(final java.lang.String vpnType) {
            this.props.vpnType(vpnType);
            return this;
        }
        /**
         * Property vpnType: VPN gateway type.
         * <p>
         * @return {@code this}
         * @param vpnType Property vpnType: VPN gateway type. This parameter is required.
         */
        public Builder vpnType(final com.aliyun.ros.cdk.core.IResolvable vpnType) {
            this.props.vpnType(vpnType);
            return this;
        }

        /**
         * Property vSwitchId: The ID of the VSwitch to which the VPN gateway belongs.
         * <p>
         * @return {@code this}
         * @param vSwitchId Property vSwitchId: The ID of the VSwitch to which the VPN gateway belongs. This parameter is required.
         */
        public Builder vSwitchId(final java.lang.String vSwitchId) {
            this.props.vSwitchId(vSwitchId);
            return this;
        }
        /**
         * Property vSwitchId: The ID of the VSwitch to which the VPN gateway belongs.
         * <p>
         * @return {@code this}
         * @param vSwitchId Property vSwitchId: The ID of the VSwitch to which the VPN gateway belongs. This parameter is required.
         */
        public Builder vSwitchId(final com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
            this.props.vSwitchId(vSwitchId);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.vpc.VpnGateway}.
         */
        @Override
        public com.aliyun.ros.cdk.vpc.VpnGateway build() {
            return new com.aliyun.ros.cdk.vpc.VpnGateway(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
