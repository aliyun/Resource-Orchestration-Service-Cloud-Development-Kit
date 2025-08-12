package alicloudroscdkdataworks


// Properties for defining a `ResourceGroup`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dataworks-resourcegroup
type ResourceGroupProps struct {
	// Property name: The name of a common resource group that creates a common resource group must start with a letter and can contain letters, numbers, underscores (_), up to 128 characters.
	Name interface{} `field:"required" json:"name" yaml:"name"`
	// Property paymentType: The type of payment for resource groups, PrePaid represents annual and monthly payments, and PostPaid represents payment by volume.
	PaymentType interface{} `field:"required" json:"paymentType" yaml:"paymentType"`
	// Property vpcId: The default bound VPC ID.
	VpcId interface{} `field:"required" json:"vpcId" yaml:"vpcId"`
	// Property vSwitchId: The default bound switch ID.
	VSwitchId interface{} `field:"required" json:"vSwitchId" yaml:"vSwitchId"`
	// Property autoRenewEnabled: Whether to renew automatically.
	AutoRenewEnabled interface{} `field:"optional" json:"autoRenewEnabled" yaml:"autoRenewEnabled"`
	// Property paymentDuration: Paid time.
	//
	// Default is 1.
	PaymentDuration interface{} `field:"optional" json:"paymentDuration" yaml:"paymentDuration"`
	// Property paymentDurationUnit: Paid time unit.
	//
	// Valid values:
	// Month: represents monthly subscription
	// Year: represents annual subscription.
	// Default is Month.
	PaymentDurationUnit interface{} `field:"optional" json:"paymentDurationUnit" yaml:"paymentDurationUnit"`
	// Property remark: Remarks for creating a common resource group can contain letters, Chinese, numbers, underscores (_), up to 128 characters.
	Remark interface{} `field:"optional" json:"remark" yaml:"remark"`
	// Property resourceGroupId: Alibaba Cloud Resource Group ID.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property spec: Resource group specifications, unit CU, required when the resource group payment mode is PrePaid.
	Spec interface{} `field:"optional" json:"spec" yaml:"spec"`
	// Property tags: Tags to attach to ResourceGroup.
	//
	// Max support 20 tags to add during create ResourceGroup. Each tag with two properties Key and Value, and Key is required.
	Tags *[]*RosResourceGroup_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
}

