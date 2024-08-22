package datasource


// Properties for defining a `RosWorkspaceResourceFlink`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pai-workspaceresourceflink
type RosWorkspaceResourceFlinkProps struct {
	GroupName interface{} `field:"required" json:"groupName" yaml:"groupName"`
	WorkspaceId interface{} `field:"required" json:"workspaceId" yaml:"workspaceId"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

