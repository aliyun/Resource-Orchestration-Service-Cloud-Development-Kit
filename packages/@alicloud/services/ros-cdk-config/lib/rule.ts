import * as ros from '@alicloud/ros-cdk-core';
import { RosRule } from './config.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosRule as RuleProperty };

/**
 * Properties for defining a `Rule`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-config-rule
 */
export interface RuleProps {

    /**
     * Property configRuleTriggerTypes: The trigger type of the rule. Valid values:  ConfigurationItemChangeNotification: The rule is triggered upon configuration changes. ScheduledNotification: The rule is triggered as scheduled.
     */
    readonly configRuleTriggerTypes: string | ros.IResolvable;

    /**
     * Property resourceTypesScope: The types of the resources to be evaluated against the rule
     */
    readonly resourceTypesScope: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * Property riskLevel: The risk level of the resources that are not compliant with the rule. Valid values:  1: critical 2: warning 3: info
     */
    readonly riskLevel: number | ros.IResolvable;

    /**
     * Property ruleName: The name of the rule.
     */
    readonly ruleName: string | ros.IResolvable;

    /**
     * Property sourceIdentifier: The identifier of the rule.  For a managed rule, the value is the name of the managed rule. For a custom rule, the value is the ARN of the custom rule
     */
    readonly sourceIdentifier: string | ros.IResolvable;

    /**
     * Property sourceOwner: Specifies whether you or Alibaba Cloud owns and manages the rule. Valid values:  CUSTOM_FC: The rule is a custom rule and you own the rule. ALIYUN: The rule is a managed rule and Alibaba Cloud owns the rule
     */
    readonly sourceOwner: string | ros.IResolvable;

    /**
     * Property description: The description of the rule
     */
    readonly description?: string | ros.IResolvable;

    /**
     * Property excludeResourceIdsScope: The rule monitors excluded resource IDs, multiple of which are separated by commas, only applies to rules created based on managed rules, , custom rule this field is empty
     */
    readonly excludeResourceIdsScope?: string | ros.IResolvable;

    /**
     * Property inputParameters: The settings of the input parameters for the rule
     */
    readonly inputParameters?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

    /**
     * Property maximumExecutionFrequency: The frequency of the compliance evaluations. Valid values:  One_Hour Three_Hours Six_Hours Twelve_Hours TwentyFour_Hours
     */
    readonly maximumExecutionFrequency?: string | ros.IResolvable;

    /**
     * Property regionIdsScope: The rule monitors region IDs, separated by commas, only applies to rules created based on managed rules
     */
    readonly regionIdsScope?: string | ros.IResolvable;

    /**
     * Property resourceGroupIdsScope: The rule monitors resource group IDs, separated by commas, only applies to rules created based on managed rules
     */
    readonly resourceGroupIdsScope?: string | ros.IResolvable;

    /**
     * Property tagKeyLogicScope:
     */
    readonly tagKeyLogicScope?: string | ros.IResolvable;

    /**
     * Property tagKeyScope: The rule monitors the tag key, only applies to rules created based on managed rules
     */
    readonly tagKeyScope?: string | ros.IResolvable;

    /**
     * Property tagValueScope: The rule monitors the tag value, only applies to rules created based on managed rules
     */
    readonly tagValueScope?: string | ros.IResolvable;
}

/**
 * Represents a `Rule`.
 */
export interface IRule extends ros.IResource {
    readonly props: RuleProps;

    /**
     * Attribute ConfigRuleArn: config rule arn
     */
    readonly attrConfigRuleArn: ros.IResolvable | string;

    /**
     * Attribute ConfigRuleId: The ID of the rule
     */
    readonly attrConfigRuleId: ros.IResolvable | string;

    /**
     * Attribute ConfigRuleTriggerTypes: The trigger type of the rule. Valid values:  ConfigurationItemChangeNotification: The rule is triggered upon configuration changes. ScheduledNotification: The rule is triggered as scheduled.
     */
    readonly attrConfigRuleTriggerTypes: ros.IResolvable | string;

    /**
     * Attribute Description: The description of the rule
     */
    readonly attrDescription: ros.IResolvable | string;

    /**
     * Attribute EventSource: The event source of the rule.
     */
    readonly attrEventSource: ros.IResolvable | string;

    /**
     * Attribute ExcludeResourceIdsScope: The rule monitors excluded resource IDs, multiple of which are separated by commas, only applies to rules created based on managed rules, , custom rule this field is empty
     */
    readonly attrExcludeResourceIdsScope: ros.IResolvable | string;

    /**
     * Attribute InputParameters: The settings of the input parameters for the rule
     */
    readonly attrInputParameters: ros.IResolvable | string;

    /**
     * Attribute MaximumExecutionFrequency: The frequency of the compliance evaluations. Valid values:  One_Hour Three_Hours Six_Hours Twelve_Hours TwentyFour_Hours
     */
    readonly attrMaximumExecutionFrequency: ros.IResolvable | string;

    /**
     * Attribute RegionIdsScope: The rule monitors region IDs, separated by commas, only applies to rules created based on managed rules
     */
    readonly attrRegionIdsScope: ros.IResolvable | string;

    /**
     * Attribute ResourceGroupIdsScope: The rule monitors resource group IDs, separated by commas, only applies to rules created based on managed rules
     */
    readonly attrResourceGroupIdsScope: ros.IResolvable | string;

    /**
     * Attribute ResourceTypesScope: The types of the resources to be evaluated against the rule
     */
    readonly attrResourceTypesScope: ros.IResolvable | string;

    /**
     * Attribute RiskLevel: The risk level of the resources that are not compliant with the rule. Valid values:  1: critical 2: warning 3: info
     */
    readonly attrRiskLevel: ros.IResolvable | string;

    /**
     * Attribute RuleName: The name of the rule.
     */
    readonly attrRuleName: ros.IResolvable | string;

    /**
     * Attribute SourceIdentifier: The identifier of the rule.  For a managed rule, the value is the name of the managed rule. For a custom rule, the value is the ARN of the custom rule
     */
    readonly attrSourceIdentifier: ros.IResolvable | string;

    /**
     * Attribute SourceOwner: Specifies whether you or Alibaba Cloud owns and manages the rule. Valid values:  CUSTOM_FC: The rule is a custom rule and you own the rule. ALIYUN: The rule is a managed rule and Alibaba Cloud owns the rule
     */
    readonly attrSourceOwner: ros.IResolvable | string;

    /**
     * Attribute TagKeyScope: The rule monitors the tag key, only applies to rules created based on managed rules
     */
    readonly attrTagKeyScope: ros.IResolvable | string;

    /**
     * Attribute TagValueScope: The rule monitors the tag value, only applies to rules created based on managed rules
     */
    readonly attrTagValueScope: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::Config::Rule`, which is used to create or modify a rule.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosRule`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-config-rule
 */
export class Rule extends ros.Resource implements IRule {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: RuleProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute ConfigRuleArn: config rule arn
     */
    public readonly attrConfigRuleArn: ros.IResolvable | string;

    /**
     * Attribute ConfigRuleId: The ID of the rule
     */
    public readonly attrConfigRuleId: ros.IResolvable | string;

    /**
     * Attribute ConfigRuleTriggerTypes: The trigger type of the rule. Valid values:  ConfigurationItemChangeNotification: The rule is triggered upon configuration changes. ScheduledNotification: The rule is triggered as scheduled.
     */
    public readonly attrConfigRuleTriggerTypes: ros.IResolvable | string;

    /**
     * Attribute Description: The description of the rule
     */
    public readonly attrDescription: ros.IResolvable | string;

    /**
     * Attribute EventSource: The event source of the rule.
     */
    public readonly attrEventSource: ros.IResolvable | string;

    /**
     * Attribute ExcludeResourceIdsScope: The rule monitors excluded resource IDs, multiple of which are separated by commas, only applies to rules created based on managed rules, , custom rule this field is empty
     */
    public readonly attrExcludeResourceIdsScope: ros.IResolvable | string;

    /**
     * Attribute InputParameters: The settings of the input parameters for the rule
     */
    public readonly attrInputParameters: ros.IResolvable | string;

    /**
     * Attribute MaximumExecutionFrequency: The frequency of the compliance evaluations. Valid values:  One_Hour Three_Hours Six_Hours Twelve_Hours TwentyFour_Hours
     */
    public readonly attrMaximumExecutionFrequency: ros.IResolvable | string;

    /**
     * Attribute RegionIdsScope: The rule monitors region IDs, separated by commas, only applies to rules created based on managed rules
     */
    public readonly attrRegionIdsScope: ros.IResolvable | string;

    /**
     * Attribute ResourceGroupIdsScope: The rule monitors resource group IDs, separated by commas, only applies to rules created based on managed rules
     */
    public readonly attrResourceGroupIdsScope: ros.IResolvable | string;

    /**
     * Attribute ResourceTypesScope: The types of the resources to be evaluated against the rule
     */
    public readonly attrResourceTypesScope: ros.IResolvable | string;

    /**
     * Attribute RiskLevel: The risk level of the resources that are not compliant with the rule. Valid values:  1: critical 2: warning 3: info
     */
    public readonly attrRiskLevel: ros.IResolvable | string;

    /**
     * Attribute RuleName: The name of the rule.
     */
    public readonly attrRuleName: ros.IResolvable | string;

    /**
     * Attribute SourceIdentifier: The identifier of the rule.  For a managed rule, the value is the name of the managed rule. For a custom rule, the value is the ARN of the custom rule
     */
    public readonly attrSourceIdentifier: ros.IResolvable | string;

    /**
     * Attribute SourceOwner: Specifies whether you or Alibaba Cloud owns and manages the rule. Valid values:  CUSTOM_FC: The rule is a custom rule and you own the rule. ALIYUN: The rule is a managed rule and Alibaba Cloud owns the rule
     */
    public readonly attrSourceOwner: ros.IResolvable | string;

    /**
     * Attribute TagKeyScope: The rule monitors the tag key, only applies to rules created based on managed rules
     */
    public readonly attrTagKeyScope: ros.IResolvable | string;

    /**
     * Attribute TagValueScope: The rule monitors the tag value, only applies to rules created based on managed rules
     */
    public readonly attrTagValueScope: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RuleProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosRule = new RosRule(this, id,  {
            tagKeyScope: props.tagKeyScope,
            tagValueScope: props.tagValueScope,
            description: props.description,
            excludeResourceIdsScope: props.excludeResourceIdsScope,
            tagKeyLogicScope: props.tagKeyLogicScope,
            sourceOwner: props.sourceOwner,
            sourceIdentifier: props.sourceIdentifier,
            maximumExecutionFrequency: props.maximumExecutionFrequency,
            regionIdsScope: props.regionIdsScope,
            configRuleTriggerTypes: props.configRuleTriggerTypes,
            resourceGroupIdsScope: props.resourceGroupIdsScope,
            riskLevel: props.riskLevel,
            resourceTypesScope: props.resourceTypesScope,
            ruleName: props.ruleName,
            inputParameters: props.inputParameters,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosRule;
        this.attrConfigRuleArn = rosRule.attrConfigRuleArn;
        this.attrConfigRuleId = rosRule.attrConfigRuleId;
        this.attrConfigRuleTriggerTypes = rosRule.attrConfigRuleTriggerTypes;
        this.attrDescription = rosRule.attrDescription;
        this.attrEventSource = rosRule.attrEventSource;
        this.attrExcludeResourceIdsScope = rosRule.attrExcludeResourceIdsScope;
        this.attrInputParameters = rosRule.attrInputParameters;
        this.attrMaximumExecutionFrequency = rosRule.attrMaximumExecutionFrequency;
        this.attrRegionIdsScope = rosRule.attrRegionIdsScope;
        this.attrResourceGroupIdsScope = rosRule.attrResourceGroupIdsScope;
        this.attrResourceTypesScope = rosRule.attrResourceTypesScope;
        this.attrRiskLevel = rosRule.attrRiskLevel;
        this.attrRuleName = rosRule.attrRuleName;
        this.attrSourceIdentifier = rosRule.attrSourceIdentifier;
        this.attrSourceOwner = rosRule.attrSourceOwner;
        this.attrTagKeyScope = rosRule.attrTagKeyScope;
        this.attrTagValueScope = rosRule.attrTagValueScope;
    }
}
