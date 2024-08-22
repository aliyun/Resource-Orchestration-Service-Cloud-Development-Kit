package datasource


// Properties for defining a `RosCommonBandwidthPackages`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-commonbandwidthpackages
type RosCommonBandwidthPackagesProps struct {
	CommonBandwidthPackageId interface{} `field:"optional" json:"commonBandwidthPackageId" yaml:"commonBandwidthPackageId"`
	CommonBandwidthPackageName interface{} `field:"optional" json:"commonBandwidthPackageName" yaml:"commonBandwidthPackageName"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
}

