package alicloudroscdkhbr


// Properties for defining a `RosBackupClients`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbr-backupclients
type RosBackupClientsProps struct {
	InstanceIds interface{} `field:"required" json:"instanceIds" yaml:"instanceIds"`
	Tags *[]*RosBackupClients_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
}

