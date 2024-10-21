package com.aliyun.ros.cdk.vpc;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::VPC::VpcCidrBlockAssociation</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-10-18T08:56:34.282Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.VpcCidrBlockAssociation")
public class VpcCidrBlockAssociation extends com.aliyun.ros.cdk.core.Resource {

    protected VpcCidrBlockAssociation(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected VpcCidrBlockAssociation(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public VpcCidrBlockAssociation(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.VpcCidrBlockAssociationProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public VpcCidrBlockAssociation(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.VpcCidrBlockAssociationProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute VpcId: The ID of the VPC to which you want to add a secondary CIDR block.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrVpcId() {
        return software.amazon.jsii.Kernel.get(this, "attrVpcId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.VpcCidrBlockAssociationProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.vpc.VpcCidrBlockAssociationProps.class));
    }

    protected void setProps(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.VpcCidrBlockAssociationProps value) {
        software.amazon.jsii.Kernel.set(this, "props", java.util.Objects.requireNonNull(value, "props is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.vpc.VpcCidrBlockAssociation}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.vpc.VpcCidrBlockAssociation> {
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
        private final com.aliyun.ros.cdk.vpc.VpcCidrBlockAssociationProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.vpc.VpcCidrBlockAssociationProps.Builder();
        }

        /**
         * Property vpcId: The ID of the VPC to which you want to add a secondary CIDR block.
         * <p>
         * @return {@code this}
         * @param vpcId Property vpcId: The ID of the VPC to which you want to add a secondary CIDR block. This parameter is required.
         */
        public Builder vpcId(final java.lang.String vpcId) {
            this.props.vpcId(vpcId);
            return this;
        }
        /**
         * Property vpcId: The ID of the VPC to which you want to add a secondary CIDR block.
         * <p>
         * @return {@code this}
         * @param vpcId Property vpcId: The ID of the VPC to which you want to add a secondary CIDR block. This parameter is required.
         */
        public Builder vpcId(final com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.props.vpcId(vpcId);
            return this;
        }

        /**
         * Property ipamPoolId: The ID of the IP Address Manager (IPAM) pool that contains IPv4 addresses.
         * <p>
         * @return {@code this}
         * @param ipamPoolId Property ipamPoolId: The ID of the IP Address Manager (IPAM) pool that contains IPv4 addresses. This parameter is required.
         */
        public Builder ipamPoolId(final java.lang.String ipamPoolId) {
            this.props.ipamPoolId(ipamPoolId);
            return this;
        }
        /**
         * Property ipamPoolId: The ID of the IP Address Manager (IPAM) pool that contains IPv4 addresses.
         * <p>
         * @return {@code this}
         * @param ipamPoolId Property ipamPoolId: The ID of the IP Address Manager (IPAM) pool that contains IPv4 addresses. This parameter is required.
         */
        public Builder ipamPoolId(final com.aliyun.ros.cdk.core.IResolvable ipamPoolId) {
            this.props.ipamPoolId(ipamPoolId);
            return this;
        }

        /**
         * Property iPv6CidrBlock: The IPv6 CIDR block to be added.
         * <p>
         * Note You must and can specify only one of SecondaryCidrBlock and Ipv6CidrBlock.
         * <p>
         * @return {@code this}
         * @param iPv6CidrBlock Property iPv6CidrBlock: The IPv6 CIDR block to be added. This parameter is required.
         */
        public Builder iPv6CidrBlock(final java.lang.String iPv6CidrBlock) {
            this.props.iPv6CidrBlock(iPv6CidrBlock);
            return this;
        }
        /**
         * Property iPv6CidrBlock: The IPv6 CIDR block to be added.
         * <p>
         * Note You must and can specify only one of SecondaryCidrBlock and Ipv6CidrBlock.
         * <p>
         * @return {@code this}
         * @param iPv6CidrBlock Property iPv6CidrBlock: The IPv6 CIDR block to be added. This parameter is required.
         */
        public Builder iPv6CidrBlock(final com.aliyun.ros.cdk.core.IResolvable iPv6CidrBlock) {
            this.props.iPv6CidrBlock(iPv6CidrBlock);
            return this;
        }

        /**
         * Property ipv6Isp: The type of the IPv6 CIDR block.
         * <p>
         * Valid values:
         * BGP (default)
         * ChinaMobile
         * ChinaUnicom
         * ChinaTelecom
         * Note If your Alibaba Cloud account is allowed to activate single-ISP bandwidth, you can set this parameter to ChinaTelecom, ChinaUnicom, or ChinaMobile.
         * <p>
         * @return {@code this}
         * @param ipv6Isp Property ipv6Isp: The type of the IPv6 CIDR block. This parameter is required.
         */
        public Builder ipv6Isp(final java.lang.String ipv6Isp) {
            this.props.ipv6Isp(ipv6Isp);
            return this;
        }
        /**
         * Property ipv6Isp: The type of the IPv6 CIDR block.
         * <p>
         * Valid values:
         * BGP (default)
         * ChinaMobile
         * ChinaUnicom
         * ChinaTelecom
         * Note If your Alibaba Cloud account is allowed to activate single-ISP bandwidth, you can set this parameter to ChinaTelecom, ChinaUnicom, or ChinaMobile.
         * <p>
         * @return {@code this}
         * @param ipv6Isp Property ipv6Isp: The type of the IPv6 CIDR block. This parameter is required.
         */
        public Builder ipv6Isp(final com.aliyun.ros.cdk.core.IResolvable ipv6Isp) {
            this.props.ipv6Isp(ipv6Isp);
            return this;
        }

        /**
         * Property ipVersion: The version of the IP address.
         * <p>
         * Valid values:
         * IPV4: the IPv4 address.
         * IPV6: the IPv6 address. If you set IpVersion to IPV6 and do not specify SecondaryCidrBlock, you can add a secondary IPv6 CIDR block to the VPC.
         * <p>
         * @return {@code this}
         * @param ipVersion Property ipVersion: The version of the IP address. This parameter is required.
         */
        public Builder ipVersion(final java.lang.String ipVersion) {
            this.props.ipVersion(ipVersion);
            return this;
        }
        /**
         * Property ipVersion: The version of the IP address.
         * <p>
         * Valid values:
         * IPV4: the IPv4 address.
         * IPV6: the IPv6 address. If you set IpVersion to IPV6 and do not specify SecondaryCidrBlock, you can add a secondary IPv6 CIDR block to the VPC.
         * <p>
         * @return {@code this}
         * @param ipVersion Property ipVersion: The version of the IP address. This parameter is required.
         */
        public Builder ipVersion(final com.aliyun.ros.cdk.core.IResolvable ipVersion) {
            this.props.ipVersion(ipVersion);
            return this;
        }

        /**
         * Property secondaryCidrBlock: The IPv4 CIDR block to be added.
         * <p>
         * Take note of the following requirements:
         * You can specify one of the following standard IPv4 CIDR blocks or their subnets as the secondary IPv4 CIDR block of the VPC: 192.168.0.0/16, 172.16.0.0/12, and 10.0.0.0/8.
         * You can also use a custom CIDR block other than 100.64.0.0/10, 224.0.0.0/4, 127.0.0.0/8, 169.254.0.0/16, or their subnets as the secondary IPv4 CIDR block of the VPC.
         * The CIDR block must meet the following requirements:
         * The CIDR block cannot start with 0. The subnet mask must be 8 to 28 bits in length.
         * The CIDR block cannot overlap with the primary CIDR block or an existing secondary CIDR block of the VPC.
         * Note You must and can specify only one of SecondaryCidrBlock and Ipv6CidrBlock.
         * <p>
         * @return {@code this}
         * @param secondaryCidrBlock Property secondaryCidrBlock: The IPv4 CIDR block to be added. This parameter is required.
         */
        public Builder secondaryCidrBlock(final java.lang.String secondaryCidrBlock) {
            this.props.secondaryCidrBlock(secondaryCidrBlock);
            return this;
        }
        /**
         * Property secondaryCidrBlock: The IPv4 CIDR block to be added.
         * <p>
         * Take note of the following requirements:
         * You can specify one of the following standard IPv4 CIDR blocks or their subnets as the secondary IPv4 CIDR block of the VPC: 192.168.0.0/16, 172.16.0.0/12, and 10.0.0.0/8.
         * You can also use a custom CIDR block other than 100.64.0.0/10, 224.0.0.0/4, 127.0.0.0/8, 169.254.0.0/16, or their subnets as the secondary IPv4 CIDR block of the VPC.
         * The CIDR block must meet the following requirements:
         * The CIDR block cannot start with 0. The subnet mask must be 8 to 28 bits in length.
         * The CIDR block cannot overlap with the primary CIDR block or an existing secondary CIDR block of the VPC.
         * Note You must and can specify only one of SecondaryCidrBlock and Ipv6CidrBlock.
         * <p>
         * @return {@code this}
         * @param secondaryCidrBlock Property secondaryCidrBlock: The IPv4 CIDR block to be added. This parameter is required.
         */
        public Builder secondaryCidrBlock(final com.aliyun.ros.cdk.core.IResolvable secondaryCidrBlock) {
            this.props.secondaryCidrBlock(secondaryCidrBlock);
            return this;
        }

        /**
         * Property secondaryCidrMask: Add an additional network segment to the VPC from the iPam address pool by entering a mask.
         * <p>
         * Explain that the designated iPam address pool adds additional network segments to VPC, and the parameter SecondaryCidrblock or SecondaryCidrmask inputs at least one.
         * <p>
         * @return {@code this}
         * @param secondaryCidrMask Property secondaryCidrMask: Add an additional network segment to the VPC from the iPam address pool by entering a mask. This parameter is required.
         */
        public Builder secondaryCidrMask(final java.lang.Number secondaryCidrMask) {
            this.props.secondaryCidrMask(secondaryCidrMask);
            return this;
        }
        /**
         * Property secondaryCidrMask: Add an additional network segment to the VPC from the iPam address pool by entering a mask.
         * <p>
         * Explain that the designated iPam address pool adds additional network segments to VPC, and the parameter SecondaryCidrblock or SecondaryCidrmask inputs at least one.
         * <p>
         * @return {@code this}
         * @param secondaryCidrMask Property secondaryCidrMask: Add an additional network segment to the VPC from the iPam address pool by entering a mask. This parameter is required.
         */
        public Builder secondaryCidrMask(final com.aliyun.ros.cdk.core.IResolvable secondaryCidrMask) {
            this.props.secondaryCidrMask(secondaryCidrMask);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.vpc.VpcCidrBlockAssociation}.
         */
        @Override
        public com.aliyun.ros.cdk.vpc.VpcCidrBlockAssociation build() {
            return new com.aliyun.ros.cdk.vpc.VpcCidrBlockAssociation(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
