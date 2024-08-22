package datasource


// Properties for defining a `RosImages`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-images
type RosImagesProps struct {
	ActionType interface{} `field:"optional" json:"actionType" yaml:"actionType"`
	Architecture interface{} `field:"optional" json:"architecture" yaml:"architecture"`
	ImageFamily interface{} `field:"optional" json:"imageFamily" yaml:"imageFamily"`
	ImageId interface{} `field:"optional" json:"imageId" yaml:"imageId"`
	ImageName interface{} `field:"optional" json:"imageName" yaml:"imageName"`
	ImageOwnerAlias interface{} `field:"optional" json:"imageOwnerAlias" yaml:"imageOwnerAlias"`
	InstanceType interface{} `field:"optional" json:"instanceType" yaml:"instanceType"`
	IsPublic interface{} `field:"optional" json:"isPublic" yaml:"isPublic"`
	IsSupportCloudinit interface{} `field:"optional" json:"isSupportCloudinit" yaml:"isSupportCloudinit"`
	IsSupportIoOptimized interface{} `field:"optional" json:"isSupportIoOptimized" yaml:"isSupportIoOptimized"`
	OsType interface{} `field:"optional" json:"osType" yaml:"osType"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	SnapshotId interface{} `field:"optional" json:"snapshotId" yaml:"snapshotId"`
	Status interface{} `field:"optional" json:"status" yaml:"status"`
	Tags *[]*RosImages_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
	Usage interface{} `field:"optional" json:"usage" yaml:"usage"`
}

