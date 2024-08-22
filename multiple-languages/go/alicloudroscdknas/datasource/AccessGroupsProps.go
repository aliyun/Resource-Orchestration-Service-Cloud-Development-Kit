package datasource


// Properties for defining a `AccessGroups`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-nas-accessgroups
type AccessGroupsProps struct {
	// Property accessGroupName: The name of the permission group.
	AccessGroupName interface{} `field:"optional" json:"accessGroupName" yaml:"accessGroupName"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

