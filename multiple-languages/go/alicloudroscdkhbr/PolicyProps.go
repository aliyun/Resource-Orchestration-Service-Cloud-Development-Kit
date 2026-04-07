package alicloudroscdkhbr


// Properties for defining a `Policy`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbr-policy
type PolicyProps struct {
	// Property policyName: The name of the policy.
	PolicyName interface{} `field:"required" json:"policyName" yaml:"policyName"`
	// Property policyType: The type of the policy.
	PolicyType interface{} `field:"required" json:"policyType" yaml:"policyType"`
	// Property rules: The rules of the policy.
	Rules interface{} `field:"required" json:"rules" yaml:"rules"`
	// Property policyDescription: The description of the policy.
	PolicyDescription interface{} `field:"optional" json:"policyDescription" yaml:"policyDescription"`
}

