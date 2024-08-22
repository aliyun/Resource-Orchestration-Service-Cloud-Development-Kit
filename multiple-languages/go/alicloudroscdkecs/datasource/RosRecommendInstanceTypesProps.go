package datasource


// Properties for defining a `RosRecommendInstanceTypes`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-recommendinstancetypes
type RosRecommendInstanceTypesProps struct {
	Cores interface{} `field:"optional" json:"cores" yaml:"cores"`
	InstanceChargeType interface{} `field:"optional" json:"instanceChargeType" yaml:"instanceChargeType"`
	InstanceFamilyLevel interface{} `field:"optional" json:"instanceFamilyLevel" yaml:"instanceFamilyLevel"`
	InstanceType interface{} `field:"optional" json:"instanceType" yaml:"instanceType"`
	InstanceTypeFamilies interface{} `field:"optional" json:"instanceTypeFamilies" yaml:"instanceTypeFamilies"`
	IoOptimized interface{} `field:"optional" json:"ioOptimized" yaml:"ioOptimized"`
	MaxPrice interface{} `field:"optional" json:"maxPrice" yaml:"maxPrice"`
	Memory interface{} `field:"optional" json:"memory" yaml:"memory"`
	PriorityStrategy interface{} `field:"optional" json:"priorityStrategy" yaml:"priorityStrategy"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	Scene interface{} `field:"optional" json:"scene" yaml:"scene"`
	SpotStrategy interface{} `field:"optional" json:"spotStrategy" yaml:"spotStrategy"`
	SystemDiskCategory interface{} `field:"optional" json:"systemDiskCategory" yaml:"systemDiskCategory"`
	ZoneId interface{} `field:"optional" json:"zoneId" yaml:"zoneId"`
	ZoneMatchMode interface{} `field:"optional" json:"zoneMatchMode" yaml:"zoneMatchMode"`
}

