package datasource


// Properties for defining a `Route`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-apig-route
type RouteProps struct {
	// Property httpApiId: The ID of the HTTP API.
	HttpApiId interface{} `field:"required" json:"httpApiId" yaml:"httpApiId"`
	// Property routeId: The ID of route resource.
	RouteId interface{} `field:"required" json:"routeId" yaml:"routeId"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

