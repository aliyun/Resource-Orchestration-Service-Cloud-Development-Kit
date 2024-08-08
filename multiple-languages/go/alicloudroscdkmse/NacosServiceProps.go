package alicloudroscdkmse


// Properties for defining a `NacosService`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-nacosservice
type NacosServiceProps struct {
	// Property instanceId: The ID of the instance.
	InstanceId interface{} `field:"required" json:"instanceId" yaml:"instanceId"`
	// Property serviceName: The name of the service.
	ServiceName interface{} `field:"required" json:"serviceName" yaml:"serviceName"`
	// Property ephemeral: Specifies whether the instance is a temporary node.
	//
	// Valid values:
	// true: yes
	// false: no.
	Ephemeral interface{} `field:"optional" json:"ephemeral" yaml:"ephemeral"`
	// Property groupName: The name of the group.
	GroupName interface{} `field:"optional" json:"groupName" yaml:"groupName"`
	// Property namespaceId: The ID of the namespace.
	NamespaceId interface{} `field:"optional" json:"namespaceId" yaml:"namespaceId"`
	// Property protectThreshold: The protection threshold.
	ProtectThreshold interface{} `field:"optional" json:"protectThreshold" yaml:"protectThreshold"`
}

