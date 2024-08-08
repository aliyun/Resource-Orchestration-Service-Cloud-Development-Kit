package alicloudroscdkresourcemanager


// Properties for defining a `RosControlPolicyAttachment`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-controlpolicyattachment
type RosControlPolicyAttachmentProps struct {
	PolicyId interface{} `field:"required" json:"policyId" yaml:"policyId"`
	TargetId interface{} `field:"required" json:"targetId" yaml:"targetId"`
}

