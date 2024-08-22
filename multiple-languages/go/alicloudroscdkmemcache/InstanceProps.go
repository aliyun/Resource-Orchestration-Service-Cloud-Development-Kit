package alicloudroscdkmemcache


// Properties for defining a `Instance`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-memcache-instance
type InstanceProps struct {
	// Property autoRenew: Specifies whether to enable auto renewal.
	//
	// Valid values:
	// true
	// false
	// Note Default value: false.
	AutoRenew interface{} `field:"optional" json:"autoRenew" yaml:"autoRenew"`
	// Property autoRenewPeriod: The period of the auto renewal.
	//
	// Unit: months. Valid values:
	// 1
	// 2
	// 3
	// 6
	// 12
	// Note You must specify this parameter if the value of the AutoRenew parameter is true.
	AutoRenewPeriod interface{} `field:"optional" json:"autoRenewPeriod" yaml:"autoRenewPeriod"`
	// Property autoUseCoupon: Specifies whether to use a coupon.
	//
	// Valid values:
	// true
	// false
	// Note Default value: false.
	AutoUseCoupon interface{} `field:"optional" json:"autoUseCoupon" yaml:"autoUseCoupon"`
	// Property backupPolicy: Backup policy.
	BackupPolicy interface{} `field:"optional" json:"backupPolicy" yaml:"backupPolicy"`
	// Property capacity: The storage capacity of the instance.
	//
	// Unit: MB.
	// Note You need to pass at least one of the Capacity and InstanceClass parameters when calling
	// the CreateInstance operation.
	Capacity interface{} `field:"optional" json:"capacity" yaml:"capacity"`
	// Property chargeType: The billing method of the instance.
	//
	// Valid values:
	// PrePaid: subscription.
	// PostPaid: pay-as-you-go.
	// Note Default value: PostPaid.
	ChargeType interface{} `field:"optional" json:"chargeType" yaml:"chargeType"`
	// Property config: The parameter configuration of the instance, in a JSON string.
	//
	// For more information,
	// see Set parameters.
	Config interface{} `field:"optional" json:"config" yaml:"config"`
	// Property couponNo: The coupon number.
	//
	// Default value: youhuiquan_promotion_option_id_for_blank.
	CouponNo interface{} `field:"optional" json:"couponNo" yaml:"couponNo"`
	// Property instanceClass: The instance type.
	//
	// For more information, see Instance types.
	// Note You need to pass at least one of the Capacity and InstanceClass parameters when calling
	// the CreateInstance operation.
	InstanceClass interface{} `field:"optional" json:"instanceClass" yaml:"instanceClass"`
	// Property instanceName: The name of the instance.
	//
	// The name can be 2 to 128 characters in length and must start
	// with a letter. The following characters are not supported: at signs (@), forward slashes (\/), colons (:), equal signs (=), double quotation marks
	// ("), angle brackets (<>), braces ([]), curly brackets ({}) and spaces.
	InstanceName interface{} `field:"optional" json:"instanceName" yaml:"instanceName"`
	// Property networkType: The network type of the instance.
	//
	// Valid values:
	// CLASSIC
	// VPC
	// Note Default value: CLASSIC.
	NetworkType interface{} `field:"optional" json:"networkType" yaml:"networkType"`
	// Property password: The password of the instance.
	//
	// The password can be 8 to 32 characters in length and
	// must contain at least three types of the following characters: uppercase letters,
	// lowercase letters, digits, and special characters. Special characters include ! at signs (@), number signs (#), dollar signs ($), percent signs (%), carets (^),
	// ampersands (&), asterisks (*), parentheses (()), underscores (_), plus signs (+),
	// hyphens (-), and equal signs (=).
	Password interface{} `field:"optional" json:"password" yaml:"password"`
	// Property period: The subscription period.
	//
	// You must specify this parameter if the value of the ChargeType
	// parameter is PrePaid. Unit: months. Valid values: 1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 24,
	// and 36.
	// Note This parameter is invalid if the value of the ChargeType parameter is PostPaid.
	Period interface{} `field:"optional" json:"period" yaml:"period"`
	// Property privateIpAddress: The internal IP address of the instance.
	//
	// Note The internal IP address must be located in the Classless Inter-Domain Routing (CIDR)
	// block of the VSwitch to which the instance belongs.
	PrivateIpAddress interface{} `field:"optional" json:"privateIpAddress" yaml:"privateIpAddress"`
	// Property resourceGroupId: Resource group ID.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property vpcId: The ID of the VPC.
	VpcId interface{} `field:"optional" json:"vpcId" yaml:"vpcId"`
	// Property vpcPasswordFree: Specifies whether to enable password free for access within the VPC.
	//
	// If set to:
	// - true: enables password free.
	// - false: disables password free.
	VpcPasswordFree interface{} `field:"optional" json:"vpcPasswordFree" yaml:"vpcPasswordFree"`
	// Property vSwitchId: The ID of the VSwitch.
	VSwitchId interface{} `field:"optional" json:"vSwitchId" yaml:"vSwitchId"`
	// Property zoneId: The ID of the zone in which the instance is created.
	//
	// You can call the DescribeRegions operation to query the latest region list.
	ZoneId interface{} `field:"optional" json:"zoneId" yaml:"zoneId"`
}

