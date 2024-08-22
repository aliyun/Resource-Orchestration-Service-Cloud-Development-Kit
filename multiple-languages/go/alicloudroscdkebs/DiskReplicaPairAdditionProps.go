package alicloudroscdkebs


// Properties for defining a `DiskReplicaPairAddition`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ebs-diskreplicapairaddition
type DiskReplicaPairAdditionProps struct {
	// Property replicaGroupId: The ID of the replication pair-consistent group.
	ReplicaGroupId interface{} `field:"required" json:"replicaGroupId" yaml:"replicaGroupId"`
	// Property replicaPairId: The ID of the replication pair.
	//
	// You can call the DescribeDiskReplicaPairs operation to query the IDs of existing replication pairs.
	ReplicaPairId interface{} `field:"required" json:"replicaPairId" yaml:"replicaPairId"`
}

