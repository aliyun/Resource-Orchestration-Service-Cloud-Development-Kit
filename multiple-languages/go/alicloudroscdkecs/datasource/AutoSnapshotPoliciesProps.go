package datasource


// Properties for defining a `AutoSnapshotPolicies`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-autosnapshotpolicies
type AutoSnapshotPoliciesProps struct {
	// Property autoSnapshotPolicyId: The ID of the automatic snapshot policy.
	AutoSnapshotPolicyId interface{} `field:"optional" json:"autoSnapshotPolicyId" yaml:"autoSnapshotPolicyId"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	// Property resourceGroupId: The ID of the resource group to which the automatic snapshot policy belongs.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property tags: Tags of snapshotpolicy.
	Tags *[]*RosAutoSnapshotPolicies_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
}

