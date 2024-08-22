package alicloudroscdkapigateway


// Properties for defining a `PluginAttachment`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apigateway-pluginattachment
type PluginAttachmentProps struct {
	// Property apiId: The ID of the API to which you want to bind the plug-in.
	ApiId interface{} `field:"required" json:"apiId" yaml:"apiId"`
	// Property pluginId: The ID of the plugin that you want to bind.
	PluginId interface{} `field:"required" json:"pluginId" yaml:"pluginId"`
	// Property stageName: The name of the runtime environment.
	//
	// Valid values:
	// RELEASE: indicates the release environment.
	// PRE: indicates the pre-release environment.
	// TEST: indicates the test environment.
	StageName interface{} `field:"required" json:"stageName" yaml:"stageName"`
}

