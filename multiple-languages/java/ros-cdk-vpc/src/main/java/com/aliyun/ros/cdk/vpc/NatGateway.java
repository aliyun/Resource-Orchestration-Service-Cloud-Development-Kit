package com.aliyun.ros.cdk.vpc;

/**
 * A ROS resource type:  `ALIYUN::VPC::NatGateway`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.62.0 (build 293ac17)", date = "2022-07-13T09:24:22.260Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.NatGateway")
public class NatGateway extends com.aliyun.ros.cdk.core.Resource {

    protected NatGateway(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected NatGateway(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::VPC::NatGateway`.
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
    public NatGateway(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.NatGatewayProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::VPC::NatGateway`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrForwardTableId() {
        return software.amazon.jsii.Kernel.get(this, "attrForwardTableId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute NatGatewayId: The Id of created NAT gateway.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrNatGatewayId() {
        return software.amazon.jsii.Kernel.get(this, "attrNatGatewayId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute SNatTableId: The SNAT table id.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrSNatTableId() {
        return software.amazon.jsii.Kernel.get(this, "attrSNatTableId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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
         * Property autoPay: Specifies whether to enable automatic payment.
         * <p>
         * Default is false.
         * <p>
         * @return {@code this}
         * @param autoPay Property autoPay: Specifies whether to enable automatic payment. This parameter is required.
         */
        public Builder autoPay(final java.lang.Boolean autoPay) {
            this.props.autoPay(autoPay);
            return this;
        }
        /**
         * Property autoPay: Specifies whether to enable automatic payment.
         * <p>
         * Default is false.
         * <p>
         * @return {@code this}
         * @param autoPay Property autoPay: Specifies whether to enable automatic payment. This parameter is required.
         */
        public Builder autoPay(final com.aliyun.ros.cdk.core.IResolvable autoPay) {
            this.props.autoPay(autoPay);
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
         * Property duration: The subscription duration.
         * <p>
         * While choose by pay by month, it could be from 1 to 9 or 12, 24, 36. While choose pay by year, it could be from 1 to 3.
         * <p>
         * @return {@code this}
         * @param duration Property duration: The subscription duration. This parameter is required.
         */
        public Builder duration(final java.lang.Number duration) {
            this.props.duration(duration);
            return this;
        }
        /**
         * Property duration: The subscription duration.
         * <p>
         * While choose by pay by month, it could be from 1 to 9 or 12, 24, 36. While choose pay by year, it could be from 1 to 3.
         * <p>
         * @return {@code this}
         * @param duration Property duration: The subscription duration. This parameter is required.
         */
        public Builder duration(final com.aliyun.ros.cdk.core.IResolvable duration) {
            this.props.duration(duration);
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
         * Property pricingCycle: Price cycle of the resource.
         * <p>
         * This property has no default value.
         * <p>
         * @return {@code this}
         * @param pricingCycle Property pricingCycle: Price cycle of the resource. This parameter is required.
         */
        public Builder pricingCycle(final java.lang.String pricingCycle) {
            this.props.pricingCycle(pricingCycle);
            return this;
        }
        /**
         * Property pricingCycle: Price cycle of the resource.
         * <p>
         * This property has no default value.
         * <p>
         * @return {@code this}
         * @param pricingCycle Property pricingCycle: Price cycle of the resource. This parameter is required.
         */
        public Builder pricingCycle(final com.aliyun.ros.cdk.core.IResolvable pricingCycle) {
            this.props.pricingCycle(pricingCycle);
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
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.vpc.NatGateway}.
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
