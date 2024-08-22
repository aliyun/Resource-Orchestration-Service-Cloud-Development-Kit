package datasource


// Properties for defining a `RosCenBandwidthPackages`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cen-cenbandwidthpackages
type RosCenBandwidthPackagesProps struct {
	Filter interface{} `field:"optional" json:"filter" yaml:"filter"`
	IncludeReservationData interface{} `field:"optional" json:"includeReservationData" yaml:"includeReservationData"`
	IsOrKey interface{} `field:"optional" json:"isOrKey" yaml:"isOrKey"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

