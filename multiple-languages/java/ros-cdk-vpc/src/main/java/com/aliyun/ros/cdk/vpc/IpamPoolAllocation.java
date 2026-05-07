package com.aliyun.ros.cdk.vpc;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::VPC::IpamPoolAllocation</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-05-07T04:16:55.003Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.IpamPoolAllocation")
public class IpamPoolAllocation extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.vpc.IIpamPoolAllocation {

    protected IpamPoolAllocation(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected IpamPoolAllocation(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public IpamPoolAllocation(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.IpamPoolAllocationProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public IpamPoolAllocation(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.IpamPoolAllocationProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute Cidr: The allocated address segment.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCidr() {
        return software.amazon.jsii.Kernel.get(this, "attrCidr", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute CreateTime: Instance creation time.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
        return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute IpamPoolAllocationDescription: The description of the ipam pool alloctaion.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrIpamPoolAllocationDescription() {
        return software.amazon.jsii.Kernel.get(this, "attrIpamPoolAllocationDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute IpamPoolAllocationId: The instance ID of the ipam pool allocation.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrIpamPoolAllocationId() {
        return software.amazon.jsii.Kernel.get(this, "attrIpamPoolAllocationId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute IpamPoolAllocationName: The name of the ipam pool allocation.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrIpamPoolAllocationName() {
        return software.amazon.jsii.Kernel.get(this, "attrIpamPoolAllocationName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute IpamPoolId: The ID of the IPAM Pool.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrIpamPoolId() {
        return software.amazon.jsii.Kernel.get(this, "attrIpamPoolId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ResourceOwnerId: The ID of the Alibaba Cloud account (primary account) to which the resource belongs.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceOwnerId() {
        return software.amazon.jsii.Kernel.get(this, "attrResourceOwnerId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ResourceType: The type of resource.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceType() {
        return software.amazon.jsii.Kernel.get(this, "attrResourceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute SourceCidr: The source address segment.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrSourceCidr() {
        return software.amazon.jsii.Kernel.get(this, "attrSourceCidr", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.IpamPoolAllocationProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.vpc.IpamPoolAllocationProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.vpc.IpamPoolAllocation}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.vpc.IpamPoolAllocation> {
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
        private final com.aliyun.ros.cdk.vpc.IpamPoolAllocationProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.vpc.IpamPoolAllocationProps.Builder();
        }

        /**
         * Property ipamPoolId: The ID of the IPAM Pool.
         * <p>
         * @return {@code this}
         * @param ipamPoolId Property ipamPoolId: The ID of the IPAM Pool. This parameter is required.
         */
        public Builder ipamPoolId(final java.lang.String ipamPoolId) {
            this.props.ipamPoolId(ipamPoolId);
            return this;
        }
        /**
         * Property ipamPoolId: The ID of the IPAM Pool.
         * <p>
         * @return {@code this}
         * @param ipamPoolId Property ipamPoolId: The ID of the IPAM Pool. This parameter is required.
         */
        public Builder ipamPoolId(final com.aliyun.ros.cdk.core.IResolvable ipamPoolId) {
            this.props.ipamPoolId(ipamPoolId);
            return this;
        }

        /**
         * Property cidr: The allocated address segment.
         * <p>
         * @return {@code this}
         * @param cidr Property cidr: The allocated address segment. This parameter is required.
         */
        public Builder cidr(final java.lang.String cidr) {
            this.props.cidr(cidr);
            return this;
        }
        /**
         * Property cidr: The allocated address segment.
         * <p>
         * @return {@code this}
         * @param cidr Property cidr: The allocated address segment. This parameter is required.
         */
        public Builder cidr(final com.aliyun.ros.cdk.core.IResolvable cidr) {
            this.props.cidr(cidr);
            return this;
        }

        /**
         * Property cidrMask: Create a custom reserved network segment from The IPAM address pool by entering a mask.
         * <p>
         * <blockquote>
         * <p>
         * Enter at least one of <strong>Cidr</strong> or **CidrMask.
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param cidrMask Property cidrMask: Create a custom reserved network segment from The IPAM address pool by entering a mask. This parameter is required.
         */
        public Builder cidrMask(final java.lang.Number cidrMask) {
            this.props.cidrMask(cidrMask);
            return this;
        }
        /**
         * Property cidrMask: Create a custom reserved network segment from The IPAM address pool by entering a mask.
         * <p>
         * <blockquote>
         * <p>
         * Enter at least one of <strong>Cidr</strong> or **CidrMask.
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param cidrMask Property cidrMask: Create a custom reserved network segment from The IPAM address pool by entering a mask. This parameter is required.
         */
        public Builder cidrMask(final com.aliyun.ros.cdk.core.IResolvable cidrMask) {
            this.props.cidrMask(cidrMask);
            return this;
        }

        /**
         * Property ipamPoolAllocationDescription: The description of the ipam pool alloctaion.
         * <p>
         * It must be 1 to 256 characters in length and must start with an English letter or Chinese character, but cannot start with 'http:// 'or 'https. If it is not filled in, it is empty. The default value is empty.
         * <p>
         * @return {@code this}
         * @param ipamPoolAllocationDescription Property ipamPoolAllocationDescription: The description of the ipam pool alloctaion. This parameter is required.
         */
        public Builder ipamPoolAllocationDescription(final java.lang.String ipamPoolAllocationDescription) {
            this.props.ipamPoolAllocationDescription(ipamPoolAllocationDescription);
            return this;
        }
        /**
         * Property ipamPoolAllocationDescription: The description of the ipam pool alloctaion.
         * <p>
         * It must be 1 to 256 characters in length and must start with an English letter or Chinese character, but cannot start with 'http:// 'or 'https. If it is not filled in, it is empty. The default value is empty.
         * <p>
         * @return {@code this}
         * @param ipamPoolAllocationDescription Property ipamPoolAllocationDescription: The description of the ipam pool alloctaion. This parameter is required.
         */
        public Builder ipamPoolAllocationDescription(final com.aliyun.ros.cdk.core.IResolvable ipamPoolAllocationDescription) {
            this.props.ipamPoolAllocationDescription(ipamPoolAllocationDescription);
            return this;
        }

        /**
         * Property ipamPoolAllocationName: The name of the ipam pool allocation.
         * <p>
         * It must be 1 to 128 characters in length and cannot start with 'http:// 'or 'https.
         * <p>
         * @return {@code this}
         * @param ipamPoolAllocationName Property ipamPoolAllocationName: The name of the ipam pool allocation. This parameter is required.
         */
        public Builder ipamPoolAllocationName(final java.lang.String ipamPoolAllocationName) {
            this.props.ipamPoolAllocationName(ipamPoolAllocationName);
            return this;
        }
        /**
         * Property ipamPoolAllocationName: The name of the ipam pool allocation.
         * <p>
         * It must be 1 to 128 characters in length and cannot start with 'http:// 'or 'https.
         * <p>
         * @return {@code this}
         * @param ipamPoolAllocationName Property ipamPoolAllocationName: The name of the ipam pool allocation. This parameter is required.
         */
        public Builder ipamPoolAllocationName(final com.aliyun.ros.cdk.core.IResolvable ipamPoolAllocationName) {
            this.props.ipamPoolAllocationName(ipamPoolAllocationName);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.vpc.IpamPoolAllocation}.
         */
        @Override
        public com.aliyun.ros.cdk.vpc.IpamPoolAllocation build() {
            return new com.aliyun.ros.cdk.vpc.IpamPoolAllocation(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
