package alicloudroscdkpolardbx


// Properties for defining a `RosDatabase`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardbx-database
type RosDatabaseProps struct {
	Accounts interface{} `field:"required" json:"accounts" yaml:"accounts"`
	CharacterSetName interface{} `field:"required" json:"characterSetName" yaml:"characterSetName"`
	DatabaseName interface{} `field:"required" json:"databaseName" yaml:"databaseName"`
	DbInstanceId interface{} `field:"required" json:"dbInstanceId" yaml:"dbInstanceId"`
	DatabaseDescription interface{} `field:"optional" json:"databaseDescription" yaml:"databaseDescription"`
	Mode interface{} `field:"optional" json:"mode" yaml:"mode"`
}

