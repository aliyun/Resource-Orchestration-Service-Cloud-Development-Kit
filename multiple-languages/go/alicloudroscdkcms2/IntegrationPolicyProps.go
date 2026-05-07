package alicloudroscdkcms2


// Properties for defining a `IntegrationPolicy`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms2-integrationpolicy
type IntegrationPolicyProps struct {
	// Property policyType: The type of the integration policy.
	PolicyType interface{} `field:"required" json:"policyType" yaml:"policyType"`
	// Property entityGroup: The entity group information.
	EntityGroup interface{} `field:"optional" json:"entityGroup" yaml:"entityGroup"`
	// Property policyName: The name of the integration policy.
	PolicyName interface{} `field:"optional" json:"policyName" yaml:"policyName"`
	// Property resourceGroupId: The ID of the resource group.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property tags: Tags to attach to integration policy.
	//
	// Max support 20 tags to add during create integration policy. Each tag with two properties Key and Value, and Key is required.
	Tags *[]*RosIntegrationPolicy_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
	// Property workspace: The workspace of the integration policy.
	Workspace interface{} `field:"optional" json:"workspace" yaml:"workspace"`
}

