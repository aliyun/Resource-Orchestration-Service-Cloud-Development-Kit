package alicloudroscdkresourcemanager


// Properties for defining a `PolicyAttachment`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-policyattachment
type PolicyAttachmentProps struct {
	// Property policyName: The name of the policy.
	PolicyName interface{} `field:"required" json:"policyName" yaml:"policyName"`
	// Property policyType: The type of the policy.
	PolicyType interface{} `field:"required" json:"policyType" yaml:"policyType"`
	// Property principalName: The name of the object to which you want to attach the policy.
	PrincipalName interface{} `field:"required" json:"principalName" yaml:"principalName"`
	// Property principalType: The type of the object to which you want to attach the policy.
	//
	// Valid values: IMSUser: RAM user, IMSGroup: RAM user group, ServiceRole: RAM role.
	PrincipalType interface{} `field:"required" json:"principalType" yaml:"principalType"`
	// Property resourceGroupId: The ID of the resource group or the ID of the Alibaba Cloud account to which the resource group belongs.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
}

