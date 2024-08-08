package alicloudroscdkddos


// Properties for defining a `RosOriginInstance`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ddos-origininstance
type RosOriginInstanceProps struct {
	Edition interface{} `field:"required" json:"edition" yaml:"edition"`
	ProtectionMode interface{} `field:"required" json:"protectionMode" yaml:"protectionMode"`
	ChargeType interface{} `field:"optional" json:"chargeType" yaml:"chargeType"`
	CleanBandwidth interface{} `field:"optional" json:"cleanBandwidth" yaml:"cleanBandwidth"`
	EnableLog interface{} `field:"optional" json:"enableLog" yaml:"enableLog"`
	IpAddresses interface{} `field:"optional" json:"ipAddresses" yaml:"ipAddresses"`
	NetworkProtocol interface{} `field:"optional" json:"networkProtocol" yaml:"networkProtocol"`
	Period interface{} `field:"optional" json:"period" yaml:"period"`
	PeriodUnit interface{} `field:"optional" json:"periodUnit" yaml:"periodUnit"`
	Tags *[]*RosOriginInstance_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
}

