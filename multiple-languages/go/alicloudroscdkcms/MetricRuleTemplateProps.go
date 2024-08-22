package alicloudroscdkcms


// Properties for defining a `MetricRuleTemplate`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms-metricruletemplate
type MetricRuleTemplateProps struct {
	// Property name: The name of the alert template.
	Name interface{} `field:"required" json:"name" yaml:"name"`
	// Property alertTemplates: Valid values of N: 0 to 200.
	AlertTemplates interface{} `field:"optional" json:"alertTemplates" yaml:"alertTemplates"`
	// Property description: The description of the alert template.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property restVersion: The version of the alert template.
	//
	// Call DescribeMetricRuleTemplateList or DescribeMetricRuleTemplateAttribute
	// to obtain information about the alert templates. The combination of version and ID
	// uniquely identifies an alert template.
	RestVersion interface{} `field:"optional" json:"restVersion" yaml:"restVersion"`
	// Property templateId: The ID of the alert template.
	TemplateId interface{} `field:"optional" json:"templateId" yaml:"templateId"`
}

