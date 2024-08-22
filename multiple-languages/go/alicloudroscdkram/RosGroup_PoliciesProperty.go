package alicloudroscdkram


type RosGroup_PoliciesProperty struct {
	PolicyDocument interface{} `field:"required" json:"policyDocument" yaml:"policyDocument"`
	PolicyName interface{} `field:"required" json:"policyName" yaml:"policyName"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	IgnoreExisting interface{} `field:"optional" json:"ignoreExisting" yaml:"ignoreExisting"`
}

