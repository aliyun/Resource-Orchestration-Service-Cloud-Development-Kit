package alicloudroscdkpai


// Properties for defining a `Image`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-image
type ImageProps struct {
	// Property imageName: The image name.
	ImageName interface{} `field:"required" json:"imageName" yaml:"imageName"`
	// Property imageUri: The Image address, which contains the version number.
	ImageUri interface{} `field:"required" json:"imageUri" yaml:"imageUri"`
	// Property accessibility: Visibility of the mirror, possible values: - PUBLIC: all members of the current workspace can operate.
	//
	// - PRIVATE: Only the creator can operate.
	Accessibility interface{} `field:"optional" json:"accessibility" yaml:"accessibility"`
	// Property labels: Labels.
	Labels interface{} `field:"optional" json:"labels" yaml:"labels"`
	// Property workspaceId: The ID of the workspace to which the image belongs.
	WorkspaceId interface{} `field:"optional" json:"workspaceId" yaml:"workspaceId"`
}

