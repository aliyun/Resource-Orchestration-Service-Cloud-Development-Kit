package datasource


// Properties for defining a `NatGatewayZones`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-natgatewayzones
type NatGatewayZonesProps struct {
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

