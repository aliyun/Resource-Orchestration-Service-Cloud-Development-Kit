package alicloudroscdkvpc


// Properties for defining a `RosIpv6InternetBandwidth`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-ipv6internetbandwidth
type RosIpv6InternetBandwidthProps struct {
	Bandwidth interface{} `field:"required" json:"bandwidth" yaml:"bandwidth"`
	Ipv6AddressId interface{} `field:"required" json:"ipv6AddressId" yaml:"ipv6AddressId"`
	Ipv6GatewayId interface{} `field:"required" json:"ipv6GatewayId" yaml:"ipv6GatewayId"`
	InternetChargeType interface{} `field:"optional" json:"internetChargeType" yaml:"internetChargeType"`
}

