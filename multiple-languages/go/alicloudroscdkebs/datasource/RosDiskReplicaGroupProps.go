package datasource


// Properties for defining a `RosDiskReplicaGroup`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ebs-diskreplicagroup
type RosDiskReplicaGroupProps struct {
	ReplicaGroupId interface{} `field:"required" json:"replicaGroupId" yaml:"replicaGroupId"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

