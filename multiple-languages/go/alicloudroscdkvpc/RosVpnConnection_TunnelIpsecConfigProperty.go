package alicloudroscdkvpc


type RosVpnConnection_TunnelIpsecConfigProperty struct {
	IpsecAuthAlg interface{} `field:"optional" json:"ipsecAuthAlg" yaml:"ipsecAuthAlg"`
	IpsecEncAlg interface{} `field:"optional" json:"ipsecEncAlg" yaml:"ipsecEncAlg"`
	IpsecLifetime interface{} `field:"optional" json:"ipsecLifetime" yaml:"ipsecLifetime"`
	IpsecPfs interface{} `field:"optional" json:"ipsecPfs" yaml:"ipsecPfs"`
}

