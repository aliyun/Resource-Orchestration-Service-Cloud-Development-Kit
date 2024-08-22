package alicloudroscdkconfig


type RosAggregateCompliancePack_ConfigRulesProperty struct {
	RiskLevel interface{} `field:"required" json:"riskLevel" yaml:"riskLevel"`
	ConfigRuleId interface{} `field:"optional" json:"configRuleId" yaml:"configRuleId"`
	ConfigRuleName interface{} `field:"optional" json:"configRuleName" yaml:"configRuleName"`
	ConfigRuleParameters interface{} `field:"optional" json:"configRuleParameters" yaml:"configRuleParameters"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	ManagedRuleIdentifier interface{} `field:"optional" json:"managedRuleIdentifier" yaml:"managedRuleIdentifier"`
}

