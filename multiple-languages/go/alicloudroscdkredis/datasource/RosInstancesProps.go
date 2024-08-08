package datasource


// Properties for defining a `RosInstances`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-redis-instances
type RosInstancesProps struct {
	ArchitectureType interface{} `field:"optional" json:"architectureType" yaml:"architectureType"`
	ChargeType interface{} `field:"optional" json:"chargeType" yaml:"chargeType"`
	EditionType interface{} `field:"optional" json:"editionType" yaml:"editionType"`
	EngineVersion interface{} `field:"optional" json:"engineVersion" yaml:"engineVersion"`
	Expired interface{} `field:"optional" json:"expired" yaml:"expired"`
	GlobalInstance interface{} `field:"optional" json:"globalInstance" yaml:"globalInstance"`
	InstanceClass interface{} `field:"optional" json:"instanceClass" yaml:"instanceClass"`
	InstanceIds interface{} `field:"optional" json:"instanceIds" yaml:"instanceIds"`
	InstanceStatus interface{} `field:"optional" json:"instanceStatus" yaml:"instanceStatus"`
	InstanceType interface{} `field:"optional" json:"instanceType" yaml:"instanceType"`
	NetworkType interface{} `field:"optional" json:"networkType" yaml:"networkType"`
	PrivateIp interface{} `field:"optional" json:"privateIp" yaml:"privateIp"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	SearchKey interface{} `field:"optional" json:"searchKey" yaml:"searchKey"`
	VpcId interface{} `field:"optional" json:"vpcId" yaml:"vpcId"`
	VSwitchId interface{} `field:"optional" json:"vSwitchId" yaml:"vSwitchId"`
	ZoneId interface{} `field:"optional" json:"zoneId" yaml:"zoneId"`
}

