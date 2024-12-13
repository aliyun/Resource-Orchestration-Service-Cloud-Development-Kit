package alicloudroscdkapig


// Properties for defining a `RosGateway`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-gateway
type RosGatewayProps struct {
	PaymentType interface{} `field:"required" json:"paymentType" yaml:"paymentType"`
	Spec interface{} `field:"required" json:"spec" yaml:"spec"`
	ZoneConfig interface{} `field:"required" json:"zoneConfig" yaml:"zoneConfig"`
	GatewayName interface{} `field:"optional" json:"gatewayName" yaml:"gatewayName"`
	LogConfig interface{} `field:"optional" json:"logConfig" yaml:"logConfig"`
	NetworkAccessConfig interface{} `field:"optional" json:"networkAccessConfig" yaml:"networkAccessConfig"`
	Vpc interface{} `field:"optional" json:"vpc" yaml:"vpc"`
	VSwitch interface{} `field:"optional" json:"vSwitch" yaml:"vSwitch"`
}

