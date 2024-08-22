package alicloudroscdkcloudsso


// Properties for defining a `AccessConfigurationProvision`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-accessconfigurationprovision
type AccessConfigurationProvisionProps struct {
	// Property accessConfigurationId: The ID of the access configuration.
	AccessConfigurationId interface{} `field:"required" json:"accessConfigurationId" yaml:"accessConfigurationId"`
	// Property directoryId: The ID of the directory.
	DirectoryId interface{} `field:"required" json:"directoryId" yaml:"directoryId"`
	// Property targetId: The ID of the task object.
	TargetId interface{} `field:"required" json:"targetId" yaml:"targetId"`
	// Property targetType: The type of the task object.
	//
	// Set the value to RD-Account, which specifies the accounts in the resource directory.
	TargetType interface{} `field:"required" json:"targetType" yaml:"targetType"`
}

