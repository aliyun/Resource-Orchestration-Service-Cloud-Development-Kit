package alicloudroscdkmse


// Properties for defining a `RosNacosConfig`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-nacosconfig
type RosNacosConfigProps struct {
	DataId interface{} `field:"required" json:"dataId" yaml:"dataId"`
	Group interface{} `field:"required" json:"group" yaml:"group"`
	InstanceId interface{} `field:"required" json:"instanceId" yaml:"instanceId"`
	AppName interface{} `field:"optional" json:"appName" yaml:"appName"`
	BetaIps interface{} `field:"optional" json:"betaIps" yaml:"betaIps"`
	Content interface{} `field:"optional" json:"content" yaml:"content"`
	Desc interface{} `field:"optional" json:"desc" yaml:"desc"`
	NamespaceId interface{} `field:"optional" json:"namespaceId" yaml:"namespaceId"`
	Tags *string `field:"optional" json:"tags" yaml:"tags"`
	Type interface{} `field:"optional" json:"type" yaml:"type"`
}

