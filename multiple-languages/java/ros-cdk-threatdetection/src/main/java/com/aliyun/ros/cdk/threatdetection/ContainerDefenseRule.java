package com.aliyun.ros.cdk.threatdetection;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::ThreatDetection::ContainerDefenseRule</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T13:59:58.442Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.threatdetection.$Module.class, fqn = "@alicloud/ros-cdk-threatdetection.ContainerDefenseRule")
public class ContainerDefenseRule extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.threatdetection.IContainerDefenseRule {

    protected ContainerDefenseRule(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected ContainerDefenseRule(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props
     * @param enableResourcePropertyConstraint
     */
    public ContainerDefenseRule(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.threatdetection.ContainerDefenseRuleProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props, enableResourcePropertyConstraint });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props
     */
    public ContainerDefenseRule(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.threatdetection.ContainerDefenseRuleProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     */
    public ContainerDefenseRule(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required") });
    }

    /**
     * Attribute Description: Rule description.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription() {
        return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute RuleAction: The action that is performed when the rule is hit.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrRuleAction() {
        return software.amazon.jsii.Kernel.get(this, "attrRuleAction", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute RuleId: Rule Id.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrRuleId() {
        return software.amazon.jsii.Kernel.get(this, "attrRuleId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute RuleName: The name of the rule.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrRuleName() {
        return software.amazon.jsii.Kernel.get(this, "attrRuleName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute RuleSwitch: The switch of the rule.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrRuleSwitch() {
        return software.amazon.jsii.Kernel.get(this, "attrRuleSwitch", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute RuleType: The rule type.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrRuleType() {
        return software.amazon.jsii.Kernel.get(this, "attrRuleType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Scope: Rule scope.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrScope() {
        return software.amazon.jsii.Kernel.get(this, "attrScope", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Whitelist: The whitelist of rule.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrWhitelist() {
        return software.amazon.jsii.Kernel.get(this, "attrWhitelist", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.threatdetection.ContainerDefenseRuleProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.threatdetection.ContainerDefenseRuleProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.threatdetection.ContainerDefenseRule}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.threatdetection.ContainerDefenseRule> {
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
        private com.aliyun.ros.cdk.threatdetection.ContainerDefenseRuleProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        }

        /**
         * Property description: Rule description.
         * <p>
         * @return {@code this}
         * @param description Property description: Rule description. This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props().description(description);
            return this;
        }
        /**
         * Property description: Rule description.
         * <p>
         * @return {@code this}
         * @param description Property description: Rule description. This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props().description(description);
            return this;
        }

        /**
         * Property ruleAction: The action that is performed when the rule is hit.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li><strong>1</strong>: alert</li>
         * <li><strong>2</strong>: block.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param ruleAction Property ruleAction: The action that is performed when the rule is hit. This parameter is required.
         */
        public Builder ruleAction(final java.lang.Number ruleAction) {
            this.props().ruleAction(ruleAction);
            return this;
        }
        /**
         * Property ruleAction: The action that is performed when the rule is hit.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li><strong>1</strong>: alert</li>
         * <li><strong>2</strong>: block.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param ruleAction Property ruleAction: The action that is performed when the rule is hit. This parameter is required.
         */
        public Builder ruleAction(final com.aliyun.ros.cdk.core.IResolvable ruleAction) {
            this.props().ruleAction(ruleAction);
            return this;
        }

        /**
         * Property ruleId: Rule Id.
         * <p>
         * @return {@code this}
         * @param ruleId Property ruleId: Rule Id. This parameter is required.
         */
        public Builder ruleId(final java.lang.Number ruleId) {
            this.props().ruleId(ruleId);
            return this;
        }
        /**
         * Property ruleId: Rule Id.
         * <p>
         * @return {@code this}
         * @param ruleId Property ruleId: Rule Id. This parameter is required.
         */
        public Builder ruleId(final com.aliyun.ros.cdk.core.IResolvable ruleId) {
            this.props().ruleId(ruleId);
            return this;
        }

        /**
         * Property ruleName: The name of the rule.
         * <p>
         * @return {@code this}
         * @param ruleName Property ruleName: The name of the rule. This parameter is required.
         */
        public Builder ruleName(final java.lang.String ruleName) {
            this.props().ruleName(ruleName);
            return this;
        }
        /**
         * Property ruleName: The name of the rule.
         * <p>
         * @return {@code this}
         * @param ruleName Property ruleName: The name of the rule. This parameter is required.
         */
        public Builder ruleName(final com.aliyun.ros.cdk.core.IResolvable ruleName) {
            this.props().ruleName(ruleName);
            return this;
        }

        /**
         * Property ruleSwitch: The switch of the rule.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>0: off.</li>
         * <li>1: on.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param ruleSwitch Property ruleSwitch: The switch of the rule. This parameter is required.
         */
        public Builder ruleSwitch(final java.lang.Number ruleSwitch) {
            this.props().ruleSwitch(ruleSwitch);
            return this;
        }
        /**
         * Property ruleSwitch: The switch of the rule.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>0: off.</li>
         * <li>1: on.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param ruleSwitch Property ruleSwitch: The switch of the rule. This parameter is required.
         */
        public Builder ruleSwitch(final com.aliyun.ros.cdk.core.IResolvable ruleSwitch) {
            this.props().ruleSwitch(ruleSwitch);
            return this;
        }

        /**
         * Property ruleType: The rule type.
         * <p>
         * Value:
         * <p>
         * <ul>
         * <li>2: User Rules</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param ruleType Property ruleType: The rule type. This parameter is required.
         */
        public Builder ruleType(final java.lang.Number ruleType) {
            this.props().ruleType(ruleType);
            return this;
        }
        /**
         * Property ruleType: The rule type.
         * <p>
         * Value:
         * <p>
         * <ul>
         * <li>2: User Rules</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param ruleType Property ruleType: The rule type. This parameter is required.
         */
        public Builder ruleType(final com.aliyun.ros.cdk.core.IResolvable ruleType) {
            this.props().ruleType(ruleType);
            return this;
        }

        /**
         * Property scope: Rule scope.
         * <p>
         * @return {@code this}
         * @param scope Property scope: Rule scope. This parameter is required.
         */
        public Builder scope(final com.aliyun.ros.cdk.core.IResolvable scope) {
            this.props().scope(scope);
            return this;
        }
        /**
         * Property scope: Rule scope.
         * <p>
         * @return {@code this}
         * @param scope Property scope: Rule scope. This parameter is required.
         */
        public Builder scope(final java.util.List<? extends java.lang.Object> scope) {
            this.props().scope(scope);
            return this;
        }

        /**
         * Property whitelist: The whitelist of rule.
         * <p>
         * @return {@code this}
         * @param whitelist Property whitelist: The whitelist of rule. This parameter is required.
         */
        public Builder whitelist(final com.aliyun.ros.cdk.core.IResolvable whitelist) {
            this.props().whitelist(whitelist);
            return this;
        }
        /**
         * Property whitelist: The whitelist of rule.
         * <p>
         * @return {@code this}
         * @param whitelist Property whitelist: The whitelist of rule. This parameter is required.
         */
        public Builder whitelist(final com.aliyun.ros.cdk.threatdetection.RosContainerDefenseRule.WhitelistProperty whitelist) {
            this.props().whitelist(whitelist);
            return this;
        }

        /**
         * Property whitelistHash: The whitelist Hash.
         * <p>
         * @return {@code this}
         * @param whitelistHash Property whitelistHash: The whitelist Hash. This parameter is required.
         */
        public Builder whitelistHash(final java.lang.String whitelistHash) {
            this.props().whitelistHash(whitelistHash);
            return this;
        }
        /**
         * Property whitelistHash: The whitelist Hash.
         * <p>
         * @return {@code this}
         * @param whitelistHash Property whitelistHash: The whitelist Hash. This parameter is required.
         */
        public Builder whitelistHash(final com.aliyun.ros.cdk.core.IResolvable whitelistHash) {
            this.props().whitelistHash(whitelistHash);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.threatdetection.ContainerDefenseRule}.
         */
        @Override
        public com.aliyun.ros.cdk.threatdetection.ContainerDefenseRule build() {
            return new com.aliyun.ros.cdk.threatdetection.ContainerDefenseRule(
                this.scope,
                this.id,
                this.props != null ? this.props.build() : null,
                this.enableResourcePropertyConstraint
            );
        }

        private com.aliyun.ros.cdk.threatdetection.ContainerDefenseRuleProps.Builder props() {
            if (this.props == null) {
                this.props = new com.aliyun.ros.cdk.threatdetection.ContainerDefenseRuleProps.Builder();
            }
            return this.props;
        }
    }
}
