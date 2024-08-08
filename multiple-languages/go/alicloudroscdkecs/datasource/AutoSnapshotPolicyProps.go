package datasource


// Properties for defining a `AutoSnapshotPolicy`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-autosnapshotpolicy
type AutoSnapshotPolicyProps struct {
	// Property autoSnapshotPolicyId: The name of the automatic snapshot policy.
	AutoSnapshotPolicyId interface{} `field:"required" json:"autoSnapshotPolicyId" yaml:"autoSnapshotPolicyId"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

