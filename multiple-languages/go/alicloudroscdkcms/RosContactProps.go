package alicloudroscdkcms


// Properties for defining a `RosContact`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms-contact
type RosContactProps struct {
	Channels interface{} `field:"required" json:"channels" yaml:"channels"`
	ContactName interface{} `field:"required" json:"contactName" yaml:"contactName"`
	Describe interface{} `field:"required" json:"describe" yaml:"describe"`
}

