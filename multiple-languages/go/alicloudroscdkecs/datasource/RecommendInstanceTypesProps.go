package datasource


// Properties for defining a `RecommendInstanceTypes`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-recommendinstancetypes
type RecommendInstanceTypesProps struct {
	// Property cores: The number of vCPUs of the instance.
	//
	// Note If the Cores and Memory parameters are both specified, all instance types that offer the vCPUs and memory size specified by the parameters are matched.
	Cores interface{} `field:"optional" json:"cores" yaml:"cores"`
	// Property instanceChargeType: The billing method of the instances of the instance type.
	//
	// Valid values:
	// PrePaid: subscription
	// PostPaid: pay-as-you-go
	// Default value: PostPaid.
	InstanceChargeType interface{} `field:"optional" json:"instanceChargeType" yaml:"instanceChargeType"`
	// Property instanceFamilyLevel: The level of the instance family.
	//
	// Valid values: EntryLevel, EnterpriseLevel, CreditEntryLevel.
	InstanceFamilyLevel interface{} `field:"optional" json:"instanceFamilyLevel" yaml:"instanceFamilyLevel"`
	// Property instanceType: The specified instance type.
	//
	// For more information, see Instance families or call ECS DescribeInstanceTypes operation to query the most recent instance type list.
	// Note If the InstanceType parameter is specified, none of the Cores and Memory parameters can be specified.
	InstanceType interface{} `field:"optional" json:"instanceType" yaml:"instanceType"`
	// Property instanceTypeFamilies: The list of instance family to be filtered out.
	//
	// You can also call ECS DescribeInstanceTypeFamilies operation to query the list of instance families.
	InstanceTypeFamilies interface{} `field:"optional" json:"instanceTypeFamilies" yaml:"instanceTypeFamilies"`
	// Property ioOptimized: Specifies whether to match I\/O optimized instances.
	//
	// The IoOptimized parameter cannot be specified when the instance is not I\/O optimized. Valid values:
	// optimized: matches I\/O optimized instances.
	// none: matches non-I\/O optimized instances.
	// Default value: optimized.
	// If you query alternative instance types for retired instance types, this parameter is set to none by default.
	// Default value: none.
	IoOptimized interface{} `field:"optional" json:"ioOptimized" yaml:"ioOptimized"`
	// Property maxPrice: The maximum hourly price for pay-as-you-go instances or preemptible instances.
	//
	// Note If this parameter is specified, the SpotStrategy parameter must be set to SpotWithPriceLimit.
	MaxPrice interface{} `field:"optional" json:"maxPrice" yaml:"maxPrice"`
	// Property memory: The memory size of the instance.
	//
	// Unit: GiB.
	// Note If the Cores and Memory parameters are both specified, all instance types that offer the vCPUs and memory size specified by the parameters are matched.
	Memory interface{} `field:"optional" json:"memory" yaml:"memory"`
	// Property priorityStrategy: The policy for recommending instance types.
	//
	// Valid values:
	// InventoryFirst: Instance types are recommended in descending order based on resource availability.
	// PriceFirst: Instance types are recommended in ascending order based on hourly price per vCPU.
	// NewProductFirst: The latest instance types are recommended first.
	// Default value: InventoryFirst.
	PriorityStrategy interface{} `field:"optional" json:"priorityStrategy" yaml:"priorityStrategy"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	// Property scene: Specifies the scenario in which the instance type is recommended.
	//
	// Valid values:
	// UPGRADE: instance type upgrade or downgrade
	// CREATE: instance creation
	// Default value: CREATE.
	Scene interface{} `field:"optional" json:"scene" yaml:"scene"`
	// Property spotStrategy: The bidding policy of preemptible instances.
	//
	// Valid values:
	// NoSpot: applies to regular pay-as-you-go instances.
	// SpotWithPriceLimit: applies to preemptible instances that have user-defined maximum hourly prices.
	// SpotAsPriceGo: applies to preemptible instances that are of the market price at the time of purchase.
	// Note If the SpotStrategy parameter is specified, the InstanceChargeType parameter must be set to PostPaid.
	// Default value: NoSpot.
	SpotStrategy interface{} `field:"optional" json:"spotStrategy" yaml:"spotStrategy"`
	// Property systemDiskCategory: The category of the system disk.
	//
	// Valid values:
	// cloud_efficiency: ultra disk
	// cloud_ssd: standard SSD
	// cloud_essd: enhanced SSD (ESSD)
	// cloud: basic disk
	// For non-I\/O optimized instances, the default value is cloud.
	// For I\/O optimized instances, the default value is cloud_efficiency.
	SystemDiskCategory interface{} `field:"optional" json:"systemDiskCategory" yaml:"systemDiskCategory"`
	// Property zoneId: The zone ID of the alternative instance types.
	//
	// You can call ECS DescribeZones operation to query the most recent zone list.When you specify this parameter, we recommend that you set ZoneMatchMode to the default value Include. This value indicates that instance types in the zone specified by ZoneId are preferentially recommended, and instance types in other zones in the same region are also listed.
	ZoneId interface{} `field:"optional" json:"zoneId" yaml:"zoneId"`
	// Property zoneMatchMode: Specifies which alternative instance types are recommended.
	//
	// Valid values:
	// Strict: recommends only alternative instance types in the zone specified by ZoneId.
	// Include: recommends all instance types in all the zones in the same region as the specified instance type.
	// When ZoneId is specified, the default value of this parameter is Strict. This value indicates that only alternative instance types in the zone specified by ZoneId are recommended.
	ZoneMatchMode interface{} `field:"optional" json:"zoneMatchMode" yaml:"zoneMatchMode"`
}

