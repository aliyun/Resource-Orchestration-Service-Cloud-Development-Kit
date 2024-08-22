package datasource


// Properties for defining a `RosWorkspaceResourceFlinks`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pai-workspaceresourceflinks
type RosWorkspaceResourceFlinksProps struct {
	WorkspaceId interface{} `field:"required" json:"workspaceId" yaml:"workspaceId"`
	GroupName interface{} `field:"optional" json:"groupName" yaml:"groupName"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

