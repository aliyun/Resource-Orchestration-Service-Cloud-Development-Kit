package alicloudroscdkapig


// Properties for defining a `RosGateway`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-gateway
type RosGatewayProps struct {
	GatewayName interface{} `field:"required" json:"gatewayName" yaml:"gatewayName"`
	NetworkAccessConfig interface{} `field:"required" json:"networkAccessConfig" yaml:"networkAccessConfig"`
	PaymentType interface{} `field:"required" json:"paymentType" yaml:"paymentType"`
	Spec interface{} `field:"required" json:"spec" yaml:"spec"`
	ZoneConfig interface{} `field:"required" json:"zoneConfig" yaml:"zoneConfig"`
	GatewayType interface{} `field:"optional" json:"gatewayType" yaml:"gatewayType"`
	LogConfig interface{} `field:"optional" json:"logConfig" yaml:"logConfig"`
	Period interface{} `field:"optional" json:"period" yaml:"period"`
	PeriodUnit interface{} `field:"optional" json:"periodUnit" yaml:"periodUnit"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	Tags *[]*RosGateway_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
	Vpc interface{} `field:"optional" json:"vpc" yaml:"vpc"`
	VSwitch interface{} `field:"optional" json:"vSwitch" yaml:"vSwitch"`
}

