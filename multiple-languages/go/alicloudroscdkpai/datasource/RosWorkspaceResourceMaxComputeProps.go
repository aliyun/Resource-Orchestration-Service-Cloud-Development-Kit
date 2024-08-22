package datasource


// Properties for defining a `RosWorkspaceResourceMaxCompute`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pai-workspaceresourcemaxcompute
type RosWorkspaceResourceMaxComputeProps struct {
	GroupName interface{} `field:"required" json:"groupName" yaml:"groupName"`
	WorkspaceId interface{} `field:"required" json:"workspaceId" yaml:"workspaceId"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

