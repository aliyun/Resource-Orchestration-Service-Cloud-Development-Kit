package alicloudroscdkactiontrail


// Properties for defining a `RosTrail`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-actiontrail-trail
type RosTrailProps struct {
	Name interface{} `field:"required" json:"name" yaml:"name"`
	EventRw interface{} `field:"optional" json:"eventRw" yaml:"eventRw"`
	OssBucketName interface{} `field:"optional" json:"ossBucketName" yaml:"ossBucketName"`
	OssKeyPrefix interface{} `field:"optional" json:"ossKeyPrefix" yaml:"ossKeyPrefix"`
	RoleName interface{} `field:"optional" json:"roleName" yaml:"roleName"`
	SlsProjectArn interface{} `field:"optional" json:"slsProjectArn" yaml:"slsProjectArn"`
	SlsWriteRoleArn interface{} `field:"optional" json:"slsWriteRoleArn" yaml:"slsWriteRoleArn"`
}

