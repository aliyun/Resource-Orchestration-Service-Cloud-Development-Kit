package datasource


// Properties for defining a `BandwidthPackages`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ga-bandwidthpackages
type BandwidthPackagesProps struct {
	// Property bandwidthPackageId: The Resource ID of the bandwidth.
	BandwidthPackageId interface{} `field:"optional" json:"bandwidthPackageId" yaml:"bandwidthPackageId"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	// Property resourceGroupId: The ID of the resource group.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property type: The type of the bandwidth package.
	//
	// Value:
	// Basic: Basic bandwidth package.
	// CrossDomain: cross-region acceleration package.
	// China Station only supports Basic.
	Type interface{} `field:"optional" json:"type" yaml:"type"`
}

