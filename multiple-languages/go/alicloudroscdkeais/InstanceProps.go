package alicloudroscdkeais


// Properties for defining a `Instance`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-eais-instance
type InstanceProps struct {
	// Property createWithNotebook: When the value is true, CreateEaiJupyter is called to create an eais instance, and when the value is false, CreateEai is called to create an eais instance.
	CreateWithNotebook interface{} `field:"required" json:"createWithNotebook" yaml:"createWithNotebook"`
	// Property instanceType: EAIS instance type.
	InstanceType interface{} `field:"required" json:"instanceType" yaml:"instanceType"`
	// Property securityGroupId: Security group ID.
	SecurityGroupId interface{} `field:"required" json:"securityGroupId" yaml:"securityGroupId"`
	// Property vSwitchId: Switch ID.
	VSwitchId interface{} `field:"required" json:"vSwitchId" yaml:"vSwitchId"`
	// Property environmentVar: Setting environment variables in eais instance on Initialization.
	EnvironmentVar interface{} `field:"optional" json:"environmentVar" yaml:"environmentVar"`
	// Property instanceName: Name of the instance.
	InstanceName interface{} `field:"optional" json:"instanceName" yaml:"instanceName"`
	// Property paymentType: The payment type of the resource.
	PaymentType interface{} `field:"optional" json:"paymentType" yaml:"paymentType"`
	// Property resourceGroupId: The ID of the resource group.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
}

