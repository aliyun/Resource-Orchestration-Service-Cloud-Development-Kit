package datasource


// Properties for defining a `RosAutoSnapshotPolicies`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-autosnapshotpolicies
type RosAutoSnapshotPoliciesProps struct {
	AutoSnapshotPolicyId interface{} `field:"optional" json:"autoSnapshotPolicyId" yaml:"autoSnapshotPolicyId"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	Tags *[]*RosAutoSnapshotPolicies_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
}

