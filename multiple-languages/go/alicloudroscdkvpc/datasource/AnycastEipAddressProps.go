package datasource


// Properties for defining a `AnycastEipAddress`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-eipanycast-anycasteipaddress
type AnycastEipAddressProps struct {
	// Property anycastId: The ID of the Anycast EIP.
	AnycastId interface{} `field:"required" json:"anycastId" yaml:"anycastId"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

