package alicloudroscdkga


// Properties for defining a `Acl`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-acl
type AclProps struct {
	// Property addressIpVersion: The IP version of the ACL.
	AddressIpVersion interface{} `field:"required" json:"addressIpVersion" yaml:"addressIpVersion"`
	// Property aclEntries: The entries of IP addresses or CIDR blocks to add to the ACL.
	//
	// You can add up to 20 entries.
	AclEntries interface{} `field:"optional" json:"aclEntries" yaml:"aclEntries"`
	// Property aclName: The name of the ACL.
	AclName interface{} `field:"optional" json:"aclName" yaml:"aclName"`
	// Property resourceGroupId: The ID of the resource group.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property tags: Tags of the ACL.
	Tags *[]*RosAcl_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
}

