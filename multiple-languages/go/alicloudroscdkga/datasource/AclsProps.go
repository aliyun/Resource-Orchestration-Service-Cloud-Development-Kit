package datasource


// Properties for defining a `Acls`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ga-acls
type AclsProps struct {
	// Property aclId: The  ID of the Acl.
	AclId interface{} `field:"optional" json:"aclId" yaml:"aclId"`
	// Property aclName: The name of the acl.
	AclName interface{} `field:"optional" json:"aclName" yaml:"aclName"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	// Property resourceGroupId: The ID of the resource group.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
}

