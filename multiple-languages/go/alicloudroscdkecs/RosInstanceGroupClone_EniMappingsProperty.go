package alicloudroscdkecs


type RosInstanceGroupClone_EniMappingsProperty struct {
	DeleteOnRelease interface{} `field:"optional" json:"deleteOnRelease" yaml:"deleteOnRelease"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	InstanceType interface{} `field:"optional" json:"instanceType" yaml:"instanceType"`
	Ipv6AddressCount interface{} `field:"optional" json:"ipv6AddressCount" yaml:"ipv6AddressCount"`
	Ipv6Addresses interface{} `field:"optional" json:"ipv6Addresses" yaml:"ipv6Addresses"`
	NetworkCardIndex interface{} `field:"optional" json:"networkCardIndex" yaml:"networkCardIndex"`
	NetworkInterfaceId interface{} `field:"optional" json:"networkInterfaceId" yaml:"networkInterfaceId"`
	NetworkInterfaceName interface{} `field:"optional" json:"networkInterfaceName" yaml:"networkInterfaceName"`
	NetworkInterfaceTrafficMode interface{} `field:"optional" json:"networkInterfaceTrafficMode" yaml:"networkInterfaceTrafficMode"`
	PrimaryIpAddress interface{} `field:"optional" json:"primaryIpAddress" yaml:"primaryIpAddress"`
	QueueNumber interface{} `field:"optional" json:"queueNumber" yaml:"queueNumber"`
	QueuePairNumber interface{} `field:"optional" json:"queuePairNumber" yaml:"queuePairNumber"`
	SecurityGroupId interface{} `field:"optional" json:"securityGroupId" yaml:"securityGroupId"`
	SecurityGroupIds interface{} `field:"optional" json:"securityGroupIds" yaml:"securityGroupIds"`
	VSwitchId interface{} `field:"optional" json:"vSwitchId" yaml:"vSwitchId"`
}

