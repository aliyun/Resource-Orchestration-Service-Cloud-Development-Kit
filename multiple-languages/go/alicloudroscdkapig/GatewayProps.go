package alicloudroscdkapig


// Properties for defining a `Gateway`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-gateway
type GatewayProps struct {
	// Property paymentType: The payment type of the gateway.
	//
	// Valid values:
	// * PayAsYouGo
	// * Subscription.
	PaymentType interface{} `field:"required" json:"paymentType" yaml:"paymentType"`
	// Property spec: Gateway instance specifications.
	Spec interface{} `field:"required" json:"spec" yaml:"spec"`
	// Property zoneConfig: Availability Zone Configuration.
	ZoneConfig interface{} `field:"required" json:"zoneConfig" yaml:"zoneConfig"`
	// Property gatewayName: The name of the Gateway.
	GatewayName interface{} `field:"optional" json:"gatewayName" yaml:"gatewayName"`
	// Property logConfig: Log Configuration.
	LogConfig interface{} `field:"optional" json:"logConfig" yaml:"logConfig"`
	// Property networkAccessConfig: Network Access Configuration.
	NetworkAccessConfig interface{} `field:"optional" json:"networkAccessConfig" yaml:"networkAccessConfig"`
	// Property vpc: The VPC associated with the Gateway.
	Vpc interface{} `field:"optional" json:"vpc" yaml:"vpc"`
	// Property vSwitch: The virtual switch associated with the Gateway.
	VSwitch interface{} `field:"optional" json:"vSwitch" yaml:"vSwitch"`
}

