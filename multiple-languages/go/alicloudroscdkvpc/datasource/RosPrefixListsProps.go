package datasource


// Properties for defining a `RosPrefixLists`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-prefixlists
type RosPrefixListsProps struct {
	PrefixListName interface{} `field:"optional" json:"prefixListName" yaml:"prefixListName"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
}

