package datasource


// Properties for defining a `EditingProjects`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vod-editingprojects
type EditingProjectsProps struct {
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	// Property title: The title of the online editing project.
	Title interface{} `field:"optional" json:"title" yaml:"title"`
}

