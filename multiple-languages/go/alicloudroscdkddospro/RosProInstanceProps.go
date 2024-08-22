package alicloudroscdkddospro


// Properties for defining a `RosProInstance`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ddospro-proinstance
type RosProInstanceProps struct {
	AddressType interface{} `field:"optional" json:"addressType" yaml:"addressType"`
	Bandwidth interface{} `field:"optional" json:"bandwidth" yaml:"bandwidth"`
	BaseBandwidth interface{} `field:"optional" json:"baseBandwidth" yaml:"baseBandwidth"`
	BurstBandwidthMode interface{} `field:"optional" json:"burstBandwidthMode" yaml:"burstBandwidthMode"`
	DomainCount interface{} `field:"optional" json:"domainCount" yaml:"domainCount"`
	Edition interface{} `field:"optional" json:"edition" yaml:"edition"`
	FunctionVersion interface{} `field:"optional" json:"functionVersion" yaml:"functionVersion"`
	NormalQps interface{} `field:"optional" json:"normalQps" yaml:"normalQps"`
	Period interface{} `field:"optional" json:"period" yaml:"period"`
	PeriodUnit interface{} `field:"optional" json:"periodUnit" yaml:"periodUnit"`
	PortCount interface{} `field:"optional" json:"portCount" yaml:"portCount"`
	ServiceBandwidth interface{} `field:"optional" json:"serviceBandwidth" yaml:"serviceBandwidth"`
	ServicePartner interface{} `field:"optional" json:"servicePartner" yaml:"servicePartner"`
	Tags *[]*RosProInstance_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
}

