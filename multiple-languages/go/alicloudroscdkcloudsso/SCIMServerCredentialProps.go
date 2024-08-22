package alicloudroscdkcloudsso


// Properties for defining a `SCIMServerCredential`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-scimservercredential
type SCIMServerCredentialProps struct {
	// Property directoryId: The ID of the directory.
	DirectoryId interface{} `field:"required" json:"directoryId" yaml:"directoryId"`
	// Property status: The new status of the SCIM credential.
	//
	// Valid values:
	// - Enabled: The SCIM credential is enabled.
	// - Disabled: The SCIM credential is disabled.
	// The default value is Enabled.
	Status interface{} `field:"optional" json:"status" yaml:"status"`
}

