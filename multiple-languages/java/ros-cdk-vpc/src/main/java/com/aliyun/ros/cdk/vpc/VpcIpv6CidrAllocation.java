package com.aliyun.ros.cdk.vpc;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::VPC::VpcIpv6CidrAllocation</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-09-29T07:52:43.234Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.VpcIpv6CidrAllocation")
public class VpcIpv6CidrAllocation extends com.aliyun.ros.cdk.core.Resource {

    protected VpcIpv6CidrAllocation(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected VpcIpv6CidrAllocation(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props
     * @param enableResourcePropertyConstraint
     */
    public VpcIpv6CidrAllocation(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.vpc.VpcIpv6CidrAllocationProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props, enableResourcePropertyConstraint });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props
     */
    public VpcIpv6CidrAllocation(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.vpc.VpcIpv6CidrAllocationProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     */
    public VpcIpv6CidrAllocation(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required") });
    }

    /**
     * Attribute Ipv6CidrBlock: The IPv6 CIDR block that is reserved.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrIpv6CidrBlock() {
        return software.amazon.jsii.Kernel.get(this, "attrIpv6CidrBlock", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.VpcIpv6CidrAllocationProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.vpc.VpcIpv6CidrAllocationProps.class));
    }

    protected void setProps(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.VpcIpv6CidrAllocationProps value) {
        software.amazon.jsii.Kernel.set(this, "props", java.util.Objects.requireNonNull(value, "props is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.vpc.VpcIpv6CidrAllocation}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.vpc.VpcIpv6CidrAllocation> {
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
        private com.aliyun.ros.cdk.vpc.VpcIpv6CidrAllocationProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        }

        /**
         * Property addressPoolType: The type of the IPv6 address pool.
         * <p>
         * Set the value to custom.
         * Note This parameter is required.
         * <p>
         * @return {@code this}
         * @param addressPoolType Property addressPoolType: The type of the IPv6 address pool. This parameter is required.
         */
        public Builder addressPoolType(final java.lang.String addressPoolType) {
            this.props().addressPoolType(addressPoolType);
            return this;
        }
        /**
         * Property addressPoolType: The type of the IPv6 address pool.
         * <p>
         * Set the value to custom.
         * Note This parameter is required.
         * <p>
         * @return {@code this}
         * @param addressPoolType Property addressPoolType: The type of the IPv6 address pool. This parameter is required.
         */
        public Builder addressPoolType(final com.aliyun.ros.cdk.core.IResolvable addressPoolType) {
            this.props().addressPoolType(addressPoolType);
            return this;
        }

        /**
         * Property ipv6CidrBlock: The IPv6 CIDR block that you want to reserve.
         * <p>
         * @return {@code this}
         * @param ipv6CidrBlock Property ipv6CidrBlock: The IPv6 CIDR block that you want to reserve. This parameter is required.
         */
        public Builder ipv6CidrBlock(final java.lang.String ipv6CidrBlock) {
            this.props().ipv6CidrBlock(ipv6CidrBlock);
            return this;
        }
        /**
         * Property ipv6CidrBlock: The IPv6 CIDR block that you want to reserve.
         * <p>
         * @return {@code this}
         * @param ipv6CidrBlock Property ipv6CidrBlock: The IPv6 CIDR block that you want to reserve. This parameter is required.
         */
        public Builder ipv6CidrBlock(final com.aliyun.ros.cdk.core.IResolvable ipv6CidrBlock) {
            this.props().ipv6CidrBlock(ipv6CidrBlock);
            return this;
        }

        /**
         * Property ipv6Isp: The type of IPv6 CIDR block.
         * <p>
         * Valid values:
         * BGP (default)
         * BGP_International
         * ChinaMobile
         * ChinaUnicom
         * ChinaTelecom
         * ChinaMobile_L2
         * ChinaUnicom_L2
         * ChinaTelecom_L2
         * Note
         * If your Alibaba Cloud account is allowed to use single-ISP bandwidth, valid values are: ChinaTelecom, ChinaUnicom, and ChinaMobile.
         * You can reserve only one IPv6 CIDR block of each type. After a reserved IPv6 CIDR block of a type is allocated to a VPC, you can reserve another IPv6 CIDR of the type.
         * <p>
         * @return {@code this}
         * @param ipv6Isp Property ipv6Isp: The type of IPv6 CIDR block. This parameter is required.
         */
        public Builder ipv6Isp(final java.lang.String ipv6Isp) {
            this.props().ipv6Isp(ipv6Isp);
            return this;
        }
        /**
         * Property ipv6Isp: The type of IPv6 CIDR block.
         * <p>
         * Valid values:
         * BGP (default)
         * BGP_International
         * ChinaMobile
         * ChinaUnicom
         * ChinaTelecom
         * ChinaMobile_L2
         * ChinaUnicom_L2
         * ChinaTelecom_L2
         * Note
         * If your Alibaba Cloud account is allowed to use single-ISP bandwidth, valid values are: ChinaTelecom, ChinaUnicom, and ChinaMobile.
         * You can reserve only one IPv6 CIDR block of each type. After a reserved IPv6 CIDR block of a type is allocated to a VPC, you can reserve another IPv6 CIDR of the type.
         * <p>
         * @return {@code this}
         * @param ipv6Isp Property ipv6Isp: The type of IPv6 CIDR block. This parameter is required.
         */
        public Builder ipv6Isp(final com.aliyun.ros.cdk.core.IResolvable ipv6Isp) {
            this.props().ipv6Isp(ipv6Isp);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.vpc.VpcIpv6CidrAllocation}.
         */
        @Override
        public com.aliyun.ros.cdk.vpc.VpcIpv6CidrAllocation build() {
            return new com.aliyun.ros.cdk.vpc.VpcIpv6CidrAllocation(
                this.scope,
                this.id,
                this.props != null ? this.props.build() : null,
                this.enableResourcePropertyConstraint
            );
        }

        private com.aliyun.ros.cdk.vpc.VpcIpv6CidrAllocationProps.Builder props() {
            if (this.props == null) {
                this.props = new com.aliyun.ros.cdk.vpc.VpcIpv6CidrAllocationProps.Builder();
            }
            return this.props;
        }
    }
}
