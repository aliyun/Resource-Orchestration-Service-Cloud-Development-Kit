package alicloudroscdkmaxcompute


// Properties for defining a `RosProject`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-maxcompute-project
type RosProjectProps struct {
	Name interface{} `field:"required" json:"name" yaml:"name"`
	ChargeType interface{} `field:"optional" json:"chargeType" yaml:"chargeType"`
	Comment interface{} `field:"optional" json:"comment" yaml:"comment"`
	DefaultQuota interface{} `field:"optional" json:"defaultQuota" yaml:"defaultQuota"`
	IpWhiteList interface{} `field:"optional" json:"ipWhiteList" yaml:"ipWhiteList"`
	Properties interface{} `field:"optional" json:"properties" yaml:"properties"`
}

