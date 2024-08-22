package alicloudroscdkwaf


// Properties for defining a `RosInstance`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-waf-instance
type RosInstanceProps struct {
	BigScreen interface{} `field:"required" json:"bigScreen" yaml:"bigScreen"`
	ExclusiveIpPackage interface{} `field:"required" json:"exclusiveIpPackage" yaml:"exclusiveIpPackage"`
	ExtBandwidth interface{} `field:"required" json:"extBandwidth" yaml:"extBandwidth"`
	ExtDomainPackage interface{} `field:"required" json:"extDomainPackage" yaml:"extDomainPackage"`
	LogStorage interface{} `field:"required" json:"logStorage" yaml:"logStorage"`
	LogTime interface{} `field:"required" json:"logTime" yaml:"logTime"`
	PackageCode interface{} `field:"required" json:"packageCode" yaml:"packageCode"`
	PrefessionalService interface{} `field:"required" json:"prefessionalService" yaml:"prefessionalService"`
	SubscriptionType interface{} `field:"required" json:"subscriptionType" yaml:"subscriptionType"`
	WafLog interface{} `field:"required" json:"wafLog" yaml:"wafLog"`
	Period interface{} `field:"optional" json:"period" yaml:"period"`
	RenewalStatus interface{} `field:"optional" json:"renewalStatus" yaml:"renewalStatus"`
	RenewPeriod interface{} `field:"optional" json:"renewPeriod" yaml:"renewPeriod"`
}

