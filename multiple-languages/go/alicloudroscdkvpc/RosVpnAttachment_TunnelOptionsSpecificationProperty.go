package alicloudroscdkvpc


type RosVpnAttachment_TunnelOptionsSpecificationProperty struct {
	CustomerGatewayId interface{} `field:"optional" json:"customerGatewayId" yaml:"customerGatewayId"`
	EnableDpd interface{} `field:"optional" json:"enableDpd" yaml:"enableDpd"`
	EnableNatTraversal interface{} `field:"optional" json:"enableNatTraversal" yaml:"enableNatTraversal"`
	TunnelBgpConfig interface{} `field:"optional" json:"tunnelBgpConfig" yaml:"tunnelBgpConfig"`
	TunnelIkeConfig interface{} `field:"optional" json:"tunnelIkeConfig" yaml:"tunnelIkeConfig"`
	TunnelIndex interface{} `field:"optional" json:"tunnelIndex" yaml:"tunnelIndex"`
	TunnelIpsecConfig interface{} `field:"optional" json:"tunnelIpsecConfig" yaml:"tunnelIpsecConfig"`
}

