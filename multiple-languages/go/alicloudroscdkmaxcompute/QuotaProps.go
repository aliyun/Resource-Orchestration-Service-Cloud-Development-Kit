package alicloudroscdkmaxcompute


// Properties for defining a `Quota`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-maxcompute-quota
type QuotaProps struct {
	// Property payType: The billing method of the odps quota instance.
	//
	// Valid values:
	// PayAsYouGo: pay-as-you-go
	// Subscription: subscription.
	PayType interface{} `field:"required" json:"payType" yaml:"payType"`
	// Property autoPay: Whether to auto pay the bill.
	AutoPay interface{} `field:"optional" json:"autoPay" yaml:"autoPay"`
	// Property autoRenew: Whether to auto renew the prepay instance.
	AutoRenew interface{} `field:"optional" json:"autoRenew" yaml:"autoRenew"`
	// Property cu: The compute unit of the odps quota instance.
	//
	// When the specification is the StandardCompute, this parameter is required.
	Cu interface{} `field:"optional" json:"cu" yaml:"cu"`
	// Property period: The subscription period of the odps quotaIf PeriodUnit is month, the valid range is 1-9 If periodUnit is year, the valid range is 1, 2, 3, 4, 5.
	Period interface{} `field:"optional" json:"period" yaml:"period"`
	// Property periodUnit: The unit of the subscription duration.
	//
	// Valid values:
	// Month
	// Year
	// Default value: Month.
	PeriodUnit interface{} `field:"optional" json:"periodUnit" yaml:"periodUnit"`
	// Property quotaNickname: The nickname of the odps quota instance.
	QuotaNickname interface{} `field:"optional" json:"quotaNickname" yaml:"quotaNickname"`
	// Property specification: The specification of the odps quota instance.
	Specification interface{} `field:"optional" json:"specification" yaml:"specification"`
	// Property tunnel: The tunnel unit of the odps quota instance.
	//
	// When the specification is the Tunnel, this parameter is required.
	Tunnel interface{} `field:"optional" json:"tunnel" yaml:"tunnel"`
}

