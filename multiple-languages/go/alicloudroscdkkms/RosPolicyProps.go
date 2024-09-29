package alicloudroscdkkms


// Properties for defining a `RosPolicy`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-kms-policy
type RosPolicyProps struct {
	AccessControlRules interface{} `field:"required" json:"accessControlRules" yaml:"accessControlRules"`
	KmsInstanceId interface{} `field:"required" json:"kmsInstanceId" yaml:"kmsInstanceId"`
	Permissions interface{} `field:"required" json:"permissions" yaml:"permissions"`
	PolicyName interface{} `field:"required" json:"policyName" yaml:"policyName"`
	Resources interface{} `field:"required" json:"resources" yaml:"resources"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
}

