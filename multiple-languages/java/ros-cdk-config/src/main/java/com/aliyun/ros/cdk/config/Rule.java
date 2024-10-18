package com.aliyun.ros.cdk.config;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::Config::Rule</code>, which is used to create or modify a rule.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-10-18T08:56:27.904Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.config.$Module.class, fqn = "@alicloud/ros-cdk-config.Rule")
public class Rule extends com.aliyun.ros.cdk.core.Resource {

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
    public Rule(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.config.RuleProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public Rule(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.config.RuleProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute ConfigRuleArn: config rule arn.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrConfigRuleArn() {
        return software.amazon.jsii.Kernel.get(this, "attrConfigRuleArn", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute ConfigRuleId: The ID of the rule.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrConfigRuleId() {
        return software.amazon.jsii.Kernel.get(this, "attrConfigRuleId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute ConfigRuleTriggerTypes: The trigger type of the rule.
     * <p>
     * Valid values:  ConfigurationItemChangeNotification: The rule is triggered upon configuration changes. ScheduledNotification: The rule is triggered as scheduled.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrConfigRuleTriggerTypes() {
        return software.amazon.jsii.Kernel.get(this, "attrConfigRuleTriggerTypes", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Description: The description of the rule.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDescription() {
        return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute EventSource: The event source of the rule.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrEventSource() {
        return software.amazon.jsii.Kernel.get(this, "attrEventSource", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute ExcludeResourceIdsScope: The rule monitors excluded resource IDs, multiple of which are separated by commas, only applies to rules created based on managed rules, , custom rule this field is empty.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrExcludeResourceIdsScope() {
        return software.amazon.jsii.Kernel.get(this, "attrExcludeResourceIdsScope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute InputParameters: The settings of the input parameters for the rule.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrInputParameters() {
        return software.amazon.jsii.Kernel.get(this, "attrInputParameters", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute MaximumExecutionFrequency: The frequency of the compliance evaluations.
     * <p>
     * Valid values:  One_Hour Three_Hours Six_Hours Twelve_Hours TwentyFour_Hours
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrMaximumExecutionFrequency() {
        return software.amazon.jsii.Kernel.get(this, "attrMaximumExecutionFrequency", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute RegionIdsScope: The rule monitors region IDs, separated by commas, only applies to rules created based on managed rules.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrRegionIdsScope() {
        return software.amazon.jsii.Kernel.get(this, "attrRegionIdsScope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute ResourceGroupIdsScope: The rule monitors resource group IDs, separated by commas, only applies to rules created based on managed rules.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrResourceGroupIdsScope() {
        return software.amazon.jsii.Kernel.get(this, "attrResourceGroupIdsScope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute ResourceTypesScope: The types of the resources to be evaluated against the rule.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrResourceTypesScope() {
        return software.amazon.jsii.Kernel.get(this, "attrResourceTypesScope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute RiskLevel: The risk level of the resources that are not compliant with the rule.
     * <p>
     * Valid values:  1: critical 2: warning 3: info
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrRiskLevel() {
        return software.amazon.jsii.Kernel.get(this, "attrRiskLevel", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute RuleName: The name of the rule.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrRuleName() {
        return software.amazon.jsii.Kernel.get(this, "attrRuleName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute SourceIdentifier: The identifier of the rule.
     * <p>
     * For a managed rule, the value is the name of the managed rule. For a custom rule, the value is the ARN of the custom rule
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrSourceIdentifier() {
        return software.amazon.jsii.Kernel.get(this, "attrSourceIdentifier", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute SourceOwner: Specifies whether you or Alibaba Cloud owns and manages the rule.
     * <p>
     * Valid values:  CUSTOM_FC: The rule is a custom rule and you own the rule. ALIYUN: The rule is a managed rule and Alibaba Cloud owns the rule
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrSourceOwner() {
        return software.amazon.jsii.Kernel.get(this, "attrSourceOwner", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute TagKeyScope: The rule monitors the tag key, only applies to rules created based on managed rules.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrTagKeyScope() {
        return software.amazon.jsii.Kernel.get(this, "attrTagKeyScope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute TagValueScope: The rule monitors the tag value, only applies to rules created based on managed rules.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrTagValueScope() {
        return software.amazon.jsii.Kernel.get(this, "attrTagValueScope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.config.RuleProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.config.RuleProps.class));
    }

    protected void setProps(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.config.RuleProps value) {
        software.amazon.jsii.Kernel.set(this, "props", java.util.Objects.requireNonNull(value, "props is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.config.Rule}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.config.Rule> {
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
        private final com.aliyun.ros.cdk.config.RuleProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.config.RuleProps.Builder();
        }

        /**
         * Property configRuleTriggerTypes: The trigger type of the rule.
         * <p>
         * Valid values:  ConfigurationItemChangeNotification: The rule is triggered upon configuration changes. ScheduledNotification: The rule is triggered as scheduled.
         * <p>
         * @return {@code this}
         * @param configRuleTriggerTypes Property configRuleTriggerTypes: The trigger type of the rule. This parameter is required.
         */
        public Builder configRuleTriggerTypes(final java.lang.String configRuleTriggerTypes) {
            this.props.configRuleTriggerTypes(configRuleTriggerTypes);
            return this;
        }
        /**
         * Property configRuleTriggerTypes: The trigger type of the rule.
         * <p>
         * Valid values:  ConfigurationItemChangeNotification: The rule is triggered upon configuration changes. ScheduledNotification: The rule is triggered as scheduled.
         * <p>
         * @return {@code this}
         * @param configRuleTriggerTypes Property configRuleTriggerTypes: The trigger type of the rule. This parameter is required.
         */
        public Builder configRuleTriggerTypes(final com.aliyun.ros.cdk.core.IResolvable configRuleTriggerTypes) {
            this.props.configRuleTriggerTypes(configRuleTriggerTypes);
            return this;
        }

        /**
         * Property resourceTypesScope: The types of the resources to be evaluated against the rule.
         * <p>
         * @return {@code this}
         * @param resourceTypesScope Property resourceTypesScope: The types of the resources to be evaluated against the rule. This parameter is required.
         */
        public Builder resourceTypesScope(final com.aliyun.ros.cdk.core.IResolvable resourceTypesScope) {
            this.props.resourceTypesScope(resourceTypesScope);
            return this;
        }
        /**
         * Property resourceTypesScope: The types of the resources to be evaluated against the rule.
         * <p>
         * @return {@code this}
         * @param resourceTypesScope Property resourceTypesScope: The types of the resources to be evaluated against the rule. This parameter is required.
         */
        public Builder resourceTypesScope(final java.util.List<? extends java.lang.Object> resourceTypesScope) {
            this.props.resourceTypesScope(resourceTypesScope);
            return this;
        }

        /**
         * Property riskLevel: The risk level of the resources that are not compliant with the rule.
         * <p>
         * Valid values:  1: critical 2: warning 3: info
         * <p>
         * @return {@code this}
         * @param riskLevel Property riskLevel: The risk level of the resources that are not compliant with the rule. This parameter is required.
         */
        public Builder riskLevel(final java.lang.Number riskLevel) {
            this.props.riskLevel(riskLevel);
            return this;
        }
        /**
         * Property riskLevel: The risk level of the resources that are not compliant with the rule.
         * <p>
         * Valid values:  1: critical 2: warning 3: info
         * <p>
         * @return {@code this}
         * @param riskLevel Property riskLevel: The risk level of the resources that are not compliant with the rule. This parameter is required.
         */
        public Builder riskLevel(final com.aliyun.ros.cdk.core.IResolvable riskLevel) {
            this.props.riskLevel(riskLevel);
            return this;
        }

        /**
         * Property ruleName: The name of the rule.
         * <p>
         * @return {@code this}
         * @param ruleName Property ruleName: The name of the rule. This parameter is required.
         */
        public Builder ruleName(final java.lang.String ruleName) {
            this.props.ruleName(ruleName);
            return this;
        }
        /**
         * Property ruleName: The name of the rule.
         * <p>
         * @return {@code this}
         * @param ruleName Property ruleName: The name of the rule. This parameter is required.
         */
        public Builder ruleName(final com.aliyun.ros.cdk.core.IResolvable ruleName) {
            this.props.ruleName(ruleName);
            return this;
        }

        /**
         * Property sourceIdentifier: The identifier of the rule.
         * <p>
         * For a managed rule, the value is the name of the managed rule. For a custom rule, the value is the ARN of the custom rule
         * <p>
         * @return {@code this}
         * @param sourceIdentifier Property sourceIdentifier: The identifier of the rule. This parameter is required.
         */
        public Builder sourceIdentifier(final java.lang.String sourceIdentifier) {
            this.props.sourceIdentifier(sourceIdentifier);
            return this;
        }
        /**
         * Property sourceIdentifier: The identifier of the rule.
         * <p>
         * For a managed rule, the value is the name of the managed rule. For a custom rule, the value is the ARN of the custom rule
         * <p>
         * @return {@code this}
         * @param sourceIdentifier Property sourceIdentifier: The identifier of the rule. This parameter is required.
         */
        public Builder sourceIdentifier(final com.aliyun.ros.cdk.core.IResolvable sourceIdentifier) {
            this.props.sourceIdentifier(sourceIdentifier);
            return this;
        }

        /**
         * Property sourceOwner: Specifies whether you or Alibaba Cloud owns and manages the rule.
         * <p>
         * Valid values:  CUSTOM_FC: The rule is a custom rule and you own the rule. ALIYUN: The rule is a managed rule and Alibaba Cloud owns the rule
         * <p>
         * @return {@code this}
         * @param sourceOwner Property sourceOwner: Specifies whether you or Alibaba Cloud owns and manages the rule. This parameter is required.
         */
        public Builder sourceOwner(final java.lang.String sourceOwner) {
            this.props.sourceOwner(sourceOwner);
            return this;
        }
        /**
         * Property sourceOwner: Specifies whether you or Alibaba Cloud owns and manages the rule.
         * <p>
         * Valid values:  CUSTOM_FC: The rule is a custom rule and you own the rule. ALIYUN: The rule is a managed rule and Alibaba Cloud owns the rule
         * <p>
         * @return {@code this}
         * @param sourceOwner Property sourceOwner: Specifies whether you or Alibaba Cloud owns and manages the rule. This parameter is required.
         */
        public Builder sourceOwner(final com.aliyun.ros.cdk.core.IResolvable sourceOwner) {
            this.props.sourceOwner(sourceOwner);
            return this;
        }

        /**
         * Property description: The description of the rule.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the rule. This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * Property description: The description of the rule.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the rule. This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * Property excludeResourceIdsScope: The rule monitors excluded resource IDs, multiple of which are separated by commas, only applies to rules created based on managed rules, , custom rule this field is empty.
         * <p>
         * @return {@code this}
         * @param excludeResourceIdsScope Property excludeResourceIdsScope: The rule monitors excluded resource IDs, multiple of which are separated by commas, only applies to rules created based on managed rules, , custom rule this field is empty. This parameter is required.
         */
        public Builder excludeResourceIdsScope(final java.lang.String excludeResourceIdsScope) {
            this.props.excludeResourceIdsScope(excludeResourceIdsScope);
            return this;
        }
        /**
         * Property excludeResourceIdsScope: The rule monitors excluded resource IDs, multiple of which are separated by commas, only applies to rules created based on managed rules, , custom rule this field is empty.
         * <p>
         * @return {@code this}
         * @param excludeResourceIdsScope Property excludeResourceIdsScope: The rule monitors excluded resource IDs, multiple of which are separated by commas, only applies to rules created based on managed rules, , custom rule this field is empty. This parameter is required.
         */
        public Builder excludeResourceIdsScope(final com.aliyun.ros.cdk.core.IResolvable excludeResourceIdsScope) {
            this.props.excludeResourceIdsScope(excludeResourceIdsScope);
            return this;
        }

        /**
         * Property inputParameters: The settings of the input parameters for the rule.
         * <p>
         * @return {@code this}
         * @param inputParameters Property inputParameters: The settings of the input parameters for the rule. This parameter is required.
         */
        public Builder inputParameters(final com.aliyun.ros.cdk.core.IResolvable inputParameters) {
            this.props.inputParameters(inputParameters);
            return this;
        }
        /**
         * Property inputParameters: The settings of the input parameters for the rule.
         * <p>
         * @return {@code this}
         * @param inputParameters Property inputParameters: The settings of the input parameters for the rule. This parameter is required.
         */
        public Builder inputParameters(final java.util.Map<java.lang.String, ? extends java.lang.Object> inputParameters) {
            this.props.inputParameters(inputParameters);
            return this;
        }

        /**
         * Property maximumExecutionFrequency: The frequency of the compliance evaluations.
         * <p>
         * Valid values:  One_Hour Three_Hours Six_Hours Twelve_Hours TwentyFour_Hours
         * <p>
         * @return {@code this}
         * @param maximumExecutionFrequency Property maximumExecutionFrequency: The frequency of the compliance evaluations. This parameter is required.
         */
        public Builder maximumExecutionFrequency(final java.lang.String maximumExecutionFrequency) {
            this.props.maximumExecutionFrequency(maximumExecutionFrequency);
            return this;
        }
        /**
         * Property maximumExecutionFrequency: The frequency of the compliance evaluations.
         * <p>
         * Valid values:  One_Hour Three_Hours Six_Hours Twelve_Hours TwentyFour_Hours
         * <p>
         * @return {@code this}
         * @param maximumExecutionFrequency Property maximumExecutionFrequency: The frequency of the compliance evaluations. This parameter is required.
         */
        public Builder maximumExecutionFrequency(final com.aliyun.ros.cdk.core.IResolvable maximumExecutionFrequency) {
            this.props.maximumExecutionFrequency(maximumExecutionFrequency);
            return this;
        }

        /**
         * Property regionIdsScope: The rule monitors region IDs, separated by commas, only applies to rules created based on managed rules.
         * <p>
         * @return {@code this}
         * @param regionIdsScope Property regionIdsScope: The rule monitors region IDs, separated by commas, only applies to rules created based on managed rules. This parameter is required.
         */
        public Builder regionIdsScope(final java.lang.String regionIdsScope) {
            this.props.regionIdsScope(regionIdsScope);
            return this;
        }
        /**
         * Property regionIdsScope: The rule monitors region IDs, separated by commas, only applies to rules created based on managed rules.
         * <p>
         * @return {@code this}
         * @param regionIdsScope Property regionIdsScope: The rule monitors region IDs, separated by commas, only applies to rules created based on managed rules. This parameter is required.
         */
        public Builder regionIdsScope(final com.aliyun.ros.cdk.core.IResolvable regionIdsScope) {
            this.props.regionIdsScope(regionIdsScope);
            return this;
        }

        /**
         * Property resourceGroupIdsScope: The rule monitors resource group IDs, separated by commas, only applies to rules created based on managed rules.
         * <p>
         * @return {@code this}
         * @param resourceGroupIdsScope Property resourceGroupIdsScope: The rule monitors resource group IDs, separated by commas, only applies to rules created based on managed rules. This parameter is required.
         */
        public Builder resourceGroupIdsScope(final java.lang.String resourceGroupIdsScope) {
            this.props.resourceGroupIdsScope(resourceGroupIdsScope);
            return this;
        }
        /**
         * Property resourceGroupIdsScope: The rule monitors resource group IDs, separated by commas, only applies to rules created based on managed rules.
         * <p>
         * @return {@code this}
         * @param resourceGroupIdsScope Property resourceGroupIdsScope: The rule monitors resource group IDs, separated by commas, only applies to rules created based on managed rules. This parameter is required.
         */
        public Builder resourceGroupIdsScope(final com.aliyun.ros.cdk.core.IResolvable resourceGroupIdsScope) {
            this.props.resourceGroupIdsScope(resourceGroupIdsScope);
            return this;
        }

        /**
         * Property tagKeyLogicScope:.
         * <p>
         * @return {@code this}
         * @param tagKeyLogicScope Property tagKeyLogicScope:. This parameter is required.
         */
        public Builder tagKeyLogicScope(final java.lang.String tagKeyLogicScope) {
            this.props.tagKeyLogicScope(tagKeyLogicScope);
            return this;
        }
        /**
         * Property tagKeyLogicScope:.
         * <p>
         * @return {@code this}
         * @param tagKeyLogicScope Property tagKeyLogicScope:. This parameter is required.
         */
        public Builder tagKeyLogicScope(final com.aliyun.ros.cdk.core.IResolvable tagKeyLogicScope) {
            this.props.tagKeyLogicScope(tagKeyLogicScope);
            return this;
        }

        /**
         * Property tagKeyScope: The rule monitors the tag key, only applies to rules created based on managed rules.
         * <p>
         * @return {@code this}
         * @param tagKeyScope Property tagKeyScope: The rule monitors the tag key, only applies to rules created based on managed rules. This parameter is required.
         */
        public Builder tagKeyScope(final java.lang.String tagKeyScope) {
            this.props.tagKeyScope(tagKeyScope);
            return this;
        }
        /**
         * Property tagKeyScope: The rule monitors the tag key, only applies to rules created based on managed rules.
         * <p>
         * @return {@code this}
         * @param tagKeyScope Property tagKeyScope: The rule monitors the tag key, only applies to rules created based on managed rules. This parameter is required.
         */
        public Builder tagKeyScope(final com.aliyun.ros.cdk.core.IResolvable tagKeyScope) {
            this.props.tagKeyScope(tagKeyScope);
            return this;
        }

        /**
         * Property tagValueScope: The rule monitors the tag value, only applies to rules created based on managed rules.
         * <p>
         * @return {@code this}
         * @param tagValueScope Property tagValueScope: The rule monitors the tag value, only applies to rules created based on managed rules. This parameter is required.
         */
        public Builder tagValueScope(final java.lang.String tagValueScope) {
            this.props.tagValueScope(tagValueScope);
            return this;
        }
        /**
         * Property tagValueScope: The rule monitors the tag value, only applies to rules created based on managed rules.
         * <p>
         * @return {@code this}
         * @param tagValueScope Property tagValueScope: The rule monitors the tag value, only applies to rules created based on managed rules. This parameter is required.
         */
        public Builder tagValueScope(final com.aliyun.ros.cdk.core.IResolvable tagValueScope) {
            this.props.tagValueScope(tagValueScope);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.config.Rule}.
         */
        @Override
        public com.aliyun.ros.cdk.config.Rule build() {
            return new com.aliyun.ros.cdk.config.Rule(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
