package alicloudroscdkecs


// Properties for defining a `RosCustomImage`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-customimage
type RosCustomImageProps struct {
	Architecture interface{} `field:"optional" json:"architecture" yaml:"architecture"`
	BootMode interface{} `field:"optional" json:"bootMode" yaml:"bootMode"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	DetectionStrategy interface{} `field:"optional" json:"detectionStrategy" yaml:"detectionStrategy"`
	DiskDeviceMapping interface{} `field:"optional" json:"diskDeviceMapping" yaml:"diskDeviceMapping"`
	ImageFamily interface{} `field:"optional" json:"imageFamily" yaml:"imageFamily"`
	ImageName interface{} `field:"optional" json:"imageName" yaml:"imageName"`
	ImageVersion interface{} `field:"optional" json:"imageVersion" yaml:"imageVersion"`
	InstanceId interface{} `field:"optional" json:"instanceId" yaml:"instanceId"`
	Platform interface{} `field:"optional" json:"platform" yaml:"platform"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	SnapshotId interface{} `field:"optional" json:"snapshotId" yaml:"snapshotId"`
	SourceRegionId interface{} `field:"optional" json:"sourceRegionId" yaml:"sourceRegionId"`
	Tag interface{} `field:"optional" json:"tag" yaml:"tag"`
}

