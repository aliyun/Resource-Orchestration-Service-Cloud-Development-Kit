package datasource


// Properties for defining a `RosGrafanaWorkspaces`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-arms-grafanaworkspaces
type RosGrafanaWorkspacesProps struct {
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
}

