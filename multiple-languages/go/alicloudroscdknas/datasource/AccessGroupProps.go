package datasource


// Properties for defining a `AccessGroup`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-nas-accessgroup
type AccessGroupProps struct {
	// Property accessGroupName: The name of the permission group.
	AccessGroupName interface{} `field:"required" json:"accessGroupName" yaml:"accessGroupName"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

