package com.aliyun.ros.cdk.vpc;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::VPC::NatIpCidr</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:25:01.092Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.RosNatIpCidr")
public class RosNatIpCidr extends com.aliyun.ros.cdk.core.RosResource {

    protected RosNatIpCidr(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosNatIpCidr(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.vpc.RosNatIpCidr.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosNatIpCidr(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.RosNatIpCidrProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrNatIpCidrId() {
        return software.amazon.jsii.Kernel.get(this, "attrNatIpCidrId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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
    public @org.jetbrains.annotations.NotNull java.lang.Object getNatIpCidrDescription() {
        return software.amazon.jsii.Kernel.get(this, "natIpCidrDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setNatIpCidrDescription(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "natIpCidrDescription", java.util.Objects.requireNonNull(value, "natIpCidrDescription is required"));
    }

    /**
     */
    public void setNatIpCidrDescription(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "natIpCidrDescription", java.util.Objects.requireNonNull(value, "natIpCidrDescription is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getNatIpCidrName() {
        return software.amazon.jsii.Kernel.get(this, "natIpCidrName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setNatIpCidrName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "natIpCidrName", java.util.Objects.requireNonNull(value, "natIpCidrName is required"));
    }

    /**
     */
    public void setNatIpCidrName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "natIpCidrName", java.util.Objects.requireNonNull(value, "natIpCidrName is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.vpc.RosNatIpCidr}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.vpc.RosNatIpCidr> {
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
        private final com.aliyun.ros.cdk.vpc.RosNatIpCidrProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.vpc.RosNatIpCidrProps.Builder();
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
         * @param natIpCidrDescription This parameter is required.
         */
        public Builder natIpCidrDescription(final java.lang.String natIpCidrDescription) {
            this.props.natIpCidrDescription(natIpCidrDescription);
            return this;
        }
        /**
         * @return {@code this}
         * @param natIpCidrDescription This parameter is required.
         */
        public Builder natIpCidrDescription(final com.aliyun.ros.cdk.core.IResolvable natIpCidrDescription) {
            this.props.natIpCidrDescription(natIpCidrDescription);
            return this;
        }

        /**
         * @return {@code this}
         * @param natIpCidrName This parameter is required.
         */
        public Builder natIpCidrName(final java.lang.String natIpCidrName) {
            this.props.natIpCidrName(natIpCidrName);
            return this;
        }
        /**
         * @return {@code this}
         * @param natIpCidrName This parameter is required.
         */
        public Builder natIpCidrName(final com.aliyun.ros.cdk.core.IResolvable natIpCidrName) {
            this.props.natIpCidrName(natIpCidrName);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.vpc.RosNatIpCidr}.
         */
        @Override
        public com.aliyun.ros.cdk.vpc.RosNatIpCidr build() {
            return new com.aliyun.ros.cdk.vpc.RosNatIpCidr(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
