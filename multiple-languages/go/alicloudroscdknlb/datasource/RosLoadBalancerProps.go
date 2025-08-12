package datasource


// Properties for defining a `RosLoadBalancer`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-nlb-loadbalancer
type RosLoadBalancerProps struct {
	LoadBalancerId interface{} `field:"optional" json:"loadBalancerId" yaml:"loadBalancerId"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

