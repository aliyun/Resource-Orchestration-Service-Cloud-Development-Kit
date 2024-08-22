package alicloudroscdkcms


// Properties for defining a `RosContactGroup`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms-contactgroup
type RosContactGroupProps struct {
	ContactGroupName interface{} `field:"required" json:"contactGroupName" yaml:"contactGroupName"`
	ContactNames interface{} `field:"required" json:"contactNames" yaml:"contactNames"`
	Describe interface{} `field:"required" json:"describe" yaml:"describe"`
}

