package datasource


// Properties for defining a `Routes`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-apig-routes
type RoutesProps struct {
	// Property httpApiId: HTTP API ID.
	HttpApiId interface{} `field:"required" json:"httpApiId" yaml:"httpApiId"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	// Property routeName: The name of the route.
	RouteName interface{} `field:"optional" json:"routeName" yaml:"routeName"`
}

