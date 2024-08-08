package alicloudroscdkpolardb


// Properties for defining a `RosDBInstance`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-dbinstance
type RosDBInstanceProps struct {
	CharacterSetName interface{} `field:"required" json:"characterSetName" yaml:"characterSetName"`
	DbClusterId interface{} `field:"required" json:"dbClusterId" yaml:"dbClusterId"`
	DbName interface{} `field:"required" json:"dbName" yaml:"dbName"`
	AccountName interface{} `field:"optional" json:"accountName" yaml:"accountName"`
	AccountPrivilege interface{} `field:"optional" json:"accountPrivilege" yaml:"accountPrivilege"`
	Collate interface{} `field:"optional" json:"collate" yaml:"collate"`
	Ctype interface{} `field:"optional" json:"ctype" yaml:"ctype"`
	DbDescription interface{} `field:"optional" json:"dbDescription" yaml:"dbDescription"`
}

