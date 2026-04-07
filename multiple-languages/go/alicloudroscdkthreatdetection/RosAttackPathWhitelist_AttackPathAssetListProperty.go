package alicloudroscdkthreatdetection


type RosAttackPathWhitelist_AttackPathAssetListProperty struct {
	Vendor interface{} `field:"required" json:"vendor" yaml:"vendor"`
	AssetSubType interface{} `field:"optional" json:"assetSubType" yaml:"assetSubType"`
	AssetType interface{} `field:"optional" json:"assetType" yaml:"assetType"`
	InstanceId interface{} `field:"optional" json:"instanceId" yaml:"instanceId"`
	NodeType interface{} `field:"optional" json:"nodeType" yaml:"nodeType"`
	RegionId interface{} `field:"optional" json:"regionId" yaml:"regionId"`
}

