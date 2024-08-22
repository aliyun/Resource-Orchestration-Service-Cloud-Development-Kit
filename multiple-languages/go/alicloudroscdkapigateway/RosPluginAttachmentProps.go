package alicloudroscdkapigateway


// Properties for defining a `RosPluginAttachment`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apigateway-pluginattachment
type RosPluginAttachmentProps struct {
	ApiId interface{} `field:"required" json:"apiId" yaml:"apiId"`
	PluginId interface{} `field:"required" json:"pluginId" yaml:"pluginId"`
	StageName interface{} `field:"required" json:"stageName" yaml:"stageName"`
}

