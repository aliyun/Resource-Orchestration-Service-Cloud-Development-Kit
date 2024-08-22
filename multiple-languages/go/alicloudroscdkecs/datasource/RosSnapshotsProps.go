package datasource


// Properties for defining a `RosSnapshots`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-snapshots
type RosSnapshotsProps struct {
	Category interface{} `field:"optional" json:"category" yaml:"category"`
	DiskId interface{} `field:"optional" json:"diskId" yaml:"diskId"`
	Encrypted interface{} `field:"optional" json:"encrypted" yaml:"encrypted"`
	Filters interface{} `field:"optional" json:"filters" yaml:"filters"`
	InstanceId interface{} `field:"optional" json:"instanceId" yaml:"instanceId"`
	KmsKeyId interface{} `field:"optional" json:"kmsKeyId" yaml:"kmsKeyId"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	SnapshotIds interface{} `field:"optional" json:"snapshotIds" yaml:"snapshotIds"`
	SnapshotLinkId interface{} `field:"optional" json:"snapshotLinkId" yaml:"snapshotLinkId"`
	SnapshotName interface{} `field:"optional" json:"snapshotName" yaml:"snapshotName"`
	SnapshotType interface{} `field:"optional" json:"snapshotType" yaml:"snapshotType"`
	SourceDiskType interface{} `field:"optional" json:"sourceDiskType" yaml:"sourceDiskType"`
	Status interface{} `field:"optional" json:"status" yaml:"status"`
	Tags *[]*RosSnapshots_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
	Usage interface{} `field:"optional" json:"usage" yaml:"usage"`
}

