package datasource


// Properties for defining a `RosCenInstances`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cen-ceninstances
type RosCenInstancesProps struct {
	Filter interface{} `field:"optional" json:"filter" yaml:"filter"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

