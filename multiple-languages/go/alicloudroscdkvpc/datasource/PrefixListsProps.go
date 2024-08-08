package datasource


// Properties for defining a `PrefixLists`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-prefixlists
type PrefixListsProps struct {
	// Property prefixListName: The name of the prefix list.
	PrefixListName interface{} `field:"optional" json:"prefixListName" yaml:"prefixListName"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	// Property resourceGroupId: The ID of the resource group to which the VPC belongs.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
}

