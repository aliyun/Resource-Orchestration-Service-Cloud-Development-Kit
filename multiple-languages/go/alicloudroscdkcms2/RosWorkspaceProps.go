package alicloudroscdkcms2


// Properties for defining a `RosWorkspace`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms2-workspace
type RosWorkspaceProps struct {
	SlsProject interface{} `field:"required" json:"slsProject" yaml:"slsProject"`
	WorkspaceName interface{} `field:"required" json:"workspaceName" yaml:"workspaceName"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	DisplayName interface{} `field:"optional" json:"displayName" yaml:"displayName"`
}

