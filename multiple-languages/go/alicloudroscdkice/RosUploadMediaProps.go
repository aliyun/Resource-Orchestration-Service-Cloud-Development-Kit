package alicloudroscdkice


// Properties for defining a `RosUploadMedia`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ice-uploadmedia
type RosUploadMediaProps struct {
	AppId interface{} `field:"optional" json:"appId" yaml:"appId"`
	EntityId interface{} `field:"optional" json:"entityId" yaml:"entityId"`
	FileInfo interface{} `field:"optional" json:"fileInfo" yaml:"fileInfo"`
	MediaMetaData interface{} `field:"optional" json:"mediaMetaData" yaml:"mediaMetaData"`
	PostProcessConfig interface{} `field:"optional" json:"postProcessConfig" yaml:"postProcessConfig"`
	UploadTargetConfig interface{} `field:"optional" json:"uploadTargetConfig" yaml:"uploadTargetConfig"`
	UserData interface{} `field:"optional" json:"userData" yaml:"userData"`
}

