package datasource


// Properties for defining a `InstanceClasses`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-mongodb-instanceclasses
type InstanceClassesProps struct {
	// Property dbType: The database engine type of the instance.
	//
	// normal: replica set instance
	// sharding: sharded cluster instance.
	DbType interface{} `field:"optional" json:"dbType" yaml:"dbType"`
	// Property instanceChargeType: The billing method of the instance.
	//
	// Default value: PostPaid. Valid values:
	// PrePaid: subscription
	// PostPaid: pay-as-you-go.
	InstanceChargeType interface{} `field:"optional" json:"instanceChargeType" yaml:"instanceChargeType"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	// Property resourceGroupId: The ID of the resource group.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property zoneId: The zone ID of the instance.
	//
	// You can call the DescribeRegions operation to query the most recent zone list.
	ZoneId interface{} `field:"optional" json:"zoneId" yaml:"zoneId"`
}

