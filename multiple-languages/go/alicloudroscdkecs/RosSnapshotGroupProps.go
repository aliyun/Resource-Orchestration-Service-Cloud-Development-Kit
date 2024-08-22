package alicloudroscdkecs


// Properties for defining a `RosSnapshotGroup`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-snapshotgroup
type RosSnapshotGroupProps struct {
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	DiskIds interface{} `field:"optional" json:"diskIds" yaml:"diskIds"`
	ExcludeDiskIds interface{} `field:"optional" json:"excludeDiskIds" yaml:"excludeDiskIds"`
	InstanceId interface{} `field:"optional" json:"instanceId" yaml:"instanceId"`
	Name interface{} `field:"optional" json:"name" yaml:"name"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	Tags *[]*RosSnapshotGroup_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
}

