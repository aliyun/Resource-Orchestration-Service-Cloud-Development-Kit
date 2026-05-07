package alicloudroscdkapig


// Properties for defining a `RosConsumerAuthorizationRule`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-consumerauthorizationrule
type RosConsumerAuthorizationRuleProps struct {
	ConsumerId interface{} `field:"required" json:"consumerId" yaml:"consumerId"`
	ResourceIdentifier interface{} `field:"required" json:"resourceIdentifier" yaml:"resourceIdentifier"`
	ResourceType interface{} `field:"required" json:"resourceType" yaml:"resourceType"`
	ExpireMode interface{} `field:"optional" json:"expireMode" yaml:"expireMode"`
	ExpireTimestamp interface{} `field:"optional" json:"expireTimestamp" yaml:"expireTimestamp"`
}

