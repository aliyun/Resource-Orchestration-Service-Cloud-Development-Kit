package datasource


// Properties for defining a `RosLoadBalancerTCPListeners`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-loadbalancertcplisteners
type RosLoadBalancerTCPListenersProps struct {
	LoadBalancerId interface{} `field:"required" json:"loadBalancerId" yaml:"loadBalancerId"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

