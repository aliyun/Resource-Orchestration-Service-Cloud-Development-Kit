package alicloudroscdkram


// Properties for defining a `AttachPolicyToGroup`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-attachpolicytogroup
type AttachPolicyToGroupProps struct {
	// Property groupName: User group name.
	GroupName interface{} `field:"required" json:"groupName" yaml:"groupName"`
	// Property policyName: Authorization policy name.
	PolicyName interface{} `field:"required" json:"policyName" yaml:"policyName"`
	// Property policyType: Authorization policy type.
	//
	// Value: "System" or "Custom".
	PolicyType interface{} `field:"required" json:"policyType" yaml:"policyType"`
}

