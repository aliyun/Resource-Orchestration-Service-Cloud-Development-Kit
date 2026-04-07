package alicloudroscdkalb


// Properties for defining a `RosAccessLogEnable`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-alb-accesslogenable
type RosAccessLogEnableProps struct {
	LoadBalancerId interface{} `field:"required" json:"loadBalancerId" yaml:"loadBalancerId"`
	LogProject interface{} `field:"required" json:"logProject" yaml:"logProject"`
	LogStore interface{} `field:"required" json:"logStore" yaml:"logStore"`
}

