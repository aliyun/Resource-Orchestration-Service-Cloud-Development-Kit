package alicloudroscdkecs


// Properties for defining a `PrefixList`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-prefixlist
type PrefixListProps struct {
	// Property addressFamily: The IP address family.
	//
	// Valid values: IPv4 IPv6.
	AddressFamily interface{} `field:"required" json:"addressFamily" yaml:"addressFamily"`
	// Property maxEntries: The maximum number of entries that the prefix list can contain.
	//
	// Valid values: 1 to 200.
	MaxEntries interface{} `field:"required" json:"maxEntries" yaml:"maxEntries"`
	// Property prefixListName: The name of the prefix.
	//
	// The name must be 2 to 128 characters in length. It must start with a letter and cannot start with http:\/\/, https:\/\/, com.aliyun, or com.alibabacloud. It can contain letters, digits, colons (:), underscores (_), periods (.), and hyphens (-).
	PrefixListName interface{} `field:"required" json:"prefixListName" yaml:"prefixListName"`
	// Property description: The description of the prefix list.
	//
	// The description must be 2 to 256 characters in length and cannot start with http:\/\/ or https:\/\/.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property entries:.
	Entries interface{} `field:"optional" json:"entries" yaml:"entries"`
}

