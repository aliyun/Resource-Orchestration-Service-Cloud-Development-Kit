package alicloudroscdkmarketplace


// Properties for defining a `Order`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-marketplace-order
type OrderProps struct {
	// Property productCode: Product code for the resource.
	ProductCode interface{} `field:"required" json:"productCode" yaml:"productCode"`
	// Property skuCode: Sku code for the resource.
	SkuCode interface{} `field:"required" json:"skuCode" yaml:"skuCode"`
	// Property chargeType: The resource charge type.
	//
	// Default value is Prepaid.
	ChargeType interface{} `field:"optional" json:"chargeType" yaml:"chargeType"`
	// Property duration: Duration of the resource.
	//
	// If ChargeType is specified as Postpaid, this value will be ignore.
	Duration interface{} `field:"optional" json:"duration" yaml:"duration"`
	// Property preference: Customized parameters.
	Preference interface{} `field:"optional" json:"preference" yaml:"preference"`
	// Property pricingCycle: Price cycle of the resource.
	//
	// This property has no default value. If ChargeType is specified as Postpaid, this value will be ignore.
	PricingCycle interface{} `field:"optional" json:"pricingCycle" yaml:"pricingCycle"`
	// Property quantity: Resource number.
	//
	// Default value is 1.
	Quantity interface{} `field:"optional" json:"quantity" yaml:"quantity"`
}

