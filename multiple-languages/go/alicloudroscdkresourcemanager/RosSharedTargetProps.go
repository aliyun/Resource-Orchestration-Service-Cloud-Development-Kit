package alicloudroscdkresourcemanager


// Properties for defining a `RosSharedTarget`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-sharedtarget
type RosSharedTargetProps struct {
	ResourceShareId interface{} `field:"required" json:"resourceShareId" yaml:"resourceShareId"`
	TargetId interface{} `field:"optional" json:"targetId" yaml:"targetId"`
}

