package com.aliyun.ros.cdk.esa;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::ESA::WaitingRoomRule</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T11:49:07.954Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.esa.$Module.class, fqn = "@alicloud/ros-cdk-esa.WaitingRoomRule")
public class WaitingRoomRule extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.esa.IWaitingRoomRule {

    protected WaitingRoomRule(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected WaitingRoomRule(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public WaitingRoomRule(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.esa.WaitingRoomRuleProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public WaitingRoomRule(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.esa.WaitingRoomRuleProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute Rule: The content of the rule, the implemented policy or conditional expression.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrRule() {
        return software.amazon.jsii.Kernel.get(this, "attrRule", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute RuleEnable: Rule switch.
     * <p>
     * When adding global configuration, this parameter does not need to be set.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrRuleEnable() {
        return software.amazon.jsii.Kernel.get(this, "attrRuleEnable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute RuleName: Rule name, optional, used to query by waiting room bypass rule name.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrRuleName() {
        return software.amazon.jsii.Kernel.get(this, "attrRuleName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute WaitingRoomRuleId: The rule ID, which can be used to query a specific rule.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrWaitingRoomRuleId() {
        return software.amazon.jsii.Kernel.get(this, "attrWaitingRoomRuleId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.esa.WaitingRoomRuleProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.esa.WaitingRoomRuleProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.esa.WaitingRoomRule}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.esa.WaitingRoomRule> {
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
        private final com.aliyun.ros.cdk.esa.WaitingRoomRuleProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.esa.WaitingRoomRuleProps.Builder();
        }

        /**
         * Property rule: The content of the rule, the implemented policy or conditional expression.
         * <p>
         * @return {@code this}
         * @param rule Property rule: The content of the rule, the implemented policy or conditional expression. This parameter is required.
         */
        public Builder rule(final java.lang.String rule) {
            this.props.rule(rule);
            return this;
        }
        /**
         * Property rule: The content of the rule, the implemented policy or conditional expression.
         * <p>
         * @return {@code this}
         * @param rule Property rule: The content of the rule, the implemented policy or conditional expression. This parameter is required.
         */
        public Builder rule(final com.aliyun.ros.cdk.core.IResolvable rule) {
            this.props.rule(rule);
            return this;
        }

        /**
         * Property ruleEnable: Rule switch.
         * <p>
         * When adding global configuration, this parameter does not need to be set. Value range:
         * <p>
         * <ul>
         * <li>on: open.</li>
         * <li>off: close.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param ruleEnable Property ruleEnable: Rule switch. This parameter is required.
         */
        public Builder ruleEnable(final java.lang.String ruleEnable) {
            this.props.ruleEnable(ruleEnable);
            return this;
        }
        /**
         * Property ruleEnable: Rule switch.
         * <p>
         * When adding global configuration, this parameter does not need to be set. Value range:
         * <p>
         * <ul>
         * <li>on: open.</li>
         * <li>off: close.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param ruleEnable Property ruleEnable: Rule switch. This parameter is required.
         */
        public Builder ruleEnable(final com.aliyun.ros.cdk.core.IResolvable ruleEnable) {
            this.props.ruleEnable(ruleEnable);
            return this;
        }

        /**
         * Property ruleName: Rule name, optional, used to query by waiting room bypass rule name.
         * <p>
         * @return {@code this}
         * @param ruleName Property ruleName: Rule name, optional, used to query by waiting room bypass rule name. This parameter is required.
         */
        public Builder ruleName(final java.lang.String ruleName) {
            this.props.ruleName(ruleName);
            return this;
        }
        /**
         * Property ruleName: Rule name, optional, used to query by waiting room bypass rule name.
         * <p>
         * @return {@code this}
         * @param ruleName Property ruleName: Rule name, optional, used to query by waiting room bypass rule name. This parameter is required.
         */
        public Builder ruleName(final com.aliyun.ros.cdk.core.IResolvable ruleName) {
            this.props.ruleName(ruleName);
            return this;
        }

        /**
         * Property siteId: The site ID, which can be obtained by calling the ListSites API.
         * <p>
         * @return {@code this}
         * @param siteId Property siteId: The site ID, which can be obtained by calling the ListSites API. This parameter is required.
         */
        public Builder siteId(final java.lang.Number siteId) {
            this.props.siteId(siteId);
            return this;
        }
        /**
         * Property siteId: The site ID, which can be obtained by calling the ListSites API.
         * <p>
         * @return {@code this}
         * @param siteId Property siteId: The site ID, which can be obtained by calling the ListSites API. This parameter is required.
         */
        public Builder siteId(final com.aliyun.ros.cdk.core.IResolvable siteId) {
            this.props.siteId(siteId);
            return this;
        }

        /**
         * Property waitingRoomId: Waiting room ID, used to identify a specific waiting room.
         * <p>
         * It can be obtained by calling the <a href="https://help.aliyun.com/document_detail/2850279.html">listwaitingroom</a> interface.
         * <p>
         * @return {@code this}
         * @param waitingRoomId Property waitingRoomId: Waiting room ID, used to identify a specific waiting room. This parameter is required.
         */
        public Builder waitingRoomId(final java.lang.String waitingRoomId) {
            this.props.waitingRoomId(waitingRoomId);
            return this;
        }
        /**
         * Property waitingRoomId: Waiting room ID, used to identify a specific waiting room.
         * <p>
         * It can be obtained by calling the <a href="https://help.aliyun.com/document_detail/2850279.html">listwaitingroom</a> interface.
         * <p>
         * @return {@code this}
         * @param waitingRoomId Property waitingRoomId: Waiting room ID, used to identify a specific waiting room. This parameter is required.
         */
        public Builder waitingRoomId(final com.aliyun.ros.cdk.core.IResolvable waitingRoomId) {
            this.props.waitingRoomId(waitingRoomId);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.esa.WaitingRoomRule}.
         */
        @Override
        public com.aliyun.ros.cdk.esa.WaitingRoomRule build() {
            return new com.aliyun.ros.cdk.esa.WaitingRoomRule(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
