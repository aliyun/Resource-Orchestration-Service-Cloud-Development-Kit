package datasource


// Properties for defining a `FlowProjects`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-emr-flowprojects
type FlowProjectsProps struct {
	// Property flowProjectId: The first ID of the resource.
	FlowProjectId interface{} `field:"optional" json:"flowProjectId" yaml:"flowProjectId"`
	// Property flowProjectName: Project name.
	FlowProjectName interface{} `field:"optional" json:"flowProjectName" yaml:"flowProjectName"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

