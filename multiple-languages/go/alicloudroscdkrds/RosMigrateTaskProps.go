package alicloudroscdkrds


// Properties for defining a `RosMigrateTask`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rds-migratetask
type RosMigrateTaskProps struct {
	BackupMode interface{} `field:"required" json:"backupMode" yaml:"backupMode"`
	DbInstanceId interface{} `field:"required" json:"dbInstanceId" yaml:"dbInstanceId"`
	DbName interface{} `field:"required" json:"dbName" yaml:"dbName"`
	IsOnlineDb interface{} `field:"required" json:"isOnlineDb" yaml:"isOnlineDb"`
	CheckDbMode interface{} `field:"optional" json:"checkDbMode" yaml:"checkDbMode"`
	OssObjectPositions interface{} `field:"optional" json:"ossObjectPositions" yaml:"ossObjectPositions"`
	OssUrls interface{} `field:"optional" json:"ossUrls" yaml:"ossUrls"`
}

