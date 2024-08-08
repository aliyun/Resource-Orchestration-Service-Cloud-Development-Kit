package alicloudroscdkram


// Properties for defining a `User`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-user
type UserProps struct {
	// Property userName: Specifies the user name, containing up to 64 characters.
	UserName interface{} `field:"required" json:"userName" yaml:"userName"`
	// Property comments: Comments of ram user.
	Comments interface{} `field:"optional" json:"comments" yaml:"comments"`
	// Property deletionForce: Whether force detach the policies and groups attached to the user.
	//
	// Default value is false.
	DeletionForce interface{} `field:"optional" json:"deletionForce" yaml:"deletionForce"`
	// Property displayName: Display name, up to 128 characters or Chinese characters.
	DisplayName interface{} `field:"optional" json:"displayName" yaml:"displayName"`
	// Property email: Email of ram user.
	Email interface{} `field:"optional" json:"email" yaml:"email"`
	// Property groups: A name of a group to which you want to add the user.
	Groups interface{} `field:"optional" json:"groups" yaml:"groups"`
	// Property loginProfile: Creates a login profile for users so that they can access the AliCloud Management Console.
	LoginProfile interface{} `field:"optional" json:"loginProfile" yaml:"loginProfile"`
	// Property mobilePhone: Phone number of ram user.
	MobilePhone interface{} `field:"optional" json:"mobilePhone" yaml:"mobilePhone"`
	// Property policies: Describes what actions are allowed on what resources.
	Policies interface{} `field:"optional" json:"policies" yaml:"policies"`
	// Property policyAttachments: System and custom policy names to attach.
	PolicyAttachments interface{} `field:"optional" json:"policyAttachments" yaml:"policyAttachments"`
}

