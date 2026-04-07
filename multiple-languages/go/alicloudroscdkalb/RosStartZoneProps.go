package alicloudroscdkalb


// Properties for defining a `RosStartZone`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-alb-startzone
type RosStartZoneProps struct {
	LoadBalancerId interface{} `field:"required" json:"loadBalancerId" yaml:"loadBalancerId"`
	ZoneMappings interface{} `field:"required" json:"zoneMappings" yaml:"zoneMappings"`
}

