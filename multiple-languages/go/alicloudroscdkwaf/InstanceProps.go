package alicloudroscdkwaf


// Properties for defining a `Instance`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-waf-instance
type InstanceProps struct {
	// Property bigScreen:.
	BigScreen interface{} `field:"required" json:"bigScreen" yaml:"bigScreen"`
	// Property exclusiveIpPackage:.
	ExclusiveIpPackage interface{} `field:"required" json:"exclusiveIpPackage" yaml:"exclusiveIpPackage"`
	// Property extBandwidth:.
	ExtBandwidth interface{} `field:"required" json:"extBandwidth" yaml:"extBandwidth"`
	// Property extDomainPackage:.
	ExtDomainPackage interface{} `field:"required" json:"extDomainPackage" yaml:"extDomainPackage"`
	// Property logStorage:.
	LogStorage interface{} `field:"required" json:"logStorage" yaml:"logStorage"`
	// Property logTime:.
	LogTime interface{} `field:"required" json:"logTime" yaml:"logTime"`
	// Property packageCode:.
	PackageCode interface{} `field:"required" json:"packageCode" yaml:"packageCode"`
	// Property prefessionalService:.
	PrefessionalService interface{} `field:"required" json:"prefessionalService" yaml:"prefessionalService"`
	// Property subscriptionType: Subscription type of the instance.
	SubscriptionType interface{} `field:"required" json:"subscriptionType" yaml:"subscriptionType"`
	// Property wafLog:.
	WafLog interface{} `field:"required" json:"wafLog" yaml:"wafLog"`
	// Property period:.
	Period interface{} `field:"optional" json:"period" yaml:"period"`
	// Property renewalStatus:.
	RenewalStatus interface{} `field:"optional" json:"renewalStatus" yaml:"renewalStatus"`
	// Property renewPeriod:.
	RenewPeriod interface{} `field:"optional" json:"renewPeriod" yaml:"renewPeriod"`
}

