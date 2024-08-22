package alicloudroscdkcloudsso


// Properties for defining a `RosAccessConfigurationProvision`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-accessconfigurationprovision
type RosAccessConfigurationProvisionProps struct {
	AccessConfigurationId interface{} `field:"required" json:"accessConfigurationId" yaml:"accessConfigurationId"`
	DirectoryId interface{} `field:"required" json:"directoryId" yaml:"directoryId"`
	TargetId interface{} `field:"required" json:"targetId" yaml:"targetId"`
	TargetType interface{} `field:"required" json:"targetType" yaml:"targetType"`
}

