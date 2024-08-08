package alicloudroscdkcr


// Properties for defining a `Instance`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cr-instance
type InstanceProps struct {
	// Property imageScanner: Security scan engine.
	ImageScanner interface{} `field:"required" json:"imageScanner" yaml:"imageScanner"`
	// Property instanceName: Instance name.The value contains 3 to 30 lowercase letters, digits, and delimiters "-"(it can not be first or last).
	InstanceName interface{} `field:"required" json:"instanceName" yaml:"instanceName"`
	// Property instanceType: The Value configuration of the Group 1 attribute of Container Mirror Service Enterprise Edition.
	//
	// Valid values:
	// Basic: Basic instance
	// Standard: Standard instance
	// Advanced: Advanced Edition Instance.
	InstanceType interface{} `field:"required" json:"instanceType" yaml:"instanceType"`
	// Property period: Prepaid cycle.
	//
	// The unit is Monthly, please enter an integer multiple of 12 for annual paid products.
	Period interface{} `field:"required" json:"period" yaml:"period"`
	// Property instanceStorageName: Custom OSS Bucket name.
	InstanceStorageName interface{} `field:"optional" json:"instanceStorageName" yaml:"instanceStorageName"`
	// Property renewalStatus: Automatic renewal status, value: - AutoRenewal: automatic renewal.
	//
	// - ManualRenewal: manual renewal.
	// Default ManualRenewal.
	RenewalStatus interface{} `field:"optional" json:"renewalStatus" yaml:"renewalStatus"`
	// Property renewPeriod: Automatic renewal cycle, in months.
	//
	// When RenewalStatus is set to AutoRenewal, it must be set.
	RenewPeriod interface{} `field:"optional" json:"renewPeriod" yaml:"renewPeriod"`
	// Property resourceGroupId: The ID of the resource group.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
}

