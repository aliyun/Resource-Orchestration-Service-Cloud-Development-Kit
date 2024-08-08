package alicloudroscdkoos


// Properties for defining a `Template`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oos-template
type TemplateProps struct {
	// Property content: The content of the template.
	//
	// The template must be in the JSON or YAML format. Maximum size: 64 KB.
	Content interface{} `field:"required" json:"content" yaml:"content"`
	// Property templateName: The name of the template.
	//
	// The template name can be up to 200 characters in length. The name can contain letters, digits, hyphens (-), and underscores (_). It cannot start with ALIYUN, ACS, ALIBABA, or ALICLOUD.
	TemplateName interface{} `field:"required" json:"templateName" yaml:"templateName"`
	// Property resourceGroupId: Resource group id.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property tags: Tag value and the key mapping, the label of the key number can be up to 20.
	Tags *map[string]interface{} `field:"optional" json:"tags" yaml:"tags"`
}

