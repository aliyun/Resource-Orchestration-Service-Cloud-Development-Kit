package alicloudroscdkvod


// Properties for defining a `RosStorage`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vod-storage
type RosStorageProps struct {
	StorageLocation interface{} `field:"required" json:"storageLocation" yaml:"storageLocation"`
	StorageType interface{} `field:"required" json:"storageType" yaml:"storageType"`
	DefaultUpload interface{} `field:"optional" json:"defaultUpload" yaml:"defaultUpload"`
}

