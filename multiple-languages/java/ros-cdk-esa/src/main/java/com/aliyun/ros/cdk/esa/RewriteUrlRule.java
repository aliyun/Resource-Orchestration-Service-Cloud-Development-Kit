package com.aliyun.ros.cdk.esa;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::ESA::RewriteUrlRule</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-05-07T04:16:50.096Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.esa.$Module.class, fqn = "@alicloud/ros-cdk-esa.RewriteUrlRule")
public class RewriteUrlRule extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.esa.IRewriteUrlRule {

    protected RewriteUrlRule(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RewriteUrlRule(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public RewriteUrlRule(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.esa.RewriteUrlRuleProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public RewriteUrlRule(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.esa.RewriteUrlRuleProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute ConfigId: The configuration ID.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrConfigId() {
        return software.amazon.jsii.Kernel.get(this, "attrConfigId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ConfigType: Configuration type.
     * <p>
     * This parameter determines whether to query global configurations or feature-specific configurations. Note: This logic only takes effect if the functionName parameter is also provided.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrConfigType() {
        return software.amazon.jsii.Kernel.get(this, "attrConfigType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute QueryString: The desired query string to which you want to rewrite the query string in the original request.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrQueryString() {
        return software.amazon.jsii.Kernel.get(this, "attrQueryString", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute RewriteQueryStringType: Query string rewrite type.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrRewriteQueryStringType() {
        return software.amazon.jsii.Kernel.get(this, "attrRewriteQueryStringType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute RewriteUriType: URI rewrite type.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrRewriteUriType() {
        return software.amazon.jsii.Kernel.get(this, "attrRewriteUriType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Rule: Rule content, using conditional expressions to match user requests.
     * <p>
     * When adding global configuration, this parameter does not need to be set.
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
     * Attribute RuleName: Rule name.
     * <p>
     * When adding global configuration, this parameter does not need to be set.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrRuleName() {
        return software.amazon.jsii.Kernel.get(this, "attrRuleName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Sequence: Rule execution order.
     * <p>
     * The smaller the value, the higher the priority of execution.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrSequence() {
        return software.amazon.jsii.Kernel.get(this, "attrSequence", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute SiteVersion: Version number of the site configuration.
     * <p>
     * For a site with configuration version management enabled, you can use this parameter to specify the site version in which the configuration takes effect. The default version is 0.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrSiteVersion() {
        return software.amazon.jsii.Kernel.get(this, "attrSiteVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Uri: The desired URI to which you want to rewrite the path in the original request.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrUri() {
        return software.amazon.jsii.Kernel.get(this, "attrUri", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.esa.RewriteUrlRuleProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.esa.RewriteUrlRuleProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.esa.RewriteUrlRule}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.esa.RewriteUrlRule> {
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
        private final com.aliyun.ros.cdk.esa.RewriteUrlRuleProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.esa.RewriteUrlRuleProps.Builder();
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
         * Property queryString: The desired query string to which you want to rewrite the query string in the original request.
         * <p>
         * @return {@code this}
         * @param queryString Property queryString: The desired query string to which you want to rewrite the query string in the original request. This parameter is required.
         */
        public Builder queryString(final java.lang.String queryString) {
            this.props.queryString(queryString);
            return this;
        }
        /**
         * Property queryString: The desired query string to which you want to rewrite the query string in the original request.
         * <p>
         * @return {@code this}
         * @param queryString Property queryString: The desired query string to which you want to rewrite the query string in the original request. This parameter is required.
         */
        public Builder queryString(final com.aliyun.ros.cdk.core.IResolvable queryString) {
            this.props.queryString(queryString);
            return this;
        }

        /**
         * Property rewriteQueryStringType: Query string rewrite type.
         * <p>
         * Value range:
         * <p>
         * <ul>
         * <li><code>static</code>: Static mode.</li>
         * <li><code>dynamic</code>: Dynamic mode.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param rewriteQueryStringType Property rewriteQueryStringType: Query string rewrite type. This parameter is required.
         */
        public Builder rewriteQueryStringType(final java.lang.String rewriteQueryStringType) {
            this.props.rewriteQueryStringType(rewriteQueryStringType);
            return this;
        }
        /**
         * Property rewriteQueryStringType: Query string rewrite type.
         * <p>
         * Value range:
         * <p>
         * <ul>
         * <li><code>static</code>: Static mode.</li>
         * <li><code>dynamic</code>: Dynamic mode.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param rewriteQueryStringType Property rewriteQueryStringType: Query string rewrite type. This parameter is required.
         */
        public Builder rewriteQueryStringType(final com.aliyun.ros.cdk.core.IResolvable rewriteQueryStringType) {
            this.props.rewriteQueryStringType(rewriteQueryStringType);
            return this;
        }

        /**
         * Property rewriteUriType: URI rewrite type.
         * <p>
         * Value range:
         * <p>
         * <ul>
         * <li><code>static</code>: Static mode.</li>
         * <li><code>dynamic</code>: Dynamic mode.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param rewriteUriType Property rewriteUriType: URI rewrite type. This parameter is required.
         */
        public Builder rewriteUriType(final java.lang.String rewriteUriType) {
            this.props.rewriteUriType(rewriteUriType);
            return this;
        }
        /**
         * Property rewriteUriType: URI rewrite type.
         * <p>
         * Value range:
         * <p>
         * <ul>
         * <li><code>static</code>: Static mode.</li>
         * <li><code>dynamic</code>: Dynamic mode.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param rewriteUriType Property rewriteUriType: URI rewrite type. This parameter is required.
         */
        public Builder rewriteUriType(final com.aliyun.ros.cdk.core.IResolvable rewriteUriType) {
            this.props.rewriteUriType(rewriteUriType);
            return this;
        }

        /**
         * Property rule: Rule content, using conditional expressions to match user requests.
         * <p>
         * When adding global configuration, this parameter does not need to be set. There are two usage scenarios:
         * Match all incoming requests: value set to true
         * Match specified request: Set the value to a custom expression, for example: (http.host eq "video.example.com").
         * <p>
         * @return {@code this}
         * @param rule Property rule: Rule content, using conditional expressions to match user requests. This parameter is required.
         */
        public Builder rule(final java.lang.String rule) {
            this.props.rule(rule);
            return this;
        }
        /**
         * Property rule: Rule content, using conditional expressions to match user requests.
         * <p>
         * When adding global configuration, this parameter does not need to be set. There are two usage scenarios:
         * Match all incoming requests: value set to true
         * Match specified request: Set the value to a custom expression, for example: (http.host eq "video.example.com").
         * <p>
         * @return {@code this}
         * @param rule Property rule: Rule content, using conditional expressions to match user requests. This parameter is required.
         */
        public Builder rule(final com.aliyun.ros.cdk.core.IResolvable rule) {
            this.props.rule(rule);
            return this;
        }

        /**
         * Property ruleEnable: Rule switch.
         * <p>
         * When adding global configuration, this parameter does not need to be set. Value range:
         * on: open.
         * off: close.
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
         * on: open.
         * off: close.
         * <p>
         * @return {@code this}
         * @param ruleEnable Property ruleEnable: Rule switch. This parameter is required.
         */
        public Builder ruleEnable(final com.aliyun.ros.cdk.core.IResolvable ruleEnable) {
            this.props.ruleEnable(ruleEnable);
            return this;
        }

        /**
         * Property ruleName: Rule name.
         * <p>
         * When adding global configuration, this parameter does not need to be set.
         * <p>
         * @return {@code this}
         * @param ruleName Property ruleName: Rule name. This parameter is required.
         */
        public Builder ruleName(final java.lang.String ruleName) {
            this.props.ruleName(ruleName);
            return this;
        }
        /**
         * Property ruleName: Rule name.
         * <p>
         * When adding global configuration, this parameter does not need to be set.
         * <p>
         * @return {@code this}
         * @param ruleName Property ruleName: Rule name. This parameter is required.
         */
        public Builder ruleName(final com.aliyun.ros.cdk.core.IResolvable ruleName) {
            this.props.ruleName(ruleName);
            return this;
        }

        /**
         * Property siteVersion: Version number of the site configuration.
         * <p>
         * For a site with configuration version management enabled, you can use this parameter to specify the site version in which the configuration takes effect. The default version is 0.
         * <p>
         * @return {@code this}
         * @param siteVersion Property siteVersion: Version number of the site configuration. This parameter is required.
         */
        public Builder siteVersion(final java.lang.Number siteVersion) {
            this.props.siteVersion(siteVersion);
            return this;
        }
        /**
         * Property siteVersion: Version number of the site configuration.
         * <p>
         * For a site with configuration version management enabled, you can use this parameter to specify the site version in which the configuration takes effect. The default version is 0.
         * <p>
         * @return {@code this}
         * @param siteVersion Property siteVersion: Version number of the site configuration. This parameter is required.
         */
        public Builder siteVersion(final com.aliyun.ros.cdk.core.IResolvable siteVersion) {
            this.props.siteVersion(siteVersion);
            return this;
        }

        /**
         * Property uri: The desired URI to which you want to rewrite the path in the original request.
         * <p>
         * @return {@code this}
         * @param uri Property uri: The desired URI to which you want to rewrite the path in the original request. This parameter is required.
         */
        public Builder uri(final java.lang.String uri) {
            this.props.uri(uri);
            return this;
        }
        /**
         * Property uri: The desired URI to which you want to rewrite the path in the original request.
         * <p>
         * @return {@code this}
         * @param uri Property uri: The desired URI to which you want to rewrite the path in the original request. This parameter is required.
         */
        public Builder uri(final com.aliyun.ros.cdk.core.IResolvable uri) {
            this.props.uri(uri);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.esa.RewriteUrlRule}.
         */
        @Override
        public com.aliyun.ros.cdk.esa.RewriteUrlRule build() {
            return new com.aliyun.ros.cdk.esa.RewriteUrlRule(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
