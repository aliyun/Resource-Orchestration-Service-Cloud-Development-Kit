package alicloudroscdkvpc


// Properties for defining a `CommonBandwidthPackage`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-commonbandwidthpackage
type CommonBandwidthPackageProps struct {
	// Property bandwidth: The peak bandwidth of the Internet Shared Bandwidth instance.
	//
	// Unit: Mbit\/s.
	Bandwidth interface{} `field:"required" json:"bandwidth" yaml:"bandwidth"`
	// Property deletionProtection: Whether to enable deletion protection.
	//
	// Default to False.
	DeletionProtection interface{} `field:"optional" json:"deletionProtection" yaml:"deletionProtection"`
	// Property description: The description of the Internet Shared Bandwidth instance.
	//
	// The description must be 2 to 256 characters in length. It must start with a letter,
	// and cannot start with http:\/\/ or https:\/\/.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property internetChargeType: The billing model of the Internet Shared Bandwidth instance.
	//
	// Allowed values:
	// PayByBandwidth (default): Billed by bandwidth.
	// PayBy95: Charged at Enhanced 95.
	InternetChargeType interface{} `field:"optional" json:"internetChargeType" yaml:"internetChargeType"`
	// Property isp: Line type of EIP, value: BGP (multi-line).
	Isp interface{} `field:"optional" json:"isp" yaml:"isp"`
	// Property name: The name of the Internet Shared Bandwidth instance.
	//
	// The name must be 2 to 128 characters in length and can contain letters, numbers, periods
	// (.), underscores (_), and hyphens (-). The name must start with a letter, and cannot
	// start with http:\/\/ or https:\/\/.
	Name interface{} `field:"optional" json:"name" yaml:"name"`
	// Property ratio: The minimum consumption ratio of the Internet Shared Bandwidth instance.
	//
	// Default to 100.
	// Note This parameter is only supported on the China site.
	Ratio interface{} `field:"optional" json:"ratio" yaml:"ratio"`
	// Property resourceGroupId: The ID of the resource group.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property tags: Tags to attach to instance.
	//
	// Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
	Tags *[]*RosCommonBandwidthPackage_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
	// Property zone: Zone Id.
	Zone interface{} `field:"optional" json:"zone" yaml:"zone"`
}

