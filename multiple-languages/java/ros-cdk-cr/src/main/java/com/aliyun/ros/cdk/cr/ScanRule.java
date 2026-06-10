package com.aliyun.ros.cdk.cr;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::CR::ScanRule</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T11:03:09.663Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cr.$Module.class, fqn = "@alicloud/ros-cdk-cr.ScanRule")
public class ScanRule extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.cr.IScanRule {

    protected ScanRule(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected ScanRule(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public ScanRule(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cr.ScanRuleProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public ScanRule(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cr.ScanRuleProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute CreateTime: Creation time of the scan rule.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
        return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute InstanceId: ACR Instance ID.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Namespaces: The list of namespaces.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrNamespaces() {
        return software.amazon.jsii.Kernel.get(this, "attrNamespaces", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute RepoNames: The list of repositories.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrRepoNames() {
        return software.amazon.jsii.Kernel.get(this, "attrRepoNames", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute RepoTagFilterPattern: The tag that triggers the scan matches the regular expression.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrRepoTagFilterPattern() {
        return software.amazon.jsii.Kernel.get(this, "attrRepoTagFilterPattern", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute RuleName: The scan rule name.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrRuleName() {
        return software.amazon.jsii.Kernel.get(this, "attrRuleName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ScanRuleId: The ID of the scan rule.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrScanRuleId() {
        return software.amazon.jsii.Kernel.get(this, "attrScanRuleId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ScanScope: The scan scope.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrScanScope() {
        return software.amazon.jsii.Kernel.get(this, "attrScanScope", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ScanType: The scan type.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrScanType() {
        return software.amazon.jsii.Kernel.get(this, "attrScanType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute TriggerType: Trigger type.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrTriggerType() {
        return software.amazon.jsii.Kernel.get(this, "attrTriggerType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute UpdateTime: Change time of the scan rule.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrUpdateTime() {
        return software.amazon.jsii.Kernel.get(this, "attrUpdateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cr.ScanRuleProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.cr.ScanRuleProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.cr.ScanRule}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.cr.ScanRule> {
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
        private final com.aliyun.ros.cdk.cr.ScanRuleProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.cr.ScanRuleProps.Builder();
        }

        /**
         * Property instanceId: ACR Instance ID.
         * <p>
         * @return {@code this}
         * @param instanceId Property instanceId: ACR Instance ID. This parameter is required.
         */
        public Builder instanceId(final java.lang.String instanceId) {
            this.props.instanceId(instanceId);
            return this;
        }
        /**
         * Property instanceId: ACR Instance ID.
         * <p>
         * @return {@code this}
         * @param instanceId Property instanceId: ACR Instance ID. This parameter is required.
         */
        public Builder instanceId(final com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.props.instanceId(instanceId);
            return this;
        }

        /**
         * Property repoTagFilterPattern: The tag that triggers the scan matches the regular expression.
         * <p>
         * @return {@code this}
         * @param repoTagFilterPattern Property repoTagFilterPattern: The tag that triggers the scan matches the regular expression. This parameter is required.
         */
        public Builder repoTagFilterPattern(final java.lang.String repoTagFilterPattern) {
            this.props.repoTagFilterPattern(repoTagFilterPattern);
            return this;
        }
        /**
         * Property repoTagFilterPattern: The tag that triggers the scan matches the regular expression.
         * <p>
         * @return {@code this}
         * @param repoTagFilterPattern Property repoTagFilterPattern: The tag that triggers the scan matches the regular expression. This parameter is required.
         */
        public Builder repoTagFilterPattern(final com.aliyun.ros.cdk.core.IResolvable repoTagFilterPattern) {
            this.props.repoTagFilterPattern(repoTagFilterPattern);
            return this;
        }

        /**
         * Property ruleName: The scan rule name.
         * <p>
         * @return {@code this}
         * @param ruleName Property ruleName: The scan rule name. This parameter is required.
         */
        public Builder ruleName(final java.lang.String ruleName) {
            this.props.ruleName(ruleName);
            return this;
        }
        /**
         * Property ruleName: The scan rule name.
         * <p>
         * @return {@code this}
         * @param ruleName Property ruleName: The scan rule name. This parameter is required.
         */
        public Builder ruleName(final com.aliyun.ros.cdk.core.IResolvable ruleName) {
            this.props.ruleName(ruleName);
            return this;
        }

        /**
         * Property scanScope: The scan scope.
         * <p>
         * Valid values:
         * NAMESPACE: namespace.
         * REPO: repository.
         * INSTANCE: CR instance.
         * <p>
         * @return {@code this}
         * @param scanScope Property scanScope: The scan scope. This parameter is required.
         */
        public Builder scanScope(final java.lang.String scanScope) {
            this.props.scanScope(scanScope);
            return this;
        }
        /**
         * Property scanScope: The scan scope.
         * <p>
         * Valid values:
         * NAMESPACE: namespace.
         * REPO: repository.
         * INSTANCE: CR instance.
         * <p>
         * @return {@code this}
         * @param scanScope Property scanScope: The scan scope. This parameter is required.
         */
        public Builder scanScope(final com.aliyun.ros.cdk.core.IResolvable scanScope) {
            this.props.scanScope(scanScope);
            return this;
        }

        /**
         * Property scanType: The scan type.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>VUL: Products Cloud Security Scanner.</li>
         * <li>SBOM: Product Content Analysis.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param scanType Property scanType: The scan type. This parameter is required.
         */
        public Builder scanType(final java.lang.String scanType) {
            this.props.scanType(scanType);
            return this;
        }
        /**
         * Property scanType: The scan type.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>VUL: Products Cloud Security Scanner.</li>
         * <li>SBOM: Product Content Analysis.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param scanType Property scanType: The scan type. This parameter is required.
         */
        public Builder scanType(final com.aliyun.ros.cdk.core.IResolvable scanType) {
            this.props.scanType(scanType);
            return this;
        }

        /**
         * Property triggerType: Trigger type.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>AUTO: automatically trigger.</li>
         * <li>MANUAL: manually trigger.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param triggerType Property triggerType: Trigger type. This parameter is required.
         */
        public Builder triggerType(final java.lang.String triggerType) {
            this.props.triggerType(triggerType);
            return this;
        }
        /**
         * Property triggerType: Trigger type.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>AUTO: automatically trigger.</li>
         * <li>MANUAL: manually trigger.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param triggerType Property triggerType: Trigger type. This parameter is required.
         */
        public Builder triggerType(final com.aliyun.ros.cdk.core.IResolvable triggerType) {
            this.props.triggerType(triggerType);
            return this;
        }

        /**
         * Property namespaces: The list of namespaces.
         * <p>
         * <ul>
         * <li>When the scan scope is NAMESPACE, this parameter cannot be empty.</li>
         * <li>If the scan scope is REPO, you must specify a unique Namespace for this parameter.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param namespaces Property namespaces: The list of namespaces. This parameter is required.
         */
        public Builder namespaces(final com.aliyun.ros.cdk.core.IResolvable namespaces) {
            this.props.namespaces(namespaces);
            return this;
        }
        /**
         * Property namespaces: The list of namespaces.
         * <p>
         * <ul>
         * <li>When the scan scope is NAMESPACE, this parameter cannot be empty.</li>
         * <li>If the scan scope is REPO, you must specify a unique Namespace for this parameter.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param namespaces Property namespaces: The list of namespaces. This parameter is required.
         */
        public Builder namespaces(final java.util.List<? extends java.lang.Object> namespaces) {
            this.props.namespaces(namespaces);
            return this;
        }

        /**
         * Property repoNames: The list of repositories.* When the scan scope is NAMESPACE, this parameter must be empty. * When the scan scope is REPO, this parameter cannot be empty.
         * <p>
         * @return {@code this}
         * @param repoNames Property repoNames: The list of repositories.* When the scan scope is NAMESPACE, this parameter must be empty. * When the scan scope is REPO, this parameter cannot be empty. This parameter is required.
         */
        public Builder repoNames(final com.aliyun.ros.cdk.core.IResolvable repoNames) {
            this.props.repoNames(repoNames);
            return this;
        }
        /**
         * Property repoNames: The list of repositories.* When the scan scope is NAMESPACE, this parameter must be empty. * When the scan scope is REPO, this parameter cannot be empty.
         * <p>
         * @return {@code this}
         * @param repoNames Property repoNames: The list of repositories.* When the scan scope is NAMESPACE, this parameter must be empty. * When the scan scope is REPO, this parameter cannot be empty. This parameter is required.
         */
        public Builder repoNames(final java.util.List<? extends java.lang.Object> repoNames) {
            this.props.repoNames(repoNames);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.cr.ScanRule}.
         */
        @Override
        public com.aliyun.ros.cdk.cr.ScanRule build() {
            return new com.aliyun.ros.cdk.cr.ScanRule(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
