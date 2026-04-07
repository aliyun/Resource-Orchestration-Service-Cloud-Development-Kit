package alicloudroscdkalb


// Properties for defining a `StartZone`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-alb-startzone
type StartZoneProps struct {
	// Property loadBalancerId: The ID of the ALB instance.
	LoadBalancerId interface{} `field:"required" json:"loadBalancerId" yaml:"loadBalancerId"`
	// Property zoneMappings: The list of zone mappings.
	//
	// Each element contains VSwitchId and ZoneId.
	ZoneMappings interface{} `field:"required" json:"zoneMappings" yaml:"zoneMappings"`
}

