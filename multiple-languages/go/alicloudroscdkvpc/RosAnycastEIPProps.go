package alicloudroscdkvpc


// Properties for defining a `RosAnycastEIP`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-anycasteip
type RosAnycastEIPProps struct {
	Bandwidth interface{} `field:"optional" json:"bandwidth" yaml:"bandwidth"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	InstanceChargeType interface{} `field:"optional" json:"instanceChargeType" yaml:"instanceChargeType"`
	InternetChargeType interface{} `field:"optional" json:"internetChargeType" yaml:"internetChargeType"`
	Name interface{} `field:"optional" json:"name" yaml:"name"`
	ServiceLocation interface{} `field:"optional" json:"serviceLocation" yaml:"serviceLocation"`
}

