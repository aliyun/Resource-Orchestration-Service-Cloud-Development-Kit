package alicloudroscdkalb


// Properties for defining a `AccessLogEnable`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-alb-accesslogenable
type AccessLogEnableProps struct {
	// Property loadBalancerId: The ID of the ALB instance.
	LoadBalancerId interface{} `field:"required" json:"loadBalancerId" yaml:"loadBalancerId"`
	// Property logProject: The name of the LogHub project.
	LogProject interface{} `field:"required" json:"logProject" yaml:"logProject"`
	// Property logStore: The name of the LogHub logstore.
	LogStore interface{} `field:"required" json:"logStore" yaml:"logStore"`
}

