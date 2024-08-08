package alicloudroscdkebs


// Properties for defining a `RosDiskReplicaPairAddition`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ebs-diskreplicapairaddition
type RosDiskReplicaPairAdditionProps struct {
	ReplicaGroupId interface{} `field:"required" json:"replicaGroupId" yaml:"replicaGroupId"`
	ReplicaPairId interface{} `field:"required" json:"replicaPairId" yaml:"replicaPairId"`
}

