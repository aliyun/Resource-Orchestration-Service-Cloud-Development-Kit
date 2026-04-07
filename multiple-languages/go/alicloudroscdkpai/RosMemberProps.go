package alicloudroscdkpai


// Properties for defining a `RosMember`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-member
type RosMemberProps struct {
	Roles interface{} `field:"required" json:"roles" yaml:"roles"`
	UserId interface{} `field:"required" json:"userId" yaml:"userId"`
	WorkspaceId interface{} `field:"required" json:"workspaceId" yaml:"workspaceId"`
}

