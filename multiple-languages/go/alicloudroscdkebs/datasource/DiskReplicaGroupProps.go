package datasource


// Properties for defining a `DiskReplicaGroup`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ebs-diskreplicagroup
type DiskReplicaGroupProps struct {
	// Property replicaGroupId: The ID of the consistent replication group.
	ReplicaGroupId interface{} `field:"required" json:"replicaGroupId" yaml:"replicaGroupId"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

