package datasource


// Properties for defining a `RosDrdsInstances`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-drds-drdsinstances
type RosDrdsInstancesProps struct {
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	Type interface{} `field:"optional" json:"type" yaml:"type"`
}

