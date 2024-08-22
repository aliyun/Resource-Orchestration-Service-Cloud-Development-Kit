package alicloudroscdkecs


// Properties for defining a `RosAutoSnapshotPolicy`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-autosnapshotpolicy
type RosAutoSnapshotPolicyProps struct {
	RepeatWeekdays interface{} `field:"required" json:"repeatWeekdays" yaml:"repeatWeekdays"`
	RetentionDays interface{} `field:"required" json:"retentionDays" yaml:"retentionDays"`
	TimePoints interface{} `field:"required" json:"timePoints" yaml:"timePoints"`
	AutoSnapshotPolicyName interface{} `field:"optional" json:"autoSnapshotPolicyName" yaml:"autoSnapshotPolicyName"`
	DiskIds interface{} `field:"optional" json:"diskIds" yaml:"diskIds"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	Tags *[]*RosAutoSnapshotPolicy_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
}

