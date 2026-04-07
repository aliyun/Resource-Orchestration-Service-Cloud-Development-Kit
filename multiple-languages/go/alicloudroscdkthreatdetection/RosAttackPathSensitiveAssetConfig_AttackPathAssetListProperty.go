package alicloudroscdkthreatdetection


type RosAttackPathSensitiveAssetConfig_AttackPathAssetListProperty struct {
	AssetSubType interface{} `field:"required" json:"assetSubType" yaml:"assetSubType"`
	AssetType interface{} `field:"required" json:"assetType" yaml:"assetType"`
	InstanceId interface{} `field:"required" json:"instanceId" yaml:"instanceId"`
	RegionId interface{} `field:"required" json:"regionId" yaml:"regionId"`
	Vendor interface{} `field:"required" json:"vendor" yaml:"vendor"`
	InstanceName interface{} `field:"optional" json:"instanceName" yaml:"instanceName"`
}

