package alicloudroscdkmarketplace


// Properties for defining a `RosOrder`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-marketplace-order
type RosOrderProps struct {
	ProductCode interface{} `field:"required" json:"productCode" yaml:"productCode"`
	SkuCode interface{} `field:"required" json:"skuCode" yaml:"skuCode"`
	ChargeType interface{} `field:"optional" json:"chargeType" yaml:"chargeType"`
	Duration interface{} `field:"optional" json:"duration" yaml:"duration"`
	Preference interface{} `field:"optional" json:"preference" yaml:"preference"`
	PricingCycle interface{} `field:"optional" json:"pricingCycle" yaml:"pricingCycle"`
	Quantity interface{} `field:"optional" json:"quantity" yaml:"quantity"`
}

