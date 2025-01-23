package com.aliyun.ros.cdk.config;

/**
 * Represents a <code>Rule</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-01-23T09:30:36.316Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.config.$Module.class, fqn = "@alicloud/ros-cdk-config.IRule")
@software.amazon.jsii.Jsii.Proxy(IRule.Jsii$Proxy.class)
public interface IRule extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute ConfigRuleArn: config rule arn.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrConfigRuleArn();

    /**
     * Attribute ConfigRuleId: The ID of the rule.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrConfigRuleId();

    /**
     * Attribute ConfigRuleTriggerTypes: The trigger type of the rule.
     * <p>
     * Valid values:  ConfigurationItemChangeNotification: The rule is triggered upon configuration changes. ScheduledNotification: The rule is triggered as scheduled.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrConfigRuleTriggerTypes();

    /**
     * Attribute Description: The description of the rule.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription();

    /**
     * Attribute EventSource: The event source of the rule.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrEventSource();

    /**
     * Attribute ExcludeResourceIdsScope: The rule monitors excluded resource IDs, multiple of which are separated by commas, only applies to rules created based on managed rules, , custom rule this field is empty.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrExcludeResourceIdsScope();

    /**
     * Attribute InputParameters: The settings of the input parameters for the rule.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrInputParameters();

    /**
     * Attribute MaximumExecutionFrequency: The frequency of the compliance evaluations.
     * <p>
     * Valid values:  One_Hour Three_Hours Six_Hours Twelve_Hours TwentyFour_Hours
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrMaximumExecutionFrequency();

    /**
     * Attribute RegionIdsScope: The rule monitors region IDs, separated by commas, only applies to rules created based on managed rules.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrRegionIdsScope();

    /**
     * Attribute ResourceGroupIdsScope: The rule monitors resource group IDs, separated by commas, only applies to rules created based on managed rules.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupIdsScope();

    /**
     * Attribute ResourceTypesScope: The types of the resources to be evaluated against the rule.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceTypesScope();

    /**
     * Attribute RiskLevel: The risk level of the resources that are not compliant with the rule.
     * <p>
     * Valid values:  1: critical 2: warning 3: info
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrRiskLevel();

    /**
     * Attribute RuleName: The name of the rule.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrRuleName();

    /**
     * Attribute SourceIdentifier: The identifier of the rule.
     * <p>
     * For a managed rule, the value is the name of the managed rule. For a custom rule, the value is the ARN of the custom rule
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSourceIdentifier();

    /**
     * Attribute SourceOwner: Specifies whether you or Alibaba Cloud owns and manages the rule.
     * <p>
     * Valid values:  CUSTOM_FC: The rule is a custom rule and you own the rule. ALIYUN: The rule is a managed rule and Alibaba Cloud owns the rule
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSourceOwner();

    /**
     * Attribute TagKeyScope: The rule monitors the tag key, only applies to rules created based on managed rules.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTagKeyScope();

    /**
     * Attribute TagValueScope: The rule monitors the tag value, only applies to rules created based on managed rules.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTagValueScope();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.config.RuleProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.config.IRule.Jsii$Default {
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
        }

        /**
         * The construct tree node for this construct.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.ConstructNode getNode() {
            return software.amazon.jsii.Kernel.get(this, "node", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.ConstructNode.class));
        }

        /**
         * The environment this resource belongs to.
         * <p>
         * For resources that are created and managed by the CDK
         * (generally, those created by creating new class instances like Role, Bucket, etc.),
         * this is always the same as the environment of the stack they belong to;
         * however, for imported resources
         * (those obtained from static methods like fromRoleArn, fromBucketName, etc.),
         * that might be different than the stack they were imported into.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.ResourceEnvironment getEnv() {
            return software.amazon.jsii.Kernel.get(this, "env", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.ResourceEnvironment.class));
        }

        /**
         * The stack in which this resource is defined.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Stack getStack() {
            return software.amazon.jsii.Kernel.get(this, "stack", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Stack.class));
        }

        /**
         * Attribute ConfigRuleArn: config rule arn.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrConfigRuleArn() {
            return software.amazon.jsii.Kernel.get(this, "attrConfigRuleArn", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ConfigRuleId: The ID of the rule.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrConfigRuleId() {
            return software.amazon.jsii.Kernel.get(this, "attrConfigRuleId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ConfigRuleTriggerTypes: The trigger type of the rule.
         * <p>
         * Valid values:  ConfigurationItemChangeNotification: The rule is triggered upon configuration changes. ScheduledNotification: The rule is triggered as scheduled.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrConfigRuleTriggerTypes() {
            return software.amazon.jsii.Kernel.get(this, "attrConfigRuleTriggerTypes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Description: The description of the rule.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute EventSource: The event source of the rule.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrEventSource() {
            return software.amazon.jsii.Kernel.get(this, "attrEventSource", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ExcludeResourceIdsScope: The rule monitors excluded resource IDs, multiple of which are separated by commas, only applies to rules created based on managed rules, , custom rule this field is empty.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrExcludeResourceIdsScope() {
            return software.amazon.jsii.Kernel.get(this, "attrExcludeResourceIdsScope", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InputParameters: The settings of the input parameters for the rule.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrInputParameters() {
            return software.amazon.jsii.Kernel.get(this, "attrInputParameters", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MaximumExecutionFrequency: The frequency of the compliance evaluations.
         * <p>
         * Valid values:  One_Hour Three_Hours Six_Hours Twelve_Hours TwentyFour_Hours
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrMaximumExecutionFrequency() {
            return software.amazon.jsii.Kernel.get(this, "attrMaximumExecutionFrequency", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RegionIdsScope: The rule monitors region IDs, separated by commas, only applies to rules created based on managed rules.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrRegionIdsScope() {
            return software.amazon.jsii.Kernel.get(this, "attrRegionIdsScope", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ResourceGroupIdsScope: The rule monitors resource group IDs, separated by commas, only applies to rules created based on managed rules.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupIdsScope() {
            return software.amazon.jsii.Kernel.get(this, "attrResourceGroupIdsScope", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ResourceTypesScope: The types of the resources to be evaluated against the rule.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceTypesScope() {
            return software.amazon.jsii.Kernel.get(this, "attrResourceTypesScope", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RiskLevel: The risk level of the resources that are not compliant with the rule.
         * <p>
         * Valid values:  1: critical 2: warning 3: info
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrRiskLevel() {
            return software.amazon.jsii.Kernel.get(this, "attrRiskLevel", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RuleName: The name of the rule.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrRuleName() {
            return software.amazon.jsii.Kernel.get(this, "attrRuleName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SourceIdentifier: The identifier of the rule.
         * <p>
         * For a managed rule, the value is the name of the managed rule. For a custom rule, the value is the ARN of the custom rule
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSourceIdentifier() {
            return software.amazon.jsii.Kernel.get(this, "attrSourceIdentifier", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SourceOwner: Specifies whether you or Alibaba Cloud owns and manages the rule.
         * <p>
         * Valid values:  CUSTOM_FC: The rule is a custom rule and you own the rule. ALIYUN: The rule is a managed rule and Alibaba Cloud owns the rule
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSourceOwner() {
            return software.amazon.jsii.Kernel.get(this, "attrSourceOwner", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TagKeyScope: The rule monitors the tag key, only applies to rules created based on managed rules.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTagKeyScope() {
            return software.amazon.jsii.Kernel.get(this, "attrTagKeyScope", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TagValueScope: The rule monitors the tag value, only applies to rules created based on managed rules.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTagValueScope() {
            return software.amazon.jsii.Kernel.get(this, "attrTagValueScope", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.config.RuleProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.config.RuleProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IRule}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IRule, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

        /**
         * The construct tree node for this construct.
         */
        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.ConstructNode getNode() {
            return software.amazon.jsii.Kernel.get(this, "node", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.ConstructNode.class));
        }

        /**
         * The environment this resource belongs to.
         * <p>
         * For resources that are created and managed by the CDK
         * (generally, those created by creating new class instances like Role, Bucket, etc.),
         * this is always the same as the environment of the stack they belong to;
         * however, for imported resources
         * (those obtained from static methods like fromRoleArn, fromBucketName, etc.),
         * that might be different than the stack they were imported into.
         */
        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.ResourceEnvironment getEnv() {
            return software.amazon.jsii.Kernel.get(this, "env", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.ResourceEnvironment.class));
        }

        /**
         * The stack in which this resource is defined.
         */
        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Stack getStack() {
            return software.amazon.jsii.Kernel.get(this, "stack", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Stack.class));
        }

        /**
         * Attribute ConfigRuleArn: config rule arn.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrConfigRuleArn() {
            return software.amazon.jsii.Kernel.get(this, "attrConfigRuleArn", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ConfigRuleId: The ID of the rule.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrConfigRuleId() {
            return software.amazon.jsii.Kernel.get(this, "attrConfigRuleId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ConfigRuleTriggerTypes: The trigger type of the rule.
         * <p>
         * Valid values:  ConfigurationItemChangeNotification: The rule is triggered upon configuration changes. ScheduledNotification: The rule is triggered as scheduled.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrConfigRuleTriggerTypes() {
            return software.amazon.jsii.Kernel.get(this, "attrConfigRuleTriggerTypes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Description: The description of the rule.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute EventSource: The event source of the rule.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrEventSource() {
            return software.amazon.jsii.Kernel.get(this, "attrEventSource", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ExcludeResourceIdsScope: The rule monitors excluded resource IDs, multiple of which are separated by commas, only applies to rules created based on managed rules, , custom rule this field is empty.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrExcludeResourceIdsScope() {
            return software.amazon.jsii.Kernel.get(this, "attrExcludeResourceIdsScope", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InputParameters: The settings of the input parameters for the rule.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrInputParameters() {
            return software.amazon.jsii.Kernel.get(this, "attrInputParameters", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MaximumExecutionFrequency: The frequency of the compliance evaluations.
         * <p>
         * Valid values:  One_Hour Three_Hours Six_Hours Twelve_Hours TwentyFour_Hours
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrMaximumExecutionFrequency() {
            return software.amazon.jsii.Kernel.get(this, "attrMaximumExecutionFrequency", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RegionIdsScope: The rule monitors region IDs, separated by commas, only applies to rules created based on managed rules.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrRegionIdsScope() {
            return software.amazon.jsii.Kernel.get(this, "attrRegionIdsScope", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ResourceGroupIdsScope: The rule monitors resource group IDs, separated by commas, only applies to rules created based on managed rules.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupIdsScope() {
            return software.amazon.jsii.Kernel.get(this, "attrResourceGroupIdsScope", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ResourceTypesScope: The types of the resources to be evaluated against the rule.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceTypesScope() {
            return software.amazon.jsii.Kernel.get(this, "attrResourceTypesScope", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RiskLevel: The risk level of the resources that are not compliant with the rule.
         * <p>
         * Valid values:  1: critical 2: warning 3: info
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrRiskLevel() {
            return software.amazon.jsii.Kernel.get(this, "attrRiskLevel", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RuleName: The name of the rule.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrRuleName() {
            return software.amazon.jsii.Kernel.get(this, "attrRuleName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SourceIdentifier: The identifier of the rule.
         * <p>
         * For a managed rule, the value is the name of the managed rule. For a custom rule, the value is the ARN of the custom rule
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSourceIdentifier() {
            return software.amazon.jsii.Kernel.get(this, "attrSourceIdentifier", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SourceOwner: Specifies whether you or Alibaba Cloud owns and manages the rule.
         * <p>
         * Valid values:  CUSTOM_FC: The rule is a custom rule and you own the rule. ALIYUN: The rule is a managed rule and Alibaba Cloud owns the rule
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSourceOwner() {
            return software.amazon.jsii.Kernel.get(this, "attrSourceOwner", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TagKeyScope: The rule monitors the tag key, only applies to rules created based on managed rules.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTagKeyScope() {
            return software.amazon.jsii.Kernel.get(this, "attrTagKeyScope", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TagValueScope: The rule monitors the tag value, only applies to rules created based on managed rules.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTagValueScope() {
            return software.amazon.jsii.Kernel.get(this, "attrTagValueScope", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.config.RuleProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.config.RuleProps.class));
        }
    }
}
