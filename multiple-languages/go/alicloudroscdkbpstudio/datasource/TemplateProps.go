package datasource


// Properties for defining a `Template`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-bpstudio-template
type TemplateProps struct {
	// Property templateId: The first ID of the resource.
	TemplateId interface{} `field:"required" json:"templateId" yaml:"templateId"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

