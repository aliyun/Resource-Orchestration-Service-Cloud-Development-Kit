package datasource


// Properties for defining a `Rules`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-rules
type RulesProps struct {
	// Property listenerPort: The frontend listener port that is used by the Classic Load Balancer (CLB) instance.
	ListenerPort interface{} `field:"required" json:"listenerPort" yaml:"listenerPort"`
	// Property loadBalancerId: The ID of the CLB instance.
	LoadBalancerId interface{} `field:"required" json:"loadBalancerId" yaml:"loadBalancerId"`
	// Property listenerProtocol: The frontend listener protocol that is used by the SLB instance.
	ListenerProtocol interface{} `field:"optional" json:"listenerProtocol" yaml:"listenerProtocol"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

