package datasource


// Properties for defining a `CenBandwidthPackages`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cen-cenbandwidthpackages
type CenBandwidthPackagesProps struct {
	// Property filter: Filter value when querying resources.
	Filter interface{} `field:"optional" json:"filter" yaml:"filter"`
	// Property includeReservationData: Specifies whether to include renewal data.
	IncludeReservationData interface{} `field:"optional" json:"includeReservationData" yaml:"includeReservationData"`
	// Property isOrKey: The logical operator between the filter conditions.
	IsOrKey interface{} `field:"optional" json:"isOrKey" yaml:"isOrKey"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

