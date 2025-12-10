package com.aliyun.ros.cdk.alb;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::ALB::Rule</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:52.103Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.alb.$Module.class, fqn = "@alicloud/ros-cdk-alb.Rule")
public class Rule extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.alb.IRule {

    protected Rule(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Rule(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public Rule(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.alb.RuleProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public Rule(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.alb.RuleProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute ListenerId: The ID of the listener.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrListenerId() {
        return software.amazon.jsii.Kernel.get(this, "attrListenerId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute RuleId: The ID of the forwarding rules.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrRuleId() {
        return software.amazon.jsii.Kernel.get(this, "attrRuleId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.alb.RuleProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.alb.RuleProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.alb.Rule}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.alb.Rule> {
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
        private final com.aliyun.ros.cdk.alb.RuleProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.alb.RuleProps.Builder();
        }

        /**
         * Property listenerId: The ID of the listener that is configured for the Application Load Balancer (ALB) instance.
         * <p>
         * @return {@code this}
         * @param listenerId Property listenerId: The ID of the listener that is configured for the Application Load Balancer (ALB) instance. This parameter is required.
         */
        public Builder listenerId(final java.lang.String listenerId) {
            this.props.listenerId(listenerId);
            return this;
        }
        /**
         * Property listenerId: The ID of the listener that is configured for the Application Load Balancer (ALB) instance.
         * <p>
         * @return {@code this}
         * @param listenerId Property listenerId: The ID of the listener that is configured for the Application Load Balancer (ALB) instance. This parameter is required.
         */
        public Builder listenerId(final com.aliyun.ros.cdk.core.IResolvable listenerId) {
            this.props.listenerId(listenerId);
            return this;
        }

        /**
         * Property priority: The priority of the forwarding rule.
         * <p>
         * Valid values: 1 to 10000. A lower value specifies a higher priority.
         * Note The priority of each forwarding rule within a listener must be unique.
         * <p>
         * @return {@code this}
         * @param priority Property priority: The priority of the forwarding rule. This parameter is required.
         */
        public Builder priority(final java.lang.Number priority) {
            this.props.priority(priority);
            return this;
        }
        /**
         * Property priority: The priority of the forwarding rule.
         * <p>
         * Valid values: 1 to 10000. A lower value specifies a higher priority.
         * Note The priority of each forwarding rule within a listener must be unique.
         * <p>
         * @return {@code this}
         * @param priority Property priority: The priority of the forwarding rule. This parameter is required.
         */
        public Builder priority(final com.aliyun.ros.cdk.core.IResolvable priority) {
            this.props.priority(priority);
            return this;
        }

        /**
         * Property ruleActions: The actions of the forwarding rule.
         * <p>
         * @return {@code this}
         * @param ruleActions Property ruleActions: The actions of the forwarding rule. This parameter is required.
         */
        public Builder ruleActions(final com.aliyun.ros.cdk.core.IResolvable ruleActions) {
            this.props.ruleActions(ruleActions);
            return this;
        }
        /**
         * Property ruleActions: The actions of the forwarding rule.
         * <p>
         * @return {@code this}
         * @param ruleActions Property ruleActions: The actions of the forwarding rule. This parameter is required.
         */
        public Builder ruleActions(final java.util.List<? extends java.lang.Object> ruleActions) {
            this.props.ruleActions(ruleActions);
            return this;
        }

        /**
         * Property ruleConditions: The conditions of the forwarding rule.
         * <p>
         * @return {@code this}
         * @param ruleConditions Property ruleConditions: The conditions of the forwarding rule. This parameter is required.
         */
        public Builder ruleConditions(final com.aliyun.ros.cdk.core.IResolvable ruleConditions) {
            this.props.ruleConditions(ruleConditions);
            return this;
        }
        /**
         * Property ruleConditions: The conditions of the forwarding rule.
         * <p>
         * @return {@code this}
         * @param ruleConditions Property ruleConditions: The conditions of the forwarding rule. This parameter is required.
         */
        public Builder ruleConditions(final java.util.List<? extends java.lang.Object> ruleConditions) {
            this.props.ruleConditions(ruleConditions);
            return this;
        }

        /**
         * Property ruleName: The name of the forwarding rule.
         * <p>
         * The name must be 2 to 128 characters in length.
         * It can contain letters, digits, periods (.), underscores (_), and hyphens (-). It
         * must start with a letter.
         * <p>
         * @return {@code this}
         * @param ruleName Property ruleName: The name of the forwarding rule. This parameter is required.
         */
        public Builder ruleName(final java.lang.String ruleName) {
            this.props.ruleName(ruleName);
            return this;
        }
        /**
         * Property ruleName: The name of the forwarding rule.
         * <p>
         * The name must be 2 to 128 characters in length.
         * It can contain letters, digits, periods (.), underscores (_), and hyphens (-). It
         * must start with a letter.
         * <p>
         * @return {@code this}
         * @param ruleName Property ruleName: The name of the forwarding rule. This parameter is required.
         */
        public Builder ruleName(final com.aliyun.ros.cdk.core.IResolvable ruleName) {
            this.props.ruleName(ruleName);
            return this;
        }

        /**
         * Property direction: Rule direction.
         * <p>
         * Valid values: Request or Response.
         * <p>
         * @return {@code this}
         * @param direction Property direction: Rule direction. This parameter is required.
         */
        public Builder direction(final java.lang.String direction) {
            this.props.direction(direction);
            return this;
        }
        /**
         * Property direction: Rule direction.
         * <p>
         * Valid values: Request or Response.
         * <p>
         * @return {@code this}
         * @param direction Property direction: Rule direction. This parameter is required.
         */
        public Builder direction(final com.aliyun.ros.cdk.core.IResolvable direction) {
            this.props.direction(direction);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.alb.Rule}.
         */
        @Override
        public com.aliyun.ros.cdk.alb.Rule build() {
            return new com.aliyun.ros.cdk.alb.Rule(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
