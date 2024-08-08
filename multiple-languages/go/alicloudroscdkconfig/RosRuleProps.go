package alicloudroscdkconfig


// Properties for defining a `RosRule`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-config-rule
type RosRuleProps struct {
	ConfigRuleTriggerTypes interface{} `field:"required" json:"configRuleTriggerTypes" yaml:"configRuleTriggerTypes"`
	ResourceTypesScope interface{} `field:"required" json:"resourceTypesScope" yaml:"resourceTypesScope"`
	RiskLevel interface{} `field:"required" json:"riskLevel" yaml:"riskLevel"`
	RuleName interface{} `field:"required" json:"ruleName" yaml:"ruleName"`
	SourceIdentifier interface{} `field:"required" json:"sourceIdentifier" yaml:"sourceIdentifier"`
	SourceOwner interface{} `field:"required" json:"sourceOwner" yaml:"sourceOwner"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	ExcludeResourceIdsScope interface{} `field:"optional" json:"excludeResourceIdsScope" yaml:"excludeResourceIdsScope"`
	InputParameters interface{} `field:"optional" json:"inputParameters" yaml:"inputParameters"`
	MaximumExecutionFrequency interface{} `field:"optional" json:"maximumExecutionFrequency" yaml:"maximumExecutionFrequency"`
	RegionIdsScope interface{} `field:"optional" json:"regionIdsScope" yaml:"regionIdsScope"`
	ResourceGroupIdsScope interface{} `field:"optional" json:"resourceGroupIdsScope" yaml:"resourceGroupIdsScope"`
	TagKeyLogicScope interface{} `field:"optional" json:"tagKeyLogicScope" yaml:"tagKeyLogicScope"`
	TagKeyScope interface{} `field:"optional" json:"tagKeyScope" yaml:"tagKeyScope"`
	TagValueScope interface{} `field:"optional" json:"tagValueScope" yaml:"tagValueScope"`
}

