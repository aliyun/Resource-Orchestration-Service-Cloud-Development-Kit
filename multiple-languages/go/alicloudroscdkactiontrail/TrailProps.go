package alicloudroscdkactiontrail


// Properties for defining a `Trail`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-actiontrail-trail
type TrailProps struct {
	// Property name: The name of the trail to be created.
	//
	// Length should be between 6 and 36 characters, must start with a lowercase letter,
	// and can include lowercase letters, numbers, hyphens (-), and underscores (_).
	// > The trail name must be unique within the same account.
	Name interface{} `field:"required" json:"name" yaml:"name"`
	// Property eventRw: Indicates whether the event is a read or a write event.
	//
	// Valid values: Read, Write, and All. Default value: Write.
	EventRw interface{} `field:"optional" json:"eventRw" yaml:"eventRw"`
	// Property ossBucketName: The OSS bucket for the trail delivery.
	//
	// Length should be between 3 and 63 characters, must start with a lowercase letter
	// or number, and can include lowercase letters, numbers, and hyphens (-).
	// > At least one of OssBucketName and SlsProjectArn must be specified.
	OssBucketName interface{} `field:"optional" json:"ossBucketName" yaml:"ossBucketName"`
	// Property ossKeyPrefix: The prefix for the filenames in the OSS bucket for the trail delivery.
	//
	// Length should be between 6 and 32 characters, must start with a letter, and can
	// include letters, numbers, hyphens (-), forward slashes (\/), and underscores (_).
	OssKeyPrefix interface{} `field:"optional" json:"ossKeyPrefix" yaml:"ossKeyPrefix"`
	// Property roleName: The name of the associated role for Operation Audit, with a default value of serviceroleforactiontrail.
	RoleName interface{} `field:"optional" json:"roleName" yaml:"roleName"`
	// Property slsProjectArn: The ARN of the Log Service project for the trail delivery.
	//
	// > At least one of OssBucketName and SlsProjectArn must be specified.
	SlsProjectArn interface{} `field:"optional" json:"slsProjectArn" yaml:"slsProjectArn"`
	// Property slsWriteRoleArn: The ARN of the role assumed by Operation Audit when delivering operation events to the Log Service project.
	//
	// - If this parameter is not specified, Operation Audit will create the necessary
	// resources by creating a service-linked role.
	// - If this parameter is specified, when you need to deliver events to the current
	// account, you need to grant the RAM role the permissions of the Operation Audit
	// service-linked role. When you need to deliver events to another account, you need
	// to bind the system permission policy for event delivery to the RAM role. For more
	// information on cross-account delivery, see Deliver Events from Multiple
	// Accounts to One Account.
	SlsWriteRoleArn interface{} `field:"optional" json:"slsWriteRoleArn" yaml:"slsWriteRoleArn"`
}

