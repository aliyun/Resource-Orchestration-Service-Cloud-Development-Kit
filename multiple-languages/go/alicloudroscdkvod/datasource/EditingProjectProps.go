package datasource


// Properties for defining a `EditingProject`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vod-editingproject
type EditingProjectProps struct {
	// Property editingProjectId: The ID of the online editing project.
	EditingProjectId interface{} `field:"required" json:"editingProjectId" yaml:"editingProjectId"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

