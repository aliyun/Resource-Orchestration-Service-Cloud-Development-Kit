package alicloudroscdkga


// Properties for defining a `Listener`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-listener
type ListenerProps struct {
	// Property acceleratorId: The ID of the Global Accelerator instance to which the listener will be added.
	AcceleratorId interface{} `field:"required" json:"acceleratorId" yaml:"acceleratorId"`
	// Property portRanges:.
	PortRanges interface{} `field:"required" json:"portRanges" yaml:"portRanges"`
	// Property protocol: The network transmission protocol of the listener.
	//
	// Valid values:
	// tcp: TCP protocol
	// udp: UDP protocol
	// http: HTTP protocolhttps: HTTPS protocol.
	Protocol interface{} `field:"required" json:"protocol" yaml:"protocol"`
	// Property certificates:.
	Certificates interface{} `field:"optional" json:"certificates" yaml:"certificates"`
	// Property clientAffinity: Specifies whether to enable client affinity for the listener.
	//
	// If you do not specify the default value in the parameter, client affinity is disabled.
	// When client affinity is disabled, the connections from a specific source (client)
	// IP address are not always routed to the same endpoint.
	// If you set the value to SOURCE_IP, client affinity is enabled. When client affinity is enabled, the connections from
	// a specific source (client) IP address are always routed to the same endpoint.
	ClientAffinity interface{} `field:"optional" json:"clientAffinity" yaml:"clientAffinity"`
	// Property description: The description of the listener.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property name: The name of the listener.
	//
	// The name must be 2 to 128 characters in length and can contain letters, digits, underscores
	// (_), and hyphens (-). It must start with a letter or Chinese character.
	Name interface{} `field:"optional" json:"name" yaml:"name"`
	// Property proxyProtocol: Specifies whether to preserve client IP addresses.
	//
	// Valid values:
	// true: preserves client IP addresses. After this feature is enabled, backend servers can retrieve client IP addresses.
	// false (default): does not preserve client IP addresses.
	ProxyProtocol interface{} `field:"optional" json:"proxyProtocol" yaml:"proxyProtocol"`
	// Property securityPolicyId: The ID of the security policy.
	//
	// Valid values:
	// tls_cipher_policy_1_0
	// tls_cipher_policy_1_1
	// tls_cipher_policy_1_2
	// tls_cipher_policy_1_2_strict
	// tls_cipher_policy_1_2_strict_with_1_3
	// Note Only HTTPS listeners support this parameter.
	SecurityPolicyId interface{} `field:"optional" json:"securityPolicyId" yaml:"securityPolicyId"`
	// Property xForwardedForConfig: The configuration of the XForward field.
	XForwardedForConfig interface{} `field:"optional" json:"xForwardedForConfig" yaml:"xForwardedForConfig"`
}

