package alicloudroscdkesa


// Properties for defining a `RoutineRoute`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-routineroute
type RoutineRouteProps struct {
	// Property routineName: The edge function Routine name.
	RoutineName interface{} `field:"required" json:"routineName" yaml:"routineName"`
	// Property siteId: The website ID.
	SiteId interface{} `field:"required" json:"siteId" yaml:"siteId"`
	// Property bypass: Bypass mode.
	//
	// Value range:
	// - on: Open
	// - off: off.
	Bypass interface{} `field:"optional" json:"bypass" yaml:"bypass"`
	// Property fallback: The exception origin fetch switch.
	//
	// After you turn on this switch, if a function exception occurs, such as CPU usage exceeding the upper limit, requests are sent back to the origin. Valid values:
	// on
	// off.
	Fallback interface{} `field:"optional" json:"fallback" yaml:"fallback"`
	// Property routeEnable: Routing switch.
	//
	// Value range:
	// - on: Open
	// - off: off.
	RouteEnable interface{} `field:"optional" json:"routeEnable" yaml:"routeEnable"`
	// Property routeName: The name of the route.
	RouteName interface{} `field:"optional" json:"routeName" yaml:"routeName"`
	// Property rule: The content of the rule.
	Rule interface{} `field:"optional" json:"rule" yaml:"rule"`
	// Property sequence: Rule execution order.
	Sequence interface{} `field:"optional" json:"sequence" yaml:"sequence"`
}

