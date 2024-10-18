package datasource


// Properties for defining a `DedicatedHostGroup`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cddc-dedicatedhostgroup
type DedicatedHostGroupProps struct {
	// Property dedicatedHostGroupId: Dedicated Host Group ID.
	DedicatedHostGroupId interface{} `field:"required" json:"dedicatedHostGroupId" yaml:"dedicatedHostGroupId"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

