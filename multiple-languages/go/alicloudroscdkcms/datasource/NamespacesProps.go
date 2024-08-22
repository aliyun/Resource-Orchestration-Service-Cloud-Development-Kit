package datasource


// Properties for defining a `Namespaces`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cms-namespaces
type NamespacesProps struct {
	// Property namespace: Indicator warehouse name.
	Namespace interface{} `field:"optional" json:"namespace" yaml:"namespace"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

