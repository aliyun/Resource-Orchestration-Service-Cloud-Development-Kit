package alicloudroscdkvpc


type RosVpnConnection_TunnelOptionsSpecificationProperty struct {
	CustomerGatewayId interface{} `field:"optional" json:"customerGatewayId" yaml:"customerGatewayId"`
	EnableDpd interface{} `field:"optional" json:"enableDpd" yaml:"enableDpd"`
	EnableNatTraversal interface{} `field:"optional" json:"enableNatTraversal" yaml:"enableNatTraversal"`
	RemoteCaCertificate interface{} `field:"optional" json:"remoteCaCertificate" yaml:"remoteCaCertificate"`
	Role interface{} `field:"optional" json:"role" yaml:"role"`
	TunnelBgpConfig interface{} `field:"optional" json:"tunnelBgpConfig" yaml:"tunnelBgpConfig"`
	TunnelIkeConfig interface{} `field:"optional" json:"tunnelIkeConfig" yaml:"tunnelIkeConfig"`
	TunnelIpsecConfig interface{} `field:"optional" json:"tunnelIpsecConfig" yaml:"tunnelIpsecConfig"`
}

