package datasource


// Properties for defining a `RosWorkspaceResourceDlc`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pai-workspaceresourcedlc
type RosWorkspaceResourceDlcProps struct {
	GroupName interface{} `field:"required" json:"groupName" yaml:"groupName"`
	WorkspaceId interface{} `field:"required" json:"workspaceId" yaml:"workspaceId"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

