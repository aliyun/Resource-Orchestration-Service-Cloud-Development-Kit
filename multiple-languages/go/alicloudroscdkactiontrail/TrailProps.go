package alicloudroscdkactiontrail


// Properties for defining a `Trail`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-actiontrail-trail
type TrailProps struct {
	// Property name: The name of the trail to be created, which must be unique for an account.
	Name interface{} `field:"required" json:"name" yaml:"name"`
	// Property eventRw: Indicates whether the event is a read or a write event.
	//
	// Valid values: Read, Write, and All. Default value: Write.
	EventRw interface{} `field:"optional" json:"eventRw" yaml:"eventRw"`
	// Property ossBucketName: The OSS bucket to which the trail delivers logs.
	//
	// Ensure that this is an existing OSS bucket.
	OssBucketName interface{} `field:"optional" json:"ossBucketName" yaml:"ossBucketName"`
	// Property ossKeyPrefix: The prefix of the specified OSS bucket name.
	//
	// This parameter can be left empty.
	OssKeyPrefix interface{} `field:"optional" json:"ossKeyPrefix" yaml:"ossKeyPrefix"`
	// Property roleName: The RAM role in ActionTrail permitted by the user.
	RoleName interface{} `field:"optional" json:"roleName" yaml:"roleName"`
	// Property slsProjectArn: The unique ARN of the Log Service project.
	SlsProjectArn interface{} `field:"optional" json:"slsProjectArn" yaml:"slsProjectArn"`
	// Property slsWriteRoleArn: The unique ARN of the Log Service role.
	SlsWriteRoleArn interface{} `field:"optional" json:"slsWriteRoleArn" yaml:"slsWriteRoleArn"`
}

