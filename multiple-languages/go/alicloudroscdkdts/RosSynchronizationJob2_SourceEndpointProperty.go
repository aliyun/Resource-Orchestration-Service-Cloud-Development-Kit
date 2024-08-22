package alicloudroscdkdts


type RosSynchronizationJob2_SourceEndpointProperty struct {
	InstanceType interface{} `field:"required" json:"instanceType" yaml:"instanceType"`
	DatabaseName interface{} `field:"optional" json:"databaseName" yaml:"databaseName"`
	EngineName interface{} `field:"optional" json:"engineName" yaml:"engineName"`
	InstanceId interface{} `field:"optional" json:"instanceId" yaml:"instanceId"`
	Ip interface{} `field:"optional" json:"ip" yaml:"ip"`
	OracleSid interface{} `field:"optional" json:"oracleSid" yaml:"oracleSid"`
	OwnerId interface{} `field:"optional" json:"ownerId" yaml:"ownerId"`
	Password interface{} `field:"optional" json:"password" yaml:"password"`
	Port interface{} `field:"optional" json:"port" yaml:"port"`
	Region interface{} `field:"optional" json:"region" yaml:"region"`
	Role interface{} `field:"optional" json:"role" yaml:"role"`
	UserName interface{} `field:"optional" json:"userName" yaml:"userName"`
	VSwitchId interface{} `field:"optional" json:"vSwitchId" yaml:"vSwitchId"`
}

