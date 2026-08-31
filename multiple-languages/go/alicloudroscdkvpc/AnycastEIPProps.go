package alicloudroscdkvpc


// Properties for defining a `AnycastEIP`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-anycasteip
type AnycastEIPProps struct {
	// Property bandwidth: The peak bandwidth of the Anycast EIP instance.
	//
	// Unit: Mbps.
	// Valid values: 200 to 1000.
	// Default value: 1000.
	// > The peak bandwidth is for reference only and is not a guaranteed value. It
	// serves as the upper limit for bandwidth.
	Bandwidth interface{} `field:"optional" json:"bandwidth" yaml:"bandwidth"`
	// Property description: The description of the Anycast EIP instance.
	//
	// The description must be 0 to 256 characters in length and cannot start with
	// `http:\/\/` or `https:\/\/`.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property instanceChargeType: The billing method of the Anycast EIP instance.
	//
	// Set the value to PostPaid. This value specifies the pay-as-you-go billing method.
	InstanceChargeType interface{} `field:"optional" json:"instanceChargeType" yaml:"instanceChargeType"`
	// Property internetChargeType: The metering method for Internet data transfer.
	//
	// Set the value to PayByTraffic. This value specifies the pay-by-data-transfer
	// metering method.
	InternetChargeType interface{} `field:"optional" json:"internetChargeType" yaml:"internetChargeType"`
	// Property name: The name of the Anycast EIP instance.
	//
	// The name must be 0 to 128 characters in length. It must start with a letter or a
	// Chinese character and can contain digits, underscores (_), and hyphens (-).
	Name interface{} `field:"optional" json:"name" yaml:"name"`
	// Property resourceGroupId: The ID of the resource group.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property serviceLocation: Anycast EIP instance access area.
	ServiceLocation interface{} `field:"optional" json:"serviceLocation" yaml:"serviceLocation"`
}

