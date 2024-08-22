package alicloudroscdkcloudsso


// Properties for defining a `RosSCIMSynchronization`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-scimsynchronization
type RosSCIMSynchronizationProps struct {
	DirectoryId interface{} `field:"required" json:"directoryId" yaml:"directoryId"`
	ScimSynchronizationStatus interface{} `field:"optional" json:"scimSynchronizationStatus" yaml:"scimSynchronizationStatus"`
}

