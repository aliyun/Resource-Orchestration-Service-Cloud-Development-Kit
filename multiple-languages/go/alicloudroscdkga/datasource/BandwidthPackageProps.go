package datasource


// Properties for defining a `BandwidthPackage`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ga-bandwidthpackage
type BandwidthPackageProps struct {
	// Property bandwidthPackageId: The Resource ID of the bandwidth.
	BandwidthPackageId interface{} `field:"required" json:"bandwidthPackageId" yaml:"bandwidthPackageId"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

