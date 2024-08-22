package alicloudroscdkvpc


// Properties for defining a `PrefixList`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-prefixlist
type PrefixListProps struct {
	// Property entries: The CIDR address block list of the prefix list.
	Entries interface{} `field:"optional" json:"entries" yaml:"entries"`
	// Property ipVersion: The IP version of the prefix list.
	//
	// Value:
	// - **IPvv4**:IPv4 version.
	// - **IPv6**:IPv6.
	IpVersion interface{} `field:"optional" json:"ipVersion" yaml:"ipVersion"`
	// Property maxEntries: The maximum number of entries for CIDR address blocks in the prefix list.
	MaxEntries interface{} `field:"optional" json:"maxEntries" yaml:"maxEntries"`
	// Property prefixListDescription: The description of the prefix list.
	//
	// It must be 2 to 256 characters in length and must start with a letter or Chinese, but cannot start with http:\/\/ or https.
	PrefixListDescription interface{} `field:"optional" json:"prefixListDescription" yaml:"prefixListDescription"`
	// Property prefixListName: The name of the prefix list.
	PrefixListName interface{} `field:"optional" json:"prefixListName" yaml:"prefixListName"`
	// Property resourceGroupId: The ID of the resource group to which the VPC belongs.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property tags: Tags of prefix list.
	Tags *[]*RosPrefixList_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
}

