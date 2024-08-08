package alicloudroscdkddospro


// Properties for defining a `RosPremiumInstance`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ddospro-premiuminstance
type RosPremiumInstanceProps struct {
	BurstBandwidthMode interface{} `field:"optional" json:"burstBandwidthMode" yaml:"burstBandwidthMode"`
	DomainCount interface{} `field:"optional" json:"domainCount" yaml:"domainCount"`
	FunctionVersion interface{} `field:"optional" json:"functionVersion" yaml:"functionVersion"`
	NormalBandwidth interface{} `field:"optional" json:"normalBandwidth" yaml:"normalBandwidth"`
	NormalQps interface{} `field:"optional" json:"normalQps" yaml:"normalQps"`
	Period interface{} `field:"optional" json:"period" yaml:"period"`
	PeriodUnit interface{} `field:"optional" json:"periodUnit" yaml:"periodUnit"`
	PortCount interface{} `field:"optional" json:"portCount" yaml:"portCount"`
	ProductPlan interface{} `field:"optional" json:"productPlan" yaml:"productPlan"`
	Tags *[]*RosPremiumInstance_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
}

