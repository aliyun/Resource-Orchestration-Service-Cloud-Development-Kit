package datasource


// Properties for defining a `RosSnapshot`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-snapshot
type RosSnapshotProps struct {
	SnapshotId interface{} `field:"required" json:"snapshotId" yaml:"snapshotId"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

