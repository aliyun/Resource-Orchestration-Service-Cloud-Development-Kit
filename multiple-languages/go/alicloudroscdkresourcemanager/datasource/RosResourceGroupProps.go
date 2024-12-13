package datasource


// Properties for defining a `RosResourceGroup`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-resourcemanager-resourcegroup
type RosResourceGroupProps struct {
	IncludeTags interface{} `field:"optional" json:"includeTags" yaml:"includeTags"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
}

