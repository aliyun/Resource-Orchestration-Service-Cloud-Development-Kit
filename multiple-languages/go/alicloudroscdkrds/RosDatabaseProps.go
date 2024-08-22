package alicloudroscdkrds


// Properties for defining a `RosDatabase`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rds-database
type RosDatabaseProps struct {
	CharacterSetName interface{} `field:"required" json:"characterSetName" yaml:"characterSetName"`
	DbInstanceId interface{} `field:"required" json:"dbInstanceId" yaml:"dbInstanceId"`
	DbName interface{} `field:"required" json:"dbName" yaml:"dbName"`
	DbDescription interface{} `field:"optional" json:"dbDescription" yaml:"dbDescription"`
}

