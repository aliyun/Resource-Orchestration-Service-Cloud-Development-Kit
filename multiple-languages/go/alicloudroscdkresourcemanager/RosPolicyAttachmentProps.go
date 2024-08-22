package alicloudroscdkresourcemanager


// Properties for defining a `RosPolicyAttachment`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-policyattachment
type RosPolicyAttachmentProps struct {
	PolicyName interface{} `field:"required" json:"policyName" yaml:"policyName"`
	PolicyType interface{} `field:"required" json:"policyType" yaml:"policyType"`
	PrincipalName interface{} `field:"required" json:"principalName" yaml:"principalName"`
	PrincipalType interface{} `field:"required" json:"principalType" yaml:"principalType"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
}

