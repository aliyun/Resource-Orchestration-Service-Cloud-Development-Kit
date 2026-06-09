package datasource


// Properties for defining a `Application`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-bpstudio-application
type ApplicationProps struct {
	// Property applicationId: The first ID of the resource.
	ApplicationId interface{} `field:"required" json:"applicationId" yaml:"applicationId"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

