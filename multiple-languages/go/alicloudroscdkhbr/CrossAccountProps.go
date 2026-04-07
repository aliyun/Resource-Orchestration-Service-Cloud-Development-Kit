package alicloudroscdkhbr


// Properties for defining a `CrossAccount`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbr-crossaccount
type CrossAccountProps struct {
	// Property alias: The alias of the cross-account authorization.
	Alias interface{} `field:"optional" json:"alias" yaml:"alias"`
	// Property crossAccountRoleName: The name of the RAM role that is used to grant permissions to the authorized account.
	CrossAccountRoleName interface{} `field:"optional" json:"crossAccountRoleName" yaml:"crossAccountRoleName"`
	// Property crossAccountType: The type of the cross-account authorization.
	//
	// Valid values: CROSS_ACCOUNT, CROSS_ACCOUNT_BY_RD.
	CrossAccountType interface{} `field:"optional" json:"crossAccountType" yaml:"crossAccountType"`
	// Property crossAccountUserId: The user ID of the account that you want to authorize to back up data in your account.
	CrossAccountUserId interface{} `field:"optional" json:"crossAccountUserId" yaml:"crossAccountUserId"`
}

