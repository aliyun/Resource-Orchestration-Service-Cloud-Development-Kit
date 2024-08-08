package datasource


// Properties for defining a `CenInstances`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cen-ceninstances
type CenInstancesProps struct {
	// Property filter: Filter value when querying resources.
	Filter interface{} `field:"optional" json:"filter" yaml:"filter"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

