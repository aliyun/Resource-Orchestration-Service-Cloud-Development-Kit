package alicloudroscdkapigateway


// Properties for defining a `AccessControl`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apigateway-accesscontrol
type AccessControlProps struct {
	// Property accessControlListName: The name of the ACL.
	//
	// The name must be 1 to 30 characters in length, and can contain letters, digits, periods (.), hyphens (-), forward slashes (\/), and underscores (_). The name must be unique within the region.
	AccessControlListName interface{} `field:"required" json:"accessControlListName" yaml:"accessControlListName"`
	// Property aclEntrys: Information list of access control policies.
	//
	// You can add at most 50 IP addresses or CIDR blocks to an ACL in each call. If the IP address or CIDR block that you want to add to an ACL already exists, the IP address or CIDR block is not added. The entries that you add must be CIDR blocks.
	AclEntrys interface{} `field:"optional" json:"aclEntrys" yaml:"aclEntrys"`
	// Property addressIpVersion: The IP version.
	//
	// Valid values: ipv4 and ipv6.
	AddressIpVersion interface{} `field:"optional" json:"addressIpVersion" yaml:"addressIpVersion"`
}

