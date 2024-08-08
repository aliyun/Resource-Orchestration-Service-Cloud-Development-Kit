package alicloudroscdkcloudsso


// Properties for defining a `RosUserProvision`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-userprovision
type RosUserProvisionProps struct {
	DeletionStrategy interface{} `field:"required" json:"deletionStrategy" yaml:"deletionStrategy"`
	DirectoryId interface{} `field:"required" json:"directoryId" yaml:"directoryId"`
	DuplicationStrategy interface{} `field:"required" json:"duplicationStrategy" yaml:"duplicationStrategy"`
	PrincipalId interface{} `field:"required" json:"principalId" yaml:"principalId"`
	PrincipalType interface{} `field:"required" json:"principalType" yaml:"principalType"`
	TargetId interface{} `field:"required" json:"targetId" yaml:"targetId"`
	TargetType interface{} `field:"required" json:"targetType" yaml:"targetType"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
}

