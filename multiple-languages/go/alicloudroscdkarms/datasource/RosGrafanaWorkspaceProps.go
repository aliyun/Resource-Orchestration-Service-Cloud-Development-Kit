package datasource


// Properties for defining a `RosGrafanaWorkspace`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-arms-grafanaworkspace
type RosGrafanaWorkspaceProps struct {
	GrafanaWorkspaceId interface{} `field:"required" json:"grafanaWorkspaceId" yaml:"grafanaWorkspaceId"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

