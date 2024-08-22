package alicloudroscdkconfig


// Properties for defining a `Rule`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-config-rule
type RuleProps struct {
	// Property configRuleTriggerTypes: The trigger type of the rule.
	//
	// Valid values:  ConfigurationItemChangeNotification: The rule is triggered upon configuration changes. ScheduledNotification: The rule is triggered as scheduled.
	ConfigRuleTriggerTypes interface{} `field:"required" json:"configRuleTriggerTypes" yaml:"configRuleTriggerTypes"`
	// Property resourceTypesScope: The types of the resources to be evaluated against the rule.
	ResourceTypesScope interface{} `field:"required" json:"resourceTypesScope" yaml:"resourceTypesScope"`
	// Property riskLevel: The risk level of the resources that are not compliant with the rule.
	//
	// Valid values:  1: critical 2: warning 3: info.
	RiskLevel interface{} `field:"required" json:"riskLevel" yaml:"riskLevel"`
	// Property ruleName: The name of the rule.
	RuleName interface{} `field:"required" json:"ruleName" yaml:"ruleName"`
	// Property sourceIdentifier: The identifier of the rule.
	//
	// For a managed rule, the value is the name of the managed rule. For a custom rule, the value is the ARN of the custom rule
	SourceIdentifier interface{} `field:"required" json:"sourceIdentifier" yaml:"sourceIdentifier"`
	// Property sourceOwner: Specifies whether you or Alibaba Cloud owns and manages the rule.
	//
	// Valid values:  CUSTOM_FC: The rule is a custom rule and you own the rule. ALIYUN: The rule is a managed rule and Alibaba Cloud owns the rule
	SourceOwner interface{} `field:"required" json:"sourceOwner" yaml:"sourceOwner"`
	// Property description: The description of the rule.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property excludeResourceIdsScope: The rule monitors excluded resource IDs, multiple of which are separated by commas, only applies to rules created based on managed rules, , custom rule this field is empty.
	ExcludeResourceIdsScope interface{} `field:"optional" json:"excludeResourceIdsScope" yaml:"excludeResourceIdsScope"`
	// Property inputParameters: The settings of the input parameters for the rule.
	InputParameters interface{} `field:"optional" json:"inputParameters" yaml:"inputParameters"`
	// Property maximumExecutionFrequency: The frequency of the compliance evaluations.
	//
	// Valid values:  One_Hour Three_Hours Six_Hours Twelve_Hours TwentyFour_Hours.
	MaximumExecutionFrequency interface{} `field:"optional" json:"maximumExecutionFrequency" yaml:"maximumExecutionFrequency"`
	// Property regionIdsScope: The rule monitors region IDs, separated by commas, only applies to rules created based on managed rules.
	RegionIdsScope interface{} `field:"optional" json:"regionIdsScope" yaml:"regionIdsScope"`
	// Property resourceGroupIdsScope: The rule monitors resource group IDs, separated by commas, only applies to rules created based on managed rules.
	ResourceGroupIdsScope interface{} `field:"optional" json:"resourceGroupIdsScope" yaml:"resourceGroupIdsScope"`
	// Property tagKeyLogicScope:.
	TagKeyLogicScope interface{} `field:"optional" json:"tagKeyLogicScope" yaml:"tagKeyLogicScope"`
	// Property tagKeyScope: The rule monitors the tag key, only applies to rules created based on managed rules.
	TagKeyScope interface{} `field:"optional" json:"tagKeyScope" yaml:"tagKeyScope"`
	// Property tagValueScope: The rule monitors the tag value, only applies to rules created based on managed rules.
	TagValueScope interface{} `field:"optional" json:"tagValueScope" yaml:"tagValueScope"`
}

