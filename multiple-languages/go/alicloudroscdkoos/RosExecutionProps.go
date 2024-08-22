package alicloudroscdkoos


// Properties for defining a `RosExecution`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oos-execution
type RosExecutionProps struct {
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	LoopMode interface{} `field:"optional" json:"loopMode" yaml:"loopMode"`
	Mode interface{} `field:"optional" json:"mode" yaml:"mode"`
	Parameters interface{} `field:"optional" json:"parameters" yaml:"parameters"`
	ParentExecutionId interface{} `field:"optional" json:"parentExecutionId" yaml:"parentExecutionId"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	ResourceOptions interface{} `field:"optional" json:"resourceOptions" yaml:"resourceOptions"`
	SafetyCheck interface{} `field:"optional" json:"safetyCheck" yaml:"safetyCheck"`
	Tags *map[string]interface{} `field:"optional" json:"tags" yaml:"tags"`
	TemplateContent interface{} `field:"optional" json:"templateContent" yaml:"templateContent"`
	TemplateName interface{} `field:"optional" json:"templateName" yaml:"templateName"`
	TemplateUrl interface{} `field:"optional" json:"templateUrl" yaml:"templateUrl"`
	TemplateVersion interface{} `field:"optional" json:"templateVersion" yaml:"templateVersion"`
}

