package alicloudroscdkesa


// Properties for defining a `RosHttpsApplicationConfiguration`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-httpsapplicationconfiguration
type RosHttpsApplicationConfigurationProps struct {
	SiteId interface{} `field:"required" json:"siteId" yaml:"siteId"`
	AltSvc interface{} `field:"optional" json:"altSvc" yaml:"altSvc"`
	AltSvcClear interface{} `field:"optional" json:"altSvcClear" yaml:"altSvcClear"`
	AltSvcMa interface{} `field:"optional" json:"altSvcMa" yaml:"altSvcMa"`
	AltSvcPersist interface{} `field:"optional" json:"altSvcPersist" yaml:"altSvcPersist"`
	Hsts interface{} `field:"optional" json:"hsts" yaml:"hsts"`
	HstsIncludeSubdomains interface{} `field:"optional" json:"hstsIncludeSubdomains" yaml:"hstsIncludeSubdomains"`
	HstsMaxAge interface{} `field:"optional" json:"hstsMaxAge" yaml:"hstsMaxAge"`
	HstsPreload interface{} `field:"optional" json:"hstsPreload" yaml:"hstsPreload"`
	HttpsForce interface{} `field:"optional" json:"httpsForce" yaml:"httpsForce"`
	HttpsForceCode interface{} `field:"optional" json:"httpsForceCode" yaml:"httpsForceCode"`
	HttpsNoSniDeny interface{} `field:"optional" json:"httpsNoSniDeny" yaml:"httpsNoSniDeny"`
	HttpsSniVerify interface{} `field:"optional" json:"httpsSniVerify" yaml:"httpsSniVerify"`
	HttpsSniWhitelist interface{} `field:"optional" json:"httpsSniWhitelist" yaml:"httpsSniWhitelist"`
	PaymentType interface{} `field:"optional" json:"paymentType" yaml:"paymentType"`
	Rule interface{} `field:"optional" json:"rule" yaml:"rule"`
	RuleEnable interface{} `field:"optional" json:"ruleEnable" yaml:"ruleEnable"`
	RuleName interface{} `field:"optional" json:"ruleName" yaml:"ruleName"`
	Sequence interface{} `field:"optional" json:"sequence" yaml:"sequence"`
	SiteVersion interface{} `field:"optional" json:"siteVersion" yaml:"siteVersion"`
}

