package datasource


// Properties for defining a `CommonBandwidthPackage`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-commonbandwidthpackage
type CommonBandwidthPackageProps struct {
	// Property commonBandwidthPackageId: The ID of the Internet shared bandwidth.
	CommonBandwidthPackageId interface{} `field:"optional" json:"commonBandwidthPackageId" yaml:"commonBandwidthPackageId"`
	// Property commonBandwidthPackageName: The name of the Internet Shared Bandwidth instance.
	CommonBandwidthPackageName interface{} `field:"optional" json:"commonBandwidthPackageName" yaml:"commonBandwidthPackageName"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

