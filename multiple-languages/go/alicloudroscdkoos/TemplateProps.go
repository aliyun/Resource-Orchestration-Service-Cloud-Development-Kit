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
	// The template name can be up to 200 characters in length. The name can contain letters, digits, hyphens (-), and underscores (_). It cannot start with ACS, ALIYUN, ALIBABA, or ALICLOUD.
	TemplateName interface{} `field:"required" json:"templateName" yaml:"templateName"`
	// Property ignoreExisting: Whether to ignore existing template False: ROS will perform a uniqueness check.If a template with the same name exists, an error will be reported when creating it. True: ROS will not check the uniqueness.If there is a template with the same name, the template creation process will be ignored. If the template is not created by ROS, it will be ignored during update and delete stage.
	IgnoreExisting interface{} `field:"optional" json:"ignoreExisting" yaml:"ignoreExisting"`
	// Property resourceGroupId: Resource group id.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property tags: Tag value and the key mapping, the label of the key number can be up to 20.
	Tags *map[string]interface{} `field:"optional" json:"tags" yaml:"tags"`
}

