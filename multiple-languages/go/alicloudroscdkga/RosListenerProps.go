package alicloudroscdkga


// Properties for defining a `RosListener`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-listener
type RosListenerProps struct {
	AcceleratorId interface{} `field:"required" json:"acceleratorId" yaml:"acceleratorId"`
	PortRanges interface{} `field:"required" json:"portRanges" yaml:"portRanges"`
	Protocol interface{} `field:"required" json:"protocol" yaml:"protocol"`
	Certificates interface{} `field:"optional" json:"certificates" yaml:"certificates"`
	ClientAffinity interface{} `field:"optional" json:"clientAffinity" yaml:"clientAffinity"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	HttpVersion interface{} `field:"optional" json:"httpVersion" yaml:"httpVersion"`
	IdleTimeout interface{} `field:"optional" json:"idleTimeout" yaml:"idleTimeout"`
	Name interface{} `field:"optional" json:"name" yaml:"name"`
	ProxyProtocol interface{} `field:"optional" json:"proxyProtocol" yaml:"proxyProtocol"`
	RequestTimeout interface{} `field:"optional" json:"requestTimeout" yaml:"requestTimeout"`
	SecurityPolicyId interface{} `field:"optional" json:"securityPolicyId" yaml:"securityPolicyId"`
	Type interface{} `field:"optional" json:"type" yaml:"type"`
	XForwardedForConfig interface{} `field:"optional" json:"xForwardedForConfig" yaml:"xForwardedForConfig"`
}

