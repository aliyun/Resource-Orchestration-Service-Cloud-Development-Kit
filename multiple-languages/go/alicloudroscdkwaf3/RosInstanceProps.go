package alicloudroscdkwaf3


// Properties for defining a `RosInstance`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-waf3-instance
type RosInstanceProps struct {
	PayType interface{} `field:"required" json:"payType" yaml:"payType"`
	Region interface{} `field:"required" json:"region" yaml:"region"`
	AdditionalProtectionNodes interface{} `field:"optional" json:"additionalProtectionNodes" yaml:"additionalProtectionNodes"`
	ApiSecurity interface{} `field:"optional" json:"apiSecurity" yaml:"apiSecurity"`
	AutoPay interface{} `field:"optional" json:"autoPay" yaml:"autoPay"`
	AutoRenew interface{} `field:"optional" json:"autoRenew" yaml:"autoRenew"`
	BotAppProtection interface{} `field:"optional" json:"botAppProtection" yaml:"botAppProtection"`
	BotWebProtection interface{} `field:"optional" json:"botWebProtection" yaml:"botWebProtection"`
	DomainsExtension interface{} `field:"optional" json:"domainsExtension" yaml:"domainsExtension"`
	ElasticQps interface{} `field:"optional" json:"elasticQps" yaml:"elasticQps"`
	ExclusiveIpAddress interface{} `field:"optional" json:"exclusiveIpAddress" yaml:"exclusiveIpAddress"`
	FraudDetection interface{} `field:"optional" json:"fraudDetection" yaml:"fraudDetection"`
	IgnoreExisting interface{} `field:"optional" json:"ignoreExisting" yaml:"ignoreExisting"`
	IntelligentLoadBalancing interface{} `field:"optional" json:"intelligentLoadBalancing" yaml:"intelligentLoadBalancing"`
	LogService interface{} `field:"optional" json:"logService" yaml:"logService"`
	LogStorage interface{} `field:"optional" json:"logStorage" yaml:"logStorage"`
	Period interface{} `field:"optional" json:"period" yaml:"period"`
	PeriodUnit interface{} `field:"optional" json:"periodUnit" yaml:"periodUnit"`
	QpsExtension interface{} `field:"optional" json:"qpsExtension" yaml:"qpsExtension"`
	TrafficBillingProtectionThreshold interface{} `field:"optional" json:"trafficBillingProtectionThreshold" yaml:"trafficBillingProtectionThreshold"`
	WafVersion interface{} `field:"optional" json:"wafVersion" yaml:"wafVersion"`
}

