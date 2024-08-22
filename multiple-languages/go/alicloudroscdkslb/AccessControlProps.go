package alicloudroscdkslb


// Properties for defining a `AccessControl`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-slb-accesscontrol
type AccessControlProps struct {
	// Property aclName: The name of the access control list.
	AclName interface{} `field:"required" json:"aclName" yaml:"aclName"`
	// Property aclEntries: A list of acl entries.
	//
	// Each entry can be IP addresses or CIDR blocks. Max length: 300.
	AclEntries interface{} `field:"optional" json:"aclEntries" yaml:"aclEntries"`
	// Property addressIpVersion: IP version.
	//
	// Could be "ipv4" or "ipv6".
	AddressIpVersion interface{} `field:"optional" json:"addressIpVersion" yaml:"addressIpVersion"`
	// Property resourceGroupId: Resource group id.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property tags: Tags to attach to instance.
	//
	// Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
	Tags *[]*RosAccessControl_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
}

