package alicloudroscdksae


// Properties for defining a `Ingress`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sae-ingress
type IngressProps struct {
	// Property defaultRule: The default forwarding rule.
	//
	// You can specify a port and an application in the default forwarding rule to forward traffic based on the IP address of the application.
	DefaultRule interface{} `field:"required" json:"defaultRule" yaml:"defaultRule"`
	// Property description: The name of the routing rule.
	Description interface{} `field:"required" json:"description" yaml:"description"`
	// Property listenerPort: The listener port of the SLB instance.
	//
	// You must specify a vacant port.
	ListenerPort interface{} `field:"required" json:"listenerPort" yaml:"listenerPort"`
	// Property namespaceId: The ID of the namespace to which the application belongs.
	//
	// You can specify only one namespace ID each time you call this operation.
	NamespaceId interface{} `field:"required" json:"namespaceId" yaml:"namespaceId"`
	// Property rules: The forwarding rules.
	//
	// You can specify a port and an application in a forwarding rule to forward traffic based on the specified domain name and request path.
	Rules interface{} `field:"required" json:"rules" yaml:"rules"`
	// Property slbId: The Server Load Balancer (SLB) instance that is used by the routing rule.
	SlbId interface{} `field:"required" json:"slbId" yaml:"slbId"`
	// Property certId: The ID of the certificate that is associated with the Classic Load Balancer (CLB) instance.
	//
	// If LoadBalanceType is set to clb, specify this parameter to configure a certificate for the HTTP listener.
	CertId interface{} `field:"optional" json:"certId" yaml:"certId"`
	// Property certIds: The IDs of the certificates that are associated with the Application Load Balancer (ALB) instance.
	CertIds interface{} `field:"optional" json:"certIds" yaml:"certIds"`
	// Property listenerProtocol: The protocol that is used to forward requests.
	ListenerProtocol interface{} `field:"optional" json:"listenerProtocol" yaml:"listenerProtocol"`
	// Property loadBalanceType: The type of the SLB instance based on the processing capabilities.
	//
	// The instance type can be specified only when you create a routing rule. You cannot change the instance type when you update the routing rule.
	LoadBalanceType interface{} `field:"optional" json:"loadBalanceType" yaml:"loadBalanceType"`
}

