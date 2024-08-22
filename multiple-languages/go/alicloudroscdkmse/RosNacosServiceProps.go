package alicloudroscdkmse


// Properties for defining a `RosNacosService`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-nacosservice
type RosNacosServiceProps struct {
	InstanceId interface{} `field:"required" json:"instanceId" yaml:"instanceId"`
	ServiceName interface{} `field:"required" json:"serviceName" yaml:"serviceName"`
	Ephemeral interface{} `field:"optional" json:"ephemeral" yaml:"ephemeral"`
	GroupName interface{} `field:"optional" json:"groupName" yaml:"groupName"`
	NamespaceId interface{} `field:"optional" json:"namespaceId" yaml:"namespaceId"`
	ProtectThreshold interface{} `field:"optional" json:"protectThreshold" yaml:"protectThreshold"`
}

