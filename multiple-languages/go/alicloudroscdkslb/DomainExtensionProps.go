package alicloudroscdkslb


// Properties for defining a `DomainExtension`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-slb-domainextension
type DomainExtensionProps struct {
	// Property domain: The domain name.
	Domain interface{} `field:"required" json:"domain" yaml:"domain"`
	// Property listenerPort: The front-end HTTPS listener port of the Server Load Balancer instance.
	//
	// Valid value:
	// 1-65535.
	ListenerPort interface{} `field:"required" json:"listenerPort" yaml:"listenerPort"`
	// Property loadBalancerId: The ID of Server Load Balancer instance.
	LoadBalancerId interface{} `field:"required" json:"loadBalancerId" yaml:"loadBalancerId"`
	// Property serverCertificateId: The ID of the certificate corresponding to the domain name.
	ServerCertificateId interface{} `field:"required" json:"serverCertificateId" yaml:"serverCertificateId"`
}

