package datasource


// Properties for defining a `RosBandwidthPackages`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ga-bandwidthpackages
type RosBandwidthPackagesProps struct {
	BandwidthPackageId interface{} `field:"optional" json:"bandwidthPackageId" yaml:"bandwidthPackageId"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	Type interface{} `field:"optional" json:"type" yaml:"type"`
}

