package com.aliyun.ros.cdk.esa;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::ESA::WafRule</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-05-07T04:16:50.280Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.esa.$Module.class, fqn = "@alicloud/ros-cdk-esa.WafRule")
public class WafRule extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.esa.IWafRule {

    protected WafRule(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected WafRule(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public WafRule(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.esa.WafRuleProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public WafRule(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.esa.WafRuleProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute Config: The configuration of the rule.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrConfig() {
        return software.amazon.jsii.Kernel.get(this, "attrConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Phase: The version of the website.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrPhase() {
        return software.amazon.jsii.Kernel.get(this, "attrPhase", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute RulesetId: The ID of the WAF ruleset, which can be obtained by calling the <a href="https://www.alibabacloud.com/help/en/doc-detail/2850233.html">ListWafRulesets</a> operation.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrRulesetId() {
        return software.amazon.jsii.Kernel.get(this, "attrRulesetId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute UpdateTime: The time when the rule was last modified.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrUpdateTime() {
        return software.amazon.jsii.Kernel.get(this, "attrUpdateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute WafRuleId: WafRule Id.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrWafRuleId() {
        return software.amazon.jsii.Kernel.get(this, "attrWafRuleId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.esa.WafRuleProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.esa.WafRuleProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.esa.WafRule}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.esa.WafRule> {
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
        private final com.aliyun.ros.cdk.esa.WafRuleProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.esa.WafRuleProps.Builder();
        }

        /**
         * Property phase: The version of the website.
         * <p>
         * @return {@code this}
         * @param phase Property phase: The version of the website. This parameter is required.
         */
        public Builder phase(final java.lang.String phase) {
            this.props.phase(phase);
            return this;
        }
        /**
         * Property phase: The version of the website.
         * <p>
         * @return {@code this}
         * @param phase Property phase: The version of the website. This parameter is required.
         */
        public Builder phase(final com.aliyun.ros.cdk.core.IResolvable phase) {
            this.props.phase(phase);
            return this;
        }

        /**
         * Property siteId: The website ID, which can be obtained by calling the <a href="https://www.alibabacloud.com/help/en/doc-detail/2850189.html">ListSites</a> operation.
         * <p>
         * @return {@code this}
         * @param siteId Property siteId: The website ID, which can be obtained by calling the <a href="https://www.alibabacloud.com/help/en/doc-detail/2850189.html">ListSites</a> operation. This parameter is required.
         */
        public Builder siteId(final java.lang.Number siteId) {
            this.props.siteId(siteId);
            return this;
        }
        /**
         * Property siteId: The website ID, which can be obtained by calling the <a href="https://www.alibabacloud.com/help/en/doc-detail/2850189.html">ListSites</a> operation.
         * <p>
         * @return {@code this}
         * @param siteId Property siteId: The website ID, which can be obtained by calling the <a href="https://www.alibabacloud.com/help/en/doc-detail/2850189.html">ListSites</a> operation. This parameter is required.
         */
        public Builder siteId(final com.aliyun.ros.cdk.core.IResolvable siteId) {
            this.props.siteId(siteId);
            return this;
        }

        /**
         * Property config: The configuration of the rule.
         * <p>
         * @return {@code this}
         * @param config Property config: The configuration of the rule. This parameter is required.
         */
        public Builder config(final com.aliyun.ros.cdk.core.IResolvable config) {
            this.props.config(config);
            return this;
        }
        /**
         * Property config: The configuration of the rule.
         * <p>
         * @return {@code this}
         * @param config Property config: The configuration of the rule. This parameter is required.
         */
        public Builder config(final com.aliyun.ros.cdk.esa.RosWafRule.ConfigProperty config) {
            this.props.config(config);
            return this;
        }

        /**
         * Property rulesetId: The ID of the WAF ruleset, which can be obtained by calling the <a href="https://www.alibabacloud.com/help/en/doc-detail/2850233.html">ListWafRulesets</a> operation.
         * <p>
         * @return {@code this}
         * @param rulesetId Property rulesetId: The ID of the WAF ruleset, which can be obtained by calling the <a href="https://www.alibabacloud.com/help/en/doc-detail/2850233.html">ListWafRulesets</a> operation. This parameter is required.
         */
        public Builder rulesetId(final java.lang.Number rulesetId) {
            this.props.rulesetId(rulesetId);
            return this;
        }
        /**
         * Property rulesetId: The ID of the WAF ruleset, which can be obtained by calling the <a href="https://www.alibabacloud.com/help/en/doc-detail/2850233.html">ListWafRulesets</a> operation.
         * <p>
         * @return {@code this}
         * @param rulesetId Property rulesetId: The ID of the WAF ruleset, which can be obtained by calling the <a href="https://www.alibabacloud.com/help/en/doc-detail/2850233.html">ListWafRulesets</a> operation. This parameter is required.
         */
        public Builder rulesetId(final com.aliyun.ros.cdk.core.IResolvable rulesetId) {
            this.props.rulesetId(rulesetId);
            return this;
        }

        /**
         * Property shared: The configurations shared by multiple rules.
         * <p>
         * @return {@code this}
         * @param shared Property shared: The configurations shared by multiple rules. This parameter is required.
         */
        public Builder shared(final com.aliyun.ros.cdk.core.IResolvable shared) {
            this.props.shared(shared);
            return this;
        }
        /**
         * Property shared: The configurations shared by multiple rules.
         * <p>
         * @return {@code this}
         * @param shared Property shared: The configurations shared by multiple rules. This parameter is required.
         */
        public Builder shared(final com.aliyun.ros.cdk.esa.RosWafRule.SharedProperty shared) {
            this.props.shared(shared);
            return this;
        }

        /**
         * Property siteVersion: The website ID, which can be obtained by calling the <a href="https://www.alibabacloud.com/help/en/doc-detail/2850189.html">ListSites</a> operation.
         * <p>
         * @return {@code this}
         * @param siteVersion Property siteVersion: The website ID, which can be obtained by calling the <a href="https://www.alibabacloud.com/help/en/doc-detail/2850189.html">ListSites</a> operation. This parameter is required.
         */
        public Builder siteVersion(final java.lang.Number siteVersion) {
            this.props.siteVersion(siteVersion);
            return this;
        }
        /**
         * Property siteVersion: The website ID, which can be obtained by calling the <a href="https://www.alibabacloud.com/help/en/doc-detail/2850189.html">ListSites</a> operation.
         * <p>
         * @return {@code this}
         * @param siteVersion Property siteVersion: The website ID, which can be obtained by calling the <a href="https://www.alibabacloud.com/help/en/doc-detail/2850189.html">ListSites</a> operation. This parameter is required.
         */
        public Builder siteVersion(final com.aliyun.ros.cdk.core.IResolvable siteVersion) {
            this.props.siteVersion(siteVersion);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.esa.WafRule}.
         */
        @Override
        public com.aliyun.ros.cdk.esa.WafRule build() {
            return new com.aliyun.ros.cdk.esa.WafRule(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
