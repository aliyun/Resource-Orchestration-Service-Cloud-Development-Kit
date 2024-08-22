package alicloudroscdkoos


// Properties for defining a `RosStateConfiguration`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oos-stateconfiguration
type RosStateConfigurationProps struct {
	ScheduleExpression interface{} `field:"required" json:"scheduleExpression" yaml:"scheduleExpression"`
	ScheduleType interface{} `field:"required" json:"scheduleType" yaml:"scheduleType"`
	Targets interface{} `field:"required" json:"targets" yaml:"targets"`
	TemplateName interface{} `field:"required" json:"templateName" yaml:"templateName"`
	ConfigureMode interface{} `field:"optional" json:"configureMode" yaml:"configureMode"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	Parameters interface{} `field:"optional" json:"parameters" yaml:"parameters"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	Tags *map[string]interface{} `field:"optional" json:"tags" yaml:"tags"`
	TemplateVersion interface{} `field:"optional" json:"templateVersion" yaml:"templateVersion"`
}

