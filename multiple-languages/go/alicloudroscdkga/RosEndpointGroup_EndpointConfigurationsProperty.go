package alicloudroscdkga


type RosEndpointGroup_EndpointConfigurationsProperty struct {
	Endpoint interface{} `field:"required" json:"endpoint" yaml:"endpoint"`
	Type interface{} `field:"required" json:"type" yaml:"type"`
	Weight interface{} `field:"required" json:"weight" yaml:"weight"`
	EnableClientIpPreservation interface{} `field:"optional" json:"enableClientIpPreservation" yaml:"enableClientIpPreservation"`
	EnableProxyProtocol interface{} `field:"optional" json:"enableProxyProtocol" yaml:"enableProxyProtocol"`
	ProxyProtocolV2Config interface{} `field:"optional" json:"proxyProtocolV2Config" yaml:"proxyProtocolV2Config"`
	SubAddress interface{} `field:"optional" json:"subAddress" yaml:"subAddress"`
	VpcId interface{} `field:"optional" json:"vpcId" yaml:"vpcId"`
	VSwitchIds interface{} `field:"optional" json:"vSwitchIds" yaml:"vSwitchIds"`
}

