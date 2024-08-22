package alicloudroscdkalb


// Properties for defining a `Listener`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-alb-listener
type ListenerProps struct {
	// Property defaultActions: The actions of the rule.
	DefaultActions interface{} `field:"required" json:"defaultActions" yaml:"defaultActions"`
	// Property listenerPort: The frontend port that is used by the ALB instance.
	//
	// Valid values: 1 to 65535.
	ListenerPort interface{} `field:"required" json:"listenerPort" yaml:"listenerPort"`
	// Property listenerProtocol: The listener protocol.
	//
	// Valid values: HTTP, HTTPS, and QUIC.
	ListenerProtocol interface{} `field:"required" json:"listenerProtocol" yaml:"listenerProtocol"`
	// Property loadBalancerId: The ID of the ALB instance.
	LoadBalancerId interface{} `field:"required" json:"loadBalancerId" yaml:"loadBalancerId"`
	// Property caCertificates: List of configured CA certificates for listener.
	CaCertificates interface{} `field:"optional" json:"caCertificates" yaml:"caCertificates"`
	// Property caEnabled: Specifies whether to enable mutual authentication.
	//
	// Default false.
	CaEnabled interface{} `field:"optional" json:"caEnabled" yaml:"caEnabled"`
	// Property certificates: The list of SSL certificates for listener.
	Certificates interface{} `field:"optional" json:"certificates" yaml:"certificates"`
	// Property gzipEnabled: Specifies whether to enable gzip compression to compress files of a specific type.
	//
	// Valid values: true and false.
	// Default value: true.
	GzipEnabled interface{} `field:"optional" json:"gzipEnabled" yaml:"gzipEnabled"`
	// Property http2Enabled: Specifies whether to enable HTTP\/2.
	//
	// Default value: on.
	// Valid values: true and false.
	// Default value: true.
	// Note Only HTTPS listeners support this parameter.
	Http2Enabled interface{} `field:"optional" json:"http2Enabled" yaml:"http2Enabled"`
	// Property idleTimeout: The timeout period of idle connections.
	//
	// Valid values: 1 to 180. Unit: seconds.
	// Default value: 15.
	// If no request is received within the specified timeout period, ALB closes the connection.
	// ALB recreates the connection when a new connection request is received.
	IdleTimeout interface{} `field:"optional" json:"idleTimeout" yaml:"idleTimeout"`
	// Property listenerDescription: The description of the listener.
	//
	// The description must be 2 to 256 characters in length.
	ListenerDescription interface{} `field:"optional" json:"listenerDescription" yaml:"listenerDescription"`
	// Property listenerStatus: The status of the listener.
	ListenerStatus interface{} `field:"optional" json:"listenerStatus" yaml:"listenerStatus"`
	// Property quicConfig: Select a QUIC listener and associate it with the ALB instance.
	QuicConfig interface{} `field:"optional" json:"quicConfig" yaml:"quicConfig"`
	// Property requestTimeout: The timeout period of the request.
	//
	// Valid values: 1 to 180. Unit: seconds.
	// Default value: 60.
	// If no response is received from the backend server during the request timeout period,
	// ALB sends an HTTP 504 error code to the client.
	RequestTimeout interface{} `field:"optional" json:"requestTimeout" yaml:"requestTimeout"`
	// Property securityPolicyId: The ID of the security policy.
	//
	// System security policies and custom security policies
	// are supported.
	// Default value: tls_cipher_policy_1_0. This value indicates a system security policy.
	// Note Only HTTPS listeners support this parameter.
	SecurityPolicyId interface{} `field:"optional" json:"securityPolicyId" yaml:"securityPolicyId"`
	// Property xForwardedForConfig: The configuration of the XForward field.
	XForwardedForConfig interface{} `field:"optional" json:"xForwardedForConfig" yaml:"xForwardedForConfig"`
}

