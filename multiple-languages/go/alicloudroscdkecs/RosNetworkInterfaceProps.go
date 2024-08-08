package alicloudroscdkecs


// Properties for defining a `RosNetworkInterface`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-networkinterface
type RosNetworkInterfaceProps struct {
	VSwitchId interface{} `field:"required" json:"vSwitchId" yaml:"vSwitchId"`
	DeleteOnRelease interface{} `field:"optional" json:"deleteOnRelease" yaml:"deleteOnRelease"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	Ipv4PrefixCount interface{} `field:"optional" json:"ipv4PrefixCount" yaml:"ipv4PrefixCount"`
	Ipv4Prefixes interface{} `field:"optional" json:"ipv4Prefixes" yaml:"ipv4Prefixes"`
	Ipv6AddressCount interface{} `field:"optional" json:"ipv6AddressCount" yaml:"ipv6AddressCount"`
	Ipv6Addresses interface{} `field:"optional" json:"ipv6Addresses" yaml:"ipv6Addresses"`
	Ipv6PrefixCount interface{} `field:"optional" json:"ipv6PrefixCount" yaml:"ipv6PrefixCount"`
	Ipv6Prefixes interface{} `field:"optional" json:"ipv6Prefixes" yaml:"ipv6Prefixes"`
	NetworkInterfaceName interface{} `field:"optional" json:"networkInterfaceName" yaml:"networkInterfaceName"`
	NetworkInterfaceTrafficMode interface{} `field:"optional" json:"networkInterfaceTrafficMode" yaml:"networkInterfaceTrafficMode"`
	PrimaryIpAddress interface{} `field:"optional" json:"primaryIpAddress" yaml:"primaryIpAddress"`
	PrivateIpAddresses interface{} `field:"optional" json:"privateIpAddresses" yaml:"privateIpAddresses"`
	QueueNumber interface{} `field:"optional" json:"queueNumber" yaml:"queueNumber"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	RxQueueSize interface{} `field:"optional" json:"rxQueueSize" yaml:"rxQueueSize"`
	SecondaryPrivateIpAddressCount interface{} `field:"optional" json:"secondaryPrivateIpAddressCount" yaml:"secondaryPrivateIpAddressCount"`
	SecurityGroupId interface{} `field:"optional" json:"securityGroupId" yaml:"securityGroupId"`
	SecurityGroupIds interface{} `field:"optional" json:"securityGroupIds" yaml:"securityGroupIds"`
	Tags *[]*RosNetworkInterface_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
	TxQueueSize interface{} `field:"optional" json:"txQueueSize" yaml:"txQueueSize"`
}

