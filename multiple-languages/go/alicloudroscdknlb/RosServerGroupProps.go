package alicloudroscdknlb


// Properties for defining a `RosServerGroup`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nlb-servergroup
type RosServerGroupProps struct {
	ServerGroupName interface{} `field:"required" json:"serverGroupName" yaml:"serverGroupName"`
	VpcId interface{} `field:"required" json:"vpcId" yaml:"vpcId"`
	AddressIpVersion interface{} `field:"optional" json:"addressIpVersion" yaml:"addressIpVersion"`
	AnyPortEnabled interface{} `field:"optional" json:"anyPortEnabled" yaml:"anyPortEnabled"`
	ConnectionDrainEnabled interface{} `field:"optional" json:"connectionDrainEnabled" yaml:"connectionDrainEnabled"`
	ConnectionDrainTimeout interface{} `field:"optional" json:"connectionDrainTimeout" yaml:"connectionDrainTimeout"`
	HealthCheckConfig interface{} `field:"optional" json:"healthCheckConfig" yaml:"healthCheckConfig"`
	PersistenceEnabled interface{} `field:"optional" json:"persistenceEnabled" yaml:"persistenceEnabled"`
	PersistenceTimeout interface{} `field:"optional" json:"persistenceTimeout" yaml:"persistenceTimeout"`
	PreserveClientIpEnabled interface{} `field:"optional" json:"preserveClientIpEnabled" yaml:"preserveClientIpEnabled"`
	Protocol interface{} `field:"optional" json:"protocol" yaml:"protocol"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	Scheduler interface{} `field:"optional" json:"scheduler" yaml:"scheduler"`
	ServerGroupType interface{} `field:"optional" json:"serverGroupType" yaml:"serverGroupType"`
	Servers interface{} `field:"optional" json:"servers" yaml:"servers"`
	Tags *[]*RosServerGroup_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
}

