package alicloudroscdklindorm


// Properties for defining a `RosMultiZoneInstance`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-lindorm-multizoneinstance
type RosMultiZoneInstanceProps struct {
	DiskCategory interface{} `field:"required" json:"diskCategory" yaml:"diskCategory"`
	InstanceName interface{} `field:"required" json:"instanceName" yaml:"instanceName"`
	VpcId interface{} `field:"required" json:"vpcId" yaml:"vpcId"`
	ArbiterVSwitchId interface{} `field:"optional" json:"arbiterVSwitchId" yaml:"arbiterVSwitchId"`
	ArbiterZoneId interface{} `field:"optional" json:"arbiterZoneId" yaml:"arbiterZoneId"`
	ColdStorage interface{} `field:"optional" json:"coldStorage" yaml:"coldStorage"`
	CoreSingleStorage interface{} `field:"optional" json:"coreSingleStorage" yaml:"coreSingleStorage"`
	CoreSpec interface{} `field:"optional" json:"coreSpec" yaml:"coreSpec"`
	FilestoreNum interface{} `field:"optional" json:"filestoreNum" yaml:"filestoreNum"`
	FilestoreSpec interface{} `field:"optional" json:"filestoreSpec" yaml:"filestoreSpec"`
	InstanceChargeType interface{} `field:"optional" json:"instanceChargeType" yaml:"instanceChargeType"`
	LindormNum interface{} `field:"optional" json:"lindormNum" yaml:"lindormNum"`
	LindormSpec interface{} `field:"optional" json:"lindormSpec" yaml:"lindormSpec"`
	LogDiskCategory interface{} `field:"optional" json:"logDiskCategory" yaml:"logDiskCategory"`
	LogNum interface{} `field:"optional" json:"logNum" yaml:"logNum"`
	LogSingleStorage interface{} `field:"optional" json:"logSingleStorage" yaml:"logSingleStorage"`
	LogSpec interface{} `field:"optional" json:"logSpec" yaml:"logSpec"`
	MultiZoneCombination interface{} `field:"optional" json:"multiZoneCombination" yaml:"multiZoneCombination"`
	Period interface{} `field:"optional" json:"period" yaml:"period"`
	PeriodUnit interface{} `field:"optional" json:"periodUnit" yaml:"periodUnit"`
	PrimaryVSwitchId interface{} `field:"optional" json:"primaryVSwitchId" yaml:"primaryVSwitchId"`
	PrimaryZoneId interface{} `field:"optional" json:"primaryZoneId" yaml:"primaryZoneId"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	SecurityIpList interface{} `field:"optional" json:"securityIpList" yaml:"securityIpList"`
	SolrNum interface{} `field:"optional" json:"solrNum" yaml:"solrNum"`
	SolrSpec interface{} `field:"optional" json:"solrSpec" yaml:"solrSpec"`
	StandbyVSwitchId interface{} `field:"optional" json:"standbyVSwitchId" yaml:"standbyVSwitchId"`
	StandbyZoneId interface{} `field:"optional" json:"standbyZoneId" yaml:"standbyZoneId"`
	StreamNum interface{} `field:"optional" json:"streamNum" yaml:"streamNum"`
	StreamSpec interface{} `field:"optional" json:"streamSpec" yaml:"streamSpec"`
	TsdbNum interface{} `field:"optional" json:"tsdbNum" yaml:"tsdbNum"`
	TsdbSpec interface{} `field:"optional" json:"tsdbSpec" yaml:"tsdbSpec"`
}

