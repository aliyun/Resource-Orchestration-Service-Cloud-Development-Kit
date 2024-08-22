package alicloudroscdkecs


// Properties for defining a `RosCopyImage`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-copyimage
type RosCopyImageProps struct {
	DestinationRegionId interface{} `field:"required" json:"destinationRegionId" yaml:"destinationRegionId"`
	ImageId interface{} `field:"required" json:"imageId" yaml:"imageId"`
	AllowCopyInSameRegion interface{} `field:"optional" json:"allowCopyInSameRegion" yaml:"allowCopyInSameRegion"`
	DestinationDescription interface{} `field:"optional" json:"destinationDescription" yaml:"destinationDescription"`
	DestinationImageName interface{} `field:"optional" json:"destinationImageName" yaml:"destinationImageName"`
	Encrypted interface{} `field:"optional" json:"encrypted" yaml:"encrypted"`
	KmsKeyId interface{} `field:"optional" json:"kmsKeyId" yaml:"kmsKeyId"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	SourceRegionId interface{} `field:"optional" json:"sourceRegionId" yaml:"sourceRegionId"`
	Tag interface{} `field:"optional" json:"tag" yaml:"tag"`
}

