package alicloudroscdkapigateway


// Properties for defining a `Plugin`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apigateway-plugin
type PluginProps struct {
	// Property pluginData: The definition statement of the plug-in.
	//
	// Plug-in definition statements in the JSON and YAML formats are supported.
	PluginData interface{} `field:"required" json:"pluginData" yaml:"pluginData"`
	// Property pluginName: The name of the plug-in that you want to create.
	//
	// It can contain uppercase English letters, lowercase English letters, Chinese characters, numbers, and underscores (). It must be 4 to 50 characters in length and cannot start with an underscore ().
	PluginName interface{} `field:"required" json:"pluginName" yaml:"pluginName"`
	// Property pluginType: The type of the plug-in.
	//
	// Valid values: ipControl: indicates IP address-based access control. trafficControl: indicates throttling. backendSignature: indicates backend signature. jwtAuth: indicates JWT (OpenId Connect). cors: indicates cross-origin resource access (CORS). caching: indicates caching.
	PluginType interface{} `field:"required" json:"pluginType" yaml:"pluginType"`
	// Property description: The description of the plug-in, which cannot exceed 200 characters.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property tags: Tags to attach to instance.
	//
	// Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
	Tags *[]*RosPlugin_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
}

