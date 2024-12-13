package alicloudroscdkmobi


// Properties for defining a `App`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mobi-app
type AppProps struct {
	// Property appIcon: Application icon label, The system provides an icon by default, which is given in the form of a label.
	//
	// The default value is -1.
	AppIcon interface{} `field:"required" json:"appIcon" yaml:"appIcon"`
	// Property appName: The application name.
	AppName interface{} `field:"required" json:"appName" yaml:"appName"`
	// Property appWorkspaceId: Workspace ID of application, The application belongs to the workspace.
	AppWorkspaceId interface{} `field:"required" json:"appWorkspaceId" yaml:"appWorkspaceId"`
	// Property template: Application Template.
	Template interface{} `field:"required" json:"template" yaml:"template"`
	// Property appDescription: Description of application.
	AppDescription interface{} `field:"optional" json:"appDescription" yaml:"appDescription"`
	// Property appType: The application type.
	//
	// Web applications and Copilot applications are supported.
	// - **Web**:Web application.
	// - **Copilot**:Copilot application.
	AppType interface{} `field:"optional" json:"appType" yaml:"appType"`
}

