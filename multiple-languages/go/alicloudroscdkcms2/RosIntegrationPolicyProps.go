package alicloudroscdkcms2


// Properties for defining a `RosIntegrationPolicy`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms2-integrationpolicy
type RosIntegrationPolicyProps struct {
	PolicyType interface{} `field:"required" json:"policyType" yaml:"policyType"`
	EntityGroup interface{} `field:"optional" json:"entityGroup" yaml:"entityGroup"`
	PolicyName interface{} `field:"optional" json:"policyName" yaml:"policyName"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	Tags *[]*RosIntegrationPolicy_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
	Workspace interface{} `field:"optional" json:"workspace" yaml:"workspace"`
}

