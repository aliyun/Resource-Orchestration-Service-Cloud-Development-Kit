package alicloudroscdkpai


// Properties for defining a `RosWorkspaceResource`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-workspaceresource
type RosWorkspaceResourceProps struct {
	EnvType interface{} `field:"required" json:"envType" yaml:"envType"`
	ResourceType interface{} `field:"required" json:"resourceType" yaml:"resourceType"`
	WorkspaceId interface{} `field:"required" json:"workspaceId" yaml:"workspaceId"`
	WorkspaceResourceName interface{} `field:"required" json:"workspaceResourceName" yaml:"workspaceResourceName"`
	GroupName interface{} `field:"optional" json:"groupName" yaml:"groupName"`
	IsDefault interface{} `field:"optional" json:"isDefault" yaml:"isDefault"`
	Spec interface{} `field:"optional" json:"spec" yaml:"spec"`
}

