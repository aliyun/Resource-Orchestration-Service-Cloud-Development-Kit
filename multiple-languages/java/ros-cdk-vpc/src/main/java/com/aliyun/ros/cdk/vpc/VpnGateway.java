package com.aliyun.ros.cdk.vpc;

/**
 * A ROS resource type:  `ALIYUN::VPC::VpnGateway`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.80.0 (build bce6a1d)", date = "2023-04-26T01:43:52.506Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.VpnGateway")
public class VpnGateway extends com.aliyun.ros.cdk.core.Resource {

    protected VpnGateway(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected VpnGateway(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::VPC::VpnGateway`.
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
    public VpnGateway(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.VpnGatewayProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::VPC::VpnGateway`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
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
     * Attribute VpnGatewayId: ID of the VPN gateway.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrVpnGatewayId() {
        return software.amazon.jsii.Kernel.get(this, "attrVpnGatewayId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.vpc.VpnGateway}.
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
