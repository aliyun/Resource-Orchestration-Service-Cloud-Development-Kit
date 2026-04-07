package alicloudroscdkgpdb


// Properties for defining a `RosDatabase`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-gpdb-database
type RosDatabaseProps struct {
	DatabaseName interface{} `field:"required" json:"databaseName" yaml:"databaseName"`
	DbInstanceId interface{} `field:"required" json:"dbInstanceId" yaml:"dbInstanceId"`
	Owner interface{} `field:"required" json:"owner" yaml:"owner"`
	CharacterSetName interface{} `field:"optional" json:"characterSetName" yaml:"characterSetName"`
	Collate interface{} `field:"optional" json:"collate" yaml:"collate"`
	Ctype interface{} `field:"optional" json:"ctype" yaml:"ctype"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
}

