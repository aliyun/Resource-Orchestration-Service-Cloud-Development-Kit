package alicloudroscdkresourcemanager


// Properties for defining a `RosControlPolicy`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-controlpolicy
type RosControlPolicyProps struct {
	ControlPolicyName interface{} `field:"required" json:"controlPolicyName" yaml:"controlPolicyName"`
	EffectScope interface{} `field:"required" json:"effectScope" yaml:"effectScope"`
	PolicyDocument interface{} `field:"required" json:"policyDocument" yaml:"policyDocument"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
}

