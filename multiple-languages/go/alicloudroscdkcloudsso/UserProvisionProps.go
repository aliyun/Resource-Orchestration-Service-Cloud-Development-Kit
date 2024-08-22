package alicloudroscdkcloudsso


// Properties for defining a `UserProvision`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-userprovision
type UserProvisionProps struct {
	// Property deletionStrategy: Delete policy.
	//
	// The treatment strategy for the synchronized RAM users when the RAM user synchronization is removed. Valid values:
	// - Delete: Delete When the RAM user synchronization is removed, the RAM users that have been synchronized to the RAM from the cloud SSO are deleted.
	// - Keep: When the RAM user synchronization is removed, the RAM users that have been synchronized to the RAM from the cloud SSO are retained.
	DeletionStrategy interface{} `field:"required" json:"deletionStrategy" yaml:"deletionStrategy"`
	// Property directoryId: The ID of the directory.
	DirectoryId interface{} `field:"required" json:"directoryId" yaml:"directoryId"`
	// Property duplicationStrategy: Conflict policy.
	//
	// When the cloud SSO user is synchronized to the RAM, the processing strategy if there is a user with the same name in the RAM. Valid values:
	// - KeepBoth: Keep both of them. When the cloud SSO user is synchronized to RAM, if the RAM already has a user with the same name, it will try to create a RAM user with the user name after adding the suffix _sso to the user name of the cloud SSO user.
	// - TakeOver: Take over. When the cloud SSO user is synchronized to the RAM, if the RAM already has a user with the same name, the existing RAM user is directly replaced by the cloud SSO synchronization user.
	DuplicationStrategy interface{} `field:"required" json:"duplicationStrategy" yaml:"duplicationStrategy"`
	// Property principalId: The ID of the principal.
	//
	// Valid values:
	// - When the PrincipalType value is Group, the value is the cloud SSO user group ID (g-********).
	// - When PrincipalType takes the value User, this value is the cloud SSO user ID (u-********).
	PrincipalId interface{} `field:"required" json:"principalId" yaml:"principalId"`
	// Property principalType: The type of the principal.
	//
	// Valid values:
	// - User: The principal is a cloud SSO user.
	// - Group: The principal is a cloud SSO group.
	PrincipalType interface{} `field:"required" json:"principalType" yaml:"principalType"`
	// Property targetId: Target ID for RAM user synchronization.
	//
	// Currently, it is the RD account ID.
	TargetId interface{} `field:"required" json:"targetId" yaml:"targetId"`
	// Property targetType: Target type for RAM user synchronization.
	//
	// Currently, it is RD-Account.
	TargetType interface{} `field:"required" json:"targetType" yaml:"targetType"`
	// Property description: The description of the user.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
}

