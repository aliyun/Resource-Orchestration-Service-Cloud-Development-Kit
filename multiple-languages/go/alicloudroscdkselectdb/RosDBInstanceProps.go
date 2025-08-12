package alicloudroscdkselectdb


// Properties for defining a `RosDBInstance`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-selectdb-dbinstance
type RosDBInstanceProps struct {
	CacheSize interface{} `field:"required" json:"cacheSize" yaml:"cacheSize"`
	ChargeType interface{} `field:"required" json:"chargeType" yaml:"chargeType"`
	DbInstanceClass interface{} `field:"required" json:"dbInstanceClass" yaml:"dbInstanceClass"`
	EngineVersion interface{} `field:"required" json:"engineVersion" yaml:"engineVersion"`
	VpcId interface{} `field:"required" json:"vpcId" yaml:"vpcId"`
	VSwitchId interface{} `field:"required" json:"vSwitchId" yaml:"vSwitchId"`
	ZoneId interface{} `field:"required" json:"zoneId" yaml:"zoneId"`
	AccountPassword interface{} `field:"optional" json:"accountPassword" yaml:"accountPassword"`
	ConnectionString interface{} `field:"optional" json:"connectionString" yaml:"connectionString"`
	DbInstanceDescription interface{} `field:"optional" json:"dbInstanceDescription" yaml:"dbInstanceDescription"`
	Engine interface{} `field:"optional" json:"engine" yaml:"engine"`
	Period interface{} `field:"optional" json:"period" yaml:"period"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	SecurityIpList interface{} `field:"optional" json:"securityIpList" yaml:"securityIpList"`
	Tags *[]*RosDBInstance_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
	UsedTime interface{} `field:"optional" json:"usedTime" yaml:"usedTime"`
}

