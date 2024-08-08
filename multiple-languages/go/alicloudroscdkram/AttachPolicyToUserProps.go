package alicloudroscdkram


// Properties for defining a `AttachPolicyToUser`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-attachpolicytouser
type AttachPolicyToUserProps struct {
	// Property policyName: Authorization policy name.
	PolicyName interface{} `field:"required" json:"policyName" yaml:"policyName"`
	// Property policyType: Authorization policy type.
	//
	// Value: "System" or "Custom".
	PolicyType interface{} `field:"required" json:"policyType" yaml:"policyType"`
	// Property userName: User name.Example: dev.
	UserName interface{} `field:"required" json:"userName" yaml:"userName"`
}

