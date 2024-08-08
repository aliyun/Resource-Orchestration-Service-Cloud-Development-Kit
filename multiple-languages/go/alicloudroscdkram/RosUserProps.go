package alicloudroscdkram


// Properties for defining a `RosUser`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-user
type RosUserProps struct {
	UserName interface{} `field:"required" json:"userName" yaml:"userName"`
	Comments interface{} `field:"optional" json:"comments" yaml:"comments"`
	DeletionForce interface{} `field:"optional" json:"deletionForce" yaml:"deletionForce"`
	DisplayName interface{} `field:"optional" json:"displayName" yaml:"displayName"`
	Email interface{} `field:"optional" json:"email" yaml:"email"`
	Groups interface{} `field:"optional" json:"groups" yaml:"groups"`
	LoginProfile interface{} `field:"optional" json:"loginProfile" yaml:"loginProfile"`
	MobilePhone interface{} `field:"optional" json:"mobilePhone" yaml:"mobilePhone"`
	Policies interface{} `field:"optional" json:"policies" yaml:"policies"`
	PolicyAttachments interface{} `field:"optional" json:"policyAttachments" yaml:"policyAttachments"`
}

