package alicloudroscdkbss


// Properties for defining a `ResourcePackage`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bss-resourcepackage
type ResourcePackageProps struct {
	// Property duration: The validity of the specified resource package.
	//
	// The value is the same as the Value of AvailableDuration returned by DescribeResourcePackageProduct.
	Duration interface{} `field:"required" json:"duration" yaml:"duration"`
	// Property packageType: The type of the specified resource package.
	//
	// The value is the same as the value of the Code value of the ResourcePackage object returned by DescribeResourcePackageProduct.
	PackageType interface{} `field:"required" json:"packageType" yaml:"packageType"`
	// Property productCode: The code of the specified product.
	//
	// The value is the same as the value of ProductType returned by QueryProductList.
	ProductCode interface{} `field:"required" json:"productCode" yaml:"productCode"`
	// Property specification: The size of the specified resource package.
	//
	// The value is the same as the Value of Specification returned by DescribeResourcePackageProduct.
	Specification interface{} `field:"required" json:"specification" yaml:"specification"`
	// Property autoRenew: Whether to automatically renew the resource package.
	//
	// The value is true or false. Default value: false.
	AutoRenew interface{} `field:"optional" json:"autoRenew" yaml:"autoRenew"`
	// Property autoRenewPeriod: Duration of resource packs renewals.
	//
	// Valid values:
	// - When AutoRenewPeriodUnit is Year: 1, 2, 3.
	// - When AutoRenewPeriodUnit is Month: 1, 2, 3, 6.
	// Default is 1.
	AutoRenewPeriod interface{} `field:"optional" json:"autoRenewPeriod" yaml:"autoRenewPeriod"`
	// Property autoRenewPeriodUnit: Unit of resource pack renewals.
	//
	// Valid values: Month, Year. Default is Month.
	AutoRenewPeriodUnit interface{} `field:"optional" json:"autoRenewPeriodUnit" yaml:"autoRenewPeriodUnit"`
	// Property effectiveDate: The effective date of the specified resource package.
	//
	// The resource package will take effect immediately if the effective date is unspecified. The date format follows the ISO8601 standard and uses UTC time. Format: yyyy-MM-ddTHH:mm:ssZ
	EffectiveDate interface{} `field:"optional" json:"effectiveDate" yaml:"effectiveDate"`
	// Property pricingCycle: The validity of the specified resource package.
	//
	// Default value: Month. Valid values: Month, Year
	PricingCycle interface{} `field:"optional" json:"pricingCycle" yaml:"pricingCycle"`
}

