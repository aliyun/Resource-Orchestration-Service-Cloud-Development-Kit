package datasource


// Properties for defining a `RosRoutes`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-apig-routes
type RosRoutesProps struct {
	HttpApiId interface{} `field:"required" json:"httpApiId" yaml:"httpApiId"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	RouteName interface{} `field:"optional" json:"routeName" yaml:"routeName"`
}

