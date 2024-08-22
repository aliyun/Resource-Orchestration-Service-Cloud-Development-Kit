package alicloudroscdkconfig


// Properties for defining a `RosAggregateCompliancePack`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-config-aggregatecompliancepack
type RosAggregateCompliancePackProps struct {
	AggregatorId interface{} `field:"required" json:"aggregatorId" yaml:"aggregatorId"`
	CompliancePackName interface{} `field:"required" json:"compliancePackName" yaml:"compliancePackName"`
	ConfigRules interface{} `field:"required" json:"configRules" yaml:"configRules"`
	Description interface{} `field:"required" json:"description" yaml:"description"`
	RiskLevel interface{} `field:"required" json:"riskLevel" yaml:"riskLevel"`
	CompliancePackTemplateId interface{} `field:"optional" json:"compliancePackTemplateId" yaml:"compliancePackTemplateId"`
	DefaultEnable interface{} `field:"optional" json:"defaultEnable" yaml:"defaultEnable"`
	ExcludeResourceIdsScope interface{} `field:"optional" json:"excludeResourceIdsScope" yaml:"excludeResourceIdsScope"`
	RegionIdsScope interface{} `field:"optional" json:"regionIdsScope" yaml:"regionIdsScope"`
	ResourceGroupIdsScope interface{} `field:"optional" json:"resourceGroupIdsScope" yaml:"resourceGroupIdsScope"`
	TagKeyScope interface{} `field:"optional" json:"tagKeyScope" yaml:"tagKeyScope"`
	TagValueScope interface{} `field:"optional" json:"tagValueScope" yaml:"tagValueScope"`
}

