package datasource


// Properties for defining a `GrafanaWorkspace`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-arms-grafanaworkspace
type GrafanaWorkspaceProps struct {
	// Property grafanaWorkspaceId: The first ID of the resource.
	GrafanaWorkspaceId interface{} `field:"required" json:"grafanaWorkspaceId" yaml:"grafanaWorkspaceId"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

