package datasource


// Properties for defining a `HaVip`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-havip
type HaVipProps struct {
	// Property haVipId: The  ID of the resource.
	HaVipId interface{} `field:"required" json:"haVipId" yaml:"haVipId"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

