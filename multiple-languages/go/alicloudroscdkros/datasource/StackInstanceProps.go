package datasource


// Properties for defining a `StackInstance`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ros-stackinstance
type StackInstanceProps struct {
	// Property stackGroupName: Resource stack group name.
	//
	// Names are unique within a single region.
	// The length must not exceed 255 characters, must start with a number or an English letter, and can contain numbers, English letters, dashes (-) and underscores (_).
	StackGroupName interface{} `field:"required" json:"stackGroupName" yaml:"stackGroupName"`
	// Property stackInstanceAccountId: The target account ID to which the resource stack belongs.
	//
	// In the self-service management permission mode, the account is an Alibaba Cloud account.
	// In service management permission mode, this account is a member account of the resource directory.
	StackInstanceAccountId interface{} `field:"required" json:"stackInstanceAccountId" yaml:"stackInstanceAccountId"`
	// Property stackInstanceRegionId: The region to which the resource stack belongs.
	StackInstanceRegionId interface{} `field:"required" json:"stackInstanceRegionId" yaml:"stackInstanceRegionId"`
	// Property outputOption: Whether to return the Outputs parameter resource stack output list.
	OutputOption interface{} `field:"optional" json:"outputOption" yaml:"outputOption"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

