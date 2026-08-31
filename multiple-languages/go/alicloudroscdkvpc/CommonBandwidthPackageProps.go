package alicloudroscdkvpc


// Properties for defining a `CommonBandwidthPackage`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-commonbandwidthpackage
type CommonBandwidthPackageProps struct {
	// Property bandwidth: The maximum bandwidth of the Internet Shared Bandwidth instance.
	//
	// Unit: Mbit\/s.
	// Valid values: 1 to 1000. Default value: 1.
	Bandwidth interface{} `field:"required" json:"bandwidth" yaml:"bandwidth"`
	// Property deletionProtection: Whether to enable deletion protection.
	//
	// Default to False.
	DeletionProtection interface{} `field:"optional" json:"deletionProtection" yaml:"deletionProtection"`
	// Property description: The description of the Internet Shared Bandwidth instance.
	//
	// The description must be 0 to 256 characters in length and cannot start with
	// `http:\/\/` or `https:\/\/`.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property internetChargeType: The billing method of the Internet Shared Bandwidth instance.
	//
	// Set the value to
	// PayByTraffic, which specifies the pay-by-data-transfer billing method.
	InternetChargeType interface{} `field:"optional" json:"internetChargeType" yaml:"internetChargeType"`
	// Property isp: The line type.
	//
	// Valid values:
	// *   BGP (default) All regions support BGP (Multi-ISP).
	// *   BGP_PRO BGP (Multi-ISP) Pro lines are available in the China (Hong Kong),
	// Singapore, Japan (Tokyo), Philippines (Manila), Malaysia (Kuala Lumpur),
	// Indonesia (Jakarta), and Thailand (Bangkok) regions.
	// If you are allowed to use single-ISP bandwidth, you can also use one of the
	// following values:
	// *   ChinaTelecom
	// *   ChinaUnicom
	// *   ChinaMobile
	// *   ChinaTelecom_L2
	// *   ChinaUnicom_L2
	// *   ChinaMobile_L2
	// If your services are deployed in China East 1 Finance, this parameter is required
	// and you must set the value to BGP_FinanceCloud.
	Isp interface{} `field:"optional" json:"isp" yaml:"isp"`
	// Property name: The name of the Internet Shared Bandwidth instance.
	//
	// The name must be 0 to 128 characters in length and cannot start with `http:\/\/` or
	// `https:\/\/`.
	Name interface{} `field:"optional" json:"name" yaml:"name"`
	// Property ratio: The percentage of the minimum bandwidth commitment.
	//
	// Set the parameter to 20.
	Ratio interface{} `field:"optional" json:"ratio" yaml:"ratio"`
	// Property resourceGroupId: The ID of the resource group.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property tags: Tags to attach to instance.
	//
	// Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
	Tags *[]*RosCommonBandwidthPackage_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
	// Property zone: The zone of the Internet Shared Bandwidth instance.
	//
	// This parameter is required if
	// you create an Internet Shared Bandwidth instance for a cloud box.
	Zone interface{} `field:"optional" json:"zone" yaml:"zone"`
}

