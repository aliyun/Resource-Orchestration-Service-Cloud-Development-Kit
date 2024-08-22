package alicloudroscdkkms


// Properties for defining a `Instance`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-kms-instance
type InstanceProps struct {
	// Property productVersion: KMS Instance commodity type (software\/software-small\/hardware\/hardware-small).
	ProductVersion interface{} `field:"required" json:"productVersion" yaml:"productVersion"`
	// Property connection:.
	Connection interface{} `field:"optional" json:"connection" yaml:"connection"`
	// Property instanceChargeType: Billing method of the KMS instance, default to Subscription.
	InstanceChargeType interface{} `field:"optional" json:"instanceChargeType" yaml:"instanceChargeType"`
	// Property keyNum: Maximum number of stored keys.
	//
	// It is required when the InstanceCharge is Subscription.
	KeyNum interface{} `field:"optional" json:"keyNum" yaml:"keyNum"`
	// Property log: Whether to enable log.
	Log interface{} `field:"optional" json:"log" yaml:"log"`
	// Property logStorage: Log storage.
	LogStorage interface{} `field:"optional" json:"logStorage" yaml:"logStorage"`
	// Property period: The subscription duration of the KMS instance.
	//
	// If PeriodUnit is Month, the valid range is 1, 2, 3, 6, 12, 24, 36
	// If PeriodUnit is Year, the valid range is 1, 2, 3.
	Period interface{} `field:"optional" json:"period" yaml:"period"`
	// Property periodUnit: The unit of the subscription duration.
	//
	// Valid values:
	// Month
	// Year
	// Default value: Month.
	PeriodUnit interface{} `field:"optional" json:"periodUnit" yaml:"periodUnit"`
	// Property renewPeriod: Automatic renewal period, in months.
	RenewPeriod interface{} `field:"optional" json:"renewPeriod" yaml:"renewPeriod"`
	// Property renewStatus: Renewal options (manual renewal, automatic renewal, no renewal).
	RenewStatus interface{} `field:"optional" json:"renewStatus" yaml:"renewStatus"`
	// Property secretNum: Maximum number of secrets.
	//
	// It is required when the InstanceCharge is Subscription.
	SecretNum interface{} `field:"optional" json:"secretNum" yaml:"secretNum"`
	// Property spec: The computation performance level of the KMS instance.
	Spec interface{} `field:"optional" json:"spec" yaml:"spec"`
	// Property vpcNum: The number of managed accesses.
	//
	// The maximum number of VPCs that can access this KMS instance. It is required when the InstanceCharge is Subscription.
	VpcNum interface{} `field:"optional" json:"vpcNum" yaml:"vpcNum"`
}

