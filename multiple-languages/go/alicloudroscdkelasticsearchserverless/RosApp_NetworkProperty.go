package alicloudroscdkelasticsearchserverless


type RosApp_NetworkProperty struct {
	Enabled interface{} `field:"required" json:"enabled" yaml:"enabled"`
	Type interface{} `field:"required" json:"type" yaml:"type"`
	WhiteIpGroup interface{} `field:"optional" json:"whiteIpGroup" yaml:"whiteIpGroup"`
}

