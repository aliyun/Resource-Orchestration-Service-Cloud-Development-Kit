package datasource


// Properties for defining a `RosPrefixList`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-prefixlist
type RosPrefixListProps struct {
	PrefixListId interface{} `field:"required" json:"prefixListId" yaml:"prefixListId"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

