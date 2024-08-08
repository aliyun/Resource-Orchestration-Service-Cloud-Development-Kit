package datasource


// Properties for defining a `RosZones`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-zones
type RosZonesProps struct {
	DataDiskCategory interface{} `field:"optional" json:"dataDiskCategory" yaml:"dataDiskCategory"`
	InstanceChargeType interface{} `field:"optional" json:"instanceChargeType" yaml:"instanceChargeType"`
	InstanceType interface{} `field:"optional" json:"instanceType" yaml:"instanceType"`
	IoOptimized interface{} `field:"optional" json:"ioOptimized" yaml:"ioOptimized"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	ResourceType interface{} `field:"optional" json:"resourceType" yaml:"resourceType"`
	SystemDiskCategory interface{} `field:"optional" json:"systemDiskCategory" yaml:"systemDiskCategory"`
}

