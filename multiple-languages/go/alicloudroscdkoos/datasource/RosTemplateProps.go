package datasource


// Properties for defining a `RosTemplate`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-oos-template
type RosTemplateProps struct {
	TemplateName interface{} `field:"required" json:"templateName" yaml:"templateName"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	TemplateVersion interface{} `field:"optional" json:"templateVersion" yaml:"templateVersion"`
}

