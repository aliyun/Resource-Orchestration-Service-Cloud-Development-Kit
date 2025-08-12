package alicloudroscdkapig


// Properties for defining a `Gateway`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-gateway
type GatewayProps struct {
	// Property gatewayName: The name of the Gateway.
	GatewayName interface{} `field:"required" json:"gatewayName" yaml:"gatewayName"`
	// Property networkAccessConfig: Network Access Configuration.
	NetworkAccessConfig interface{} `field:"required" json:"networkAccessConfig" yaml:"networkAccessConfig"`
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
	// Property gatewayType: Describes the gateway type, which is categorized into the following two types: * API: indicates an API gateway * AI: Indicates an AI gateway.
	//
	// Default value: API.
	GatewayType interface{} `field:"optional" json:"gatewayType" yaml:"gatewayType"`
	// Property logConfig: Log Configuration.
	LogConfig interface{} `field:"optional" json:"logConfig" yaml:"logConfig"`
	// Property period: The purchase time of the gateway.
	//
	// This parameter is only valid when updating PaymentType from PayAsYouGo to Subscription.
	Period interface{} `field:"optional" json:"period" yaml:"period"`
	// Property periodUnit: The unit of the purchase time of the gateway.
	//
	// This parameter is only valid when updating PaymentType from PayAsYouGo to Subscription.
	PeriodUnit interface{} `field:"optional" json:"periodUnit" yaml:"periodUnit"`
	// Property resourceGroupId: The ID of the resource group.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property tags: Tags of The tags of the Gateway..
	Tags *[]*RosGateway_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
	// Property vpc: The VPC associated with the Gateway.
	Vpc interface{} `field:"optional" json:"vpc" yaml:"vpc"`
	// Property vSwitch: The virtual switch associated with the Gateway.
	VSwitch interface{} `field:"optional" json:"vSwitch" yaml:"vSwitch"`
}

