package datasource


// Properties for defining a `RosDBInstances`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-rds-dbinstances
type RosDBInstancesProps struct {
	ConnectionMode interface{} `field:"optional" json:"connectionMode" yaml:"connectionMode"`
	ConnectionString interface{} `field:"optional" json:"connectionString" yaml:"connectionString"`
	DbInstanceClass interface{} `field:"optional" json:"dbInstanceClass" yaml:"dbInstanceClass"`
	DbInstanceId interface{} `field:"optional" json:"dbInstanceId" yaml:"dbInstanceId"`
	DbInstanceStatus interface{} `field:"optional" json:"dbInstanceStatus" yaml:"dbInstanceStatus"`
	DbInstanceType interface{} `field:"optional" json:"dbInstanceType" yaml:"dbInstanceType"`
	DedicatedHostGroupId interface{} `field:"optional" json:"dedicatedHostGroupId" yaml:"dedicatedHostGroupId"`
	DedicatedHostId interface{} `field:"optional" json:"dedicatedHostId" yaml:"dedicatedHostId"`
	Engine interface{} `field:"optional" json:"engine" yaml:"engine"`
	EngineVersion interface{} `field:"optional" json:"engineVersion" yaml:"engineVersion"`
	Expired interface{} `field:"optional" json:"expired" yaml:"expired"`
	InstanceLevel interface{} `field:"optional" json:"instanceLevel" yaml:"instanceLevel"`
	InstanceNetworkType interface{} `field:"optional" json:"instanceNetworkType" yaml:"instanceNetworkType"`
	PayType interface{} `field:"optional" json:"payType" yaml:"payType"`
	ProxyId interface{} `field:"optional" json:"proxyId" yaml:"proxyId"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	SearchKey interface{} `field:"optional" json:"searchKey" yaml:"searchKey"`
	VpcId interface{} `field:"optional" json:"vpcId" yaml:"vpcId"`
	VSwitchId interface{} `field:"optional" json:"vSwitchId" yaml:"vSwitchId"`
	ZoneId interface{} `field:"optional" json:"zoneId" yaml:"zoneId"`
}

