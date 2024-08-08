package alicloudroscdkpai


type RosWorkspaceResourceDlc_ResourcesProperty struct {
	EnvType interface{} `field:"required" json:"envType" yaml:"envType"`
	WorkspaceResourceName interface{} `field:"required" json:"workspaceResourceName" yaml:"workspaceResourceName"`
	WorkspaceResourceWorkspaceId interface{} `field:"required" json:"workspaceResourceWorkspaceId" yaml:"workspaceResourceWorkspaceId"`
	Spec interface{} `field:"optional" json:"spec" yaml:"spec"`
}

