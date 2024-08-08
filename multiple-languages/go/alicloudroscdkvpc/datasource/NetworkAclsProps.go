package datasource


// Properties for defining a `NetworkAcls`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-networkacls
type NetworkAclsProps struct {
	// Property networkAclId: The ID of the network ACL.
	NetworkAclId interface{} `field:"optional" json:"networkAclId" yaml:"networkAclId"`
	// Property networkAclName: The name of the network ACL.
	//
	// The name must be 2 to 128 characters in length, and can contain letters, digits, underscores (_), and hyphens (-). The name must start with a letter but cannot start with http:\/\/ or https:\/\/.
	NetworkAclName interface{} `field:"optional" json:"networkAclName" yaml:"networkAclName"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	// Property resourceId: The ID of the associated instance.This parameter is valid only if ResourceType and ResourceId are both set.
	ResourceId interface{} `field:"optional" json:"resourceId" yaml:"resourceId"`
	// Property resourceType: The type of the associated instance.
	//
	// Set the value to VSwitch.
	// This parameter is valid only if ResourceType and ResourceId are both set.
	ResourceType interface{} `field:"optional" json:"resourceType" yaml:"resourceType"`
	// Property vpcId: The ID of the virtual private cloud (VPC) to which the network ACL belongs.
	VpcId interface{} `field:"optional" json:"vpcId" yaml:"vpcId"`
}

