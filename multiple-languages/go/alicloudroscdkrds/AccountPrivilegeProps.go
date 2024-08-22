package alicloudroscdkrds


// Properties for defining a `AccountPrivilege`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rds-accountprivilege
type AccountPrivilegeProps struct {
	// Property accountName: RDS account name.
	AccountName interface{} `field:"required" json:"accountName" yaml:"accountName"`
	// Property accountPrivilege: RDS account privilege.
	AccountPrivilege interface{} `field:"required" json:"accountPrivilege" yaml:"accountPrivilege"`
	// Property dbInstanceId: RDS instance ID.
	DbInstanceId interface{} `field:"required" json:"dbInstanceId" yaml:"dbInstanceId"`
	// Property dbName: RDS database name.
	DbName interface{} `field:"required" json:"dbName" yaml:"dbName"`
}

