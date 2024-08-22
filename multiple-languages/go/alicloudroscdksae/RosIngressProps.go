package alicloudroscdksae


// Properties for defining a `RosIngress`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sae-ingress
type RosIngressProps struct {
	DefaultRule interface{} `field:"required" json:"defaultRule" yaml:"defaultRule"`
	Description interface{} `field:"required" json:"description" yaml:"description"`
	ListenerPort interface{} `field:"required" json:"listenerPort" yaml:"listenerPort"`
	NamespaceId interface{} `field:"required" json:"namespaceId" yaml:"namespaceId"`
	Rules interface{} `field:"required" json:"rules" yaml:"rules"`
	SlbId interface{} `field:"required" json:"slbId" yaml:"slbId"`
	CertId interface{} `field:"optional" json:"certId" yaml:"certId"`
	CertIds interface{} `field:"optional" json:"certIds" yaml:"certIds"`
	ListenerProtocol interface{} `field:"optional" json:"listenerProtocol" yaml:"listenerProtocol"`
	LoadBalanceType interface{} `field:"optional" json:"loadBalanceType" yaml:"loadBalanceType"`
}

