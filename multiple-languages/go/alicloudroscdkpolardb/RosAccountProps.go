package alicloudroscdkpolardb


// Properties for defining a `RosAccount`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-account
type RosAccountProps struct {
	AccountName interface{} `field:"required" json:"accountName" yaml:"accountName"`
	AccountPassword interface{} `field:"required" json:"accountPassword" yaml:"accountPassword"`
	DbClusterId interface{} `field:"required" json:"dbClusterId" yaml:"dbClusterId"`
	AccountDescription interface{} `field:"optional" json:"accountDescription" yaml:"accountDescription"`
	AccountPrivilege interface{} `field:"optional" json:"accountPrivilege" yaml:"accountPrivilege"`
	AccountType interface{} `field:"optional" json:"accountType" yaml:"accountType"`
	DbName interface{} `field:"optional" json:"dbName" yaml:"dbName"`
}

