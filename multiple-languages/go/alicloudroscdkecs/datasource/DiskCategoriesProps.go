package datasource


// Properties for defining a `DiskCategories`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-diskcategories
type DiskCategoriesProps struct {
	// Property type: The resource type to query.
	//
	// If you set Type to data,you can specify the InstanceType parameter to disk.
	// If you set Type to system, you must specify the InstanceType parameter.
	// Valid values:
	// system: system disk
	// data: data disk.
	Type interface{} `field:"required" json:"type" yaml:"type"`
	// Property zoneId: The ID of the zone for which to query resources.
	ZoneId interface{} `field:"required" json:"zoneId" yaml:"zoneId"`
	// Property dataDiskCategory: The category of the data disk.
	//
	// Valid values:
	// cloud: basic disk
	// cloud_efficiency: ultra disk
	// cloud_ssd: standard SSD
	// ephemeral_ssd: local SSD
	// cloud_essd: ESSD.
	DataDiskCategory interface{} `field:"optional" json:"dataDiskCategory" yaml:"dataDiskCategory"`
	// Property instanceType: The instance type.
	//
	// For more information,see Instance families or call the DescribeInstanceTypes,operation to query the most recent instance type list.
	// When the Type parameter is set to system or data,you must set the InstanceType parameter.
	InstanceType interface{} `field:"optional" json:"instanceType" yaml:"instanceType"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	// Property systemDiskCategory: The category of the system disk.
	//
	// Valid values:
	// cloud: basic disk
	// cloud_efficiency: ultra disk
	// cloud_ssd: standard SSD
	// ephemeral_ssd: local SSD
	// cloud_essd: ESSD.
	SystemDiskCategory interface{} `field:"optional" json:"systemDiskCategory" yaml:"systemDiskCategory"`
}

