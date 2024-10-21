package datasource


// Properties for defining a `RosLoadBalancer`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-loadbalancer
type RosLoadBalancerProps struct {
	LoadBalancerId interface{} `field:"required" json:"loadBalancerId" yaml:"loadBalancerId"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

