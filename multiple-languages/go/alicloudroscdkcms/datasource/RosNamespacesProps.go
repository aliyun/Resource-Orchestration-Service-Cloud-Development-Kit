package datasource


// Properties for defining a `RosNamespaces`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cms-namespaces
type RosNamespacesProps struct {
	Namespace interface{} `field:"optional" json:"namespace" yaml:"namespace"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

