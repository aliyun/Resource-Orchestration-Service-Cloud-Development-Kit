package alicloudroscdkecd


// Properties for defining a `NetworkPackage`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecd-networkpackage
type NetworkPackageProps struct {
	// Property bandwidth: The maximum public bandwidth.
	//
	// Unit: Mbit\/s.
	// Valid values for the pay-by-data-transfer type (PayByTraffic): 10 to 200.
	//   Valid values for the pay-by-bandwith type (PayByBandwidth): 10 to 1000.
	Bandwidth interface{} `field:"required" json:"bandwidth" yaml:"bandwidth"`
	// Property officeSiteId: The ID of the workspace.
	OfficeSiteId interface{} `field:"required" json:"officeSiteId" yaml:"officeSiteId"`
	// Property autoPay: Specifies whether to enable automatic payment.
	AutoPay interface{} `field:"optional" json:"autoPay" yaml:"autoPay"`
	// Property autoRenew: Specifies whether to enable auto-renewal.
	AutoRenew interface{} `field:"optional" json:"autoRenew" yaml:"autoRenew"`
	// Property internetChargeType: The metering method of the pay-as-you-go Internet access package.
	//
	// Valid values:
	// PayByTraffic: pay-by-data-transfer.
	// PayByBandwidth: pay-by-bandwidth.
	// Default value: PayByTraffic.
	InternetChargeType interface{} `field:"optional" json:"internetChargeType" yaml:"internetChargeType"`
	// Property payType: The billing method of the Internet access package.
	//
	// Enumeration Value:
	// PostPaid
	// PrePaid.
	PayType interface{} `field:"optional" json:"payType" yaml:"payType"`
	// Property period: The duration of the Internet access package.
	Period interface{} `field:"optional" json:"period" yaml:"period"`
	// Property periodUnit: The unit of duration that you want to use for the Internet access package.
	//
	// Enumeration Value:
	// MonthYearWeek.
	PeriodUnit interface{} `field:"optional" json:"periodUnit" yaml:"periodUnit"`
	// Property promotionId: The ID of the sales promotion.
	PromotionId interface{} `field:"optional" json:"promotionId" yaml:"promotionId"`
}

