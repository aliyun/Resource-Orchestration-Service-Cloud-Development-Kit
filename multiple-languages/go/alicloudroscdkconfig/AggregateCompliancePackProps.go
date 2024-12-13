package alicloudroscdkconfig


// Properties for defining a `AggregateCompliancePack`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-config-aggregatecompliancepack
type AggregateCompliancePackProps struct {
	// Property aggregatorId: Aggregator id.
	AggregatorId interface{} `field:"required" json:"aggregatorId" yaml:"aggregatorId"`
	// Property compliancePackName: Compliance package name.
	CompliancePackName interface{} `field:"required" json:"compliancePackName" yaml:"compliancePackName"`
	// Property description: The description of compliance pack.
	Description interface{} `field:"required" json:"description" yaml:"description"`
	// Property riskLevel: Compliance package risk level.
	//
	// Value:
	// 1: High risk.
	// 2: Medium risk.
	// 3: Low risk.
	RiskLevel interface{} `field:"required" json:"riskLevel" yaml:"riskLevel"`
	// Property compliancePackTemplateId: Compliance package template ID.
	CompliancePackTemplateId interface{} `field:"optional" json:"compliancePackTemplateId" yaml:"compliancePackTemplateId"`
	// Property configRules: List of rules in the compliance package.
	//
	// Note: Either this parameter or TemplateContent must be set.
	ConfigRules interface{} `field:"optional" json:"configRules" yaml:"configRules"`
	// Property defaultEnable: Whether the rule supports quick activation.
	//
	// Value:
	// true: This rule will be enabled when the compliance package is quickly enabled.
	// false (default): disable.
	DefaultEnable interface{} `field:"optional" json:"defaultEnable" yaml:"defaultEnable"`
	// Property excludeRegionIdsScope: The compliance package is invalid for the specified region ID.
	ExcludeRegionIdsScope interface{} `field:"optional" json:"excludeRegionIdsScope" yaml:"excludeRegionIdsScope"`
	// Property excludeResourceGroupIdsScope: The compliance package is invalid for the specified resource group ID.
	ExcludeResourceGroupIdsScope interface{} `field:"optional" json:"excludeResourceGroupIdsScope" yaml:"excludeResourceGroupIdsScope"`
	// Property excludeResourceIdsScope: The compliance package is invalid for the specified resource ID, that is, no evaluation is performed on the resource.
	ExcludeResourceIdsScope interface{} `field:"optional" json:"excludeResourceIdsScope" yaml:"excludeResourceIdsScope"`
	// Property regionIdsScope: The compliance package only takes effect for resources in the specified region ID.
	RegionIdsScope interface{} `field:"optional" json:"regionIdsScope" yaml:"regionIdsScope"`
	// Property resourceGroupIdsScope: The compliance package only takes effect on resources in the specified resource group ID.
	ResourceGroupIdsScope interface{} `field:"optional" json:"resourceGroupIdsScope" yaml:"resourceGroupIdsScope"`
	// Property resourceIdsScope: The compliance package only takes effect on the specified resource ID.
	ResourceIdsScope interface{} `field:"optional" json:"resourceIdsScope" yaml:"resourceIdsScope"`
	// Property tagKeyScope: Compliance packages only take effect on resources bound to the specified tag key.
	TagKeyScope interface{} `field:"optional" json:"tagKeyScope" yaml:"tagKeyScope"`
	// Property tagValueScope: Compliance packages only take effect on resources bound to specified tag key-value pairs.TagValueScope needs to be used in conjunction with TagKeyScope.
	TagValueScope interface{} `field:"optional" json:"tagValueScope" yaml:"tagValueScope"`
	// Property templateContent: Template information used to generate compliance packages.
	//
	// Note: Either this parameter or ConfigRules must be set.
	TemplateContent interface{} `field:"optional" json:"templateContent" yaml:"templateContent"`
}

