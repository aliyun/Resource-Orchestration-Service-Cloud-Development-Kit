package datasource


// Properties for defining a `RosDomainExtensions`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-domainextensions
type RosDomainExtensionsProps struct {
	ListenerPort interface{} `field:"required" json:"listenerPort" yaml:"listenerPort"`
	LoadBalancerId interface{} `field:"required" json:"loadBalancerId" yaml:"loadBalancerId"`
	DomainExtensionId interface{} `field:"optional" json:"domainExtensionId" yaml:"domainExtensionId"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

