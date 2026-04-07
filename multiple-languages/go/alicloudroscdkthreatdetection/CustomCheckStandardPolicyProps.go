package alicloudroscdkthreatdetection


// Properties for defining a `CustomCheckStandardPolicy`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-customcheckstandardpolicy
type CustomCheckStandardPolicyProps struct {
	// Property policyShowName: The name of the custom policy.
	PolicyShowName interface{} `field:"required" json:"policyShowName" yaml:"policyShowName"`
	// Property policyType: The category type of the custom check policy: - STANDARD: standard.
	//
	// - REQUIREMENT: requirement.
	// - SECTION: section.
	PolicyType interface{} `field:"required" json:"policyType" yaml:"policyType"`
	// Property dependentPolicyId: The ID of the parent policy.
	//
	// (Dependency order from low to high: Section -> Requirement -> Standard).
	DependentPolicyId interface{} `field:"optional" json:"dependentPolicyId" yaml:"dependentPolicyId"`
	// Property type: The category name of the associated policy (required when PolicyType is STANDARD): - AISPM: AI Security Posture Management (AISPM).
	//
	// - IDENTITY_PERMISSION: Identity and Entitlement Management (CIEM).
	// - RISK: Security Risk.
	// - COMPLIANCE: Compliance Risk.
	Type interface{} `field:"optional" json:"type" yaml:"type"`
}

