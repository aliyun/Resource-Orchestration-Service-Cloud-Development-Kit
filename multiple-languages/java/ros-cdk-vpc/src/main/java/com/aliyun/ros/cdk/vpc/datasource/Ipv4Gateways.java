package com.aliyun.ros.cdk.vpc.datasource;

/**
 * A ROS resource type:  <code>DATASOURCE::VPC::Ipv4Gateways</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-09-25T10:01:48.376Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.datasource.Ipv4Gateways")
public class Ipv4Gateways extends com.aliyun.ros.cdk.core.Resource {

    protected Ipv4Gateways(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Ipv4Gateways(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new <code>DATASOURCE::VPC::Ipv4Gateways</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props
     * @param enableResourcePropertyConstraint
     */
    public Ipv4Gateways(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.vpc.datasource.Ipv4GatewaysProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props, enableResourcePropertyConstraint });
    }

    /**
     * Create a new <code>DATASOURCE::VPC::Ipv4Gateways</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props
     */
    public Ipv4Gateways(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.vpc.datasource.Ipv4GatewaysProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props });
    }

    /**
     * Create a new <code>DATASOURCE::VPC::Ipv4Gateways</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     */
    public Ipv4Gateways(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required") });
    }

    /**
     * Attribute Ipv4GatewayIds: The list of ipv4 gateway IDs.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrIpv4GatewayIds() {
        return software.amazon.jsii.Kernel.get(this, "attrIpv4GatewayIds", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Ipv4Gateways: The list of ipv4 gateways.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrIpv4Gateways() {
        return software.amazon.jsii.Kernel.get(this, "attrIpv4Gateways", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.vpc.datasource.Ipv4Gateways}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.vpc.datasource.Ipv4Gateways> {
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
        private com.aliyun.ros.cdk.vpc.datasource.Ipv4GatewaysProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        }

        /**
         * Property ipv4GatewayId: The resource attribute field that represents the resource level 1 ID.
         * <p>
         * @return {@code this}
         * @param ipv4GatewayId Property ipv4GatewayId: The resource attribute field that represents the resource level 1 ID. This parameter is required.
         */
        public Builder ipv4GatewayId(final java.lang.String ipv4GatewayId) {
            this.props().ipv4GatewayId(ipv4GatewayId);
            return this;
        }
        /**
         * Property ipv4GatewayId: The resource attribute field that represents the resource level 1 ID.
         * <p>
         * @return {@code this}
         * @param ipv4GatewayId Property ipv4GatewayId: The resource attribute field that represents the resource level 1 ID. This parameter is required.
         */
        public Builder ipv4GatewayId(final com.aliyun.ros.cdk.core.IResolvable ipv4GatewayId) {
            this.props().ipv4GatewayId(ipv4GatewayId);
            return this;
        }

        /**
         * Property ipv4GatewayName: Resource name.
         * <p>
         * @return {@code this}
         * @param ipv4GatewayName Property ipv4GatewayName: Resource name. This parameter is required.
         */
        public Builder ipv4GatewayName(final java.lang.String ipv4GatewayName) {
            this.props().ipv4GatewayName(ipv4GatewayName);
            return this;
        }
        /**
         * Property ipv4GatewayName: Resource name.
         * <p>
         * @return {@code this}
         * @param ipv4GatewayName Property ipv4GatewayName: Resource name. This parameter is required.
         */
        public Builder ipv4GatewayName(final com.aliyun.ros.cdk.core.IResolvable ipv4GatewayName) {
            this.props().ipv4GatewayName(ipv4GatewayName);
            return this;
        }

        /**
         * Property vpcId: The ID of the VPC associated with the IPv4 Gateway.
         * <p>
         * @return {@code this}
         * @param vpcId Property vpcId: The ID of the VPC associated with the IPv4 Gateway. This parameter is required.
         */
        public Builder vpcId(final java.lang.String vpcId) {
            this.props().vpcId(vpcId);
            return this;
        }
        /**
         * Property vpcId: The ID of the VPC associated with the IPv4 Gateway.
         * <p>
         * @return {@code this}
         * @param vpcId Property vpcId: The ID of the VPC associated with the IPv4 Gateway. This parameter is required.
         */
        public Builder vpcId(final com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.props().vpcId(vpcId);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.vpc.datasource.Ipv4Gateways}.
         */
        @Override
        public com.aliyun.ros.cdk.vpc.datasource.Ipv4Gateways build() {
            return new com.aliyun.ros.cdk.vpc.datasource.Ipv4Gateways(
                this.scope,
                this.id,
                this.props != null ? this.props.build() : null,
                this.enableResourcePropertyConstraint
            );
        }

        private com.aliyun.ros.cdk.vpc.datasource.Ipv4GatewaysProps.Builder props() {
            if (this.props == null) {
                this.props = new com.aliyun.ros.cdk.vpc.datasource.Ipv4GatewaysProps.Builder();
            }
            return this.props;
        }
    }
}
