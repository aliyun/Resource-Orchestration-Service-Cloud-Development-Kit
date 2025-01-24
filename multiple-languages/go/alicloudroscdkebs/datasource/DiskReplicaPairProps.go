package datasource


// Properties for defining a `DiskReplicaPair`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ebs-diskreplicapair
type DiskReplicaPairProps struct {
	// Property replicaPairId: The ID of the replication pair.
	ReplicaPairId interface{} `field:"required" json:"replicaPairId" yaml:"replicaPairId"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

