package datasource


// Properties for defining a `RosStackGroups`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ros-stackgroups
type RosStackGroupsProps struct {
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
}

