package com.aliyun.ros.cdk.vpc;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::VPC::IpamPoolAllocation</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T14:04:31.560Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.RosIpamPoolAllocation")
public class RosIpamPoolAllocation extends com.aliyun.ros.cdk.core.RosResource {

    protected RosIpamPoolAllocation(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosIpamPoolAllocation(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.vpc.RosIpamPoolAllocation.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosIpamPoolAllocation(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.RosIpamPoolAllocationProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrCidr() {
        return software.amazon.jsii.Kernel.get(this, "attrCidr", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrCreateTime() {
        return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrIpamPoolAllocationDescription() {
        return software.amazon.jsii.Kernel.get(this, "attrIpamPoolAllocationDescription", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrIpamPoolAllocationId() {
        return software.amazon.jsii.Kernel.get(this, "attrIpamPoolAllocationId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrIpamPoolAllocationName() {
        return software.amazon.jsii.Kernel.get(this, "attrIpamPoolAllocationName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrIpamPoolId() {
        return software.amazon.jsii.Kernel.get(this, "attrIpamPoolId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrResourceOwnerId() {
        return software.amazon.jsii.Kernel.get(this, "attrResourceOwnerId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrResourceType() {
        return software.amazon.jsii.Kernel.get(this, "attrResourceType", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrSourceCidr() {
        return software.amazon.jsii.Kernel.get(this, "attrSourceCidr", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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
    public @org.jetbrains.annotations.NotNull java.lang.Object getIpamPoolId() {
        return software.amazon.jsii.Kernel.get(this, "ipamPoolId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setIpamPoolId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "ipamPoolId", java.util.Objects.requireNonNull(value, "ipamPoolId is required"));
    }

    /**
     */
    public void setIpamPoolId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "ipamPoolId", java.util.Objects.requireNonNull(value, "ipamPoolId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getCidr() {
        return software.amazon.jsii.Kernel.get(this, "cidr", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setCidr(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "cidr", value);
    }

    /**
     */
    public void setCidr(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "cidr", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getCidrMask() {
        return software.amazon.jsii.Kernel.get(this, "cidrMask", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setCidrMask(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "cidrMask", value);
    }

    /**
     */
    public void setCidrMask(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "cidrMask", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getIpamPoolAllocationDescription() {
        return software.amazon.jsii.Kernel.get(this, "ipamPoolAllocationDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setIpamPoolAllocationDescription(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "ipamPoolAllocationDescription", value);
    }

    /**
     */
    public void setIpamPoolAllocationDescription(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "ipamPoolAllocationDescription", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getIpamPoolAllocationName() {
        return software.amazon.jsii.Kernel.get(this, "ipamPoolAllocationName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setIpamPoolAllocationName(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "ipamPoolAllocationName", value);
    }

    /**
     */
    public void setIpamPoolAllocationName(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "ipamPoolAllocationName", value);
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.vpc.RosIpamPoolAllocation}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.vpc.RosIpamPoolAllocation> {
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
        private final com.aliyun.ros.cdk.vpc.RosIpamPoolAllocationProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.vpc.RosIpamPoolAllocationProps.Builder();
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
         * @param cidr This parameter is required.
         */
        public Builder cidr(final java.lang.String cidr) {
            this.props.cidr(cidr);
            return this;
        }
        /**
         * @return {@code this}
         * @param cidr This parameter is required.
         */
        public Builder cidr(final com.aliyun.ros.cdk.core.IResolvable cidr) {
            this.props.cidr(cidr);
            return this;
        }

        /**
         * @return {@code this}
         * @param cidrMask This parameter is required.
         */
        public Builder cidrMask(final java.lang.Number cidrMask) {
            this.props.cidrMask(cidrMask);
            return this;
        }
        /**
         * @return {@code this}
         * @param cidrMask This parameter is required.
         */
        public Builder cidrMask(final com.aliyun.ros.cdk.core.IResolvable cidrMask) {
            this.props.cidrMask(cidrMask);
            return this;
        }

        /**
         * @return {@code this}
         * @param ipamPoolAllocationDescription This parameter is required.
         */
        public Builder ipamPoolAllocationDescription(final java.lang.String ipamPoolAllocationDescription) {
            this.props.ipamPoolAllocationDescription(ipamPoolAllocationDescription);
            return this;
        }
        /**
         * @return {@code this}
         * @param ipamPoolAllocationDescription This parameter is required.
         */
        public Builder ipamPoolAllocationDescription(final com.aliyun.ros.cdk.core.IResolvable ipamPoolAllocationDescription) {
            this.props.ipamPoolAllocationDescription(ipamPoolAllocationDescription);
            return this;
        }

        /**
         * @return {@code this}
         * @param ipamPoolAllocationName This parameter is required.
         */
        public Builder ipamPoolAllocationName(final java.lang.String ipamPoolAllocationName) {
            this.props.ipamPoolAllocationName(ipamPoolAllocationName);
            return this;
        }
        /**
         * @return {@code this}
         * @param ipamPoolAllocationName This parameter is required.
         */
        public Builder ipamPoolAllocationName(final com.aliyun.ros.cdk.core.IResolvable ipamPoolAllocationName) {
            this.props.ipamPoolAllocationName(ipamPoolAllocationName);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.vpc.RosIpamPoolAllocation}.
         */
        @Override
        public com.aliyun.ros.cdk.vpc.RosIpamPoolAllocation build() {
            return new com.aliyun.ros.cdk.vpc.RosIpamPoolAllocation(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
