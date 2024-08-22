package alicloudroscdkram


// Properties for defining a `RosAttachPolicyToRole`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-attachpolicytorole
type RosAttachPolicyToRoleProps struct {
	PolicyName interface{} `field:"required" json:"policyName" yaml:"policyName"`
	PolicyType interface{} `field:"required" json:"policyType" yaml:"policyType"`
	RoleName interface{} `field:"required" json:"roleName" yaml:"roleName"`
}

