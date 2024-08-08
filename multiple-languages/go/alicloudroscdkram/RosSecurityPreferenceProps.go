package alicloudroscdkram


// Properties for defining a `RosSecurityPreference`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-securitypreference
type RosSecurityPreferenceProps struct {
	AllowUserToChangePassword interface{} `field:"optional" json:"allowUserToChangePassword" yaml:"allowUserToChangePassword"`
	AllowUserToManageAccessKeys interface{} `field:"optional" json:"allowUserToManageAccessKeys" yaml:"allowUserToManageAccessKeys"`
	AllowUserToManageMfaDevices interface{} `field:"optional" json:"allowUserToManageMfaDevices" yaml:"allowUserToManageMfaDevices"`
	AllowUserToManagePublicKeys interface{} `field:"optional" json:"allowUserToManagePublicKeys" yaml:"allowUserToManagePublicKeys"`
	EnableSaveMfaTicket interface{} `field:"optional" json:"enableSaveMfaTicket" yaml:"enableSaveMfaTicket"`
	LoginNetworkMasks interface{} `field:"optional" json:"loginNetworkMasks" yaml:"loginNetworkMasks"`
	LoginSessionDuration interface{} `field:"optional" json:"loginSessionDuration" yaml:"loginSessionDuration"`
}

