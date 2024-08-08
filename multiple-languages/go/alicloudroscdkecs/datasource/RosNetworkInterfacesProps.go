package datasource


// Properties for defining a `RosNetworkInterfaces`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-networkinterfaces
type RosNetworkInterfacesProps struct {
	InstanceId interface{} `field:"optional" json:"instanceId" yaml:"instanceId"`
	Ipv6Addresses interface{} `field:"optional" json:"ipv6Addresses" yaml:"ipv6Addresses"`
	NetworkInterfaceIds interface{} `field:"optional" json:"networkInterfaceIds" yaml:"networkInterfaceIds"`
	NetworkInterfaceName interface{} `field:"optional" json:"networkInterfaceName" yaml:"networkInterfaceName"`
	PrimaryIpAddress interface{} `field:"optional" json:"primaryIpAddress" yaml:"primaryIpAddress"`
	PrivateIpAddresses interface{} `field:"optional" json:"privateIpAddresses" yaml:"privateIpAddresses"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	SecurityGroupId interface{} `field:"optional" json:"securityGroupId" yaml:"securityGroupId"`
	ServiceManaged interface{} `field:"optional" json:"serviceManaged" yaml:"serviceManaged"`
	Status interface{} `field:"optional" json:"status" yaml:"status"`
	Tags *[]*RosNetworkInterfaces_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
	Type interface{} `field:"optional" json:"type" yaml:"type"`
	VpcId interface{} `field:"optional" json:"vpcId" yaml:"vpcId"`
	VSwitchId interface{} `field:"optional" json:"vSwitchId" yaml:"vSwitchId"`
}

