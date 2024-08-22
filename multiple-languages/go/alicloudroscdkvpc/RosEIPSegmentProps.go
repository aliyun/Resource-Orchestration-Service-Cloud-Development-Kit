package alicloudroscdkvpc


// Properties for defining a `RosEIPSegment`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-eipsegment
type RosEIPSegmentProps struct {
	EipMask interface{} `field:"required" json:"eipMask" yaml:"eipMask"`
	Bandwidth interface{} `field:"optional" json:"bandwidth" yaml:"bandwidth"`
	InternetChargeType interface{} `field:"optional" json:"internetChargeType" yaml:"internetChargeType"`
	Netmode interface{} `field:"optional" json:"netmode" yaml:"netmode"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
}

