package alicloudroscdkvpc


// Properties for defining a `AnycastEIP`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-anycasteip
type AnycastEIPProps struct {
	// Property bandwidth: Anycast EIP instance bandwidth.
	Bandwidth interface{} `field:"optional" json:"bandwidth" yaml:"bandwidth"`
	// Property description: Anycast EIP instance description.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property instanceChargeType: Anycast EIP instance charge type.
	InstanceChargeType interface{} `field:"optional" json:"instanceChargeType" yaml:"instanceChargeType"`
	// Property internetChargeType: Anycast EIP instance access public network billing method.
	InternetChargeType interface{} `field:"optional" json:"internetChargeType" yaml:"internetChargeType"`
	// Property name: Anycast EIP instance name.
	Name interface{} `field:"optional" json:"name" yaml:"name"`
	// Property serviceLocation: Anycast EIP instance access area.
	ServiceLocation interface{} `field:"optional" json:"serviceLocation" yaml:"serviceLocation"`
}

