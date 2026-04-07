package alicloudroscdknlb


// Properties for defining a `RosListener`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nlb-listener
type RosListenerProps struct {
	ListenerPort interface{} `field:"required" json:"listenerPort" yaml:"listenerPort"`
	ListenerProtocol interface{} `field:"required" json:"listenerProtocol" yaml:"listenerProtocol"`
	LoadBalancerId interface{} `field:"required" json:"loadBalancerId" yaml:"loadBalancerId"`
	AlpnEnabled interface{} `field:"optional" json:"alpnEnabled" yaml:"alpnEnabled"`
	AlpnPolicy interface{} `field:"optional" json:"alpnPolicy" yaml:"alpnPolicy"`
	CaCertificateIds interface{} `field:"optional" json:"caCertificateIds" yaml:"caCertificateIds"`
	CaEnabled interface{} `field:"optional" json:"caEnabled" yaml:"caEnabled"`
	CertificateIds interface{} `field:"optional" json:"certificateIds" yaml:"certificateIds"`
	Cps interface{} `field:"optional" json:"cps" yaml:"cps"`
	Enable interface{} `field:"optional" json:"enable" yaml:"enable"`
	EndPort interface{} `field:"optional" json:"endPort" yaml:"endPort"`
	IdleTimeout interface{} `field:"optional" json:"idleTimeout" yaml:"idleTimeout"`
	ListenerDescription interface{} `field:"optional" json:"listenerDescription" yaml:"listenerDescription"`
	Mss interface{} `field:"optional" json:"mss" yaml:"mss"`
	ProxyProtocolEnabled interface{} `field:"optional" json:"proxyProtocolEnabled" yaml:"proxyProtocolEnabled"`
	ProxyProtocolV2Config interface{} `field:"optional" json:"proxyProtocolV2Config" yaml:"proxyProtocolV2Config"`
	SecSensorEnabled interface{} `field:"optional" json:"secSensorEnabled" yaml:"secSensorEnabled"`
	SecurityPolicyId interface{} `field:"optional" json:"securityPolicyId" yaml:"securityPolicyId"`
	ServerGroupId interface{} `field:"optional" json:"serverGroupId" yaml:"serverGroupId"`
	ServerGroupTuples interface{} `field:"optional" json:"serverGroupTuples" yaml:"serverGroupTuples"`
	StartPort interface{} `field:"optional" json:"startPort" yaml:"startPort"`
	Tags *[]*RosListener_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
}

