package alicloudroscdkesa


// Properties for defining a `RosRoutineRoute`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-routineroute
type RosRoutineRouteProps struct {
	RoutineName interface{} `field:"required" json:"routineName" yaml:"routineName"`
	SiteId interface{} `field:"required" json:"siteId" yaml:"siteId"`
	Bypass interface{} `field:"optional" json:"bypass" yaml:"bypass"`
	Fallback interface{} `field:"optional" json:"fallback" yaml:"fallback"`
	RouteEnable interface{} `field:"optional" json:"routeEnable" yaml:"routeEnable"`
	RouteName interface{} `field:"optional" json:"routeName" yaml:"routeName"`
	Rule interface{} `field:"optional" json:"rule" yaml:"rule"`
	Sequence interface{} `field:"optional" json:"sequence" yaml:"sequence"`
}

