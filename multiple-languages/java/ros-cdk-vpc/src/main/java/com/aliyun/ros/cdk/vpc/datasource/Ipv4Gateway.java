package com.aliyun.ros.cdk.vpc.datasource;

/**
 * This class encapsulates and extends the ROS resource type <code>DATASOURCE::VPC::Ipv4Gateway</code>, which is used to query the information about an IPv4 gateway.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-21T05:59:12.904Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.datasource.Ipv4Gateway")
public class Ipv4Gateway extends com.aliyun.ros.cdk.core.Resource {

    protected Ipv4Gateway(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Ipv4Gateway(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public Ipv4Gateway(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.datasource.Ipv4GatewayProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public Ipv4Gateway(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.datasource.Ipv4GatewayProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute CreateTime: The creation time of the resource.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrCreateTime() {
        return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Enabled: Enabled.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrEnabled() {
        return software.amazon.jsii.Kernel.get(this, "attrEnabled", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Ipv4GatewayDescription: Description information.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrIpv4GatewayDescription() {
        return software.amazon.jsii.Kernel.get(this, "attrIpv4GatewayDescription", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Ipv4GatewayId: The resource attribute field that represents the resource level 1 ID.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrIpv4GatewayId() {
        return software.amazon.jsii.Kernel.get(this, "attrIpv4GatewayId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Ipv4GatewayName: Resource name.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrIpv4GatewayName() {
        return software.amazon.jsii.Kernel.get(this, "attrIpv4GatewayName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Ipv4GatewayRouteTableId: ID of the route table associated with IPv4 Gateway.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrIpv4GatewayRouteTableId() {
        return software.amazon.jsii.Kernel.get(this, "attrIpv4GatewayRouteTableId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute VpcId: The ID of the VPC associated with the IPv4 Gateway.
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

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.datasource.Ipv4GatewayProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.vpc.datasource.Ipv4GatewayProps.class));
    }

    protected void setProps(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.datasource.Ipv4GatewayProps value) {
        software.amazon.jsii.Kernel.set(this, "props", java.util.Objects.requireNonNull(value, "props is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.vpc.datasource.Ipv4Gateway}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.vpc.datasource.Ipv4Gateway> {
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
        private final com.aliyun.ros.cdk.vpc.datasource.Ipv4GatewayProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.vpc.datasource.Ipv4GatewayProps.Builder();
        }

        /**
         * Property ipv4GatewayId: The resource attribute field that represents the resource level 1 ID.
         * <p>
         * @return {@code this}
         * @param ipv4GatewayId Property ipv4GatewayId: The resource attribute field that represents the resource level 1 ID. This parameter is required.
         */
        public Builder ipv4GatewayId(final java.lang.String ipv4GatewayId) {
            this.props.ipv4GatewayId(ipv4GatewayId);
            return this;
        }
        /**
         * Property ipv4GatewayId: The resource attribute field that represents the resource level 1 ID.
         * <p>
         * @return {@code this}
         * @param ipv4GatewayId Property ipv4GatewayId: The resource attribute field that represents the resource level 1 ID. This parameter is required.
         */
        public Builder ipv4GatewayId(final com.aliyun.ros.cdk.core.IResolvable ipv4GatewayId) {
            this.props.ipv4GatewayId(ipv4GatewayId);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.vpc.datasource.Ipv4Gateway}.
         */
        @Override
        public com.aliyun.ros.cdk.vpc.datasource.Ipv4Gateway build() {
            return new com.aliyun.ros.cdk.vpc.datasource.Ipv4Gateway(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
