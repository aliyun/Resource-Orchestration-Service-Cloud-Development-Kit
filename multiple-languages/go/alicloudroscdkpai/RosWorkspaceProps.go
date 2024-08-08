package alicloudroscdkpai


// Properties for defining a `RosWorkspace`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-workspace
type RosWorkspaceProps struct {
	Description interface{} `field:"required" json:"description" yaml:"description"`
	EnvTypes interface{} `field:"required" json:"envTypes" yaml:"envTypes"`
	WorkspaceName interface{} `field:"required" json:"workspaceName" yaml:"workspaceName"`
	DisplayName interface{} `field:"optional" json:"displayName" yaml:"displayName"`
}

