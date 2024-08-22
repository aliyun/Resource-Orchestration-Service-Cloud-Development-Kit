package alicloudroscdkcloudsso


// Properties for defining a `SCIMSynchronization`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-scimsynchronization
type SCIMSynchronizationProps struct {
	// Property directoryId: The ID of the directory.
	DirectoryId interface{} `field:"required" json:"directoryId" yaml:"directoryId"`
	// Property scimSynchronizationStatus: The status of SCIM synchronization.
	//
	// Valid values:
	// - Enabled
	// - Disabled
	// The default value is Enabled.
	ScimSynchronizationStatus interface{} `field:"optional" json:"scimSynchronizationStatus" yaml:"scimSynchronizationStatus"`
}

