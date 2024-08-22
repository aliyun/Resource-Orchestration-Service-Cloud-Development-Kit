package datasource


// Properties for defining a `Zones`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-zones
type ZonesProps struct {
	// Property dataDiskCategory: The category of the data disk.
	//
	// Valid values:
	// cloud: basic disk
	// cloud_efficiency: ultra disk
	// cloud_ssd: standard SSD
	// ephemeral_ssd: local SSD
	// cloud_essd: enhanced SSD (ESSD).
	DataDiskCategory interface{} `field:"optional" json:"dataDiskCategory" yaml:"dataDiskCategory"`
	// Property instanceChargeType: The billing method of the resource.
	//
	// For more information, see Billing overview. Valid values:
	// PrePaid: subscription
	// PostPaid: pay-as-you-go
	// Default value: PostPaid.
	InstanceChargeType interface{} `field:"optional" json:"instanceChargeType" yaml:"instanceChargeType"`
	// Property instanceType: The instance type.
	InstanceType interface{} `field:"optional" json:"instanceType" yaml:"instanceType"`
	// Property ioOptimized: Specifies whether the instance is I\/O optimized.
	//
	// Valid values:
	// none: non-I\/O optimized
	// optimized: I\/O optimized
	// Default value: optimized.
	IoOptimized interface{} `field:"optional" json:"ioOptimized" yaml:"ioOptimized"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	// Property resourceType: The type of the resource.
	//
	// Valid values:
	// instance: ECS instance
	// disk: cloud disk
	// reservedinstance: reserved instance
	// ddh: dedicated host.
	ResourceType interface{} `field:"optional" json:"resourceType" yaml:"resourceType"`
	// Property systemDiskCategory: The category of the system disk.
	//
	// Valid values:
	// cloud: basic disk
	// cloud_efficiency: ultra disk
	// cloud_ssd: standard SSD
	// ephemeral_ssd: local SSD
	// cloud_essd: enhanced SSD (ESSD).
	SystemDiskCategory interface{} `field:"optional" json:"systemDiskCategory" yaml:"systemDiskCategory"`
}

