package datasource


// Properties for defining a `CommonBandwidthPackages`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-commonbandwidthpackages
type CommonBandwidthPackagesProps struct {
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
	// Property resourceGroupId: The ID of the resource group.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
}

