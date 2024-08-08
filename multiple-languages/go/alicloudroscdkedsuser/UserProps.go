package alicloudroscdkedsuser


// Properties for defining a `User`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-edsuser-user
type UserProps struct {
	// Property endUserId: The name of the end user.
	//
	// The name must be 3 to 24 characters in length, and can contain lowercase letters, digits, and underscores (_).
	EndUserId interface{} `field:"required" json:"endUserId" yaml:"endUserId"`
	// Property email: The email address of the end user.
	//
	// The email address is used to receive notifications about events such as desktop assignment. You must specify an email address or a mobile number to receive notifications.
	Email interface{} `field:"optional" json:"email" yaml:"email"`
	// Property orgId: The organization to which the end user belongs.
	OrgId interface{} `field:"optional" json:"orgId" yaml:"orgId"`
	// Property ownerType: The type of the account ownership.
	//
	// Enumeration Value:
	// CreateFromManager
	// Normal.
	OwnerType interface{} `field:"optional" json:"ownerType" yaml:"ownerType"`
	// Property password: The initial password.
	//
	// If this parameter is left empty, an email for password reset is sent to the specified email address.
	Password interface{} `field:"optional" json:"password" yaml:"password"`
	// Property phone: Mobile numbers are not supported on the international site (alibabacloud.com).
	Phone interface{} `field:"optional" json:"phone" yaml:"phone"`
	// Property remark: The remarks of the end user.
	Remark interface{} `field:"optional" json:"remark" yaml:"remark"`
}

