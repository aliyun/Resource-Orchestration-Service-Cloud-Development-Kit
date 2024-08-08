package datasource


// Properties for defining a `Dataset`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pai-dataset
type DatasetProps struct {
	// Property datasetId: The first ID of the resource.
	DatasetId interface{} `field:"required" json:"datasetId" yaml:"datasetId"`
	// Property workspaceId: The ID of the workspace where the dataset is located.
	//
	// For details about how to obtain the workspace ID, see [ListWorkspaces].
	// If this parameter is not configured, the default workspace is used. If the default workspace does not exist, an error is reported.
	WorkspaceId interface{} `field:"required" json:"workspaceId" yaml:"workspaceId"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

