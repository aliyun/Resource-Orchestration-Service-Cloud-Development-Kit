package datasource


// Properties for defining a `RosCommonBandwidthPackage`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-commonbandwidthpackage
type RosCommonBandwidthPackageProps struct {
	CommonBandwidthPackageId interface{} `field:"optional" json:"commonBandwidthPackageId" yaml:"commonBandwidthPackageId"`
	CommonBandwidthPackageName interface{} `field:"optional" json:"commonBandwidthPackageName" yaml:"commonBandwidthPackageName"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

