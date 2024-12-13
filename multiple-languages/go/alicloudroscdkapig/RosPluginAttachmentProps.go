package alicloudroscdkapig


// Properties for defining a `RosPluginAttachment`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-pluginattachment
type RosPluginAttachmentProps struct {
	PluginInfo interface{} `field:"required" json:"pluginInfo" yaml:"pluginInfo"`
	AttachResourceId interface{} `field:"optional" json:"attachResourceId" yaml:"attachResourceId"`
	AttachResourceIds interface{} `field:"optional" json:"attachResourceIds" yaml:"attachResourceIds"`
	AttachResourceType interface{} `field:"optional" json:"attachResourceType" yaml:"attachResourceType"`
	Enable interface{} `field:"optional" json:"enable" yaml:"enable"`
	EnvironmentId interface{} `field:"optional" json:"environmentId" yaml:"environmentId"`
}

