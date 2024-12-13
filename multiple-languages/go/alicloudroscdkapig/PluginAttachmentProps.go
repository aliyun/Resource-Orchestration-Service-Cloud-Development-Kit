package alicloudroscdkapig


// Properties for defining a `PluginAttachment`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-pluginattachment
type PluginAttachmentProps struct {
	// Property pluginInfo: The information about the association of plugin with gateway instance.
	PluginInfo interface{} `field:"required" json:"pluginInfo" yaml:"pluginInfo"`
	// Property attachResourceId: The resource ID to be attached by the plugin.
	AttachResourceId interface{} `field:"optional" json:"attachResourceId" yaml:"attachResourceId"`
	// Property attachResourceIds: The list of resource IDs to be attached by the plugin.
	AttachResourceIds interface{} `field:"optional" json:"attachResourceIds" yaml:"attachResourceIds"`
	// Property attachResourceType: The type of the resource to be attached by the plugin.
	AttachResourceType interface{} `field:"optional" json:"attachResourceType" yaml:"attachResourceType"`
	// Property enable: Whether to enable this plugin, default value is false.
	Enable interface{} `field:"optional" json:"enable" yaml:"enable"`
	// Property environmentId: The ID of the environment.
	EnvironmentId interface{} `field:"optional" json:"environmentId" yaml:"environmentId"`
}

