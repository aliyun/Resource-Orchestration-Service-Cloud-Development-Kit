package alicloudroscdkalb


// Properties for defining a `RosListener`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-alb-listener
type RosListenerProps struct {
	DefaultActions interface{} `field:"required" json:"defaultActions" yaml:"defaultActions"`
	ListenerPort interface{} `field:"required" json:"listenerPort" yaml:"listenerPort"`
	ListenerProtocol interface{} `field:"required" json:"listenerProtocol" yaml:"listenerProtocol"`
	LoadBalancerId interface{} `field:"required" json:"loadBalancerId" yaml:"loadBalancerId"`
	CaCertificates interface{} `field:"optional" json:"caCertificates" yaml:"caCertificates"`
	CaEnabled interface{} `field:"optional" json:"caEnabled" yaml:"caEnabled"`
	Certificates interface{} `field:"optional" json:"certificates" yaml:"certificates"`
	GzipEnabled interface{} `field:"optional" json:"gzipEnabled" yaml:"gzipEnabled"`
	Http2Enabled interface{} `field:"optional" json:"http2Enabled" yaml:"http2Enabled"`
	IdleTimeout interface{} `field:"optional" json:"idleTimeout" yaml:"idleTimeout"`
	ListenerDescription interface{} `field:"optional" json:"listenerDescription" yaml:"listenerDescription"`
	ListenerStatus interface{} `field:"optional" json:"listenerStatus" yaml:"listenerStatus"`
	QuicConfig interface{} `field:"optional" json:"quicConfig" yaml:"quicConfig"`
	RequestTimeout interface{} `field:"optional" json:"requestTimeout" yaml:"requestTimeout"`
	SecurityPolicyId interface{} `field:"optional" json:"securityPolicyId" yaml:"securityPolicyId"`
	XForwardedForConfig interface{} `field:"optional" json:"xForwardedForConfig" yaml:"xForwardedForConfig"`
}

