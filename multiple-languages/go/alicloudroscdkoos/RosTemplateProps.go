package alicloudroscdkoos


// Properties for defining a `RosTemplate`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oos-template
type RosTemplateProps struct {
	Content interface{} `field:"required" json:"content" yaml:"content"`
	TemplateName interface{} `field:"required" json:"templateName" yaml:"templateName"`
	IgnoreExisting interface{} `field:"optional" json:"ignoreExisting" yaml:"ignoreExisting"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	Tags *map[string]interface{} `field:"optional" json:"tags" yaml:"tags"`
}

