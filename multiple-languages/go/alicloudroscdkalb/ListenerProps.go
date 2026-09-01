package alicloudroscdkalb


// Properties for defining a `Listener`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-alb-listener
type ListenerProps struct {
	// Property defaultActions: The default actions for the listener.
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
	// Property caCertificates: A list of CA certificates for the listener.
	//
	// Only one CA certificate is supported.
	CaCertificates interface{} `field:"optional" json:"caCertificates" yaml:"caCertificates"`
	// Property caEnabled: Specifies whether to enable mutual authentication.
	//
	// Default false.
	CaEnabled interface{} `field:"optional" json:"caEnabled" yaml:"caEnabled"`
	// Property certificates: A list of server certificates.
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
	// Note: Only HTTPS listeners support this parameter.
	Http2Enabled interface{} `field:"optional" json:"http2Enabled" yaml:"http2Enabled"`
	// Property idleTimeout: The idle timeout in seconds.
	//
	// Valid values: 1 to 600.
	// Default value: 15.
	// If no requests are received on a connection within the idle timeout, the load
	// balancer closes the connection. A new connection is established for the next
	// request.
	// > You can request a quota increase to a maximum of 3,600 seconds.
	IdleTimeout interface{} `field:"optional" json:"idleTimeout" yaml:"idleTimeout"`
	// Property listenerDescription: A custom name for the listener.
	//
	// The name must be 2 to 256 characters long and can contain letters, digits,
	// hyphens (-), forward slashes (\/), periods (.), underscores (_), and Chinese
	// characters.
	ListenerDescription interface{} `field:"optional" json:"listenerDescription" yaml:"listenerDescription"`
	// Property listenerStatus: The status of the listener.
	ListenerStatus interface{} `field:"optional" json:"listenerStatus" yaml:"listenerStatus"`
	// Property logConfig: The configuration information about the access log.
	LogConfig interface{} `field:"optional" json:"logConfig" yaml:"logConfig"`
	// Property quicConfig: Select a QUIC listener and associate it with the ALB instance.
	QuicConfig interface{} `field:"optional" json:"quicConfig" yaml:"quicConfig"`
	// Property requestTimeout: The request timeout in seconds.
	//
	// Valid values: 1 to 600.
	// Default value: 60.
	// If a backend server does not respond within the timeout period, the load balancer
	// returns an `HTTP 504` error to the client.
	// > You can request a quota increase to a maximum of 3,600 seconds.
	RequestTimeout interface{} `field:"optional" json:"requestTimeout" yaml:"requestTimeout"`
	// Property securityPolicyId: The ID of the security policy.
	//
	// System security policies and custom security policies
	// are supported.
	// Default value: tls_cipher_policy_1_0. This value indicates a system security policy.
	// Note: Only HTTPS listeners support this parameter.
	SecurityPolicyId interface{} `field:"optional" json:"securityPolicyId" yaml:"securityPolicyId"`
	// Property xForwardedForConfig: The configuration of `X-Forwarded-*` headers.
	XForwardedForConfig interface{} `field:"optional" json:"xForwardedForConfig" yaml:"xForwardedForConfig"`
}

