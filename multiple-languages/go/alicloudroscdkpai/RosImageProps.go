package alicloudroscdkpai


// Properties for defining a `RosImage`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-image
type RosImageProps struct {
	ImageName interface{} `field:"required" json:"imageName" yaml:"imageName"`
	ImageUri interface{} `field:"required" json:"imageUri" yaml:"imageUri"`
	Accessibility interface{} `field:"optional" json:"accessibility" yaml:"accessibility"`
	Labels interface{} `field:"optional" json:"labels" yaml:"labels"`
	WorkspaceId interface{} `field:"optional" json:"workspaceId" yaml:"workspaceId"`
}

