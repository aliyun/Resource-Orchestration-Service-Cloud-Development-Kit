package datasource


// Properties for defining a `DomainExtensions`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-domainextensions
type DomainExtensionsProps struct {
	// Property listenerPort: The frontend port of the HTTPS listener that is configured for the Classic Load Balancer (CLB) instance.
	//
	// Valid values: 1 to 65535.
	ListenerPort interface{} `field:"required" json:"listenerPort" yaml:"listenerPort"`
	// Property loadBalancerId: The ID of the CLB instance.
	LoadBalancerId interface{} `field:"required" json:"loadBalancerId" yaml:"loadBalancerId"`
	// Property domainExtensionId: The ID of the additional certificate.
	DomainExtensionId interface{} `field:"optional" json:"domainExtensionId" yaml:"domainExtensionId"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

