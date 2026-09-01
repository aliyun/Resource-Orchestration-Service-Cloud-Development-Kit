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
	// Property autoRenewPeriod: The auto-renewal duration, in months.
	//
	// Valid values: 1, 2, 3, 6, and 12.
	// > This parameter is required when AutoRenew is set to true.
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
	// Property couponNo: The coupon code.
	//
	// Default value: `default`.
	CouponNo interface{} `field:"optional" json:"couponNo" yaml:"couponNo"`
	// Property instanceClass: The instance type.
	//
	// For more information, see Instance types.
	// Note You need to pass at least one of the Capacity and InstanceClass parameters when calling
	// the CreateInstance operation.
	InstanceClass interface{} `field:"optional" json:"instanceClass" yaml:"instanceClass"`
	// Property instanceName: The name of the instance.
	//
	// The name must be 2 to 80 characters long, start with a
	// letter (uppercase or lowercase) or a Chinese character, and not contain spaces or
	// the characters `@\/:=”<>{[]}`.
	InstanceName interface{} `field:"optional" json:"instanceName" yaml:"instanceName"`
	// Property networkType: The network type of the instance.
	//
	// Valid values:
	// CLASSIC
	// VPC
	// Note Default value: CLASSIC.
	NetworkType interface{} `field:"optional" json:"networkType" yaml:"networkType"`
	// Property password: The password for the instance.
	//
	// The password must be 8 to 32 characters long and
	// contain at least three of the following character types: uppercase letters,
	// lowercase letters, digits, and special characters. The allowed special characters
	// are `!@#$%^&*()_+-=`.
	Password interface{} `field:"optional" json:"password" yaml:"password"`
	// Property period: The subscription duration, in months.
	//
	// Valid values: 1 to 9, 12, 24, 36, and 60.
	// > This parameter is available and required only when ChargeType is set to
	// PrePaid.
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
	// Property zoneId: The ID of the primary zone for the instance.
	//
	// You can call the [DescribeZones]()
	// operation to query available zones.
	// > You can also specify a secondary zone by using the `SecondaryZoneId` parameter.
	// The primary and replica nodes are then deployed in the specified primary and
	// secondary zones to create a dual-zone architecture for in-city disaster recovery.
	ZoneId interface{} `field:"optional" json:"zoneId" yaml:"zoneId"`
}

