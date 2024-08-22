package datasource


// Properties for defining a `PublicIpAddressPool`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-publicipaddresspool
type PublicIpAddressPoolProps struct {
	// Property publicIpAddressPoolId: The first ID of the resource.
	PublicIpAddressPoolId interface{} `field:"required" json:"publicIpAddressPoolId" yaml:"publicIpAddressPoolId"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

