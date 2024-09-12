package com.aliyun.ros.cdk.vpc;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::VPC::VpcCidrBlockAssociation</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-09-12T02:20:31.499Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.RosVpcCidrBlockAssociation")
public class RosVpcCidrBlockAssociation extends com.aliyun.ros.cdk.core.RosResource {

    protected RosVpcCidrBlockAssociation(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosVpcCidrBlockAssociation(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.vpc.RosVpcCidrBlockAssociation.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosVpcCidrBlockAssociation(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.RosVpcCidrBlockAssociationProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), java.util.Objects.requireNonNull(enableResourcePropertyConstraint, "enableResourcePropertyConstraint is required") });
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> renderProperties(final @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> props) {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.call(this, "renderProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class)), new Object[] { java.util.Objects.requireNonNull(props, "props is required") }));
    }

    /**
     * The resource type name for this resource class.
     */
    public final static java.lang.String ROS_RESOURCE_TYPE_NAME;

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrVpcId() {
        return software.amazon.jsii.Kernel.get(this, "attrVpcId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getVpcId() {
        return software.amazon.jsii.Kernel.get(this, "vpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setVpcId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "vpcId", java.util.Objects.requireNonNull(value, "vpcId is required"));
    }

    /**
     */
    public void setVpcId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "vpcId", java.util.Objects.requireNonNull(value, "vpcId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getIpamPoolId() {
        return software.amazon.jsii.Kernel.get(this, "ipamPoolId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setIpamPoolId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "ipamPoolId", value);
    }

    /**
     */
    public void setIpamPoolId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "ipamPoolId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getIPv6CidrBlock() {
        return software.amazon.jsii.Kernel.get(this, "iPv6CidrBlock", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setIPv6CidrBlock(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "iPv6CidrBlock", value);
    }

    /**
     */
    public void setIPv6CidrBlock(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "iPv6CidrBlock", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getIpv6Isp() {
        return software.amazon.jsii.Kernel.get(this, "ipv6Isp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setIpv6Isp(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "ipv6Isp", value);
    }

    /**
     */
    public void setIpv6Isp(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "ipv6Isp", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getIpVersion() {
        return software.amazon.jsii.Kernel.get(this, "ipVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setIpVersion(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "ipVersion", value);
    }

    /**
     */
    public void setIpVersion(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "ipVersion", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getSecondaryCidrBlock() {
        return software.amazon.jsii.Kernel.get(this, "secondaryCidrBlock", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSecondaryCidrBlock(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "secondaryCidrBlock", value);
    }

    /**
     */
    public void setSecondaryCidrBlock(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "secondaryCidrBlock", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getSecondaryCidrMask() {
        return software.amazon.jsii.Kernel.get(this, "secondaryCidrMask", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSecondaryCidrMask(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "secondaryCidrMask", value);
    }

    /**
     */
    public void setSecondaryCidrMask(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "secondaryCidrMask", value);
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.vpc.RosVpcCidrBlockAssociation}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.vpc.RosVpcCidrBlockAssociation> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
         * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
         * @param enableResourcePropertyConstraint This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.vpc.RosVpcCidrBlockAssociationProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.vpc.RosVpcCidrBlockAssociationProps.Builder();
        }

        /**
         * @return {@code this}
         * @param vpcId This parameter is required.
         */
        public Builder vpcId(final java.lang.String vpcId) {
            this.props.vpcId(vpcId);
            return this;
        }
        /**
         * @return {@code this}
         * @param vpcId This parameter is required.
         */
        public Builder vpcId(final com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.props.vpcId(vpcId);
            return this;
        }

        /**
         * @return {@code this}
         * @param ipamPoolId This parameter is required.
         */
        public Builder ipamPoolId(final java.lang.String ipamPoolId) {
            this.props.ipamPoolId(ipamPoolId);
            return this;
        }
        /**
         * @return {@code this}
         * @param ipamPoolId This parameter is required.
         */
        public Builder ipamPoolId(final com.aliyun.ros.cdk.core.IResolvable ipamPoolId) {
            this.props.ipamPoolId(ipamPoolId);
            return this;
        }

        /**
         * @return {@code this}
         * @param iPv6CidrBlock This parameter is required.
         */
        public Builder iPv6CidrBlock(final java.lang.String iPv6CidrBlock) {
            this.props.iPv6CidrBlock(iPv6CidrBlock);
            return this;
        }
        /**
         * @return {@code this}
         * @param iPv6CidrBlock This parameter is required.
         */
        public Builder iPv6CidrBlock(final com.aliyun.ros.cdk.core.IResolvable iPv6CidrBlock) {
            this.props.iPv6CidrBlock(iPv6CidrBlock);
            return this;
        }

        /**
         * @return {@code this}
         * @param ipv6Isp This parameter is required.
         */
        public Builder ipv6Isp(final java.lang.String ipv6Isp) {
            this.props.ipv6Isp(ipv6Isp);
            return this;
        }
        /**
         * @return {@code this}
         * @param ipv6Isp This parameter is required.
         */
        public Builder ipv6Isp(final com.aliyun.ros.cdk.core.IResolvable ipv6Isp) {
            this.props.ipv6Isp(ipv6Isp);
            return this;
        }

        /**
         * @return {@code this}
         * @param ipVersion This parameter is required.
         */
        public Builder ipVersion(final java.lang.String ipVersion) {
            this.props.ipVersion(ipVersion);
            return this;
        }
        /**
         * @return {@code this}
         * @param ipVersion This parameter is required.
         */
        public Builder ipVersion(final com.aliyun.ros.cdk.core.IResolvable ipVersion) {
            this.props.ipVersion(ipVersion);
            return this;
        }

        /**
         * @return {@code this}
         * @param secondaryCidrBlock This parameter is required.
         */
        public Builder secondaryCidrBlock(final java.lang.String secondaryCidrBlock) {
            this.props.secondaryCidrBlock(secondaryCidrBlock);
            return this;
        }
        /**
         * @return {@code this}
         * @param secondaryCidrBlock This parameter is required.
         */
        public Builder secondaryCidrBlock(final com.aliyun.ros.cdk.core.IResolvable secondaryCidrBlock) {
            this.props.secondaryCidrBlock(secondaryCidrBlock);
            return this;
        }

        /**
         * @return {@code this}
         * @param secondaryCidrMask This parameter is required.
         */
        public Builder secondaryCidrMask(final java.lang.Number secondaryCidrMask) {
            this.props.secondaryCidrMask(secondaryCidrMask);
            return this;
        }
        /**
         * @return {@code this}
         * @param secondaryCidrMask This parameter is required.
         */
        public Builder secondaryCidrMask(final com.aliyun.ros.cdk.core.IResolvable secondaryCidrMask) {
            this.props.secondaryCidrMask(secondaryCidrMask);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.vpc.RosVpcCidrBlockAssociation}.
         */
        @Override
        public com.aliyun.ros.cdk.vpc.RosVpcCidrBlockAssociation build() {
            return new com.aliyun.ros.cdk.vpc.RosVpcCidrBlockAssociation(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
