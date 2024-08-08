package alicloudroscdkhbase


// Properties for defining a `RosMultiZoneCluster`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbase-multizonecluster
type RosMultiZoneClusterProps struct {
	ArbiterVSwitchId interface{} `field:"required" json:"arbiterVSwitchId" yaml:"arbiterVSwitchId"`
	ArbiterZoneId interface{} `field:"required" json:"arbiterZoneId" yaml:"arbiterZoneId"`
	ArchVersion interface{} `field:"required" json:"archVersion" yaml:"archVersion"`
	CoreDiskSize interface{} `field:"required" json:"coreDiskSize" yaml:"coreDiskSize"`
	CoreDiskType interface{} `field:"required" json:"coreDiskType" yaml:"coreDiskType"`
	CoreInstanceType interface{} `field:"required" json:"coreInstanceType" yaml:"coreInstanceType"`
	CoreNodeCount interface{} `field:"required" json:"coreNodeCount" yaml:"coreNodeCount"`
	Engine interface{} `field:"required" json:"engine" yaml:"engine"`
	EngineVersion interface{} `field:"required" json:"engineVersion" yaml:"engineVersion"`
	LogDiskSize interface{} `field:"required" json:"logDiskSize" yaml:"logDiskSize"`
	LogDiskType interface{} `field:"required" json:"logDiskType" yaml:"logDiskType"`
	LogInstanceType interface{} `field:"required" json:"logInstanceType" yaml:"logInstanceType"`
	LogNodeCount interface{} `field:"required" json:"logNodeCount" yaml:"logNodeCount"`
	MultiZoneCombination interface{} `field:"required" json:"multiZoneCombination" yaml:"multiZoneCombination"`
	PayType interface{} `field:"required" json:"payType" yaml:"payType"`
	PrimaryVSwitchId interface{} `field:"required" json:"primaryVSwitchId" yaml:"primaryVSwitchId"`
	PrimaryZoneId interface{} `field:"required" json:"primaryZoneId" yaml:"primaryZoneId"`
	StandbyVSwitchId interface{} `field:"required" json:"standbyVSwitchId" yaml:"standbyVSwitchId"`
	StandbyZoneId interface{} `field:"required" json:"standbyZoneId" yaml:"standbyZoneId"`
	AutoRenewPeriod interface{} `field:"optional" json:"autoRenewPeriod" yaml:"autoRenewPeriod"`
	ClusterName interface{} `field:"optional" json:"clusterName" yaml:"clusterName"`
	MasterInstanceType interface{} `field:"optional" json:"masterInstanceType" yaml:"masterInstanceType"`
	Period interface{} `field:"optional" json:"period" yaml:"period"`
	PeriodUnit interface{} `field:"optional" json:"periodUnit" yaml:"periodUnit"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	SecurityIpList interface{} `field:"optional" json:"securityIpList" yaml:"securityIpList"`
	VpcId interface{} `field:"optional" json:"vpcId" yaml:"vpcId"`
}

