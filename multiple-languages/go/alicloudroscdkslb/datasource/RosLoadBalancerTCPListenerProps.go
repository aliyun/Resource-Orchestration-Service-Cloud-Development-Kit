package datasource


// Properties for defining a `RosLoadBalancerTCPListener`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-loadbalancertcplistener
type RosLoadBalancerTCPListenerProps struct {
	ListenerPort interface{} `field:"required" json:"listenerPort" yaml:"listenerPort"`
	LoadBalancerId interface{} `field:"required" json:"loadBalancerId" yaml:"loadBalancerId"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

