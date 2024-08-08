package datasource


// Properties for defining a `SlsGroups`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cms-slsgroups
type SlsGroupsProps struct {
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	// Property slsGroupName: The name of the Logstore group.
	SlsGroupName interface{} `field:"optional" json:"slsGroupName" yaml:"slsGroupName"`
}

