package datasource


// Properties for defining a `LoadBalancer`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-loadbalancer
type LoadBalancerProps struct {
	// Property loadBalancerId: The CLB instance ID.
	LoadBalancerId interface{} `field:"required" json:"loadBalancerId" yaml:"loadBalancerId"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

