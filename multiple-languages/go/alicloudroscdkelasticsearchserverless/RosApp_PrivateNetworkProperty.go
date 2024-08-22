package alicloudroscdkelasticsearchserverless


type RosApp_PrivateNetworkProperty struct {
	Enabled interface{} `field:"required" json:"enabled" yaml:"enabled"`
	PvlEndpointId interface{} `field:"required" json:"pvlEndpointId" yaml:"pvlEndpointId"`
	Type interface{} `field:"required" json:"type" yaml:"type"`
	VpcId interface{} `field:"required" json:"vpcId" yaml:"vpcId"`
	WhiteIpGroup interface{} `field:"optional" json:"whiteIpGroup" yaml:"whiteIpGroup"`
}

