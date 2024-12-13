package datasource


// Properties for defining a `RosResourceGroups`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-resourcemanager-resourcegroups
type RosResourceGroupsProps struct {
	DisplayName interface{} `field:"optional" json:"displayName" yaml:"displayName"`
	IncludeTags interface{} `field:"optional" json:"includeTags" yaml:"includeTags"`
	Name interface{} `field:"optional" json:"name" yaml:"name"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	ResourceGroupIds interface{} `field:"optional" json:"resourceGroupIds" yaml:"resourceGroupIds"`
}

