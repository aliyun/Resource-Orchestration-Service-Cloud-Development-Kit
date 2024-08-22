package alicloudroscdklindorm


// Properties for defining a `Instance`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-lindorm-instance
type InstanceProps struct {
	// Property diskCategory: The storage type of the instance.
	//
	// Valid values:
	// cloud_efficiency: This instance uses the Standard type of storage.
	// cloud_ssd: This instance uses the Performance type of storage.
	// capacity_cloud_storage: This instance uses the Capacity type of storage.
	// local_ssd_pro: This instance uses local SSDs.
	// local_hdd_pro: This instance uses local HDDs.
	DiskCategory interface{} `field:"required" json:"diskCategory" yaml:"diskCategory"`
	// Property instanceName: The name of the instance that you want to create.
	InstanceName interface{} `field:"required" json:"instanceName" yaml:"instanceName"`
	// Property vpcId: The ID of the VPC in which you want to create the instance.
	VpcId interface{} `field:"required" json:"vpcId" yaml:"vpcId"`
	// Property coldStorage: The cold storage capacity of the instance.
	//
	// By default, if you leave this parameter unspecified, cold storage is not enabled for the instance. Unit: GB. Valid values: 800 to 1000000.
	ColdStorage interface{} `field:"optional" json:"coldStorage" yaml:"coldStorage"`
	// Property coreSpec: The specification of the nodes in the instance if you set DiskCategory to local_ssd_pro or local_hdd_pro.
	//
	// When DiskCategory is set to local_ssd_pro, you can set this parameter to the following values:
	// lindorm.i2.xlarge: Each node has 4 dedicated CPU cores and 32 GB of dedicated memory.
	// lindorm.i2.2xlarge: Each node has 8 dedicated CPU cores and 64 GB of dedicated memory.
	// lindorm.i2.4xlarge: Each node has 16 dedicated CPU cores and 128 GB of dedicated memory.
	// lindorm.i2.8xlarge: Each node has 32 dedicated CPU cores and 256 GB of dedicated memory.
	// When DiskCategory is set to local_hdd_pro, you can set this parameter to the following values:
	// lindorm.d1.2xlarge: Each node has 8 dedicated CPU cores and 32 GB of dedicated memory.
	// lindorm.d1.4xlarge: Each node has 16 dedicated CPU cores and 64 GB of dedicated memory.
	// lindorm.d1.6xlarge: Each node has 24 dedicated CPU cores and 96 GB of dedicated memory.
	CoreSpec interface{} `field:"optional" json:"coreSpec" yaml:"coreSpec"`
	// Property filestoreNum: The number of LindormDFS nodes in the instance.
	//
	// The valid values of this parameter depend on the value of the PayType parameter.
	// If the PayType parameter is set to PREPAY, set this parameter to an integer that ranges from 0 to 60.
	// If the PayType parameter is set to POSTPAY, set this parameter to an integer that ranges from 0 to 8.
	FilestoreNum interface{} `field:"optional" json:"filestoreNum" yaml:"filestoreNum"`
	// Property filestoreSpec: The specification of LindormDFS nodes in the instance.
	//
	// Set the value of this parameter to lindorm.c.xlarge, which indicates that each node has 4 dedicated CPU cores and 8 GB of dedicated memory.
	FilestoreSpec interface{} `field:"optional" json:"filestoreSpec" yaml:"filestoreSpec"`
	// Property instanceChargeType: The billing method of the instance you want to create.
	//
	// Valid values:
	// PREPAY: subscription.
	// POSTPAY: pay-as-you-go.
	// Default value: POSTPAY.
	InstanceChargeType interface{} `field:"optional" json:"instanceChargeType" yaml:"instanceChargeType"`
	// Property instanceStorage: The storage capacity of the instance you want to create.
	//
	// Unit: GB.
	InstanceStorage interface{} `field:"optional" json:"instanceStorage" yaml:"instanceStorage"`
	// Property lindormNum: The number of LindormTable nodes in the instance.
	//
	// The valid values of this parameter depend on the value of the PayType parameter.
	// If the PayType parameter is set to PREPAY, set this parameter to an integer that ranges from 0 to 90.
	// If the PayType parameter is set to POSTPAY, set this parameter to an integer that ranges from 0 to 400.
	// ** This parameter is required if you want to create a multi-zone instance. ** The valid values of this parameter range from 4 to 400 if you want to create a multi-zone instance.
	LindormNum interface{} `field:"optional" json:"lindormNum" yaml:"lindormNum"`
	// Property lindormSpec: The specification of LindormTable nodes in the instance.
	//
	// Valid values:
	// lindorm.g.xlarge: Each node has 4 dedicated CPU cores and 16 GB of dedicated memory.
	// lindorm.g.2xlarge: Each node has 8 dedicated CPU cores and 32 GB of dedicated memory.
	// lindorm.g.4xlarge: Each node has 16 dedicated CPU cores and 64 GB of dedicated memory.
	// lindorm.g.8xlarge: Each node has 32 dedicated CPU cores and 128 GB of dedicated memory.
	// lindorm.c.xlarge: Each node has 4 dedicated CPU cores and 8 GB of dedicated memory.
	// lindorm.c.2xlarge: Each node has 8 dedicated CPU cores and 16 GB of dedicated memory.
	// lindorm.c.4xlarge: Each node has 16 dedicated CPU cores and 32 GB of dedicated memory.
	// lindorm.c.8xlarge: Each node has 32 dedicated CPU cores and 64 GB of dedicated memory.
	LindormSpec interface{} `field:"optional" json:"lindormSpec" yaml:"lindormSpec"`
	// Property period: The subscription period of the instance.
	//
	// The valid values of this parameter depend on the value of the PeriodUnit parameter.
	// If PeriodUnit is set to Month, Valid values are 1,2,3,4,5,6,7,8,9,12,24,36.
	// If PeriodUnit is set to Year, set this parameter to an integer that ranges from 1 to 3.
	// NoteThis parameter is available and required when the PayType parameter is set to PREPAY.
	Period interface{} `field:"optional" json:"period" yaml:"period"`
	// Property periodUnit: The period based on which you are charged for the instance.
	//
	// Valid values:
	// Month: You are charged for the instance on a monthly basis.
	// Year: You are charged for the instance on a yearly basis.
	// NoteThis parameter is available and required when the PayType parameter is set to PREPAY.
	PeriodUnit interface{} `field:"optional" json:"periodUnit" yaml:"periodUnit"`
	// Property resourceGroupId: The ID of the resource group to which the Lindorm instance belongs.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property securityIpList: The ip white list of instance.
	SecurityIpList interface{} `field:"optional" json:"securityIpList" yaml:"securityIpList"`
	// Property solrNum: The number of LindormSearch nodes in the instance.
	//
	// Valid values: integers from 0 to 60.
	SolrNum interface{} `field:"optional" json:"solrNum" yaml:"solrNum"`
	// Property solrSpec: The specification of the LindormSearch nodes in the instance.
	//
	// Valid values:
	// lindorm.g.xlarge: Each node has 4 dedicated CPU cores and 16 GB of dedicated memory.
	// lindorm.g.2xlarge: Each node has 8 dedicated CPU cores and 32 GB of dedicated memory.
	// lindorm.g.4xlarge: Each node has 16 dedicated CPU cores and 64 GB of dedicated memory.
	// lindorm.g.8xlarge: Each node has 32 dedicated CPU cores and 128 GB of dedicated memory.
	SolrSpec interface{} `field:"optional" json:"solrSpec" yaml:"solrSpec"`
	// Property streamNum: The number of LindormStream nodes in the instance.
	//
	// Valid values: integers from 0 to 90.
	StreamNum interface{} `field:"optional" json:"streamNum" yaml:"streamNum"`
	// Property streamSpec: The specification of LindormStream nodes in the instance.
	//
	// Valid values:
	// lindorm.g.xlarge: Each node has 4 dedicated CPU cores and 16 GB of dedicated memory.
	// lindorm.g.2xlarge: Each node has 8 dedicated CPU cores and 32 GB of dedicated memory.
	// lindorm.g.4xlarge: Each node has 16 dedicated CPU cores and 64 GB of dedicated memory.
	// lindorm.g.8xlarge: Each node has 32 dedicated CPU cores and 128 GB of dedicated memory.
	// lindorm.c.xlarge: Each node has 4 dedicated CPU cores and 8 GB of dedicated memory.
	// lindorm.c.2xlarge: Each node has 8 dedicated CPU cores and 16 GB of dedicated memory.
	// lindorm.c.4xlarge: Each node has 16 dedicated CPU cores and 32 GB of dedicated memory.
	// lindorm.c.8xlarge: Each node has 32 dedicated CPU cores and 64 GB of dedicated memory.
	StreamSpec interface{} `field:"optional" json:"streamSpec" yaml:"streamSpec"`
	// Property tsdbNum: The number of the LindormTSDB nodes in the instance.
	//
	// The valid values of this parameter depend on the value of the PayType parameter.
	// If the PayType parameter is set to PREPAY, set this parameter to an integer that ranges from 0 to 24.
	// If the PayType parameter is set to POSTPAY, set this parameter to an integer that ranges from 0 to 32.
	TsdbNum interface{} `field:"optional" json:"tsdbNum" yaml:"tsdbNum"`
	// Property tsdbSpec: The specification of the LindormTSDB nodes in the instance.
	//
	// Valid values:
	// lindorm.g.xlarge: Each node has 4 dedicated CPU cores and 16 GB of dedicated memory.
	// lindorm.g.2xlarge: Each node has 8 dedicated CPU cores and 32 GB of dedicated memory.
	// lindorm.g.4xlarge: Each node has 16 dedicated CPU cores and 64 GB of dedicated memory.
	// lindorm.g.8xlarge: Each node has 32 dedicated CPU cores and 128 GB of dedicated memory.
	TsdbSpec interface{} `field:"optional" json:"tsdbSpec" yaml:"tsdbSpec"`
	// Property vSwitchId: The ID of the vSwitch to which you want the instance to connect.
	VSwitchId interface{} `field:"optional" json:"vSwitchId" yaml:"vSwitchId"`
	// Property zoneId: The ID of the zone in which you want to create the instance.
	ZoneId interface{} `field:"optional" json:"zoneId" yaml:"zoneId"`
}

