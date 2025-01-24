package alicloudroscdkram


// Properties for defining a `RosAttachPolicyToGroup`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-attachpolicytogroup
type RosAttachPolicyToGroupProps struct {
	GroupName interface{} `field:"required" json:"groupName" yaml:"groupName"`
	PolicyName interface{} `field:"required" json:"policyName" yaml:"policyName"`
	PolicyType interface{} `field:"required" json:"policyType" yaml:"policyType"`
}

