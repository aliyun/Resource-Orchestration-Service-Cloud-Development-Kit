package datasource


// Properties for defining a `RosInstances`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-mongodb-instances
type RosInstancesProps struct {
	ChargeType interface{} `field:"optional" json:"chargeType" yaml:"chargeType"`
	ConnectionDomain interface{} `field:"optional" json:"connectionDomain" yaml:"connectionDomain"`
	DbInstanceClass interface{} `field:"optional" json:"dbInstanceClass" yaml:"dbInstanceClass"`
	DbInstanceDescription interface{} `field:"optional" json:"dbInstanceDescription" yaml:"dbInstanceDescription"`
	DbInstanceId interface{} `field:"optional" json:"dbInstanceId" yaml:"dbInstanceId"`
	DbInstanceStatus interface{} `field:"optional" json:"dbInstanceStatus" yaml:"dbInstanceStatus"`
	DbInstanceType interface{} `field:"optional" json:"dbInstanceType" yaml:"dbInstanceType"`
	EngineVersion interface{} `field:"optional" json:"engineVersion" yaml:"engineVersion"`
	Expired interface{} `field:"optional" json:"expired" yaml:"expired"`
	NetworkType interface{} `field:"optional" json:"networkType" yaml:"networkType"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	ReplicationFactor interface{} `field:"optional" json:"replicationFactor" yaml:"replicationFactor"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	Tags *[]*RosInstances_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
	VpcId interface{} `field:"optional" json:"vpcId" yaml:"vpcId"`
	VSwitchId interface{} `field:"optional" json:"vSwitchId" yaml:"vSwitchId"`
	ZoneId interface{} `field:"optional" json:"zoneId" yaml:"zoneId"`
}

