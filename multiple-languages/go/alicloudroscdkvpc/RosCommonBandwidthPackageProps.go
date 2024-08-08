package alicloudroscdkvpc


// Properties for defining a `RosCommonBandwidthPackage`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-commonbandwidthpackage
type RosCommonBandwidthPackageProps struct {
	Bandwidth interface{} `field:"required" json:"bandwidth" yaml:"bandwidth"`
	DeletionProtection interface{} `field:"optional" json:"deletionProtection" yaml:"deletionProtection"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	InternetChargeType interface{} `field:"optional" json:"internetChargeType" yaml:"internetChargeType"`
	Isp interface{} `field:"optional" json:"isp" yaml:"isp"`
	Name interface{} `field:"optional" json:"name" yaml:"name"`
	Ratio interface{} `field:"optional" json:"ratio" yaml:"ratio"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	Tags *[]*RosCommonBandwidthPackage_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
	Zone interface{} `field:"optional" json:"zone" yaml:"zone"`
}

