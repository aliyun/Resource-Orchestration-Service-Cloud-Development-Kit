package datasource


// Properties for defining a `DBInstances`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-rds-dbinstances
type DBInstancesProps struct {
	// Property connectionMode: The connection mode of the instance.
	ConnectionMode interface{} `field:"optional" json:"connectionMode" yaml:"connectionMode"`
	// Property connectionString: The endpoint of the instance.
	ConnectionString interface{} `field:"optional" json:"connectionString" yaml:"connectionString"`
	// Property dbInstanceClass: The instance type of the instances.
	DbInstanceClass interface{} `field:"optional" json:"dbInstanceClass" yaml:"dbInstanceClass"`
	// Property dbInstanceId: The ID of the instance.
	DbInstanceId interface{} `field:"optional" json:"dbInstanceId" yaml:"dbInstanceId"`
	// Property dbInstanceStatus: The status of the instances.
	DbInstanceStatus interface{} `field:"optional" json:"dbInstanceStatus" yaml:"dbInstanceStatus"`
	// Property dbInstanceType: The role of the instances.
	DbInstanceType interface{} `field:"optional" json:"dbInstanceType" yaml:"dbInstanceType"`
	// Property dedicatedHostGroupId: The ID of the dedicated cluster to which the instances belong.
	DedicatedHostGroupId interface{} `field:"optional" json:"dedicatedHostGroupId" yaml:"dedicatedHostGroupId"`
	// Property dedicatedHostId: The ID of the host to which the instances belong in the specified dedicated cluster.
	DedicatedHostId interface{} `field:"optional" json:"dedicatedHostId" yaml:"dedicatedHostId"`
	// Property engine: The database engine that is run by the instances.
	Engine interface{} `field:"optional" json:"engine" yaml:"engine"`
	// Property engineVersion: The version of the database engine that is run by the instances.
	EngineVersion interface{} `field:"optional" json:"engineVersion" yaml:"engineVersion"`
	// Property expired: Specifies whether the instances have expired.
	Expired interface{} `field:"optional" json:"expired" yaml:"expired"`
	// Property instanceLevel: Specifies whether to return the RDS editions of the instances by using the Category parameter.
	InstanceLevel interface{} `field:"optional" json:"instanceLevel" yaml:"instanceLevel"`
	// Property instanceNetworkType: The network type of the instances.
	InstanceNetworkType interface{} `field:"optional" json:"instanceNetworkType" yaml:"instanceNetworkType"`
	// Property payType: The billing method of the instances.
	PayType interface{} `field:"optional" json:"payType" yaml:"payType"`
	// Property proxyId: The ID of the proxy mode.
	ProxyId interface{} `field:"optional" json:"proxyId" yaml:"proxyId"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	// Property resourceGroupId: The ID of the resource group to which the instances belong.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property searchKey: The keywords that are contained in the IDs or descriptions of the instances.
	SearchKey interface{} `field:"optional" json:"searchKey" yaml:"searchKey"`
	// Property vpcId: The ID of the virtual private cloud (VPC) to which the instances belong.
	VpcId interface{} `field:"optional" json:"vpcId" yaml:"vpcId"`
	// Property vSwitchId: The ID of the vSwitch that is associated with the specified VPC.
	VSwitchId interface{} `field:"optional" json:"vSwitchId" yaml:"vSwitchId"`
	// Property zoneId: The ID of the zone to which the instances belong.
	ZoneId interface{} `field:"optional" json:"zoneId" yaml:"zoneId"`
}

