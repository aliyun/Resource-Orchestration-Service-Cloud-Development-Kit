package datasource


// Properties for defining a `LoadBalancer`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-nlb-loadbalancer
type LoadBalancerProps struct {
	// Property loadBalancerId: ID of the LoadBalancer.
	LoadBalancerId interface{} `field:"optional" json:"loadBalancerId" yaml:"loadBalancerId"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

