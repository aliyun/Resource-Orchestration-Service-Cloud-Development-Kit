package com.aliyun.ros.cdk.vpc;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::VPC::NatIpCidr</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:25:01.000Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.NatIpCidr")
public class NatIpCidr extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.vpc.INatIpCidr {

    protected NatIpCidr(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected NatIpCidr(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public NatIpCidr(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.NatIpCidrProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public NatIpCidr(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.NatIpCidrProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute NatIpCidrId: The ID of the NAT CIDR block.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrNatIpCidrId() {
        return software.amazon.jsii.Kernel.get(this, "attrNatIpCidrId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.NatIpCidrProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.vpc.NatIpCidrProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.vpc.NatIpCidr}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.vpc.NatIpCidr> {
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
        private final com.aliyun.ros.cdk.vpc.NatIpCidrProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.vpc.NatIpCidrProps.Builder();
        }

        /**
         * Property natGatewayId: The ID of the Virtual Private Cloud (VPC) NAT gateway with which you want to associate the CIDR block.
         * <p>
         * @return {@code this}
         * @param natGatewayId Property natGatewayId: The ID of the Virtual Private Cloud (VPC) NAT gateway with which you want to associate the CIDR block. This parameter is required.
         */
        public Builder natGatewayId(final java.lang.String natGatewayId) {
            this.props.natGatewayId(natGatewayId);
            return this;
        }
        /**
         * Property natGatewayId: The ID of the Virtual Private Cloud (VPC) NAT gateway with which you want to associate the CIDR block.
         * <p>
         * @return {@code this}
         * @param natGatewayId Property natGatewayId: The ID of the Virtual Private Cloud (VPC) NAT gateway with which you want to associate the CIDR block. This parameter is required.
         */
        public Builder natGatewayId(final com.aliyun.ros.cdk.core.IResolvable natGatewayId) {
            this.props.natGatewayId(natGatewayId);
            return this;
        }

        /**
         * Property natIpCidr: The NAT CIDR block that you want to associate with the NAT gateway.
         * <p>
         * The new CIDR block must meet the following conditions:
         * The NAT CIDR block must fall within 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16, or their subnets.
         * The subnet mask must be 16 to 32 bits in length.
         * The NAT CIDR block cannot overlap with the private CIDR block of the VPC to which the NAT gateway belongs. If you want to use other IP addresses from the private CIDR block of the VPC to provide NAT services, create a vSwitch and attach the vSwitch to another VPC NAT gateway.
         * If you want to use public IP addresses to provide NAT services, make sure that the public IP addresses fall within a customer CIDR block of the VPC to which the VPC NAT gateway belongs. For more information, see What is customer CIDR block?.
         * <p>
         * @return {@code this}
         * @param natIpCidr Property natIpCidr: The NAT CIDR block that you want to associate with the NAT gateway. This parameter is required.
         */
        public Builder natIpCidr(final java.lang.String natIpCidr) {
            this.props.natIpCidr(natIpCidr);
            return this;
        }
        /**
         * Property natIpCidr: The NAT CIDR block that you want to associate with the NAT gateway.
         * <p>
         * The new CIDR block must meet the following conditions:
         * The NAT CIDR block must fall within 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16, or their subnets.
         * The subnet mask must be 16 to 32 bits in length.
         * The NAT CIDR block cannot overlap with the private CIDR block of the VPC to which the NAT gateway belongs. If you want to use other IP addresses from the private CIDR block of the VPC to provide NAT services, create a vSwitch and attach the vSwitch to another VPC NAT gateway.
         * If you want to use public IP addresses to provide NAT services, make sure that the public IP addresses fall within a customer CIDR block of the VPC to which the VPC NAT gateway belongs. For more information, see What is customer CIDR block?.
         * <p>
         * @return {@code this}
         * @param natIpCidr Property natIpCidr: The NAT CIDR block that you want to associate with the NAT gateway. This parameter is required.
         */
        public Builder natIpCidr(final com.aliyun.ros.cdk.core.IResolvable natIpCidr) {
            this.props.natIpCidr(natIpCidr);
            return this;
        }

        /**
         * Property natIpCidrDescription: The description of the NAT CIDR block.
         * <p>
         * The description must be 2 to 256 characters in length and start with a letter. The description cannot start with http:// or https://.
         * <p>
         * @return {@code this}
         * @param natIpCidrDescription Property natIpCidrDescription: The description of the NAT CIDR block. This parameter is required.
         */
        public Builder natIpCidrDescription(final java.lang.String natIpCidrDescription) {
            this.props.natIpCidrDescription(natIpCidrDescription);
            return this;
        }
        /**
         * Property natIpCidrDescription: The description of the NAT CIDR block.
         * <p>
         * The description must be 2 to 256 characters in length and start with a letter. The description cannot start with http:// or https://.
         * <p>
         * @return {@code this}
         * @param natIpCidrDescription Property natIpCidrDescription: The description of the NAT CIDR block. This parameter is required.
         */
        public Builder natIpCidrDescription(final com.aliyun.ros.cdk.core.IResolvable natIpCidrDescription) {
            this.props.natIpCidrDescription(natIpCidrDescription);
            return this;
        }

        /**
         * Property natIpCidrName: The name of the CIDR block.
         * <p>
         * The name must be 2 to 128 characters in length, and can contain letters, digits, periods (.), underscores (_), and hyphens (-). It must start with a letter. The name must start with a letter and cannot start with http:// or https://.
         * <p>
         * @return {@code this}
         * @param natIpCidrName Property natIpCidrName: The name of the CIDR block. This parameter is required.
         */
        public Builder natIpCidrName(final java.lang.String natIpCidrName) {
            this.props.natIpCidrName(natIpCidrName);
            return this;
        }
        /**
         * Property natIpCidrName: The name of the CIDR block.
         * <p>
         * The name must be 2 to 128 characters in length, and can contain letters, digits, periods (.), underscores (_), and hyphens (-). It must start with a letter. The name must start with a letter and cannot start with http:// or https://.
         * <p>
         * @return {@code this}
         * @param natIpCidrName Property natIpCidrName: The name of the CIDR block. This parameter is required.
         */
        public Builder natIpCidrName(final com.aliyun.ros.cdk.core.IResolvable natIpCidrName) {
            this.props.natIpCidrName(natIpCidrName);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.vpc.NatIpCidr}.
         */
        @Override
        public com.aliyun.ros.cdk.vpc.NatIpCidr build() {
            return new com.aliyun.ros.cdk.vpc.NatIpCidr(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
