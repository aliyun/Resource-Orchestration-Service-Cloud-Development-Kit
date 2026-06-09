package datasource


// Properties for defining a `RosApplication`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-bpstudio-application
type RosApplicationProps struct {
	ApplicationId interface{} `field:"required" json:"applicationId" yaml:"applicationId"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

