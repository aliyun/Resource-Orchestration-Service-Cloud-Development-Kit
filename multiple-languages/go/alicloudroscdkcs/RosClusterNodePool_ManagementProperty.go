package alicloudroscdkcs


type RosClusterNodePool_ManagementProperty struct {
	Enable interface{} `field:"required" json:"enable" yaml:"enable"`
	AutoRepair interface{} `field:"optional" json:"autoRepair" yaml:"autoRepair"`
	UpgradeConfig interface{} `field:"optional" json:"upgradeConfig" yaml:"upgradeConfig"`
}

