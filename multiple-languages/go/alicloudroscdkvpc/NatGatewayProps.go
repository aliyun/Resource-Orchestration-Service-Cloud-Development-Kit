package alicloudroscdkvpc


// Properties for defining a `NatGateway`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-natgateway
type NatGatewayProps struct {
	// Property vpcId: The VPC id to create NAT gateway.
	VpcId interface{} `field:"required" json:"vpcId" yaml:"vpcId"`
	// Property vSwitchId: The VSwitch id to create NAT gateway.
	VSwitchId interface{} `field:"required" json:"vSwitchId" yaml:"vSwitchId"`
	// Property autoPay: Specifies whether to enable automatic payment.
	//
	// Default is true.
	AutoPay interface{} `field:"optional" json:"autoPay" yaml:"autoPay"`
	// Property deletionForce: Whether force delete the relative snat and dnat entries in the net gateway and unbind eips.
	//
	// Default value is false.
	DeletionForce interface{} `field:"optional" json:"deletionForce" yaml:"deletionForce"`
	// Property deletionProtection: Whether to enable deletion protection.
	//
	// Default to False.
	DeletionProtection interface{} `field:"optional" json:"deletionProtection" yaml:"deletionProtection"`
	// Property description: Description of the NAT gateway, [2, 256] characters.
	//
	// Do not fill or empty, the default is empty.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property duration: The subscription duration.
	//
	// While choose by pay by month, it could be from 1 to 9 or 12, 24, 36. While choose pay by year, it could be from 1 to 3.
	Duration interface{} `field:"optional" json:"duration" yaml:"duration"`
	// Property eipBindMode: The mode in which the EIP is associated with the NAT gateway.
	//
	// Valid values:MULTI_BINDED (default): the multi-EIP-to-ENI mode.
	// NAT: NAT mode. IPv4 gateways are supported.
	// Note If the EIP is associated with the NAT gateway in NAT mode,
	// the EIP occupies a private IP address of the vSwitch to which the NAT gateway belongs.
	// Make sure that the vSwitch has sufficient private IP addresses.
	// Otherwise, the EIP cannot be associated with the NAT gateway.
	// In NAT mode, a maximum number of 50 EIPs can be associated with each NAT gateway.
	EipBindMode interface{} `field:"optional" json:"eipBindMode" yaml:"eipBindMode"`
	// Property icmpReplyEnabled: Specifies whether to enable the ICMP non-retrieval feature.
	//
	// Default: True.
	IcmpReplyEnabled interface{} `field:"optional" json:"icmpReplyEnabled" yaml:"icmpReplyEnabled"`
	// Property instanceChargeType: The billing method.
	//
	// The default value is PostPaid (which means pay-as-you-go).
	InstanceChargeType interface{} `field:"optional" json:"instanceChargeType" yaml:"instanceChargeType"`
	// Property internetChargeType: The billing method for the NAT gateway.
	//
	// Valid values:
	// PayBySpec: billed on a pay-by-specification basis.
	InternetChargeType interface{} `field:"optional" json:"internetChargeType" yaml:"internetChargeType"`
	// Property natGatewayName: Display name of the NAT gateway, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'.
	NatGatewayName interface{} `field:"optional" json:"natGatewayName" yaml:"natGatewayName"`
	// Property natType: The type of the NAT gateway.
	//
	// Valid values:
	// - Enhanced: enhanced NAT gateway.
	NatType interface{} `field:"optional" json:"natType" yaml:"natType"`
	// Property networkType: The type of the created NAT gateway.
	//
	// Internet: public network NAT gateway.
	// Intranet: VPC NAT gateway.
	NetworkType interface{} `field:"optional" json:"networkType" yaml:"networkType"`
	// Property pricingCycle: Price cycle of the resource.
	//
	// This property has no default value.
	PricingCycle interface{} `field:"optional" json:"pricingCycle" yaml:"pricingCycle"`
	// Property securityProtectionEnabled: Specifies whether to enable the firewall feature.
	//
	// Default: False.
	SecurityProtectionEnabled interface{} `field:"optional" json:"securityProtectionEnabled" yaml:"securityProtectionEnabled"`
	// Property tags: Tags to attach to natgateway.
	//
	// Max support 20 tags to add during create natgateway. Each tag with two properties Key and Value, and Key is required.
	Tags *[]*RosNatGateway_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
}

