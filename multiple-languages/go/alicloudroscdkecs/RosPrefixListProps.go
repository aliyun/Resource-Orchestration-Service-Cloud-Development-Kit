package alicloudroscdkecs


// Properties for defining a `RosPrefixList`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-prefixlist
type RosPrefixListProps struct {
	AddressFamily interface{} `field:"required" json:"addressFamily" yaml:"addressFamily"`
	MaxEntries interface{} `field:"required" json:"maxEntries" yaml:"maxEntries"`
	PrefixListName interface{} `field:"required" json:"prefixListName" yaml:"prefixListName"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	Entries interface{} `field:"optional" json:"entries" yaml:"entries"`
}

