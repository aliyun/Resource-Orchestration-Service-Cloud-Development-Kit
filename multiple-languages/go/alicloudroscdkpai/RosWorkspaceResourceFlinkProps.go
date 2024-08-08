package alicloudroscdkpai


// Properties for defining a `RosWorkspaceResourceFlink`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-workspaceresourceflink
type RosWorkspaceResourceFlinkProps struct {
	GroupName interface{} `field:"required" json:"groupName" yaml:"groupName"`
	Resources interface{} `field:"required" json:"resources" yaml:"resources"`
	WorkspaceId interface{} `field:"required" json:"workspaceId" yaml:"workspaceId"`
	IsDefault interface{} `field:"optional" json:"isDefault" yaml:"isDefault"`
	Option interface{} `field:"optional" json:"option" yaml:"option"`
}

