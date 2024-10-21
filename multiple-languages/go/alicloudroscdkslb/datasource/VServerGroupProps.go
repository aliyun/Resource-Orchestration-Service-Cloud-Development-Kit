package datasource


// Properties for defining a `VServerGroup`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-vservergroup
type VServerGroupProps struct {
	// Property vServerGroupId: The ID of the vServer group.
	VServerGroupId interface{} `field:"required" json:"vServerGroupId" yaml:"vServerGroupId"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

