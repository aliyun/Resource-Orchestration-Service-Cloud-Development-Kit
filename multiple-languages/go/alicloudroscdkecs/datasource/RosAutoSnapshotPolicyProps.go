package datasource


// Properties for defining a `RosAutoSnapshotPolicy`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-autosnapshotpolicy
type RosAutoSnapshotPolicyProps struct {
	AutoSnapshotPolicyId interface{} `field:"required" json:"autoSnapshotPolicyId" yaml:"autoSnapshotPolicyId"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

