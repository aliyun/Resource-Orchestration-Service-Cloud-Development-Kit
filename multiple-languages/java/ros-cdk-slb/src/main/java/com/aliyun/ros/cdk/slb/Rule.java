package com.aliyun.ros.cdk.slb;

/**
 * A ROS resource type:  `ALIYUN::SLB::Rule`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.74.0 (build 6d08790)", date = "2023-02-14T06:40:12.765Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.slb.$Module.class, fqn = "@alicloud/ros-cdk-slb.Rule")
public class Rule extends com.aliyun.ros.cdk.core.Resource {

    protected Rule(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Rule(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::SLB::Rule`.
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
    public Rule(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.slb.RuleProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::SLB::Rule`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public Rule(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.slb.RuleProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute Rules: A list of forwarding rules.
     * <p>
     * Each element of rules contains "RuleId".
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrRules() {
        return software.amazon.jsii.Kernel.get(this, "attrRules", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.slb.Rule}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.slb.Rule> {
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
        private final com.aliyun.ros.cdk.slb.RuleProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.slb.RuleProps.Builder();
        }

        /**
         * Property listenerPort: The front-end HTTPS listener port of the Server Load Balancer instance.
         * <p>
         * Valid value:
         * 1-65535
         * <p>
         * @return {@code this}
         * @param listenerPort Property listenerPort: The front-end HTTPS listener port of the Server Load Balancer instance. This parameter is required.
         */
        public Builder listenerPort(final java.lang.Number listenerPort) {
            this.props.listenerPort(listenerPort);
            return this;
        }
        /**
         * Property listenerPort: The front-end HTTPS listener port of the Server Load Balancer instance.
         * <p>
         * Valid value:
         * 1-65535
         * <p>
         * @return {@code this}
         * @param listenerPort Property listenerPort: The front-end HTTPS listener port of the Server Load Balancer instance. This parameter is required.
         */
        public Builder listenerPort(final com.aliyun.ros.cdk.core.IResolvable listenerPort) {
            this.props.listenerPort(listenerPort);
            return this;
        }

        /**
         * Property loadBalancerId: The ID of Server Load Balancer instance.
         * <p>
         * @return {@code this}
         * @param loadBalancerId Property loadBalancerId: The ID of Server Load Balancer instance. This parameter is required.
         */
        public Builder loadBalancerId(final java.lang.String loadBalancerId) {
            this.props.loadBalancerId(loadBalancerId);
            return this;
        }
        /**
         * Property loadBalancerId: The ID of Server Load Balancer instance.
         * <p>
         * @return {@code this}
         * @param loadBalancerId Property loadBalancerId: The ID of Server Load Balancer instance. This parameter is required.
         */
        public Builder loadBalancerId(final com.aliyun.ros.cdk.core.IResolvable loadBalancerId) {
            this.props.loadBalancerId(loadBalancerId);
            return this;
        }

        /**
         * Property ruleList: The forwarding rules to add.
         * <p>
         * @return {@code this}
         * @param ruleList Property ruleList: The forwarding rules to add. This parameter is required.
         */
        public Builder ruleList(final com.aliyun.ros.cdk.core.IResolvable ruleList) {
            this.props.ruleList(ruleList);
            return this;
        }
        /**
         * Property ruleList: The forwarding rules to add.
         * <p>
         * @return {@code this}
         * @param ruleList Property ruleList: The forwarding rules to add. This parameter is required.
         */
        public Builder ruleList(final java.util.List<? extends java.lang.Object> ruleList) {
            this.props.ruleList(ruleList);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.slb.Rule}.
         */
        @Override
        public com.aliyun.ros.cdk.slb.Rule build() {
            return new com.aliyun.ros.cdk.slb.Rule(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
