package alicloudroscdkecs


// Properties for defining a `RosSnapshot`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-snapshot
type RosSnapshotProps struct {
	DiskId interface{} `field:"required" json:"diskId" yaml:"diskId"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	InstantAccess interface{} `field:"optional" json:"instantAccess" yaml:"instantAccess"`
	InstantAccessRetentionDays interface{} `field:"optional" json:"instantAccessRetentionDays" yaml:"instantAccessRetentionDays"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	RetentionDays interface{} `field:"optional" json:"retentionDays" yaml:"retentionDays"`
	SnapshotName interface{} `field:"optional" json:"snapshotName" yaml:"snapshotName"`
	Tags *[]*RosSnapshot_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
	Timeout interface{} `field:"optional" json:"timeout" yaml:"timeout"`
}

