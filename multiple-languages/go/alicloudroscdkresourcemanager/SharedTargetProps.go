package alicloudroscdkresourcemanager


// Properties for defining a `SharedTarget`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-sharedtarget
type SharedTargetProps struct {
	// Property resourceShareId: The ID of the resource share.
	ResourceShareId interface{} `field:"required" json:"resourceShareId" yaml:"resourceShareId"`
	// Property targetId: The ID of the principal.
	TargetId interface{} `field:"optional" json:"targetId" yaml:"targetId"`
}

