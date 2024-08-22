package alicloudroscdkga


type RosEndpointGroup_EndpointConfigurationsProperty struct {
	Endpoint interface{} `field:"required" json:"endpoint" yaml:"endpoint"`
	Type interface{} `field:"required" json:"type" yaml:"type"`
	Weight interface{} `field:"required" json:"weight" yaml:"weight"`
	EnableClientIpPreservation interface{} `field:"optional" json:"enableClientIpPreservation" yaml:"enableClientIpPreservation"`
	EnableProxyProtocol interface{} `field:"optional" json:"enableProxyProtocol" yaml:"enableProxyProtocol"`
}

