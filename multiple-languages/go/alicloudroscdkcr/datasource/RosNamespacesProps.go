package datasource


// Properties for defining a `RosNamespaces`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cr-namespaces
type RosNamespacesProps struct {
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	Status interface{} `field:"optional" json:"status" yaml:"status"`
}

