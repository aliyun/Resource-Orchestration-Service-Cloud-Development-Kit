package alicloudroscdkcloudphone


// Properties for defining a `Image`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudphone-image
type ImageProps struct {
	// Property instanceId: The ID of the mobile phone instance.
	InstanceId interface{} `field:"required" json:"instanceId" yaml:"instanceId"`
	// Property description: The image description.
	//
	// The description must be 2 to 256 characters in length. It cannot start with http:\/\/ or https:\/\/.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property imageName: The image name.
	//
	// The name must be 2 to 128 characters in length. It can contain letters, digits, colons (:), underscores (_), and hyphens (-). The name must start with a letter but cannot start with http:\/\/ or https:\/\/.
	ImageName interface{} `field:"optional" json:"imageName" yaml:"imageName"`
}

