package datasource


// Properties for defining a `Template`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-oos-template
type TemplateProps struct {
	// Property templateName: The name of the template.
	TemplateName interface{} `field:"required" json:"templateName" yaml:"templateName"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	// Property templateVersion: The version of the template.
	//
	// The default value is the latest version of the template.Format: "v" + number. Value range: v1-v200.
	TemplateVersion interface{} `field:"optional" json:"templateVersion" yaml:"templateVersion"`
}

