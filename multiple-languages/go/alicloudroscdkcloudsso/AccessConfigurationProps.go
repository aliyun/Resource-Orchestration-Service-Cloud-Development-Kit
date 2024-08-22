package alicloudroscdkcloudsso


// Properties for defining a `AccessConfiguration`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-accessconfiguration
type AccessConfigurationProps struct {
	// Property accessConfigurationName: The name of the access configuration.
	//
	// The name can contain letters, digits, and hyphens (-).
	// The name can be up to 32 characters in length.
	AccessConfigurationName interface{} `field:"required" json:"accessConfigurationName" yaml:"accessConfigurationName"`
	// Property directoryId: The ID of the directory.
	DirectoryId interface{} `field:"required" json:"directoryId" yaml:"directoryId"`
	// Property description: The description of the access configuration.
	//
	// The description can be up to 1,024 characters in length.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property relayState: The initial web page that is displayed after a CloudSSO user accesses an account in your resource directory by using the access configuration.
	//
	// The web page must be a page of the Alibaba Cloud Management Console. By default, this parameter is empty, which indicates that the initial web page is the homepage of the Alibaba Cloud Management Console.
	RelayState interface{} `field:"optional" json:"relayState" yaml:"relayState"`
	// Property sessionDuration: The duration of a session in which a CloudSSO user accesses an account in your resource directory by using the access configuration.
	//
	// Unit: seconds.
	// Valid values: 900 to 43200. The value 900 indicates 15 minutes. The value 43200 indicates 12 hours.
	// Default value: 3600. The value indicates 1 hour.
	SessionDuration interface{} `field:"optional" json:"sessionDuration" yaml:"sessionDuration"`
}

