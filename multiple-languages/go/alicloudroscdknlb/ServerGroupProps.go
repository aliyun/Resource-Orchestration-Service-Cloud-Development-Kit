package alicloudroscdknlb


// Properties for defining a `ServerGroup`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nlb-servergroup
type ServerGroupProps struct {
	// Property serverGroupName: Name of ServerGroup.
	ServerGroupName interface{} `field:"required" json:"serverGroupName" yaml:"serverGroupName"`
	// Property vpcId: ID of VPC.
	VpcId interface{} `field:"required" json:"vpcId" yaml:"vpcId"`
	// Property addressIpVersion: IP version of address.
	AddressIpVersion interface{} `field:"optional" json:"addressIpVersion" yaml:"addressIpVersion"`
	// Property anyPortEnabled: Specifies whether to enable all-port forwarding.
	//
	// Valid values:
	// true
	// false (default).
	AnyPortEnabled interface{} `field:"optional" json:"anyPortEnabled" yaml:"anyPortEnabled"`
	// Property connectionDrainEnabled: Whether to enable graceful connection interruption.
	ConnectionDrainEnabled interface{} `field:"optional" json:"connectionDrainEnabled" yaml:"connectionDrainEnabled"`
	// Property connectionDrainTimeout: Time of graceful connection interruption.
	ConnectionDrainTimeout interface{} `field:"optional" json:"connectionDrainTimeout" yaml:"connectionDrainTimeout"`
	// Property healthCheckConfig: Health Check Config.
	HealthCheckConfig interface{} `field:"optional" json:"healthCheckConfig" yaml:"healthCheckConfig"`
	// Property persistenceEnabled: Whether to enable session persistence.
	PersistenceEnabled interface{} `field:"optional" json:"persistenceEnabled" yaml:"persistenceEnabled"`
	// Property persistenceTimeout: Time of session persistence.
	PersistenceTimeout interface{} `field:"optional" json:"persistenceTimeout" yaml:"persistenceTimeout"`
	// Property preserveClientIpEnabled: Whether to enable the client address retention function.
	PreserveClientIpEnabled interface{} `field:"optional" json:"preserveClientIpEnabled" yaml:"preserveClientIpEnabled"`
	// Property protocol: Protocol of ServerGroup.
	Protocol interface{} `field:"optional" json:"protocol" yaml:"protocol"`
	// Property resourceGroupId: undefined.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property scheduler: undefined.
	Scheduler interface{} `field:"optional" json:"scheduler" yaml:"scheduler"`
	// Property serverGroupType: Type of ServerGroup.
	ServerGroupType interface{} `field:"optional" json:"serverGroupType" yaml:"serverGroupType"`
	// Property servers: undefined.
	Servers interface{} `field:"optional" json:"servers" yaml:"servers"`
	// Property tags: Tags to attach to instance.
	//
	// Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
	Tags *[]*RosServerGroup_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
}

