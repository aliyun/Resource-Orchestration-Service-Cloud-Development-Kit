package alicloudroscdkmobi


// Properties for defining a `RosApp`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mobi-app
type RosAppProps struct {
	AppIcon interface{} `field:"required" json:"appIcon" yaml:"appIcon"`
	AppName interface{} `field:"required" json:"appName" yaml:"appName"`
	AppWorkspaceId interface{} `field:"required" json:"appWorkspaceId" yaml:"appWorkspaceId"`
	Template interface{} `field:"required" json:"template" yaml:"template"`
	AppDescription interface{} `field:"optional" json:"appDescription" yaml:"appDescription"`
	AppType interface{} `field:"optional" json:"appType" yaml:"appType"`
}

