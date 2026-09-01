package alicloudroscdkcr


// Properties for defining a `InstanceV2`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cr-instancev2
type InstanceV2Props struct {
	// Property instanceName: Instance name.The value contains 3 to 30 lowercase letters, digits, and delimiters "-"(it can not be first or last).
	InstanceName interface{} `field:"required" json:"instanceName" yaml:"instanceName"`
	// Property instanceType: The Value configuration of the Group 1 attribute of Container Mirror Service Enterprise Edition.
	//
	// Valid values:
	// Basic: Basic instance.
	// Standard: Standard instance.
	// Advanced: Advanced Edition Instance.
	InstanceType interface{} `field:"required" json:"instanceType" yaml:"instanceType"`
	// Property paymentType: Payment type, value: - Subscription: Prepaid.
	PaymentType interface{} `field:"required" json:"paymentType" yaml:"paymentType"`
	// Property customOssBucket: Custom OSS Bucket name.
	CustomOssBucket interface{} `field:"optional" json:"customOssBucket" yaml:"customOssBucket"`
	// Property defaultOssBucket: Whether to use the default OSS Bucket.
	//
	// Value:
	// true: Use the default OSS Bucket.
	// false: Use a custom OSS Bucket.
	DefaultOssBucket interface{} `field:"optional" json:"defaultOssBucket" yaml:"defaultOssBucket"`
	// Property imageScanner: The security scan engine used by the Enterprise Edition of Container Image Service.
	//
	// Value:
	// ACR: Uses the Trivy scan engine provided by default.
	// SAS: uses the enhanced cloud security scan engine.
	ImageScanner interface{} `field:"optional" json:"imageScanner" yaml:"imageScanner"`
	// Property password: Login password, 8-32 digits, must contain at least two letters, symbols, or numbers.
	Password interface{} `field:"optional" json:"password" yaml:"password"`
	// Property period: Prepaid cycle.
	//
	// The unit is Monthly, please enter an integer multiple of 12 for annual paid products.
	// > must be set when creating a prepaid instance.
	Period interface{} `field:"optional" json:"period" yaml:"period"`
	// Property renewalStatus: Automatic renewal status, value: - AutoRenewal: automatic renewal.
	//
	// - ManualRenewal: manual renewal.
	// Default ManualRenewal.
	RenewalStatus interface{} `field:"optional" json:"renewalStatus" yaml:"renewalStatus"`
	// Property renewPeriod: Automatic renewal cycle, in months.
	//
	// > When **RenewalStatus** is set to **AutoRenewal**, it must be set.
	RenewPeriod interface{} `field:"optional" json:"renewPeriod" yaml:"renewPeriod"`
	// Property resourceGroupId: The ID of the resource group.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
}

