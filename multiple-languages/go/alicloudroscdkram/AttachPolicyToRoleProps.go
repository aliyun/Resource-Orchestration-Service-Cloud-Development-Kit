package alicloudroscdkram


// Properties for defining a `AttachPolicyToRole`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-attachpolicytorole
type AttachPolicyToRoleProps struct {
	// Property policyName: Authorization policy name.
	PolicyName interface{} `field:"required" json:"policyName" yaml:"policyName"`
	// Property policyType: Authorization policy type.
	//
	// Value: "System" or "Custom".
	PolicyType interface{} `field:"required" json:"policyType" yaml:"policyType"`
	// Property roleName: Role name.Example: dev.
	RoleName interface{} `field:"required" json:"roleName" yaml:"roleName"`
}

