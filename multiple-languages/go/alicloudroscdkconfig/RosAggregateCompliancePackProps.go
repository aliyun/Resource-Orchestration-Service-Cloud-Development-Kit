package alicloudroscdkconfig


// Properties for defining a `RosAggregateCompliancePack`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-config-aggregatecompliancepack
type RosAggregateCompliancePackProps struct {
	AggregatorId interface{} `field:"required" json:"aggregatorId" yaml:"aggregatorId"`
	CompliancePackName interface{} `field:"required" json:"compliancePackName" yaml:"compliancePackName"`
	Description interface{} `field:"required" json:"description" yaml:"description"`
	RiskLevel interface{} `field:"required" json:"riskLevel" yaml:"riskLevel"`
	CompliancePackTemplateId interface{} `field:"optional" json:"compliancePackTemplateId" yaml:"compliancePackTemplateId"`
	ConfigRules interface{} `field:"optional" json:"configRules" yaml:"configRules"`
	DefaultEnable interface{} `field:"optional" json:"defaultEnable" yaml:"defaultEnable"`
	ExcludeRegionIdsScope interface{} `field:"optional" json:"excludeRegionIdsScope" yaml:"excludeRegionIdsScope"`
	ExcludeResourceGroupIdsScope interface{} `field:"optional" json:"excludeResourceGroupIdsScope" yaml:"excludeResourceGroupIdsScope"`
	ExcludeResourceIdsScope interface{} `field:"optional" json:"excludeResourceIdsScope" yaml:"excludeResourceIdsScope"`
	RegionIdsScope interface{} `field:"optional" json:"regionIdsScope" yaml:"regionIdsScope"`
	ResourceGroupIdsScope interface{} `field:"optional" json:"resourceGroupIdsScope" yaml:"resourceGroupIdsScope"`
	ResourceIdsScope interface{} `field:"optional" json:"resourceIdsScope" yaml:"resourceIdsScope"`
	TagKeyScope interface{} `field:"optional" json:"tagKeyScope" yaml:"tagKeyScope"`
	TagValueScope interface{} `field:"optional" json:"tagValueScope" yaml:"tagValueScope"`
	TemplateContent interface{} `field:"optional" json:"templateContent" yaml:"templateContent"`
}

