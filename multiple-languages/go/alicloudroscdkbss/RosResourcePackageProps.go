package alicloudroscdkbss


// Properties for defining a `RosResourcePackage`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bss-resourcepackage
type RosResourcePackageProps struct {
	Duration interface{} `field:"required" json:"duration" yaml:"duration"`
	PackageType interface{} `field:"required" json:"packageType" yaml:"packageType"`
	ProductCode interface{} `field:"required" json:"productCode" yaml:"productCode"`
	Specification interface{} `field:"required" json:"specification" yaml:"specification"`
	EffectiveDate interface{} `field:"optional" json:"effectiveDate" yaml:"effectiveDate"`
	PricingCycle interface{} `field:"optional" json:"pricingCycle" yaml:"pricingCycle"`
}

