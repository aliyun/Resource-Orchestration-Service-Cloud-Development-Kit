package alicloudroscdkconfig


// Properties for defining a `RosCompliancePack`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-config-compliancepack
type RosCompliancePackProps struct {
	CompliancePackName interface{} `field:"required" json:"compliancePackName" yaml:"compliancePackName"`
	ConfigRules interface{} `field:"required" json:"configRules" yaml:"configRules"`
	RiskLevel interface{} `field:"required" json:"riskLevel" yaml:"riskLevel"`
	CompliancePackTemplateId interface{} `field:"optional" json:"compliancePackTemplateId" yaml:"compliancePackTemplateId"`
	ConfigRuleIds interface{} `field:"optional" json:"configRuleIds" yaml:"configRuleIds"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
}

