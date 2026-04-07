package alicloudroscdkalb


// Properties for defining a `RosZoneShift`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-alb-zoneshift
type RosZoneShiftProps struct {
	LoadBalancerId interface{} `field:"required" json:"loadBalancerId" yaml:"loadBalancerId"`
	ZoneMappings interface{} `field:"required" json:"zoneMappings" yaml:"zoneMappings"`
}

