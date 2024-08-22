package alicloudroscdkresourcemanager


// Properties for defining a `RosHandshake`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-handshake
type RosHandshakeProps struct {
	TargetEntity interface{} `field:"required" json:"targetEntity" yaml:"targetEntity"`
	TargetType interface{} `field:"required" json:"targetType" yaml:"targetType"`
	Note interface{} `field:"optional" json:"note" yaml:"note"`
}

