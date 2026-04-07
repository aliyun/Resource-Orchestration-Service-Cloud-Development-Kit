package alicloudroscdkpai


// Properties for defining a `Member`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-member
type MemberProps struct {
	// Property roles: The list of roles.
	Roles interface{} `field:"required" json:"roles" yaml:"roles"`
	// Property userId: User ID.
	UserId interface{} `field:"required" json:"userId" yaml:"userId"`
	// Property workspaceId: Workspace ID.
	WorkspaceId interface{} `field:"required" json:"workspaceId" yaml:"workspaceId"`
}

