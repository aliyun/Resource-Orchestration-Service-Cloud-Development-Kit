package alicloudroscdkcloudsso


// Properties for defining a `AccessAssignment`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-accessassignment
type AccessAssignmentProps struct {
	// Property accessConfigurationId: The ID of the access configuration.
	AccessConfigurationId interface{} `field:"required" json:"accessConfigurationId" yaml:"accessConfigurationId"`
	// Property directoryId: The ID of the directory.
	DirectoryId interface{} `field:"required" json:"directoryId" yaml:"directoryId"`
	// Property principalId: The ID of the CloudSSO identity.
	//
	// - If you set PrincipalType to User, set PrincipalId to the ID of the CloudSSO user.
	// - If you set PrincipalType to Group, set PrincipalId to the ID of the CloudSSO group.
	PrincipalId interface{} `field:"required" json:"principalId" yaml:"principalId"`
	// Property principalType: The type of the CloudSSO identity.
	//
	// Valid values: User, Group.
	PrincipalType interface{} `field:"required" json:"principalType" yaml:"principalType"`
	// Property targetId: The ID of the task object.
	TargetId interface{} `field:"required" json:"targetId" yaml:"targetId"`
	// Property targetType: The type of the task object.
	//
	// Set the value to RD-Account, which specifies the accounts in the resource directory.
	TargetType interface{} `field:"required" json:"targetType" yaml:"targetType"`
}

