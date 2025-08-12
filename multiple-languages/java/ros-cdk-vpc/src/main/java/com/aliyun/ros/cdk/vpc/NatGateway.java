package com.aliyun.ros.cdk.vpc;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::VPC::NatGateway</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-08-12T08:28:51.255Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.NatGateway")
public class NatGateway extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.vpc.INatGateway {

    protected NatGateway(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected NatGateway(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public NatGateway(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.NatGatewayProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public NatGateway(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.NatGatewayProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute ForwardTableId: The forward table id.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrForwardTableId() {
        return software.amazon.jsii.Kernel.get(this, "attrForwardTableId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute NatGatewayId: The Id of created NAT gateway.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrNatGatewayId() {
        return software.amazon.jsii.Kernel.get(this, "attrNatGatewayId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute SNatTableId: The SNAT table id.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrSNatTableId() {
        return software.amazon.jsii.Kernel.get(this, "attrSNatTableId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.NatGatewayProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.vpc.NatGatewayProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.vpc.NatGateway}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.vpc.NatGateway> {
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
        private final com.aliyun.ros.cdk.vpc.NatGatewayProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.vpc.NatGatewayProps.Builder();
        }

        /**
         * Property vpcId: The VPC id to create NAT gateway.
         * <p>
         * @return {@code this}
         * @param vpcId Property vpcId: The VPC id to create NAT gateway. This parameter is required.
         */
        public Builder vpcId(final java.lang.String vpcId) {
            this.props.vpcId(vpcId);
            return this;
        }
        /**
         * Property vpcId: The VPC id to create NAT gateway.
         * <p>
         * @return {@code this}
         * @param vpcId Property vpcId: The VPC id to create NAT gateway. This parameter is required.
         */
        public Builder vpcId(final com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.props.vpcId(vpcId);
            return this;
        }

        /**
         * Property vSwitchId: The VSwitch id to create NAT gateway.
         * <p>
         * @return {@code this}
         * @param vSwitchId Property vSwitchId: The VSwitch id to create NAT gateway. This parameter is required.
         */
        public Builder vSwitchId(final java.lang.String vSwitchId) {
            this.props.vSwitchId(vSwitchId);
            return this;
        }
        /**
         * Property vSwitchId: The VSwitch id to create NAT gateway.
         * <p>
         * @return {@code this}
         * @param vSwitchId Property vSwitchId: The VSwitch id to create NAT gateway. This parameter is required.
         */
        public Builder vSwitchId(final com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
            this.props.vSwitchId(vSwitchId);
            return this;
        }

        /**
         * Property deletionForce: Whether force delete the relative snat and dnat entries in the net gateway and unbind eips.
         * <p>
         * Default value is false.
         * <p>
         * @return {@code this}
         * @param deletionForce Property deletionForce: Whether force delete the relative snat and dnat entries in the net gateway and unbind eips. This parameter is required.
         */
        public Builder deletionForce(final java.lang.Boolean deletionForce) {
            this.props.deletionForce(deletionForce);
            return this;
        }
        /**
         * Property deletionForce: Whether force delete the relative snat and dnat entries in the net gateway and unbind eips.
         * <p>
         * Default value is false.
         * <p>
         * @return {@code this}
         * @param deletionForce Property deletionForce: Whether force delete the relative snat and dnat entries in the net gateway and unbind eips. This parameter is required.
         */
        public Builder deletionForce(final com.aliyun.ros.cdk.core.IResolvable deletionForce) {
            this.props.deletionForce(deletionForce);
            return this;
        }

        /**
         * Property deletionProtection: Whether to enable deletion protection.
         * <p>
         * Default to False.
         * <p>
         * @return {@code this}
         * @param deletionProtection Property deletionProtection: Whether to enable deletion protection. This parameter is required.
         */
        public Builder deletionProtection(final java.lang.Boolean deletionProtection) {
            this.props.deletionProtection(deletionProtection);
            return this;
        }
        /**
         * Property deletionProtection: Whether to enable deletion protection.
         * <p>
         * Default to False.
         * <p>
         * @return {@code this}
         * @param deletionProtection Property deletionProtection: Whether to enable deletion protection. This parameter is required.
         */
        public Builder deletionProtection(final com.aliyun.ros.cdk.core.IResolvable deletionProtection) {
            this.props.deletionProtection(deletionProtection);
            return this;
        }

        /**
         * Property description: Description of the NAT gateway, [2, 256] characters.
         * <p>
         * Do not fill or empty, the default is empty.
         * <p>
         * @return {@code this}
         * @param description Property description: Description of the NAT gateway, [2, 256] characters. This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * Property description: Description of the NAT gateway, [2, 256] characters.
         * <p>
         * Do not fill or empty, the default is empty.
         * <p>
         * @return {@code this}
         * @param description Property description: Description of the NAT gateway, [2, 256] characters. This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * Property eipBindMode: The mode in which the EIP is associated with the NAT gateway.
         * <p>
         * Valid values:MULTI_BINDED (default): the multi-EIP-to-ENI mode.
         * NAT: NAT mode. IPv4 gateways are supported.
         * Note If the EIP is associated with the NAT gateway in NAT mode,
         * the EIP occupies a private IP address of the vSwitch to which the NAT gateway belongs.
         * Make sure that the vSwitch has sufficient private IP addresses.
         * Otherwise, the EIP cannot be associated with the NAT gateway.
         * In NAT mode, a maximum number of 50 EIPs can be associated with each NAT gateway.
         * <p>
         * @return {@code this}
         * @param eipBindMode Property eipBindMode: The mode in which the EIP is associated with the NAT gateway. This parameter is required.
         */
        public Builder eipBindMode(final java.lang.String eipBindMode) {
            this.props.eipBindMode(eipBindMode);
            return this;
        }
        /**
         * Property eipBindMode: The mode in which the EIP is associated with the NAT gateway.
         * <p>
         * Valid values:MULTI_BINDED (default): the multi-EIP-to-ENI mode.
         * NAT: NAT mode. IPv4 gateways are supported.
         * Note If the EIP is associated with the NAT gateway in NAT mode,
         * the EIP occupies a private IP address of the vSwitch to which the NAT gateway belongs.
         * Make sure that the vSwitch has sufficient private IP addresses.
         * Otherwise, the EIP cannot be associated with the NAT gateway.
         * In NAT mode, a maximum number of 50 EIPs can be associated with each NAT gateway.
         * <p>
         * @return {@code this}
         * @param eipBindMode Property eipBindMode: The mode in which the EIP is associated with the NAT gateway. This parameter is required.
         */
        public Builder eipBindMode(final com.aliyun.ros.cdk.core.IResolvable eipBindMode) {
            this.props.eipBindMode(eipBindMode);
            return this;
        }

        /**
         * Property icmpReplyEnabled: Specifies whether to enable the ICMP non-retrieval feature.
         * <p>
         * Default: True
         * <p>
         * @return {@code this}
         * @param icmpReplyEnabled Property icmpReplyEnabled: Specifies whether to enable the ICMP non-retrieval feature. This parameter is required.
         */
        public Builder icmpReplyEnabled(final java.lang.Boolean icmpReplyEnabled) {
            this.props.icmpReplyEnabled(icmpReplyEnabled);
            return this;
        }
        /**
         * Property icmpReplyEnabled: Specifies whether to enable the ICMP non-retrieval feature.
         * <p>
         * Default: True
         * <p>
         * @return {@code this}
         * @param icmpReplyEnabled Property icmpReplyEnabled: Specifies whether to enable the ICMP non-retrieval feature. This parameter is required.
         */
        public Builder icmpReplyEnabled(final com.aliyun.ros.cdk.core.IResolvable icmpReplyEnabled) {
            this.props.icmpReplyEnabled(icmpReplyEnabled);
            return this;
        }

        /**
         * Property instanceChargeType: The billing method.
         * <p>
         * The default value is PostPaid (which means pay-as-you-go).
         * <p>
         * @return {@code this}
         * @param instanceChargeType Property instanceChargeType: The billing method. This parameter is required.
         */
        public Builder instanceChargeType(final java.lang.String instanceChargeType) {
            this.props.instanceChargeType(instanceChargeType);
            return this;
        }
        /**
         * Property instanceChargeType: The billing method.
         * <p>
         * The default value is PostPaid (which means pay-as-you-go).
         * <p>
         * @return {@code this}
         * @param instanceChargeType Property instanceChargeType: The billing method. This parameter is required.
         */
        public Builder instanceChargeType(final com.aliyun.ros.cdk.core.IResolvable instanceChargeType) {
            this.props.instanceChargeType(instanceChargeType);
            return this;
        }

        /**
         * Property internetChargeType: The billing method for the NAT gateway.
         * <p>
         * Valid values:
         * PayBySpec: billed on a pay-by-specification basis.
         * <p>
         * @return {@code this}
         * @param internetChargeType Property internetChargeType: The billing method for the NAT gateway. This parameter is required.
         */
        public Builder internetChargeType(final java.lang.String internetChargeType) {
            this.props.internetChargeType(internetChargeType);
            return this;
        }
        /**
         * Property internetChargeType: The billing method for the NAT gateway.
         * <p>
         * Valid values:
         * PayBySpec: billed on a pay-by-specification basis.
         * <p>
         * @return {@code this}
         * @param internetChargeType Property internetChargeType: The billing method for the NAT gateway. This parameter is required.
         */
        public Builder internetChargeType(final com.aliyun.ros.cdk.core.IResolvable internetChargeType) {
            this.props.internetChargeType(internetChargeType);
            return this;
        }

        /**
         * Property natGatewayName: Display name of the NAT gateway, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'.
         * <p>
         * @return {@code this}
         * @param natGatewayName Property natGatewayName: Display name of the NAT gateway, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'. This parameter is required.
         */
        public Builder natGatewayName(final java.lang.String natGatewayName) {
            this.props.natGatewayName(natGatewayName);
            return this;
        }
        /**
         * Property natGatewayName: Display name of the NAT gateway, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'.
         * <p>
         * @return {@code this}
         * @param natGatewayName Property natGatewayName: Display name of the NAT gateway, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'. This parameter is required.
         */
        public Builder natGatewayName(final com.aliyun.ros.cdk.core.IResolvable natGatewayName) {
            this.props.natGatewayName(natGatewayName);
            return this;
        }

        /**
         * Property natType: The type of the NAT gateway.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>Enhanced: enhanced NAT gateway.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param natType Property natType: The type of the NAT gateway. This parameter is required.
         */
        public Builder natType(final java.lang.String natType) {
            this.props.natType(natType);
            return this;
        }
        /**
         * Property natType: The type of the NAT gateway.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>Enhanced: enhanced NAT gateway.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param natType Property natType: The type of the NAT gateway. This parameter is required.
         */
        public Builder natType(final com.aliyun.ros.cdk.core.IResolvable natType) {
            this.props.natType(natType);
            return this;
        }

        /**
         * Property networkType: The type of the created NAT gateway.
         * <p>
         * Internet: public network NAT gateway.
         * Intranet: VPC NAT gateway.
         * <p>
         * @return {@code this}
         * @param networkType Property networkType: The type of the created NAT gateway. This parameter is required.
         */
        public Builder networkType(final java.lang.String networkType) {
            this.props.networkType(networkType);
            return this;
        }
        /**
         * Property networkType: The type of the created NAT gateway.
         * <p>
         * Internet: public network NAT gateway.
         * Intranet: VPC NAT gateway.
         * <p>
         * @return {@code this}
         * @param networkType Property networkType: The type of the created NAT gateway. This parameter is required.
         */
        public Builder networkType(final com.aliyun.ros.cdk.core.IResolvable networkType) {
            this.props.networkType(networkType);
            return this;
        }

        /**
         * Property securityProtectionEnabled: Specifies whether to enable the firewall feature.
         * <p>
         * Default: False
         * <p>
         * @return {@code this}
         * @param securityProtectionEnabled Property securityProtectionEnabled: Specifies whether to enable the firewall feature. This parameter is required.
         */
        public Builder securityProtectionEnabled(final java.lang.Boolean securityProtectionEnabled) {
            this.props.securityProtectionEnabled(securityProtectionEnabled);
            return this;
        }
        /**
         * Property securityProtectionEnabled: Specifies whether to enable the firewall feature.
         * <p>
         * Default: False
         * <p>
         * @return {@code this}
         * @param securityProtectionEnabled Property securityProtectionEnabled: Specifies whether to enable the firewall feature. This parameter is required.
         */
        public Builder securityProtectionEnabled(final com.aliyun.ros.cdk.core.IResolvable securityProtectionEnabled) {
            this.props.securityProtectionEnabled(securityProtectionEnabled);
            return this;
        }

        /**
         * Property tags: Tags to attach to natgateway.
         * <p>
         * Max support 20 tags to add during create natgateway. Each tag with two properties Key and Value, and Key is required.
         * <p>
         * @return {@code this}
         * @param tags Property tags: Tags to attach to natgateway. This parameter is required.
         */
        public Builder tags(final java.util.List<? extends com.aliyun.ros.cdk.vpc.RosNatGateway.TagsProperty> tags) {
            this.props.tags(tags);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.vpc.NatGateway}.
         */
        @Override
        public com.aliyun.ros.cdk.vpc.NatGateway build() {
            return new com.aliyun.ros.cdk.vpc.NatGateway(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
