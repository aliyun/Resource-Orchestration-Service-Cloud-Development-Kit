package alicloudroscdkconfig


// Properties for defining a `CompliancePack`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-config-compliancepack
type CompliancePackProps struct {
	// Property compliancePackName: Compliance Package Name.
	CompliancePackName interface{} `field:"required" json:"compliancePackName" yaml:"compliancePackName"`
	// Property configRules:.
	ConfigRules interface{} `field:"required" json:"configRules" yaml:"configRules"`
	// Property riskLevel: Ris Level, valid values: 1 | 2 | 3.
	RiskLevel interface{} `field:"required" json:"riskLevel" yaml:"riskLevel"`
	// Property compliancePackTemplateId: Compliance Package Template Id.
	CompliancePackTemplateId interface{} `field:"optional" json:"compliancePackTemplateId" yaml:"compliancePackTemplateId"`
	// Property configRuleIds: Compliance Package rule ID list.
	ConfigRuleIds interface{} `field:"optional" json:"configRuleIds" yaml:"configRuleIds"`
	// Property description: Description.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
}

