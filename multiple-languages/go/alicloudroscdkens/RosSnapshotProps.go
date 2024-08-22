package alicloudroscdkens


// Properties for defining a `RosSnapshot`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ens-snapshot
type RosSnapshotProps struct {
	DiskId interface{} `field:"required" json:"diskId" yaml:"diskId"`
	EnsRegionId interface{} `field:"required" json:"ensRegionId" yaml:"ensRegionId"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	SnapshotName interface{} `field:"optional" json:"snapshotName" yaml:"snapshotName"`
}

