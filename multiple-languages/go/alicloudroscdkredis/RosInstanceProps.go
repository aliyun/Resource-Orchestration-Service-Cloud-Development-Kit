package alicloudroscdkredis


// Properties for defining a `RosInstance`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-redis-instance
type RosInstanceProps struct {
	AutoRenewDuration interface{} `field:"optional" json:"autoRenewDuration" yaml:"autoRenewDuration"`
	BackupPolicy interface{} `field:"optional" json:"backupPolicy" yaml:"backupPolicy"`
	ChargeType interface{} `field:"optional" json:"chargeType" yaml:"chargeType"`
	Connections interface{} `field:"optional" json:"connections" yaml:"connections"`
	DeletionForce interface{} `field:"optional" json:"deletionForce" yaml:"deletionForce"`
	EngineVersion interface{} `field:"optional" json:"engineVersion" yaml:"engineVersion"`
	EvictionPolicy interface{} `field:"optional" json:"evictionPolicy" yaml:"evictionPolicy"`
	InstanceClass interface{} `field:"optional" json:"instanceClass" yaml:"instanceClass"`
	InstanceMaintainTime interface{} `field:"optional" json:"instanceMaintainTime" yaml:"instanceMaintainTime"`
	InstanceName interface{} `field:"optional" json:"instanceName" yaml:"instanceName"`
	NodeType interface{} `field:"optional" json:"nodeType" yaml:"nodeType"`
	Password interface{} `field:"optional" json:"password" yaml:"password"`
	Period interface{} `field:"optional" json:"period" yaml:"period"`
	PeriodUnit interface{} `field:"optional" json:"periodUnit" yaml:"periodUnit"`
	ProductType interface{} `field:"optional" json:"productType" yaml:"productType"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	SecondaryZoneId interface{} `field:"optional" json:"secondaryZoneId" yaml:"secondaryZoneId"`
	SecurityGroupId interface{} `field:"optional" json:"securityGroupId" yaml:"securityGroupId"`
	ShardCount interface{} `field:"optional" json:"shardCount" yaml:"shardCount"`
	SslEnabled interface{} `field:"optional" json:"sslEnabled" yaml:"sslEnabled"`
	Tags *[]*RosInstance_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
	TairConfig interface{} `field:"optional" json:"tairConfig" yaml:"tairConfig"`
	VpcId interface{} `field:"optional" json:"vpcId" yaml:"vpcId"`
	VpcPasswordFree interface{} `field:"optional" json:"vpcPasswordFree" yaml:"vpcPasswordFree"`
	VSwitchId interface{} `field:"optional" json:"vSwitchId" yaml:"vSwitchId"`
	ZoneId interface{} `field:"optional" json:"zoneId" yaml:"zoneId"`
}

