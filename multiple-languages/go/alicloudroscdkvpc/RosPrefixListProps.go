package alicloudroscdkvpc


// Properties for defining a `RosPrefixList`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-prefixlist
type RosPrefixListProps struct {
	Entries interface{} `field:"optional" json:"entries" yaml:"entries"`
	IpVersion interface{} `field:"optional" json:"ipVersion" yaml:"ipVersion"`
	MaxEntries interface{} `field:"optional" json:"maxEntries" yaml:"maxEntries"`
	PrefixListDescription interface{} `field:"optional" json:"prefixListDescription" yaml:"prefixListDescription"`
	PrefixListName interface{} `field:"optional" json:"prefixListName" yaml:"prefixListName"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	Tags *[]*RosPrefixList_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
}

