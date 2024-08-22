package alicloudroscdkhbr


// Properties for defining a `BackupClients`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbr-backupclients
type BackupClientsProps struct {
	// Property instanceIds: ID list of instances to install backup client.
	InstanceIds interface{} `field:"required" json:"instanceIds" yaml:"instanceIds"`
	// Property tags: Tags to attach to instance.
	//
	// Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
	Tags *[]*RosBackupClients_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
}

