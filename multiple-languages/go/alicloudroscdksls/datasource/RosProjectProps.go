package datasource


// Properties for defining a `RosProject`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-sls-project
type RosProjectProps struct {
	ProjectName interface{} `field:"required" json:"projectName" yaml:"projectName"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

