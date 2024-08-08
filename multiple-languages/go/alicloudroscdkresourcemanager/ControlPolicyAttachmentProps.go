package alicloudroscdkresourcemanager


// Properties for defining a `ControlPolicyAttachment`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-controlpolicyattachment
type ControlPolicyAttachmentProps struct {
	// Property policyId: PolicyId.
	PolicyId interface{} `field:"required" json:"policyId" yaml:"policyId"`
	// Property targetId: TargetId.
	TargetId interface{} `field:"required" json:"targetId" yaml:"targetId"`
}

