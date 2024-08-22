package datasource


// Properties for defining a `AccessControls`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-accesscontrols
type AccessControlsProps struct {
	// Property aclName: The name of the network ACL.
	AclName interface{} `field:"optional" json:"aclName" yaml:"aclName"`
	// Property addressIpVersion: The IP version.
	//
	// Valid values: ipv4 and ipv6.
	AddressIpVersion interface{} `field:"optional" json:"addressIpVersion" yaml:"addressIpVersion"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	// Property resourceGroupId: The ID of the resource group to which the network ACL belongs.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
}

