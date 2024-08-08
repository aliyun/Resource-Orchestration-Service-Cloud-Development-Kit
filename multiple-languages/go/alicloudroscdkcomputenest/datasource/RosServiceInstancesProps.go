package datasource


// Properties for defining a `RosServiceInstances`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-computenest-serviceinstances
type RosServiceInstancesProps struct {
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
}

