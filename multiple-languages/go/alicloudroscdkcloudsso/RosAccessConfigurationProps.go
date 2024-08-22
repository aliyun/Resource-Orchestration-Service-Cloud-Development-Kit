package alicloudroscdkcloudsso


// Properties for defining a `RosAccessConfiguration`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-accessconfiguration
type RosAccessConfigurationProps struct {
	AccessConfigurationName interface{} `field:"required" json:"accessConfigurationName" yaml:"accessConfigurationName"`
	DirectoryId interface{} `field:"required" json:"directoryId" yaml:"directoryId"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	RelayState interface{} `field:"optional" json:"relayState" yaml:"relayState"`
	SessionDuration interface{} `field:"optional" json:"sessionDuration" yaml:"sessionDuration"`
}

