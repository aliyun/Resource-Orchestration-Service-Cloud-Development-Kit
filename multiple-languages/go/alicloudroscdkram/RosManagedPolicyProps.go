package alicloudroscdkram


// Properties for defining a `RosManagedPolicy`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-managedpolicy
type RosManagedPolicyProps struct {
	PolicyName interface{} `field:"required" json:"policyName" yaml:"policyName"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	Groups interface{} `field:"optional" json:"groups" yaml:"groups"`
	IgnoreExisting interface{} `field:"optional" json:"ignoreExisting" yaml:"ignoreExisting"`
	PolicyDocument interface{} `field:"optional" json:"policyDocument" yaml:"policyDocument"`
	PolicyDocumentUnchecked interface{} `field:"optional" json:"policyDocumentUnchecked" yaml:"policyDocumentUnchecked"`
	Roles interface{} `field:"optional" json:"roles" yaml:"roles"`
	Users interface{} `field:"optional" json:"users" yaml:"users"`
}

