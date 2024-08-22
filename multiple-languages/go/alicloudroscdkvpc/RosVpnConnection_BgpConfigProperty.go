package alicloudroscdkvpc


type RosVpnConnection_BgpConfigProperty struct {
	EnableBgp interface{} `field:"optional" json:"enableBgp" yaml:"enableBgp"`
	LocalAsn interface{} `field:"optional" json:"localAsn" yaml:"localAsn"`
	LocalBgpIp interface{} `field:"optional" json:"localBgpIp" yaml:"localBgpIp"`
	TunnelCidr interface{} `field:"optional" json:"tunnelCidr" yaml:"tunnelCidr"`
}

