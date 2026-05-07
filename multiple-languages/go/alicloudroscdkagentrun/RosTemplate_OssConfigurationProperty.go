package alicloudroscdkagentrun


type RosTemplate_OssConfigurationProperty struct {
	BucketName interface{} `field:"required" json:"bucketName" yaml:"bucketName"`
	MountPoint interface{} `field:"required" json:"mountPoint" yaml:"mountPoint"`
	Permission interface{} `field:"required" json:"permission" yaml:"permission"`
	Prefix interface{} `field:"required" json:"prefix" yaml:"prefix"`
	Region interface{} `field:"required" json:"region" yaml:"region"`
}

