package alicloudroscdkvpc


// Properties for defining a `EIPPro`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-eippro
type EIPProProps struct {
	// Property autoPay: Automatic Payment.
	//
	// Default is true.
	AutoPay interface{} `field:"optional" json:"autoPay" yaml:"autoPay"`
	// Property bandwidth: Bandwidth for the output network.
	//
	// Default is 5MB.
	Bandwidth interface{} `field:"optional" json:"bandwidth" yaml:"bandwidth"`
	// Property deletionProtection: Whether to enable deletion protection.
	//
	// Default to False.
	DeletionProtection interface{} `field:"optional" json:"deletionProtection" yaml:"deletionProtection"`
	// Property description: Optional.
	//
	// The description of the EIP. The description must be 2 to 256 characters in length. It must start with a letter. It cannot start with http:\/\/  or https:\/\/.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property instanceChargeType: The resource charge type.
	//
	// Default value is Postpaid.
	InstanceChargeType interface{} `field:"optional" json:"instanceChargeType" yaml:"instanceChargeType"`
	// Property instanceId: The ID of the requested EIP.
	InstanceId interface{} `field:"optional" json:"instanceId" yaml:"instanceId"`
	// Property internetChargeType: The network charge type.
	//
	// Support 'PayByBandwidth' and 'PayByTraffic' only. Default is PayByBandwidth. PayByTraffic will charge by hour, PayByBandwidth will charge by day.
	InternetChargeType interface{} `field:"optional" json:"internetChargeType" yaml:"internetChargeType"`
	// Property ipAddress: The IP address of the requested EIP.
	IpAddress interface{} `field:"optional" json:"ipAddress" yaml:"ipAddress"`
	// Property isp: The line type.
	//
	// You can set this parameter only when you create a pay-as-you-go EIP. Valid values:
	// BGP: BGP (Multi-ISP) lines. Up to 89 high-quality BGP lines are available worldwide. Direct connections with multiple Internet Service Providers (ISPs), including Telecom, Unicom, Mobile, Railcom, Netcom, CERNET, China Broadcast Network, Dr. Peng, and Founder, can be established in all regions in mainland China.
	// BGP_PRO: BGP (Multi-ISP) Pro lines. BGP (Multi-ISP) Pro lines optimize data transmission to China and improve connection quality for international services. Compared with traditional BGP (Multi-ISP) lines, BGP (Multi-ISP) Pro lines can be used to establish direct connections without using international ISP services. Therefore, BGP (Multi-ISP) Pro lines reduce network latency.
	Isp interface{} `field:"optional" json:"isp" yaml:"isp"`
	// Property name: The name of the EIP.
	//
	// The name must be 2 to 128 characters in length. It must start with a letter. It can contain numbers, periods (.), underscores (_), and hyphens (-). It cannot start with http:\/\/  or https:\/\/
	Name interface{} `field:"optional" json:"name" yaml:"name"`
	// Property netmode: The network type.
	//
	// Valid value: public (public network).
	Netmode interface{} `field:"optional" json:"netmode" yaml:"netmode"`
	// Property period: Prepaid time period.
	//
	// While choose by pay by month, it could be from 1 to 9 or 12, 24, 36.
	//    While choose pay by year, it could be from 1 to 3.
	Period interface{} `field:"optional" json:"period" yaml:"period"`
	// Property pricingCycle: Price cycle of the resource.
	//
	// This property has no default value. If ChargeType is specified as Postpaid, this value will be ignore.
	PricingCycle interface{} `field:"optional" json:"pricingCycle" yaml:"pricingCycle"`
	// Property publicIpAddressPoolId: The ID of the IP address pool.
	//
	// The EIP is allocated from the IP address pool.
	PublicIpAddressPoolId interface{} `field:"optional" json:"publicIpAddressPoolId" yaml:"publicIpAddressPoolId"`
	// Property resourceGroupId: Resource group id.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property securityProtectionTypes: The edition of Anti-DDoS.
	//
	// If you do not set this parameter, Anti-DDoS Origin Basic is used.
	// If you set the value to AntiDDoS_Enhanced, Anti-DDoS Pro\/Premium is used.
	SecurityProtectionTypes interface{} `field:"optional" json:"securityProtectionTypes" yaml:"securityProtectionTypes"`
	// Property tags: Tags to attach to eip.
	//
	// Max support 20 tags to add during create eip. Each tag with two properties Key and Value, and Key is required.
	Tags *[]*RosEIPPro_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
}

