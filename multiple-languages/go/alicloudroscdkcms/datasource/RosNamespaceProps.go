package datasource


// Properties for defining a `RosNamespace`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cms-namespace
type RosNamespaceProps struct {
	Namespace interface{} `field:"required" json:"namespace" yaml:"namespace"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

