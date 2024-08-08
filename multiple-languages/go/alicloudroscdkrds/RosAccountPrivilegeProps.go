package alicloudroscdkrds


// Properties for defining a `RosAccountPrivilege`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rds-accountprivilege
type RosAccountPrivilegeProps struct {
	AccountName interface{} `field:"required" json:"accountName" yaml:"accountName"`
	AccountPrivilege interface{} `field:"required" json:"accountPrivilege" yaml:"accountPrivilege"`
	DbInstanceId interface{} `field:"required" json:"dbInstanceId" yaml:"dbInstanceId"`
	DbName interface{} `field:"required" json:"dbName" yaml:"dbName"`
}

