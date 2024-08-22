package datasource


// Properties for defining a `DedicatedHostGroups`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cddc-dedicatedhostgroups
type DedicatedHostGroupsProps struct {
	// Property dedicatedHostGroupId: Dedicated Host Group ID.
	DedicatedHostGroupId interface{} `field:"optional" json:"dedicatedHostGroupId" yaml:"dedicatedHostGroupId"`
	// Property engine: Database Engine Type.
	Engine interface{} `field:"optional" json:"engine" yaml:"engine"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

