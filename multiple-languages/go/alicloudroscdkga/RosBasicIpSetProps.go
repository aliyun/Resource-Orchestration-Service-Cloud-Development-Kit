package alicloudroscdkga


// Properties for defining a `RosBasicIpSet`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-basicipset
type RosBasicIpSetProps struct {
	AcceleratorId interface{} `field:"required" json:"acceleratorId" yaml:"acceleratorId"`
	AccelerateRegionId interface{} `field:"optional" json:"accelerateRegionId" yaml:"accelerateRegionId"`
	Bandwidth interface{} `field:"optional" json:"bandwidth" yaml:"bandwidth"`
	IspType interface{} `field:"optional" json:"ispType" yaml:"ispType"`
}

