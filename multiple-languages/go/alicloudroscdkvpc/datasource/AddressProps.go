package datasource


// Properties for defining a `Address`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-eip-address
type AddressProps struct {
	// Property allocationId: The ID of the EIP instance.
	AllocationId interface{} `field:"required" json:"allocationId" yaml:"allocationId"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

