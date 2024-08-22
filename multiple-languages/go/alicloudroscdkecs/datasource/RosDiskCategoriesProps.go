package datasource


// Properties for defining a `RosDiskCategories`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-diskcategories
type RosDiskCategoriesProps struct {
	Type interface{} `field:"required" json:"type" yaml:"type"`
	ZoneId interface{} `field:"required" json:"zoneId" yaml:"zoneId"`
	DataDiskCategory interface{} `field:"optional" json:"dataDiskCategory" yaml:"dataDiskCategory"`
	InstanceType interface{} `field:"optional" json:"instanceType" yaml:"instanceType"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	SystemDiskCategory interface{} `field:"optional" json:"systemDiskCategory" yaml:"systemDiskCategory"`
}

