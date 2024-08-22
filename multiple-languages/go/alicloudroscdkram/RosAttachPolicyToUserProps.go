package alicloudroscdkram


// Properties for defining a `RosAttachPolicyToUser`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-attachpolicytouser
type RosAttachPolicyToUserProps struct {
	PolicyName interface{} `field:"required" json:"policyName" yaml:"policyName"`
	PolicyType interface{} `field:"required" json:"policyType" yaml:"policyType"`
	UserName interface{} `field:"required" json:"userName" yaml:"userName"`
}

