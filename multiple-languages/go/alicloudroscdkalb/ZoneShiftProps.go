package alicloudroscdkalb


// Properties for defining a `ZoneShift`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-alb-zoneshift
type ZoneShiftProps struct {
	// Property loadBalancerId: The ID of the load balancer.
	LoadBalancerId interface{} `field:"required" json:"loadBalancerId" yaml:"loadBalancerId"`
	// Property zoneMappings: The list of zone mappings.
	//
	// Each element contains VSwitchId and ZoneId.
	ZoneMappings interface{} `field:"required" json:"zoneMappings" yaml:"zoneMappings"`
}

