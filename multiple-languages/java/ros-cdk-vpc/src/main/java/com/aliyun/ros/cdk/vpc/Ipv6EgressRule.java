package com.aliyun.ros.cdk.vpc;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::VPC::Ipv6EgressRule</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T14:04:31.483Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.Ipv6EgressRule")
public class Ipv6EgressRule extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.vpc.IIpv6EgressRule {

    protected Ipv6EgressRule(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Ipv6EgressRule(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public Ipv6EgressRule(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.Ipv6EgressRuleProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public Ipv6EgressRule(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.Ipv6EgressRuleProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute Description: The description of the egress-only rule.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription() {
        return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute InstanceId: The ID of the IPv6 address for which you want to create an egress-only rule.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute InstanceType: The type of the instance to which you want to apply the egress-only rule.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceType() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Ipv6EgressRuleId: The ID of the egress-only rule that you want to delete.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrIpv6EgressRuleId() {
        return software.amazon.jsii.Kernel.get(this, "attrIpv6EgressRuleId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Ipv6EgressRuleName: The name of the egress-only rule.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrIpv6EgressRuleName() {
        return software.amazon.jsii.Kernel.get(this, "attrIpv6EgressRuleName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.Ipv6EgressRuleProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.vpc.Ipv6EgressRuleProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.vpc.Ipv6EgressRule}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.vpc.Ipv6EgressRule> {
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
        private final com.aliyun.ros.cdk.vpc.Ipv6EgressRuleProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.vpc.Ipv6EgressRuleProps.Builder();
        }

        /**
         * Property instanceId: The ID of the IPv6 address for which you want to create an egress-only rule.
         * <p>
         * @return {@code this}
         * @param instanceId Property instanceId: The ID of the IPv6 address for which you want to create an egress-only rule. This parameter is required.
         */
        public Builder instanceId(final java.lang.String instanceId) {
            this.props.instanceId(instanceId);
            return this;
        }
        /**
         * Property instanceId: The ID of the IPv6 address for which you want to create an egress-only rule.
         * <p>
         * @return {@code this}
         * @param instanceId Property instanceId: The ID of the IPv6 address for which you want to create an egress-only rule. This parameter is required.
         */
        public Builder instanceId(final com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.props.instanceId(instanceId);
            return this;
        }

        /**
         * Property ipv6GatewayId: The ID of the IPv6 gateway.
         * <p>
         * @return {@code this}
         * @param ipv6GatewayId Property ipv6GatewayId: The ID of the IPv6 gateway. This parameter is required.
         */
        public Builder ipv6GatewayId(final java.lang.String ipv6GatewayId) {
            this.props.ipv6GatewayId(ipv6GatewayId);
            return this;
        }
        /**
         * Property ipv6GatewayId: The ID of the IPv6 gateway.
         * <p>
         * @return {@code this}
         * @param ipv6GatewayId Property ipv6GatewayId: The ID of the IPv6 gateway. This parameter is required.
         */
        public Builder ipv6GatewayId(final com.aliyun.ros.cdk.core.IResolvable ipv6GatewayId) {
            this.props.ipv6GatewayId(ipv6GatewayId);
            return this;
        }

        /**
         * Property description: The description of the egress-only rule.
         * <p>
         * The description must be 0 to 256 characters in length and cannot start with <code>http:\/\/</code> or <code>https:\/\/</code>.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the egress-only rule. This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * Property description: The description of the egress-only rule.
         * <p>
         * The description must be 0 to 256 characters in length and cannot start with <code>http:\/\/</code> or <code>https:\/\/</code>.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the egress-only rule. This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * Property instanceType: The type of the instance to which you want to apply the egress-only rule.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>IPv6Address (default)</li>
         * <li>IPv6Prefix.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param instanceType Property instanceType: The type of the instance to which you want to apply the egress-only rule. This parameter is required.
         */
        public Builder instanceType(final java.lang.String instanceType) {
            this.props.instanceType(instanceType);
            return this;
        }
        /**
         * Property instanceType: The type of the instance to which you want to apply the egress-only rule.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>IPv6Address (default)</li>
         * <li>IPv6Prefix.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param instanceType Property instanceType: The type of the instance to which you want to apply the egress-only rule. This parameter is required.
         */
        public Builder instanceType(final com.aliyun.ros.cdk.core.IResolvable instanceType) {
            this.props.instanceType(instanceType);
            return this;
        }

        /**
         * Property ipv6EgressRuleName: The name of the egress-only rule.
         * <p>
         * The name must be 0 to 128 characters in length and cannot start with <code>http:\/\/</code> or <code>https:\/\/</code>.
         * <p>
         * @return {@code this}
         * @param ipv6EgressRuleName Property ipv6EgressRuleName: The name of the egress-only rule. This parameter is required.
         */
        public Builder ipv6EgressRuleName(final java.lang.String ipv6EgressRuleName) {
            this.props.ipv6EgressRuleName(ipv6EgressRuleName);
            return this;
        }
        /**
         * Property ipv6EgressRuleName: The name of the egress-only rule.
         * <p>
         * The name must be 0 to 128 characters in length and cannot start with <code>http:\/\/</code> or <code>https:\/\/</code>.
         * <p>
         * @return {@code this}
         * @param ipv6EgressRuleName Property ipv6EgressRuleName: The name of the egress-only rule. This parameter is required.
         */
        public Builder ipv6EgressRuleName(final com.aliyun.ros.cdk.core.IResolvable ipv6EgressRuleName) {
            this.props.ipv6EgressRuleName(ipv6EgressRuleName);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.vpc.Ipv6EgressRule}.
         */
        @Override
        public com.aliyun.ros.cdk.vpc.Ipv6EgressRule build() {
            return new com.aliyun.ros.cdk.vpc.Ipv6EgressRule(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
