package alicloudroscdkmongodb


// Properties for defining a `RosShardingInstance`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mongodb-shardinginstance
type RosShardingInstanceProps struct {
	ConfigServer interface{} `field:"required" json:"configServer" yaml:"configServer"`
	Mongos interface{} `field:"required" json:"mongos" yaml:"mongos"`
	ReplicaSet interface{} `field:"required" json:"replicaSet" yaml:"replicaSet"`
	AccountPassword interface{} `field:"optional" json:"accountPassword" yaml:"accountPassword"`
	AutoRenew interface{} `field:"optional" json:"autoRenew" yaml:"autoRenew"`
	ChargeType interface{} `field:"optional" json:"chargeType" yaml:"chargeType"`
	DbInstanceDescription interface{} `field:"optional" json:"dbInstanceDescription" yaml:"dbInstanceDescription"`
	EngineVersion interface{} `field:"optional" json:"engineVersion" yaml:"engineVersion"`
	HiddenZoneId interface{} `field:"optional" json:"hiddenZoneId" yaml:"hiddenZoneId"`
	NetworkType interface{} `field:"optional" json:"networkType" yaml:"networkType"`
	Period interface{} `field:"optional" json:"period" yaml:"period"`
	ProtocolType interface{} `field:"optional" json:"protocolType" yaml:"protocolType"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	RestoreTime interface{} `field:"optional" json:"restoreTime" yaml:"restoreTime"`
	SecondaryZoneId interface{} `field:"optional" json:"secondaryZoneId" yaml:"secondaryZoneId"`
	SecurityIpArray interface{} `field:"optional" json:"securityIpArray" yaml:"securityIpArray"`
	SrcDbInstanceId interface{} `field:"optional" json:"srcDbInstanceId" yaml:"srcDbInstanceId"`
	StorageEngine interface{} `field:"optional" json:"storageEngine" yaml:"storageEngine"`
	StorageType interface{} `field:"optional" json:"storageType" yaml:"storageType"`
	Tags *[]*RosShardingInstance_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
	TdeStatus interface{} `field:"optional" json:"tdeStatus" yaml:"tdeStatus"`
	VpcId interface{} `field:"optional" json:"vpcId" yaml:"vpcId"`
	VSwitchId interface{} `field:"optional" json:"vSwitchId" yaml:"vSwitchId"`
	ZoneId interface{} `field:"optional" json:"zoneId" yaml:"zoneId"`
}

