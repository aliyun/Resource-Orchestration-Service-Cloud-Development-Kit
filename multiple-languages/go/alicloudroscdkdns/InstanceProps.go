package alicloudroscdkdns


// Properties for defining a `Instance`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-instance
type InstanceProps struct {
	// Property dnsSecurity: The DNS security policy.
	//
	// Valid values:
	// - no: No protection against DNS attacks is provided.
	// - basic: Basic protection against DNS attacks is provided.
	// - advanced: Advanced protection against DNS attacks is provided.
	DnsSecurity interface{} `field:"required" json:"dnsSecurity" yaml:"dnsSecurity"`
	// Property domainNumbers: The number of domain names.
	DomainNumbers interface{} `field:"required" json:"domainNumbers" yaml:"domainNumbers"`
	// Property period: The subscription duration.
	//
	// Valid values:
	// - If unit is month: 1, 2, 3, 6
	// - If unit is year: 1, 2.
	Period interface{} `field:"required" json:"period" yaml:"period"`
	// Property periodUnit: The subscription duration unit.
	PeriodUnit interface{} `field:"required" json:"periodUnit" yaml:"periodUnit"`
	// Property version: The edition of Alibaba Cloud DNS.
	//
	// Valid values:
	// If create hosted public zone:
	// - version_personal: Personal Edition.
	// - version_enterprise_basic: Enterprise Standard Edition.
	// - version_enterprise_advanced: Enterprise Ultimate Edition.
	// If create cached public zone:
	// - version_cached_basic**Note**: Only upgrade operations are supported after instance creation.
	Version interface{} `field:"required" json:"version" yaml:"version"`
	// Property domain: The domain name that you want to bind to the instance.
	//
	// If you want to bind multiple domain names to the instance, separate these domain names with commas (,).
	Domain interface{} `field:"optional" json:"domain" yaml:"domain"`
	// Property instanceType: The type of the instance.
	//
	// Valid values:
	// - HostedPublicZone: Hosted Public Zone
	// - CachedPublicZone: Cached Public Zone.
	InstanceType interface{} `field:"optional" json:"instanceType" yaml:"instanceType"`
	// Property renewalStatus: The renewal method.
	//
	// Valid values:
	// - AutoRenewal: The instance is automatically renewed.
	// - ManualRenewal: The instance is manually renewed.
	// Default value: ManualRenewal.
	RenewalStatus interface{} `field:"optional" json:"renewalStatus" yaml:"renewalStatus"`
}

