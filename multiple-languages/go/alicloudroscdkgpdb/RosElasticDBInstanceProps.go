package alicloudroscdkgpdb


// Properties for defining a `RosElasticDBInstance`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-gpdb-elasticdbinstance
type RosElasticDBInstanceProps struct {
	EngineVersion interface{} `field:"required" json:"engineVersion" yaml:"engineVersion"`
	InstanceSpec interface{} `field:"required" json:"instanceSpec" yaml:"instanceSpec"`
	SegNodeNum interface{} `field:"required" json:"segNodeNum" yaml:"segNodeNum"`
	SegStorageType interface{} `field:"required" json:"segStorageType" yaml:"segStorageType"`
	StorageSize interface{} `field:"required" json:"storageSize" yaml:"storageSize"`
	VSwitchId interface{} `field:"required" json:"vSwitchId" yaml:"vSwitchId"`
	ZoneId interface{} `field:"required" json:"zoneId" yaml:"zoneId"`
	DbInstanceCategory interface{} `field:"optional" json:"dbInstanceCategory" yaml:"dbInstanceCategory"`
	DbInstanceDescription interface{} `field:"optional" json:"dbInstanceDescription" yaml:"dbInstanceDescription"`
	DbInstanceMode interface{} `field:"optional" json:"dbInstanceMode" yaml:"dbInstanceMode"`
	EncryptionKey interface{} `field:"optional" json:"encryptionKey" yaml:"encryptionKey"`
	EncryptionType interface{} `field:"optional" json:"encryptionType" yaml:"encryptionType"`
	MasterNodeNum interface{} `field:"optional" json:"masterNodeNum" yaml:"masterNodeNum"`
	PayType interface{} `field:"optional" json:"payType" yaml:"payType"`
	Period interface{} `field:"optional" json:"period" yaml:"period"`
	PeriodUnit interface{} `field:"optional" json:"periodUnit" yaml:"periodUnit"`
	PrivateIpAddress interface{} `field:"optional" json:"privateIpAddress" yaml:"privateIpAddress"`
	SecurityIpList interface{} `field:"optional" json:"securityIpList" yaml:"securityIpList"`
	Tags *[]*RosElasticDBInstance_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
	VpcId interface{} `field:"optional" json:"vpcId" yaml:"vpcId"`
}

