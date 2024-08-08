package alicloudroscdkfc


type RosService_OssMountConfigMountPointsProperty struct {
	BucketName interface{} `field:"required" json:"bucketName" yaml:"bucketName"`
	BucketPath interface{} `field:"required" json:"bucketPath" yaml:"bucketPath"`
	EndPoint interface{} `field:"required" json:"endPoint" yaml:"endPoint"`
	MountDir interface{} `field:"required" json:"mountDir" yaml:"mountDir"`
	ReadOnly interface{} `field:"required" json:"readOnly" yaml:"readOnly"`
}

