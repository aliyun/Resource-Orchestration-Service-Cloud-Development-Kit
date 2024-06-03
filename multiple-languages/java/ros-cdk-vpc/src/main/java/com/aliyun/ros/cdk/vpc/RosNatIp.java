package com.aliyun.ros.cdk.vpc;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::VPC::NatIp</code>, which is used to create a NAT IP address.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-03T08:19:54.882Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.RosNatIp")
public class RosNatIp extends com.aliyun.ros.cdk.core.RosResource {

    protected RosNatIp(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosNatIp(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.vpc.RosNatIp.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosNatIp(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.RosNatIpProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrNatIp() {
        return software.amazon.jsii.Kernel.get(this, "attrNatIp", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrNatIpId() {
        return software.amazon.jsii.Kernel.get(this, "attrNatIpId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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
    public @org.jetbrains.annotations.NotNull java.lang.Object getNatGatewayId() {
        return software.amazon.jsii.Kernel.get(this, "natGatewayId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setNatGatewayId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "natGatewayId", java.util.Objects.requireNonNull(value, "natGatewayId is required"));
    }

    /**
     */
    public void setNatGatewayId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "natGatewayId", java.util.Objects.requireNonNull(value, "natGatewayId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getNatIpCidr() {
        return software.amazon.jsii.Kernel.get(this, "natIpCidr", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setNatIpCidr(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "natIpCidr", java.util.Objects.requireNonNull(value, "natIpCidr is required"));
    }

    /**
     */
    public void setNatIpCidr(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "natIpCidr", java.util.Objects.requireNonNull(value, "natIpCidr is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getNatIpDescription() {
        return software.amazon.jsii.Kernel.get(this, "natIpDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setNatIpDescription(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "natIpDescription", java.util.Objects.requireNonNull(value, "natIpDescription is required"));
    }

    /**
     */
    public void setNatIpDescription(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "natIpDescription", java.util.Objects.requireNonNull(value, "natIpDescription is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getNatIpName() {
        return software.amazon.jsii.Kernel.get(this, "natIpName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setNatIpName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "natIpName", java.util.Objects.requireNonNull(value, "natIpName is required"));
    }

    /**
     */
    public void setNatIpName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "natIpName", java.util.Objects.requireNonNull(value, "natIpName is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getNatIp() {
        return software.amazon.jsii.Kernel.get(this, "natIp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setNatIp(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "natIp", value);
    }

    /**
     */
    public void setNatIp(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "natIp", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getNatIpCidrId() {
        return software.amazon.jsii.Kernel.get(this, "natIpCidrId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setNatIpCidrId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "natIpCidrId", value);
    }

    /**
     */
    public void setNatIpCidrId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "natIpCidrId", value);
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.vpc.RosNatIp}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.vpc.RosNatIp> {
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
        private final com.aliyun.ros.cdk.vpc.RosNatIpProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.vpc.RosNatIpProps.Builder();
        }

        /**
         * @return {@code this}
         * @param natGatewayId This parameter is required.
         */
        public Builder natGatewayId(final java.lang.String natGatewayId) {
            this.props.natGatewayId(natGatewayId);
            return this;
        }
        /**
         * @return {@code this}
         * @param natGatewayId This parameter is required.
         */
        public Builder natGatewayId(final com.aliyun.ros.cdk.core.IResolvable natGatewayId) {
            this.props.natGatewayId(natGatewayId);
            return this;
        }

        /**
         * @return {@code this}
         * @param natIpCidr This parameter is required.
         */
        public Builder natIpCidr(final java.lang.String natIpCidr) {
            this.props.natIpCidr(natIpCidr);
            return this;
        }
        /**
         * @return {@code this}
         * @param natIpCidr This parameter is required.
         */
        public Builder natIpCidr(final com.aliyun.ros.cdk.core.IResolvable natIpCidr) {
            this.props.natIpCidr(natIpCidr);
            return this;
        }

        /**
         * @return {@code this}
         * @param natIpDescription This parameter is required.
         */
        public Builder natIpDescription(final java.lang.String natIpDescription) {
            this.props.natIpDescription(natIpDescription);
            return this;
        }
        /**
         * @return {@code this}
         * @param natIpDescription This parameter is required.
         */
        public Builder natIpDescription(final com.aliyun.ros.cdk.core.IResolvable natIpDescription) {
            this.props.natIpDescription(natIpDescription);
            return this;
        }

        /**
         * @return {@code this}
         * @param natIpName This parameter is required.
         */
        public Builder natIpName(final java.lang.String natIpName) {
            this.props.natIpName(natIpName);
            return this;
        }
        /**
         * @return {@code this}
         * @param natIpName This parameter is required.
         */
        public Builder natIpName(final com.aliyun.ros.cdk.core.IResolvable natIpName) {
            this.props.natIpName(natIpName);
            return this;
        }

        /**
         * @return {@code this}
         * @param natIp This parameter is required.
         */
        public Builder natIp(final java.lang.String natIp) {
            this.props.natIp(natIp);
            return this;
        }
        /**
         * @return {@code this}
         * @param natIp This parameter is required.
         */
        public Builder natIp(final com.aliyun.ros.cdk.core.IResolvable natIp) {
            this.props.natIp(natIp);
            return this;
        }

        /**
         * @return {@code this}
         * @param natIpCidrId This parameter is required.
         */
        public Builder natIpCidrId(final java.lang.String natIpCidrId) {
            this.props.natIpCidrId(natIpCidrId);
            return this;
        }
        /**
         * @return {@code this}
         * @param natIpCidrId This parameter is required.
         */
        public Builder natIpCidrId(final com.aliyun.ros.cdk.core.IResolvable natIpCidrId) {
            this.props.natIpCidrId(natIpCidrId);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.vpc.RosNatIp}.
         */
        @Override
        public com.aliyun.ros.cdk.vpc.RosNatIp build() {
            return new com.aliyun.ros.cdk.vpc.RosNatIp(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
