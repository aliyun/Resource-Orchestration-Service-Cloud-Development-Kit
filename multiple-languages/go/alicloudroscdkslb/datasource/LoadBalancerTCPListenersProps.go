package datasource


// Properties for defining a `LoadBalancerTCPListeners`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-loadbalancertcplisteners
type LoadBalancerTCPListenersProps struct {
	// Property loadBalancerId: The ID of the CLB instance.
	LoadBalancerId interface{} `field:"required" json:"loadBalancerId" yaml:"loadBalancerId"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

