package alicloudroscdkapig


// Properties for defining a `ConsumerAuthorizationRule`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-consumerauthorizationrule
type ConsumerAuthorizationRuleProps struct {
	// Property consumerId: The consumer ID.
	ConsumerId interface{} `field:"required" json:"consumerId" yaml:"consumerId"`
	// Property resourceIdentifier: Resource identifier for non-standard code sources.
	ResourceIdentifier interface{} `field:"required" json:"resourceIdentifier" yaml:"resourceIdentifier"`
	// Property resourceType: The resource type.
	ResourceType interface{} `field:"required" json:"resourceType" yaml:"resourceType"`
	// Property expireMode: The expire mode.
	//
	// Valid values: LongTerm, ShortTerm.
	ExpireMode interface{} `field:"optional" json:"expireMode" yaml:"expireMode"`
	// Property expireTimestamp: The expire timestamp in milliseconds.
	ExpireTimestamp interface{} `field:"optional" json:"expireTimestamp" yaml:"expireTimestamp"`
}

