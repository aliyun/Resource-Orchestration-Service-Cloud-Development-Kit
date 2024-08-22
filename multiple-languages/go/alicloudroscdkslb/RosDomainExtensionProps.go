package alicloudroscdkslb


// Properties for defining a `RosDomainExtension`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-slb-domainextension
type RosDomainExtensionProps struct {
	Domain interface{} `field:"required" json:"domain" yaml:"domain"`
	ListenerPort interface{} `field:"required" json:"listenerPort" yaml:"listenerPort"`
	LoadBalancerId interface{} `field:"required" json:"loadBalancerId" yaml:"loadBalancerId"`
	ServerCertificateId interface{} `field:"required" json:"serverCertificateId" yaml:"serverCertificateId"`
}

