package alicloudroscdkhbr


// Properties for defining a `DbAgent`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbr-dbagent
type DbAgentProps struct {
	// Property instanceInfo: Instance infos.
	InstanceInfo interface{} `field:"required" json:"instanceInfo" yaml:"instanceInfo"`
	// Property crossAccountRoleName: The RAM role name that the original account created for cross-account backup operations.
	CrossAccountRoleName interface{} `field:"optional" json:"crossAccountRoleName" yaml:"crossAccountRoleName"`
	// Property crossAccountType: The type of cross-account backup.
	//
	// Supported values: SELF_ACCOUNT: backup within the same account; CROSS_ACCOUNT: cross-account backup. Example: CROSS_ACCOUNT
	CrossAccountType interface{} `field:"optional" json:"crossAccountType" yaml:"crossAccountType"`
	// Property crossAccountUserId: The user ID of the original account for cross-account backup operations.
	CrossAccountUserId interface{} `field:"optional" json:"crossAccountUserId" yaml:"crossAccountUserId"`
}

