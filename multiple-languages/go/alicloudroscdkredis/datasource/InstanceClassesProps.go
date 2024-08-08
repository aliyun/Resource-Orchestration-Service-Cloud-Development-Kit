package datasource


// Properties for defining a `InstanceClasses`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-redis-instanceclasses
type InstanceClassesProps struct {
	// Property acceptLanguage: The language of the return values.
	//
	// Valid values:
	//   zh-CN: Chinese. This is the default value.
	//   en-US: English.
	AcceptLanguage interface{} `field:"optional" json:"acceptLanguage" yaml:"acceptLanguage"`
	// Property engine: The engine type.
	//
	// Valid values:
	// Redis
	// Memcache.
	Engine interface{} `field:"optional" json:"engine" yaml:"engine"`
	// Property instanceChargeType: The billing method.
	//
	// Valid values:
	// PrePaid: subscription
	// PostPaid: pay-as-you-go
	// Note Default value: PrePaid.
	InstanceChargeType interface{} `field:"optional" json:"instanceChargeType" yaml:"instanceChargeType"`
	// Property instanceId: The ID of the resource group.
	//
	// You can call the ListResourceGroups operation to query the IDs of resource groups.
	//   Note You can also query the IDs of resource groups in the Resource Management console. For more information, see View basic information about a resource group.
	InstanceId interface{} `field:"optional" json:"instanceId" yaml:"instanceId"`
	// Property nodeId: The ID of the data node for which you want to query available instance types.
	//
	// You can call the DescribeLogicInstanceTopology operation to query the ID of the data node. Remove the number sign (#) and the content that follows the number sign. For example, retain only r-bp10noxlhcoim2****-db-0.
	//   Note Before you set this parameter, you must set the InstanceId parameter to the ID of an instance in the cluster or read\/write splitting architecture.
	NodeId interface{} `field:"optional" json:"nodeId" yaml:"nodeId"`
	// Property orderType: The order type.
	//
	// Valid values:
	// BUY: the orders that are used to purchase instances.
	// UPGRADE: the orders that are used to upgrade instances.
	// DOWNGRADE: the orders that are used to downgrade instances.
	OrderType interface{} `field:"optional" json:"orderType" yaml:"orderType"`
	// Property productType: The edition or series of instances.
	//
	// Valid values:
	//   Local: ApsaraDB for Redis Community Edition instances or performance-enhanced instances of ApsaraDB for Redis Enhanced Edition (Tair)
	//   Tair_scm: persistent memory-optimized instances
	// Tair_essd: storage-optimized instances.
	ProductType interface{} `field:"optional" json:"productType" yaml:"productType"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	// Property resourceGroupId: The ID of the instance.
	//
	// Note This parameter is required only if the OrderType parameter is set to UPGRADE or RENEW.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property zoneId: The ID of the zone where PolarDB resources that you want to query reside.
	//
	// Note You can call the DescribeRegions operation to query information about zones.
	ZoneId interface{} `field:"optional" json:"zoneId" yaml:"zoneId"`
}

