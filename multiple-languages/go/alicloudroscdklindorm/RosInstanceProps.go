package alicloudroscdklindorm


// Properties for defining a `RosInstance`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-lindorm-instance
type RosInstanceProps struct {
	DiskCategory interface{} `field:"required" json:"diskCategory" yaml:"diskCategory"`
	InstanceName interface{} `field:"required" json:"instanceName" yaml:"instanceName"`
	VpcId interface{} `field:"required" json:"vpcId" yaml:"vpcId"`
	ColdStorage interface{} `field:"optional" json:"coldStorage" yaml:"coldStorage"`
	CoreSpec interface{} `field:"optional" json:"coreSpec" yaml:"coreSpec"`
	FilestoreNum interface{} `field:"optional" json:"filestoreNum" yaml:"filestoreNum"`
	FilestoreSpec interface{} `field:"optional" json:"filestoreSpec" yaml:"filestoreSpec"`
	InstanceChargeType interface{} `field:"optional" json:"instanceChargeType" yaml:"instanceChargeType"`
	InstanceStorage interface{} `field:"optional" json:"instanceStorage" yaml:"instanceStorage"`
	LindormNum interface{} `field:"optional" json:"lindormNum" yaml:"lindormNum"`
	LindormSpec interface{} `field:"optional" json:"lindormSpec" yaml:"lindormSpec"`
	Period interface{} `field:"optional" json:"period" yaml:"period"`
	PeriodUnit interface{} `field:"optional" json:"periodUnit" yaml:"periodUnit"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	SecurityIpList interface{} `field:"optional" json:"securityIpList" yaml:"securityIpList"`
	SolrNum interface{} `field:"optional" json:"solrNum" yaml:"solrNum"`
	SolrSpec interface{} `field:"optional" json:"solrSpec" yaml:"solrSpec"`
	StreamNum interface{} `field:"optional" json:"streamNum" yaml:"streamNum"`
	StreamSpec interface{} `field:"optional" json:"streamSpec" yaml:"streamSpec"`
	TsdbNum interface{} `field:"optional" json:"tsdbNum" yaml:"tsdbNum"`
	TsdbSpec interface{} `field:"optional" json:"tsdbSpec" yaml:"tsdbSpec"`
	VSwitchId interface{} `field:"optional" json:"vSwitchId" yaml:"vSwitchId"`
	ZoneId interface{} `field:"optional" json:"zoneId" yaml:"zoneId"`
}

