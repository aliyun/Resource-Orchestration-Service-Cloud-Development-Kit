package datasource


// Properties for defining a `RosBandwidthPackage`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ga-bandwidthpackage
type RosBandwidthPackageProps struct {
	BandwidthPackageId interface{} `field:"required" json:"bandwidthPackageId" yaml:"bandwidthPackageId"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

