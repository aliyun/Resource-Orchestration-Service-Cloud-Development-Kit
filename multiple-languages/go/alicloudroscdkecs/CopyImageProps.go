package alicloudroscdkecs


// Properties for defining a `CopyImage`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-copyimage
type CopyImageProps struct {
	// Property destinationRegionId: ID of the region to where the destination custom image belongs.
	DestinationRegionId interface{} `field:"required" json:"destinationRegionId" yaml:"destinationRegionId"`
	// Property imageId: ID of the source custom image.
	ImageId interface{} `field:"required" json:"imageId" yaml:"imageId"`
	// Property allowCopyInSameRegion: Whether to allow copying images in the same region.
	//
	// If set to true, the image will not be copied, the source image id will be returned, and the original image will not be deleted.
	AllowCopyInSameRegion interface{} `field:"optional" json:"allowCopyInSameRegion" yaml:"allowCopyInSameRegion"`
	// Property destinationDescription: The description of the destination custom image.It cannot begin with http:\/\/ or https:\/\/.  Default value: null.
	DestinationDescription interface{} `field:"optional" json:"destinationDescription" yaml:"destinationDescription"`
	// Property destinationImageName: Name of the destination custom image.The name is a string of 2 to 128 characters. It must begin with an English or a Chinese character. It can contain A-Z, a-z, Chinese characters, numbers, periods (.), colons (:), underscores (_), and hyphens (-).  Default value: null.
	DestinationImageName interface{} `field:"optional" json:"destinationImageName" yaml:"destinationImageName"`
	// Property encrypted: Whether to encrypt the image.
	Encrypted interface{} `field:"optional" json:"encrypted" yaml:"encrypted"`
	// Property kmsKeyId: The ID of the key used to encrypt the image.
	KmsKeyId interface{} `field:"optional" json:"kmsKeyId" yaml:"kmsKeyId"`
	// Property resourceGroupId: The ID of the resource group to which the image copy belongs.
	//
	// If not provided, the image copy belongs to the default resource group.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property sourceRegionId: ID of the region to where the source image belongs.
	//
	// Default is current region ID.
	SourceRegionId interface{} `field:"optional" json:"sourceRegionId" yaml:"sourceRegionId"`
	// Property tag:.
	Tag interface{} `field:"optional" json:"tag" yaml:"tag"`
}

