package datasource


// Properties for defining a `VSwitch`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-vswitch
type VSwitchProps struct {
	// Property vSwitchId: The ID of the VSwitch.
	VSwitchId interface{} `field:"required" json:"vSwitchId" yaml:"vSwitchId"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

