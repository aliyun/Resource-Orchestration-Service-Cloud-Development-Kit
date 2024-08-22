package alicloudroscdkcloudsso


// Properties for defining a `RosAccessAssignment`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-accessassignment
type RosAccessAssignmentProps struct {
	AccessConfigurationId interface{} `field:"required" json:"accessConfigurationId" yaml:"accessConfigurationId"`
	DirectoryId interface{} `field:"required" json:"directoryId" yaml:"directoryId"`
	PrincipalId interface{} `field:"required" json:"principalId" yaml:"principalId"`
	PrincipalType interface{} `field:"required" json:"principalType" yaml:"principalType"`
	TargetId interface{} `field:"required" json:"targetId" yaml:"targetId"`
	TargetType interface{} `field:"required" json:"targetType" yaml:"targetType"`
}

