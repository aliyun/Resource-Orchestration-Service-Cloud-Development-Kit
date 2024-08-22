package alicloudroscdkresourcemanager


// Properties for defining a `ControlPolicy`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-controlpolicy
type ControlPolicyProps struct {
	// Property controlPolicyName: PolicyName.
	ControlPolicyName interface{} `field:"required" json:"controlPolicyName" yaml:"controlPolicyName"`
	// Property effectScope: EffectScope.
	EffectScope interface{} `field:"required" json:"effectScope" yaml:"effectScope"`
	// Property policyDocument: PolicyDocument.
	PolicyDocument interface{} `field:"required" json:"policyDocument" yaml:"policyDocument"`
	// Property description: Description.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
}

