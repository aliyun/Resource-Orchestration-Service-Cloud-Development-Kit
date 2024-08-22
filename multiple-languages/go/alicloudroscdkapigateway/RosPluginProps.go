package alicloudroscdkapigateway


// Properties for defining a `RosPlugin`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apigateway-plugin
type RosPluginProps struct {
	PluginData interface{} `field:"required" json:"pluginData" yaml:"pluginData"`
	PluginName interface{} `field:"required" json:"pluginName" yaml:"pluginName"`
	PluginType interface{} `field:"required" json:"pluginType" yaml:"pluginType"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	Tags *[]*RosPlugin_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
}

