package alicloudroscdkcs


type RosClusterNodePool_UpgradeConfigProperty struct {
	AutoUpgrade interface{} `field:"optional" json:"autoUpgrade" yaml:"autoUpgrade"`
	MaxUnavailable interface{} `field:"optional" json:"maxUnavailable" yaml:"maxUnavailable"`
	Surge interface{} `field:"optional" json:"surge" yaml:"surge"`
	SurgePercentage interface{} `field:"optional" json:"surgePercentage" yaml:"surgePercentage"`
}

