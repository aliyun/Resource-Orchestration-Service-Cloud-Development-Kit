package alicloudroscdkgpdb


// Properties for defining a `RosDBInstance`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-gpdb-dbinstance
type RosDBInstanceProps struct {
	EngineVersion interface{} `field:"required" json:"engineVersion" yaml:"engineVersion"`
	VSwitchId interface{} `field:"required" json:"vSwitchId" yaml:"vSwitchId"`
	ZoneId interface{} `field:"required" json:"zoneId" yaml:"zoneId"`
	CreateSampleData interface{} `field:"optional" json:"createSampleData" yaml:"createSampleData"`
	DbInstanceCategory interface{} `field:"optional" json:"dbInstanceCategory" yaml:"dbInstanceCategory"`
	DbInstanceClass interface{} `field:"optional" json:"dbInstanceClass" yaml:"dbInstanceClass"`
	DbInstanceDescription interface{} `field:"optional" json:"dbInstanceDescription" yaml:"dbInstanceDescription"`
	DbInstanceGroupCount interface{} `field:"optional" json:"dbInstanceGroupCount" yaml:"dbInstanceGroupCount"`
	DbInstanceMode interface{} `field:"optional" json:"dbInstanceMode" yaml:"dbInstanceMode"`
	EncryptionKey interface{} `field:"optional" json:"encryptionKey" yaml:"encryptionKey"`
	EncryptionType interface{} `field:"optional" json:"encryptionType" yaml:"encryptionType"`
	IdleTime interface{} `field:"optional" json:"idleTime" yaml:"idleTime"`
	InstanceSpec interface{} `field:"optional" json:"instanceSpec" yaml:"instanceSpec"`
	MasterNodeNum interface{} `field:"optional" json:"masterNodeNum" yaml:"masterNodeNum"`
	PayType interface{} `field:"optional" json:"payType" yaml:"payType"`
	Period interface{} `field:"optional" json:"period" yaml:"period"`
	PeriodUnit interface{} `field:"optional" json:"periodUnit" yaml:"periodUnit"`
	PrivateIpAddress interface{} `field:"optional" json:"privateIpAddress" yaml:"privateIpAddress"`
	ProdType interface{} `field:"optional" json:"prodType" yaml:"prodType"`
	SecurityIpList interface{} `field:"optional" json:"securityIpList" yaml:"securityIpList"`
	SegDiskPerformanceLevel interface{} `field:"optional" json:"segDiskPerformanceLevel" yaml:"segDiskPerformanceLevel"`
	SegNodeNum interface{} `field:"optional" json:"segNodeNum" yaml:"segNodeNum"`
	SegStorageType interface{} `field:"optional" json:"segStorageType" yaml:"segStorageType"`
	ServerlessMode interface{} `field:"optional" json:"serverlessMode" yaml:"serverlessMode"`
	ServerlessResource interface{} `field:"optional" json:"serverlessResource" yaml:"serverlessResource"`
	StorageSize interface{} `field:"optional" json:"storageSize" yaml:"storageSize"`
	Tags *[]*RosDBInstance_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
	VectorConfigurationStatus interface{} `field:"optional" json:"vectorConfigurationStatus" yaml:"vectorConfigurationStatus"`
	VpcId interface{} `field:"optional" json:"vpcId" yaml:"vpcId"`
}

