package alicloudroscdkens


// Properties for defining a `Image`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ens-image
type ImageProps struct {
	// Property imageName: The name of the image.
	//
	// The name must be 2 to 128 characters in length.
	// The name can contain letters, digits, colons (:), underscores (_), and hyphens (-).
	// It must start with a letter but cannot start with http:\/\/ or https:\/\/.
	// The name can contain letters, digits, colons (:), underscores (_), and hyphens (-).
	ImageName interface{} `field:"required" json:"imageName" yaml:"imageName"`
	// Property deleteAfterImageUpload: Whether the instance is automatically released after the image is packaged and uploaded successfully, only the build machine is supported.
	//
	// Optional values:
	// true: When the instance is released, the image is released together with the instance.
	// false: When the instance is released, the image is retained and is not released together with the instance.
	// Empty means false by default.
	DeleteAfterImageUpload interface{} `field:"optional" json:"deleteAfterImageUpload" yaml:"deleteAfterImageUpload"`
	// Property instanceId: The ID of the instance corresponding to the image.
	InstanceId interface{} `field:"optional" json:"instanceId" yaml:"instanceId"`
}

