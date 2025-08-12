package alicloudroscdkmaxcompute


// Properties for defining a `RosQuota`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-maxcompute-quota
type RosQuotaProps struct {
	PayType interface{} `field:"required" json:"payType" yaml:"payType"`
	AutoPay interface{} `field:"optional" json:"autoPay" yaml:"autoPay"`
	AutoRenew interface{} `field:"optional" json:"autoRenew" yaml:"autoRenew"`
	Cu interface{} `field:"optional" json:"cu" yaml:"cu"`
	Period interface{} `field:"optional" json:"period" yaml:"period"`
	PeriodUnit interface{} `field:"optional" json:"periodUnit" yaml:"periodUnit"`
	QuotaNickname interface{} `field:"optional" json:"quotaNickname" yaml:"quotaNickname"`
	Specification interface{} `field:"optional" json:"specification" yaml:"specification"`
	Tunnel interface{} `field:"optional" json:"tunnel" yaml:"tunnel"`
}

