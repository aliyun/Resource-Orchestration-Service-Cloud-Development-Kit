package alicloudroscdkvpc


type RosVpnConnection_TunnelBgpConfigProperty struct {
	LocalAsn interface{} `field:"optional" json:"localAsn" yaml:"localAsn"`
	LocalBgpIp interface{} `field:"optional" json:"localBgpIp" yaml:"localBgpIp"`
	TunnelCidr interface{} `field:"optional" json:"tunnelCidr" yaml:"tunnelCidr"`
}

