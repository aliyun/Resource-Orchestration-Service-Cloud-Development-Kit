package alicloudroscdkram


// Properties for defining a `RosGroup`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-group
type RosGroupProps struct {
	GroupName interface{} `field:"required" json:"groupName" yaml:"groupName"`
	Comments interface{} `field:"optional" json:"comments" yaml:"comments"`
	DeletionForce interface{} `field:"optional" json:"deletionForce" yaml:"deletionForce"`
	IgnoreExisting interface{} `field:"optional" json:"ignoreExisting" yaml:"ignoreExisting"`
	Policies interface{} `field:"optional" json:"policies" yaml:"policies"`
	PolicyAttachments interface{} `field:"optional" json:"policyAttachments" yaml:"policyAttachments"`
}

