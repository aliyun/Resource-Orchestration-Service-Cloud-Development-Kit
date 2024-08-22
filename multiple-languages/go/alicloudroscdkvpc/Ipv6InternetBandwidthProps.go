package alicloudroscdkvpc


// Properties for defining a `Ipv6InternetBandwidth`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-ipv6internetbandwidth
type Ipv6InternetBandwidthProps struct {
	// Property bandwidth: Public IPv6 address of bandwidth, unit: Mbps, range: 1-5000.
	//
	// When InternetChargeType is PayByBandwidth, the bandwidth of the public network is the IPv6 address 1-5000.
	// When InternetChargeType is PayByTraffic, public network bandwidth IPv6 addresses while IPv6 gateway restricted specifications.
	// Small (default free version), the public network bandwidth range 1-500.
	// Medium (Enterprise Edition), the public network bandwidth range from 1 to 1000.
	// Large (Enterprise Edition), the public network bandwidth range 1-2000.
	Bandwidth interface{} `field:"required" json:"bandwidth" yaml:"bandwidth"`
	// Property ipv6AddressId: ID of IPv6 address.
	Ipv6AddressId interface{} `field:"required" json:"ipv6AddressId" yaml:"ipv6AddressId"`
	// Property ipv6GatewayId: ID of IPv6 gateway.
	Ipv6GatewayId interface{} `field:"required" json:"ipv6GatewayId" yaml:"ipv6GatewayId"`
	// Property internetChargeType: IPv6 public network bandwidth billing, value: - **PayByTraffic**: by using the traffic accounting.
	//
	// - **PayByBandwidth** (default): Bandwidth billing.
	InternetChargeType interface{} `field:"optional" json:"internetChargeType" yaml:"internetChargeType"`
}

