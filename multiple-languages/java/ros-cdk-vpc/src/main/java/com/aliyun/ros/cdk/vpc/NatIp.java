package com.aliyun.ros.cdk.vpc;

/**
 * A ROS resource type:  `ALIYUN::VPC::NatIp`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.71.0 (build f1f58ae)", date = "2022-11-16T03:59:11.409Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.NatIp")
public class NatIp extends com.aliyun.ros.cdk.core.Resource {

    protected NatIp(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected NatIp(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::VPC::NatIp`.
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
    public NatIp(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.NatIpProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::VPC::NatIp`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public NatIp(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.NatIpProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute NatIp: NAT IP address.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrNatIp() {
        return software.amazon.jsii.Kernel.get(this, "attrNatIp", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute NatIpId: The ID of the NAT IP address.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrNatIpId() {
        return software.amazon.jsii.Kernel.get(this, "attrNatIpId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.vpc.NatIp}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.vpc.NatIp> {
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
        private final com.aliyun.ros.cdk.vpc.NatIpProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.vpc.NatIpProps.Builder();
        }

        /**
         * Property natGatewayId: The ID of the Virtual Private Cloud (VPC) NAT gateway for which you want to create the NAT IP address.
         * <p>
         * @return {@code this}
         * @param natGatewayId Property natGatewayId: The ID of the Virtual Private Cloud (VPC) NAT gateway for which you want to create the NAT IP address. This parameter is required.
         */
        public Builder natGatewayId(final java.lang.String natGatewayId) {
            this.props.natGatewayId(natGatewayId);
            return this;
        }
        /**
         * Property natGatewayId: The ID of the Virtual Private Cloud (VPC) NAT gateway for which you want to create the NAT IP address.
         * <p>
         * @return {@code this}
         * @param natGatewayId Property natGatewayId: The ID of the Virtual Private Cloud (VPC) NAT gateway for which you want to create the NAT IP address. This parameter is required.
         */
        public Builder natGatewayId(final com.aliyun.ros.cdk.core.IResolvable natGatewayId) {
            this.props.natGatewayId(natGatewayId);
            return this;
        }

        /**
         * Property natIpCidr: The CIDR block to which the NAT IP address belongs.
         * <p>
         * @return {@code this}
         * @param natIpCidr Property natIpCidr: The CIDR block to which the NAT IP address belongs. This parameter is required.
         */
        public Builder natIpCidr(final java.lang.String natIpCidr) {
            this.props.natIpCidr(natIpCidr);
            return this;
        }
        /**
         * Property natIpCidr: The CIDR block to which the NAT IP address belongs.
         * <p>
         * @return {@code this}
         * @param natIpCidr Property natIpCidr: The CIDR block to which the NAT IP address belongs. This parameter is required.
         */
        public Builder natIpCidr(final com.aliyun.ros.cdk.core.IResolvable natIpCidr) {
            this.props.natIpCidr(natIpCidr);
            return this;
        }

        /**
         * Property natIpDescription: The description of the NAT IP address.
         * <p>
         * The description must be 2 to 256 characters in length. It must start with a letter
         * but cannot start with http:// or https://.
         * <p>
         * @return {@code this}
         * @param natIpDescription Property natIpDescription: The description of the NAT IP address. This parameter is required.
         */
        public Builder natIpDescription(final java.lang.String natIpDescription) {
            this.props.natIpDescription(natIpDescription);
            return this;
        }
        /**
         * Property natIpDescription: The description of the NAT IP address.
         * <p>
         * The description must be 2 to 256 characters in length. It must start with a letter
         * but cannot start with http:// or https://.
         * <p>
         * @return {@code this}
         * @param natIpDescription Property natIpDescription: The description of the NAT IP address. This parameter is required.
         */
        public Builder natIpDescription(final com.aliyun.ros.cdk.core.IResolvable natIpDescription) {
            this.props.natIpDescription(natIpDescription);
            return this;
        }

        /**
         * Property natIpName: The name of the NAT IP address.
         * <p>
         * The name must be 2 to 128 characters in length, and can contain letters, digits, periods
         * (.), underscores (_), and hyphens (-). It must start with a letter. It cannot start
         * with http:// or https://.
         * <p>
         * @return {@code this}
         * @param natIpName Property natIpName: The name of the NAT IP address. This parameter is required.
         */
        public Builder natIpName(final java.lang.String natIpName) {
            this.props.natIpName(natIpName);
            return this;
        }
        /**
         * Property natIpName: The name of the NAT IP address.
         * <p>
         * The name must be 2 to 128 characters in length, and can contain letters, digits, periods
         * (.), underscores (_), and hyphens (-). It must start with a letter. It cannot start
         * with http:// or https://.
         * <p>
         * @return {@code this}
         * @param natIpName Property natIpName: The name of the NAT IP address. This parameter is required.
         */
        public Builder natIpName(final com.aliyun.ros.cdk.core.IResolvable natIpName) {
            this.props.natIpName(natIpName);
            return this;
        }

        /**
         * Property natIp: The NAT IP address that you want to create.
         * <p>
         * If you do not specify an IP address, the system selects a random IP address from the
         * specified CIDR block.
         * <p>
         * @return {@code this}
         * @param natIp Property natIp: The NAT IP address that you want to create. This parameter is required.
         */
        public Builder natIp(final java.lang.String natIp) {
            this.props.natIp(natIp);
            return this;
        }
        /**
         * Property natIp: The NAT IP address that you want to create.
         * <p>
         * If you do not specify an IP address, the system selects a random IP address from the
         * specified CIDR block.
         * <p>
         * @return {@code this}
         * @param natIp Property natIp: The NAT IP address that you want to create. This parameter is required.
         */
        public Builder natIp(final com.aliyun.ros.cdk.core.IResolvable natIp) {
            this.props.natIp(natIp);
            return this;
        }

        /**
         * Property natIpCidrId: The ID of the CIDR block to which the NAT IP address belongs.
         * <p>
         * @return {@code this}
         * @param natIpCidrId Property natIpCidrId: The ID of the CIDR block to which the NAT IP address belongs. This parameter is required.
         */
        public Builder natIpCidrId(final java.lang.String natIpCidrId) {
            this.props.natIpCidrId(natIpCidrId);
            return this;
        }
        /**
         * Property natIpCidrId: The ID of the CIDR block to which the NAT IP address belongs.
         * <p>
         * @return {@code this}
         * @param natIpCidrId Property natIpCidrId: The ID of the CIDR block to which the NAT IP address belongs. This parameter is required.
         */
        public Builder natIpCidrId(final com.aliyun.ros.cdk.core.IResolvable natIpCidrId) {
            this.props.natIpCidrId(natIpCidrId);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.vpc.NatIp}.
         */
        @Override
        public com.aliyun.ros.cdk.vpc.NatIp build() {
            return new com.aliyun.ros.cdk.vpc.NatIp(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
