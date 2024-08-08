package alicloudroscdkpolardb


// Properties for defining a `RosAccountPrivilege`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-accountprivilege
type RosAccountPrivilegeProps struct {
	AccountName interface{} `field:"required" json:"accountName" yaml:"accountName"`
	AccountPrivilege interface{} `field:"required" json:"accountPrivilege" yaml:"accountPrivilege"`
	DbClusterId interface{} `field:"required" json:"dbClusterId" yaml:"dbClusterId"`
	DbName interface{} `field:"required" json:"dbName" yaml:"dbName"`
}

