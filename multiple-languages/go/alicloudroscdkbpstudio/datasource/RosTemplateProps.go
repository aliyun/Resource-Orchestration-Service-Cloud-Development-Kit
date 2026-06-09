package datasource


// Properties for defining a `RosTemplate`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-bpstudio-template
type RosTemplateProps struct {
	TemplateId interface{} `field:"required" json:"templateId" yaml:"templateId"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

