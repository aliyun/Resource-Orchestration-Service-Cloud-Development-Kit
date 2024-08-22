package alicloudroscdkcloudsso


// Properties for defining a `User`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-user
type UserProps struct {
	// Property directoryId: The ID of the directory.
	DirectoryId interface{} `field:"required" json:"directoryId" yaml:"directoryId"`
	// Property userName: The name of the user.
	//
	// The name must be unique within the directory. The name cannot be changed.
	// The name can contain numbers, letters, and the following special characters: @_-.
	// The name can be up to 64 characters in length.
	UserName interface{} `field:"required" json:"userName" yaml:"userName"`
	// Property description: The description of the user.
	//
	// The description can be up to 1,024 characters in length.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property displayName: The display name of the user.
	//
	// The name can be up to 256 characters in length.
	DisplayName interface{} `field:"optional" json:"displayName" yaml:"displayName"`
	// Property email: The email address of the user.
	//
	// The email address must be unique within the directory.
	// The email address can be up to 128 characters in length.
	Email interface{} `field:"optional" json:"email" yaml:"email"`
	// Property firstName: The first name of the user.
	//
	// The name can be up to 64 characters in length.
	FirstName interface{} `field:"optional" json:"firstName" yaml:"firstName"`
	// Property lastName: The last name of the user.
	//
	// The name can be up to 64 characters in length.
	LastName interface{} `field:"optional" json:"lastName" yaml:"lastName"`
	// Property status: The status of the user.
	//
	// Valid values:
	// - Enabled: The logon of the user is enabled. This is the default value.
	// - Disabled: The logon of the user is disabled.
	Status interface{} `field:"optional" json:"status" yaml:"status"`
}

