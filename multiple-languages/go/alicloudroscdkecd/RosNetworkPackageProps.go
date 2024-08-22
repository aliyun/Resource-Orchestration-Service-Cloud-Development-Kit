package alicloudroscdkecd


// Properties for defining a `RosNetworkPackage`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecd-networkpackage
type RosNetworkPackageProps struct {
	Bandwidth interface{} `field:"required" json:"bandwidth" yaml:"bandwidth"`
	OfficeSiteId interface{} `field:"required" json:"officeSiteId" yaml:"officeSiteId"`
	AutoPay interface{} `field:"optional" json:"autoPay" yaml:"autoPay"`
	AutoRenew interface{} `field:"optional" json:"autoRenew" yaml:"autoRenew"`
	InternetChargeType interface{} `field:"optional" json:"internetChargeType" yaml:"internetChargeType"`
	PayType interface{} `field:"optional" json:"payType" yaml:"payType"`
	Period interface{} `field:"optional" json:"period" yaml:"period"`
	PeriodUnit interface{} `field:"optional" json:"periodUnit" yaml:"periodUnit"`
	PromotionId interface{} `field:"optional" json:"promotionId" yaml:"promotionId"`
}

