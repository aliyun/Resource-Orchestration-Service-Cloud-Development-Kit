package alicloudroscdknlb


// Properties for defining a `Listener`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nlb-listener
type ListenerProps struct {
	// Property listenerProtocol: undefined.
	ListenerProtocol interface{} `field:"required" json:"listenerProtocol" yaml:"listenerProtocol"`
	// Property loadBalancerId: ID of the LoadBalancer.
	LoadBalancerId interface{} `field:"required" json:"loadBalancerId" yaml:"loadBalancerId"`
	// Property serverGroupId: ID of the ServerGroup.
	ServerGroupId interface{} `field:"required" json:"serverGroupId" yaml:"serverGroupId"`
	// Property alpnEnabled: undefined.
	AlpnEnabled interface{} `field:"optional" json:"alpnEnabled" yaml:"alpnEnabled"`
	// Property alpnPolicy: Proxy of alpn.
	AlpnPolicy interface{} `field:"optional" json:"alpnPolicy" yaml:"alpnPolicy"`
	// Property caCertificateIds: List of the ca certificate ids.
	CaCertificateIds interface{} `field:"optional" json:"caCertificateIds" yaml:"caCertificateIds"`
	// Property caEnabled: Whether to open CA.
	CaEnabled interface{} `field:"optional" json:"caEnabled" yaml:"caEnabled"`
	// Property certificateIds: List of the certificate ids.
	CertificateIds interface{} `field:"optional" json:"certificateIds" yaml:"certificateIds"`
	// Property cps: New connection rate limit of Instance.
	Cps interface{} `field:"optional" json:"cps" yaml:"cps"`
	// Property enable: Whether to start listener or not.
	//
	// Default True.
	Enable interface{} `field:"optional" json:"enable" yaml:"enable"`
	// Property endPort: EndPort of the portRange.
	EndPort interface{} `field:"optional" json:"endPort" yaml:"endPort"`
	// Property idleTimeout: Specifies the connection idle timeout.
	IdleTimeout interface{} `field:"optional" json:"idleTimeout" yaml:"idleTimeout"`
	// Property listenerDescription: Description of the listener, [2, 256] characters.
	ListenerDescription interface{} `field:"optional" json:"listenerDescription" yaml:"listenerDescription"`
	// Property listenerPort: Port of the listener,[0, 65535] the portRange setting need 0.
	ListenerPort interface{} `field:"optional" json:"listenerPort" yaml:"listenerPort"`
	// Property mss: Max length of the TCP packet.
	Mss interface{} `field:"optional" json:"mss" yaml:"mss"`
	// Property proxyProtocolEnabled: Whether to enable ppv2 function.
	ProxyProtocolEnabled interface{} `field:"optional" json:"proxyProtocolEnabled" yaml:"proxyProtocolEnabled"`
	// Property proxyProtocolV2Config: ProxyProtocolV2Config of the listener.
	ProxyProtocolV2Config interface{} `field:"optional" json:"proxyProtocolV2Config" yaml:"proxyProtocolV2Config"`
	// Property secSensorEnabled: Whether to enable the second-level monitoring function.
	SecSensorEnabled interface{} `field:"optional" json:"secSensorEnabled" yaml:"secSensorEnabled"`
	// Property securityPolicyId: Only valid for TcpSSL protocol monitoring.
	SecurityPolicyId interface{} `field:"optional" json:"securityPolicyId" yaml:"securityPolicyId"`
	// Property startPort: StartPort of the portRange.
	StartPort interface{} `field:"optional" json:"startPort" yaml:"startPort"`
	// Property tags: Tags to attach to instance.
	//
	// Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
	Tags *[]*RosListener_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
}

