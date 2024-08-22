package datasource


// Properties for defining a `Acl`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ga-acl
type AclProps struct {
	// Property aclId: The ID of the ACL.
	AclId interface{} `field:"required" json:"aclId" yaml:"aclId"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

