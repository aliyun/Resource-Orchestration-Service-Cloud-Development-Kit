package datasource


// Properties for defining a `ResourceGroup`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-resourcemanager-resourcegroup
type ResourceGroupProps struct {
	// Property includeTags: Whether to include the tags of the resource group in the query results.
	IncludeTags interface{} `field:"optional" json:"includeTags" yaml:"includeTags"`
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

