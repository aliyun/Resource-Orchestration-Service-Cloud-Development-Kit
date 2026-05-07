package alicloudroscdkapig


// Properties for defining a `Consumer`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-consumer
type ConsumerProps struct {
	// Property akSkIdentityConfigs: List of AK\/SK identity configurations.
	AkSkIdentityConfigs interface{} `field:"optional" json:"akSkIdentityConfigs" yaml:"akSkIdentityConfigs"`
	// Property apikeyIdentityConfig: API key identity configuration.
	ApikeyIdentityConfig interface{} `field:"optional" json:"apikeyIdentityConfig" yaml:"apikeyIdentityConfig"`
	// Property description: The description of the consumer.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property enable: Whether to enable the consumer.
	Enable interface{} `field:"optional" json:"enable" yaml:"enable"`
	// Property gatewayType: The type of the gateway.
	GatewayType interface{} `field:"optional" json:"gatewayType" yaml:"gatewayType"`
	// Property jwtIdentityConfig: JWT identity configuration.
	JwtIdentityConfig interface{} `field:"optional" json:"jwtIdentityConfig" yaml:"jwtIdentityConfig"`
	// Property name: The name of the consumer.
	Name interface{} `field:"optional" json:"name" yaml:"name"`
}

