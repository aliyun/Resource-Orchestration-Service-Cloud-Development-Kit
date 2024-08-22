package datasource


// Properties for defining a `RosWorkspaceResourceMaxComputes`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pai-workspaceresourcemaxcomputes
type RosWorkspaceResourceMaxComputesProps struct {
	WorkspaceId interface{} `field:"required" json:"workspaceId" yaml:"workspaceId"`
	GroupName interface{} `field:"optional" json:"groupName" yaml:"groupName"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

