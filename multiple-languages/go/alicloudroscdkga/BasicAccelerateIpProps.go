package alicloudroscdkga


// Properties for defining a `BasicAccelerateIp`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-basicaccelerateip
type BasicAccelerateIpProps struct {
	// Property acceleratorId: The ID of the basic GA instance.
	AcceleratorId interface{} `field:"required" json:"acceleratorId" yaml:"acceleratorId"`
	// Property ipSetId: The ID of the acceleration region.
	IpSetId interface{} `field:"required" json:"ipSetId" yaml:"ipSetId"`
}

