package alicloudroscdkga


// Properties for defining a `RosBasicAccelerateIp`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-basicaccelerateip
type RosBasicAccelerateIpProps struct {
	AcceleratorId interface{} `field:"required" json:"acceleratorId" yaml:"acceleratorId"`
	IpSetId interface{} `field:"required" json:"ipSetId" yaml:"ipSetId"`
}

