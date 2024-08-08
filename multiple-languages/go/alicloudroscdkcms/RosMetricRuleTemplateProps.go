package alicloudroscdkcms


// Properties for defining a `RosMetricRuleTemplate`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms-metricruletemplate
type RosMetricRuleTemplateProps struct {
	Name interface{} `field:"required" json:"name" yaml:"name"`
	AlertTemplates interface{} `field:"optional" json:"alertTemplates" yaml:"alertTemplates"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	RestVersion interface{} `field:"optional" json:"restVersion" yaml:"restVersion"`
	TemplateId interface{} `field:"optional" json:"templateId" yaml:"templateId"`
}

