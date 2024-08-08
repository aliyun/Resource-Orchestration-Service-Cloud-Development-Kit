package datasource


// Properties for defining a `Instances`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-mongodb-instances
type InstancesProps struct {
	// Property chargeType: The billing method of the instance.
	//
	// Valid values:
	// PostPaid: pay-as-you-go
	// PrePaid: subscription.
	ChargeType interface{} `field:"optional" json:"chargeType" yaml:"chargeType"`
	// Property connectionDomain: The endpoint of the node.
	//
	// You can call the DescribeDBInstanceAttribute operation to query the endpoint of the node.
	ConnectionDomain interface{} `field:"optional" json:"connectionDomain" yaml:"connectionDomain"`
	// Property dbInstanceClass: The instance type.
	//
	// For more information about valid values, see Instance types.
	DbInstanceClass interface{} `field:"optional" json:"dbInstanceClass" yaml:"dbInstanceClass"`
	// Property dbInstanceDescription: The description of the instance.
	DbInstanceDescription interface{} `field:"optional" json:"dbInstanceDescription" yaml:"dbInstanceDescription"`
	// Property dbInstanceId: The ID of the instance.
	DbInstanceId interface{} `field:"optional" json:"dbInstanceId" yaml:"dbInstanceId"`
	// Property dbInstanceStatus: The state of the instance.
	//
	// For more information about valid values, see Instance states.
	DbInstanceStatus interface{} `field:"optional" json:"dbInstanceStatus" yaml:"dbInstanceStatus"`
	// Property dbInstanceType: The category of the instance.
	//
	// Default value: replicate. Valid values:
	// sharding: sharded cluster instance
	// replicate: replica set or standalone instance
	// Note
	// To query the list of sharded cluster instances, you must set the parameter to sharding.
	// This operation displays the list of replica set and standalone instances when the parameter uses the default value replicate.
	DbInstanceType interface{} `field:"optional" json:"dbInstanceType" yaml:"dbInstanceType"`
	// Property engineVersion: The database engine version of the instance.
	//
	// Valid values:
	// 5.0
	// 4.4
	// 4.2
	// 4.0
	// 3.4
	EngineVersion interface{} `field:"optional" json:"engineVersion" yaml:"engineVersion"`
	// Property expired: Specifies whether the instance expires.
	//
	// Valid values:
	// true: The instance expires.
	// false: The instance does not expire.
	Expired interface{} `field:"optional" json:"expired" yaml:"expired"`
	// Property networkType: The network type of the instance.
	//
	// Valid values:
	// Classic
	// Vpc.
	NetworkType interface{} `field:"optional" json:"networkType" yaml:"networkType"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	// Property replicationFactor: The number of nodes in a replica set instance.
	//
	// Valid values: 3, 5, and 7.
	ReplicationFactor interface{} `field:"optional" json:"replicationFactor" yaml:"replicationFactor"`
	// Property resourceGroupId: The ID of the resource group.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property tags: Tags of instance.
	Tags *[]*RosInstances_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
	// Property vpcId: The VPC ID of the instance.
	VpcId interface{} `field:"optional" json:"vpcId" yaml:"vpcId"`
	// Property vSwitchId: The vSwitch ID of the instance.
	VSwitchId interface{} `field:"optional" json:"vSwitchId" yaml:"vSwitchId"`
	// Property zoneId: The zone ID of the instance.
	//
	// You can call the DescribeRegions operation to query the most recent zone list.
	ZoneId interface{} `field:"optional" json:"zoneId" yaml:"zoneId"`
}

