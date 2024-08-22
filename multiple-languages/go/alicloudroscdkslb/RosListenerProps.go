package alicloudroscdkslb


// Properties for defining a `RosListener`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-slb-listener
type RosListenerProps struct {
	Bandwidth interface{} `field:"required" json:"bandwidth" yaml:"bandwidth"`
	ListenerPort interface{} `field:"required" json:"listenerPort" yaml:"listenerPort"`
	LoadBalancerId interface{} `field:"required" json:"loadBalancerId" yaml:"loadBalancerId"`
	Protocol interface{} `field:"required" json:"protocol" yaml:"protocol"`
	AclId interface{} `field:"optional" json:"aclId" yaml:"aclId"`
	AclIds interface{} `field:"optional" json:"aclIds" yaml:"aclIds"`
	AclStatus interface{} `field:"optional" json:"aclStatus" yaml:"aclStatus"`
	AclType interface{} `field:"optional" json:"aclType" yaml:"aclType"`
	BackendServerPort interface{} `field:"optional" json:"backendServerPort" yaml:"backendServerPort"`
	CaCertificateId interface{} `field:"optional" json:"caCertificateId" yaml:"caCertificateId"`
	ConnectionDrain interface{} `field:"optional" json:"connectionDrain" yaml:"connectionDrain"`
	ConnectionDrainTimeout interface{} `field:"optional" json:"connectionDrainTimeout" yaml:"connectionDrainTimeout"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	EnableHttp2 interface{} `field:"optional" json:"enableHttp2" yaml:"enableHttp2"`
	Gzip interface{} `field:"optional" json:"gzip" yaml:"gzip"`
	HealthCheck interface{} `field:"optional" json:"healthCheck" yaml:"healthCheck"`
	HttpConfig interface{} `field:"optional" json:"httpConfig" yaml:"httpConfig"`
	IdleTimeout interface{} `field:"optional" json:"idleTimeout" yaml:"idleTimeout"`
	MasterSlaveServerGroupId interface{} `field:"optional" json:"masterSlaveServerGroupId" yaml:"masterSlaveServerGroupId"`
	Persistence interface{} `field:"optional" json:"persistence" yaml:"persistence"`
	PortRange interface{} `field:"optional" json:"portRange" yaml:"portRange"`
	ProxyProtocolV2Enabled interface{} `field:"optional" json:"proxyProtocolV2Enabled" yaml:"proxyProtocolV2Enabled"`
	RequestTimeout interface{} `field:"optional" json:"requestTimeout" yaml:"requestTimeout"`
	Scheduler interface{} `field:"optional" json:"scheduler" yaml:"scheduler"`
	ServerCertificateId interface{} `field:"optional" json:"serverCertificateId" yaml:"serverCertificateId"`
	StartListener interface{} `field:"optional" json:"startListener" yaml:"startListener"`
	Tags *[]*RosListener_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
	TlsCipherPolicy interface{} `field:"optional" json:"tlsCipherPolicy" yaml:"tlsCipherPolicy"`
	VServerGroupId interface{} `field:"optional" json:"vServerGroupId" yaml:"vServerGroupId"`
}

