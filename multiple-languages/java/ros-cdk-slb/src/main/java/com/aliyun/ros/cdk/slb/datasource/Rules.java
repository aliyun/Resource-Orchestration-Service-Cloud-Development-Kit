package com.aliyun.ros.cdk.slb.datasource;

/**
 * A ROS resource type:  <code>DATASOURCE::SLB::Rules</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.88.0 (build eaabd08)", date = "2023-09-01T09:26:39.936Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.slb.$Module.class, fqn = "@alicloud/ros-cdk-slb.datasource.Rules")
public class Rules extends com.aliyun.ros.cdk.core.Resource {

    protected Rules(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Rules(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new <code>DATASOURCE::SLB::Rules</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public Rules(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.slb.datasource.RulesProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new <code>DATASOURCE::SLB::Rules</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public Rules(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.slb.datasource.RulesProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute RuleIds: The list of rule IDs.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrRuleIds() {
        return software.amazon.jsii.Kernel.get(this, "attrRuleIds", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Rules: The list of rules.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrRules() {
        return software.amazon.jsii.Kernel.get(this, "attrRules", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.slb.datasource.Rules}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.slb.datasource.Rules> {
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
        private final com.aliyun.ros.cdk.slb.datasource.RulesProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.slb.datasource.RulesProps.Builder();
        }

        /**
         * Property listenerPort: The frontend listener port that is used by the Classic Load Balancer (CLB) instance.
         * <p>
         * @return {@code this}
         * @param listenerPort Property listenerPort: The frontend listener port that is used by the Classic Load Balancer (CLB) instance. This parameter is required.
         */
        public Builder listenerPort(final java.lang.String listenerPort) {
            this.props.listenerPort(listenerPort);
            return this;
        }
        /**
         * Property listenerPort: The frontend listener port that is used by the Classic Load Balancer (CLB) instance.
         * <p>
         * @return {@code this}
         * @param listenerPort Property listenerPort: The frontend listener port that is used by the Classic Load Balancer (CLB) instance. This parameter is required.
         */
        public Builder listenerPort(final com.aliyun.ros.cdk.core.IResolvable listenerPort) {
            this.props.listenerPort(listenerPort);
            return this;
        }

        /**
         * Property loadBalancerId: The ID of the CLB instance.
         * <p>
         * @return {@code this}
         * @param loadBalancerId Property loadBalancerId: The ID of the CLB instance. This parameter is required.
         */
        public Builder loadBalancerId(final java.lang.String loadBalancerId) {
            this.props.loadBalancerId(loadBalancerId);
            return this;
        }
        /**
         * Property loadBalancerId: The ID of the CLB instance.
         * <p>
         * @return {@code this}
         * @param loadBalancerId Property loadBalancerId: The ID of the CLB instance. This parameter is required.
         */
        public Builder loadBalancerId(final com.aliyun.ros.cdk.core.IResolvable loadBalancerId) {
            this.props.loadBalancerId(loadBalancerId);
            return this;
        }

        /**
         * Property listenerProtocol: The frontend listener protocol that is used by the SLB instance.
         * <p>
         * @return {@code this}
         * @param listenerProtocol Property listenerProtocol: The frontend listener protocol that is used by the SLB instance. This parameter is required.
         */
        public Builder listenerProtocol(final java.lang.String listenerProtocol) {
            this.props.listenerProtocol(listenerProtocol);
            return this;
        }
        /**
         * Property listenerProtocol: The frontend listener protocol that is used by the SLB instance.
         * <p>
         * @return {@code this}
         * @param listenerProtocol Property listenerProtocol: The frontend listener protocol that is used by the SLB instance. This parameter is required.
         */
        public Builder listenerProtocol(final com.aliyun.ros.cdk.core.IResolvable listenerProtocol) {
            this.props.listenerProtocol(listenerProtocol);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.slb.datasource.Rules}.
         */
        @Override
        public com.aliyun.ros.cdk.slb.datasource.Rules build() {
            return new com.aliyun.ros.cdk.slb.datasource.Rules(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
