package alicloudroscdkram


// Properties for defining a `LoginProfile`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-loginprofile
type LoginProfileProps struct {
	// Property userPrincipalName: The login name of the RAM user.
	UserPrincipalName interface{} `field:"required" json:"userPrincipalName" yaml:"userPrincipalName"`
	// Property generateRandomPassword: Whether to generate a random password for the RAM user.
	GenerateRandomPassword interface{} `field:"optional" json:"generateRandomPassword" yaml:"generateRandomPassword"`
	// Property mfaBindRequired: Whether to force RAM users to enable multi-factor authentication.
	//
	// Valid values:
	// - true: This is required. RAM users must bind the multifactor authentication device the next time they log in.
	// - false (default) : This is not required.
	MfaBindRequired interface{} `field:"optional" json:"mfaBindRequired" yaml:"mfaBindRequired"`
	// Property password: The logon password for the RAM user.
	//
	// The password must meet the password policy.
	Password interface{} `field:"optional" json:"password" yaml:"password"`
	// Property passwordResetRequired: Whether RAM users must reset their password the next time they log in.
	PasswordResetRequired interface{} `field:"optional" json:"passwordResetRequired" yaml:"passwordResetRequired"`
	// Property status: Specifies whether to enable password-based logon to the console.
	//
	// Valid values:
	// - Active (default): Enable
	// - Inactive: Disable.
	Status interface{} `field:"optional" json:"status" yaml:"status"`
}

