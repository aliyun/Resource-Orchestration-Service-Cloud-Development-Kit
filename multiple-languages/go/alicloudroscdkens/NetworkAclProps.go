package alicloudroscdkens


// Properties for defining a `NetworkAcl`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ens-networkacl
type NetworkAclProps struct {
	// Property aclEntries: The entry of Network ACL.
	AclEntries interface{} `field:"optional" json:"aclEntries" yaml:"aclEntries"`
	// Property description: The description of the network ACL.
	//
	// The description must be 1 to 256 characters in length and cannot start with http:\/\/ or https:\/\/.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property networkAclName: Enter a name for the network ACL.
	//
	// The name must be 1 to 128 characters in length and cannot start with http:\/\/ or https:\/\/.
	NetworkAclName interface{} `field:"optional" json:"networkAclName" yaml:"networkAclName"`
}

