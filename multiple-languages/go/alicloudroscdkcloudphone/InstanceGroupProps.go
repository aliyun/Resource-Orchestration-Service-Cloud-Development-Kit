package alicloudroscdkcloudphone


// Properties for defining a `InstanceGroup`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudphone-instancegroup
type InstanceGroupProps struct {
	// Property imageId: The image id.
	ImageId interface{} `field:"required" json:"imageId" yaml:"imageId"`
	// Property instanceType: instance type.
	InstanceType interface{} `field:"required" json:"instanceType" yaml:"instanceType"`
	// Property securityGroupId: Security group to create ecs instance.
	//
	// For classic instance need the security group not belong to VPC, for VPC instance, please make sure the security group belong to specified VPC.
	SecurityGroupId interface{} `field:"required" json:"securityGroupId" yaml:"securityGroupId"`
	// Property vSwitchId: vswitch id.
	VSwitchId interface{} `field:"required" json:"vSwitchId" yaml:"vSwitchId"`
	// Property amount: Specifies the number of ECS instances to create.Value range: 1~100 Default：1.
	Amount interface{} `field:"optional" json:"amount" yaml:"amount"`
	// Property autoPay: Whether to pay automatically, the default is true.
	AutoPay interface{} `field:"optional" json:"autoPay" yaml:"autoPay"`
	// Property autoRenew: Whether renew the fee automatically.
	//
	// When the parameter InstanceChargeType is PrePaid, it will take effect.
	// Range of value:True: automatic renewal.
	// False: no automatic renewal. Default value is False.
	AutoRenew interface{} `field:"optional" json:"autoRenew" yaml:"autoRenew"`
	// Property chargeType: Instance internet access charge type.
	ChargeType interface{} `field:"optional" json:"chargeType" yaml:"chargeType"`
	// Property description: Description of instance.
	//
	// The length is 2~256 English or Chinese characters and cannot start with http:\/\/ and https:\/\/.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property eipBandwidth: EIP bandwidth value, the value range is 1-200.
	//
	// Setting this parameter will automatically create an EIP instance
	// corresponding to the bandwidth and bind the EIP instance to the
	// cloud phone instance. When the instance is released, this EIP
	// instance will be released and recycled together.
	EipBandwidth interface{} `field:"optional" json:"eipBandwidth" yaml:"eipBandwidth"`
	// Property instanceName: "Display name of the instance, [2, 128] English or Chinese characters, must  start with a letter or Chinese in size, can contain numbers, "_" or ".", "-".
	InstanceName interface{} `field:"optional" json:"instanceName" yaml:"instanceName"`
	// Property keyPairName: Cloud phone instance key pair name.
	//
	// The cloud phone key can be imported through the ImportKeyPair interface.
	KeyPairName interface{} `field:"optional" json:"keyPairName" yaml:"keyPairName"`
	// Property period: Prepaid time period.
	//
	// While PeriodUnit is month, it could be 1, 2, 3, 6.
	// While PeriodUnit is year, it could be from 1 to 5Default value is 1.
	Period interface{} `field:"optional" json:"period" yaml:"period"`
	// Property periodUnit: Unit of prepaid time period, it could be Month\/Year.
	//
	// Default value is Month.
	PeriodUnit interface{} `field:"optional" json:"periodUnit" yaml:"periodUnit"`
	// Property resolution: You can use the DescribeInstanceTypes interface to query the list of  resolutions supported by the current specification and select an appropriate resolution.
	Resolution interface{} `field:"optional" json:"resolution" yaml:"resolution"`
	// Property tag: Tags to attach to instance.
	//
	// Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
	Tag interface{} `field:"optional" json:"tag" yaml:"tag"`
	// Property vncPassword: Cloud phone VNC password.
	//
	// The password must be six characters long, and must contain only uppercase,
	// lowercase English letters and Arabic numerals.
	VncPassword interface{} `field:"optional" json:"vncPassword" yaml:"vncPassword"`
}

