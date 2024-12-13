package datasource


// Properties for defining a `ResourceGroups`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-resourcemanager-resourcegroups
type ResourceGroupsProps struct {
	// Property displayName: The display name of the resource group.
	//
	// This parameter specifies a filter condition for the query. Fuzzy match is supported.The display name can be a maximum of 50 characters in length.
	DisplayName interface{} `field:"optional" json:"displayName" yaml:"displayName"`
	// Property includeTags: Whether to include the tags of the resource groups in the query results.
	IncludeTags interface{} `field:"optional" json:"includeTags" yaml:"includeTags"`
	// Property name: The identifier of the resource group.
	//
	// This parameter specifies a filter condition for the query. Fuzzy match is supported. The identifier can be a maximum of 50 characters in length and can contain letters, digits, and hyphens (-).
	Name interface{} `field:"optional" json:"name" yaml:"name"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	// Property resourceGroupIds: The IDs of the resource groups.
	//
	// This parameter specifies a filter condition for the query.You can specify a maximum of 100 resource group IDs.
	ResourceGroupIds interface{} `field:"optional" json:"resourceGroupIds" yaml:"resourceGroupIds"`
}

