package datasource


// Properties for defining a `RosRoute`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-apig-route
type RosRouteProps struct {
	HttpApiId interface{} `field:"required" json:"httpApiId" yaml:"httpApiId"`
	RouteId interface{} `field:"required" json:"routeId" yaml:"routeId"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

