package alicloudroscdkalb


// Properties for defining a `Acl`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-alb-acl
type AclProps struct {
	// Property aclEntries: undefined.
	AclEntries interface{} `field:"optional" json:"aclEntries" yaml:"aclEntries"`
	// Property aclName: The name of the ACL.
	//
	// The name must be 2 to 128 characters in length, and can contain
	// letters, digits, hyphens (-) and underscores (_). It must start with a letter.
	AclName interface{} `field:"optional" json:"aclName" yaml:"aclName"`
	// Property resourceGroupId: The ID of the resource group.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
}

