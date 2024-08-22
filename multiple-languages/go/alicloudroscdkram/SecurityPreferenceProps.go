package alicloudroscdkram


// Properties for defining a `SecurityPreference`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-securitypreference
type SecurityPreferenceProps struct {
	// Property allowUserToChangePassword: Specifies whether RAM users can change their passwords.
	//
	// Valid values:
	// true: RAM users can change their passwords. This is the default value.
	// false: RAM users cannot change their passwords.
	AllowUserToChangePassword interface{} `field:"optional" json:"allowUserToChangePassword" yaml:"allowUserToChangePassword"`
	// Property allowUserToManageAccessKeys: Specifies whether RAM users can manage their AccessKey pairs.
	//
	// Valid values:
	// true: RAM users can manage their AccessKey pairs.
	// false: RAM users cannot manage their AccessKey pairs. This is the default value.
	AllowUserToManageAccessKeys interface{} `field:"optional" json:"allowUserToManageAccessKeys" yaml:"allowUserToManageAccessKeys"`
	// Property allowUserToManageMfaDevices: Specifies whether RAM users can manage their MFA devices.
	//
	// Valid values:
	// true: RAM users can manage their MFA devices. This is the default value.
	// false: RAM users cannot manage their MFA devices.
	AllowUserToManageMfaDevices interface{} `field:"optional" json:"allowUserToManageMfaDevices" yaml:"allowUserToManageMfaDevices"`
	// Property allowUserToManagePublicKeys: Specifies whether RAM users can manage their public keys.
	//
	// Valid values:
	// true: RAM users can manage their public keys.
	// false: RAM users cannot manage their public keys. This is the default value.
	// Note This parameter is valid only for the Japan site.
	AllowUserToManagePublicKeys interface{} `field:"optional" json:"allowUserToManagePublicKeys" yaml:"allowUserToManagePublicKeys"`
	// Property enableSaveMfaTicket: Specifies whether RAM users can save multi-factor authentication (MFA) security codes during logon.
	//
	// The security codes are valid for 7 days. Valid values:
	// true: RAM users can save MFA security codes during logon.
	// false: RAM users cannot save MFA security codes during logon. This is the default
	// value.
	EnableSaveMfaTicket interface{} `field:"optional" json:"enableSaveMfaTicket" yaml:"enableSaveMfaTicket"`
	// Property loginNetworkMasks: The subnet mask that specifies the IP addresses from which logon to the console is allowed.
	//
	// This parameter applies to password-based logon and single sign-on (SSO).
	// However, this parameter does not apply to API calls that are authenticated based on
	// AccessKey pairs.
	// If a subnet mask is specified, RAM users can log on to the console only by using the
	// IP addresses in the subnet.
	// If you do not specify a subnet mask, RAM users can log on to the console by using
	// all IP addresses.
	// If you want to specify multiple subnet masks, separate the subnet masks with semicolons
	// (;). Example: 192.168.0.0\/16;10.0.0.0\/8.
	// A maximum of 25 subnet masks can be set. The total length of the subnet masks can
	// be 1 to 512 characters.
	LoginNetworkMasks interface{} `field:"optional" json:"loginNetworkMasks" yaml:"loginNetworkMasks"`
	// Property loginSessionDuration: The validity period of the logon session of the RAM user.
	//
	// Valid values: 6 to 24. Default value: 6. Unit: hours.
	LoginSessionDuration interface{} `field:"optional" json:"loginSessionDuration" yaml:"loginSessionDuration"`
}

