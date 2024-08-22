package alicloudroscdkvod


// Properties for defining a `Storage`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vod-storage
type StorageProps struct {
	// Property storageLocation: Storage address.
	StorageLocation interface{} `field:"required" json:"storageLocation" yaml:"storageLocation"`
	// Property storageType: Storage Type.
	StorageType interface{} `field:"required" json:"storageType" yaml:"storageType"`
	// Property defaultUpload: Whether to upload by default.
	DefaultUpload interface{} `field:"optional" json:"defaultUpload" yaml:"defaultUpload"`
}

