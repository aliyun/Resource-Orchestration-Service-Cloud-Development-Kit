package alicloudroscdkapig


// Properties for defining a `RosConsumer`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-consumer
type RosConsumerProps struct {
	AkSkIdentityConfigs interface{} `field:"optional" json:"akSkIdentityConfigs" yaml:"akSkIdentityConfigs"`
	ApikeyIdentityConfig interface{} `field:"optional" json:"apikeyIdentityConfig" yaml:"apikeyIdentityConfig"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	Enable interface{} `field:"optional" json:"enable" yaml:"enable"`
	GatewayType interface{} `field:"optional" json:"gatewayType" yaml:"gatewayType"`
	JwtIdentityConfig interface{} `field:"optional" json:"jwtIdentityConfig" yaml:"jwtIdentityConfig"`
	Name interface{} `field:"optional" json:"name" yaml:"name"`
}

