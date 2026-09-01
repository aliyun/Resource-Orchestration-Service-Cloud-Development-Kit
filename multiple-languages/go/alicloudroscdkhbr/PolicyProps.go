package alicloudroscdkhbr


// Properties for defining a `Policy`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbr-policy
type PolicyProps struct {
	// Property policyName: The name of the policy.
	PolicyName interface{} `field:"required" json:"policyName" yaml:"policyName"`
	// Property policyType: The type of the backup policy.
	//
	// Valid values:
	// - STANDARD: A standard backup policy. It supports data sources other than ECS
	// instance backup.
	// - UDM_ECS_ONLY: A backup policy that supports only ECS instance backups.
	// If you do not specify this parameter, Cloud Backup automatically sets the policy
	// type based on whether a backup vault is specified in the policy rules:
	// - If a backup vault is specified in the rules, the policy type is set to
	// STANDARD.
	// - If no backup vault is specified in the rules, the policy type is set to
	// UDM_ECS_ONLY.
	PolicyType interface{} `field:"required" json:"policyType" yaml:"policyType"`
	// Property rules: The rules of the policy.
	Rules interface{} `field:"required" json:"rules" yaml:"rules"`
	// Property policyDescription: The description of the policy.
	PolicyDescription interface{} `field:"optional" json:"policyDescription" yaml:"policyDescription"`
}

