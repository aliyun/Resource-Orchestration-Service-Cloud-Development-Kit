package alicloudroscdkens


// Properties for defining a `Snapshot`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ens-snapshot
type SnapshotProps struct {
	// Property diskId: The ID of the cloud disk.
	DiskId interface{} `field:"required" json:"diskId" yaml:"diskId"`
	// Property ensRegionId: The ID of the edge node.
	EnsRegionId interface{} `field:"required" json:"ensRegionId" yaml:"ensRegionId"`
	// Property description: The description of the snapshot.
	//
	// The description must be 2 to 256 characters in length and cannot start with http:\/\/ or https:\/\/.
	// By default, this parameter is left empty.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property snapshotName: The name of the snapshot.
	//
	// The name must be 2 to 128 characters in length. It must start with a letter and cannot start with http:\/\/ or https:\/\/. It can contain letters, digits, colons (:), underscores (_), and hyphens (-).
	SnapshotName interface{} `field:"optional" json:"snapshotName" yaml:"snapshotName"`
}

