package alicloudroscdkmse


// Properties for defining a `NacosConfig`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-nacosconfig
type NacosConfigProps struct {
	// Property dataId: The data ID.
	DataId interface{} `field:"required" json:"dataId" yaml:"dataId"`
	// Property group: The ID of the group.
	Group interface{} `field:"required" json:"group" yaml:"group"`
	// Property instanceId: The ID of the instance.
	InstanceId interface{} `field:"required" json:"instanceId" yaml:"instanceId"`
	// Property appName: The name of the application.
	AppName interface{} `field:"optional" json:"appName" yaml:"appName"`
	// Property betaIps: The list of IP addresses where the beta release of the configuration is performed.
	BetaIps interface{} `field:"optional" json:"betaIps" yaml:"betaIps"`
	// Property content: The content of the configuration.
	Content interface{} `field:"optional" json:"content" yaml:"content"`
	// Property desc: The description of the configuration.
	Desc interface{} `field:"optional" json:"desc" yaml:"desc"`
	// Property namespaceId: The ID of the namespace.
	NamespaceId interface{} `field:"optional" json:"namespaceId" yaml:"namespaceId"`
	// Property tags: The tag of the configuration.
	Tags *string `field:"optional" json:"tags" yaml:"tags"`
	// Property type: The format of the configuration.
	//
	// Supported formats include TEXT, JSON, and XML.
	Type interface{} `field:"optional" json:"type" yaml:"type"`
}

