package alicloudroscdkecd


// Properties for defining a `Desktops`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecd-desktops
type DesktopsProps struct {
	// Property bundleId: The ID of the cloud desktop template.
	BundleId interface{} `field:"required" json:"bundleId" yaml:"bundleId"`
	// Property officeSiteId: The ID of the workspace.
	OfficeSiteId interface{} `field:"required" json:"officeSiteId" yaml:"officeSiteId"`
	// Property policyGroupId: The ID of the policy.
	PolicyGroupId interface{} `field:"required" json:"policyGroupId" yaml:"policyGroupId"`
	// Property amount: The number of cloud desktops that you want to create.
	//
	// Valid values: 1 to 300. Default
	// value: 1.
	Amount interface{} `field:"optional" json:"amount" yaml:"amount"`
	// Property autoPay: Specifies whether to enable automatic payment.
	//
	// Valid values:
	// true: enables automatic payment. You must make sure that your Alibaba Cloud account
	// has sufficient balance. If your Alibaba Cloud account does not have sufficient balance,
	// abnormal orders are generated.
	// false: disables automatic payment. In this case, an order is generated, and no payment
	// is automatically made. You can log on to the EDS console and complete the payment
	// based on the order ID on the Orders page.
	// Default value: true.
	AutoPay interface{} `field:"optional" json:"autoPay" yaml:"autoPay"`
	// Property autoRenew: Specifies whether to enable auto-renewal for the cloud desktop.
	//
	// This parameter takes
	// effect only when the ChargeType parameter is set to PrePaid.
	// Valid values:
	// true: enables auto-renewal. The renewal duration is the same as the subscription duration
	// that you specified for the Period parameter when you purchased the cloud desktop.
	// false: does not enable auto-renewal.
	// Default value: false.
	AutoRenew interface{} `field:"optional" json:"autoRenew" yaml:"autoRenew"`
	// Property chargeType: The billing method of the cloud desktop.
	//
	// Valid values:
	// PostPaid: pay-as-you-go
	// PrePaid: subscription
	// Default value: PostPaid.
	ChargeType interface{} `field:"optional" json:"chargeType" yaml:"chargeType"`
	// Property desktopName: The name of the cloud desktop.
	DesktopName interface{} `field:"optional" json:"desktopName" yaml:"desktopName"`
	// Property desktopNameSuffix: Specifies whether to automatically add a suffix to the cloud desktop name when you create multiple cloud desktops at a time.
	//
	// True: automatically adds a suffix.
	// False: does not add a suffix.
	DesktopNameSuffix interface{} `field:"optional" json:"desktopNameSuffix" yaml:"desktopNameSuffix"`
	// Property directoryId: This parameter is not open for use.
	DirectoryId interface{} `field:"optional" json:"directoryId" yaml:"directoryId"`
	// Property endUserId: The user ID that authorizes the use of the cloud desktop, 1~100 can be set.
	//
	// During the same period, only one user can use the desktop.
	// If EndUserId is not set, the created cloud desktop will not be assigned to any user.
	EndUserId interface{} `field:"optional" json:"endUserId" yaml:"endUserId"`
	// Property groupId: desktop group ID。 Note that the desktop group function is currently in the invitation test.
	//
	// If you want to experience it, please submit a work order application.
	GroupId interface{} `field:"optional" json:"groupId" yaml:"groupId"`
	// Property hostname: The custom hostname that you specify for the cloud desktop.
	//
	// You can only specify the
	// hostname of a Windows cloud desktop in the workspace of the enterprise AD account
	// type.
	// The hostname must meet the following requirements:
	// The hostname must be 2 to 15 characters in length.
	// The hostname can contain letters, digits, and hyphens (-). It cannot start or end
	// with a hyphen (-), contain consecutive hyphens (-), or contain only digits.
	// If you create multiple cloud desktops, you can specify the names of the cloud desktops
	// in the name_prefix[begin_number,bits]name_suffix format. For example, if you set Hostname to ecd--1,4-test, the hostname of the first cloud desktop is ecd-0001-test and the hostname of
	// the second cloud desktop is ecd-0002-test. The rest may be deduced by analogy.
	// name_prefix: the prefix of the hostname.
	// [begin_number,bits]: the ordered numbers in the hostname. begin_number: the start number. Valid values:
	// 0 to 999999. Default value: 0. bits: the digit. Valid values: 1 to 6. Default value:
	// 6.
	// name_suffix: the suffix of the hostname.
	Hostname interface{} `field:"optional" json:"hostname" yaml:"hostname"`
	// Property period: The subscription duration.
	//
	// The unit of the value is specified by the PeriodUnit parameter. This parameter takes effect and is required only when the ChargeType parameter is set to PrePaid.
	// If PeriodUnit is month, the valid range is 1, 2, 3, 6, 12, 24, 36, 48,60
	// If periodUnit is year, the valid range is 1 to 5.
	Period interface{} `field:"optional" json:"period" yaml:"period"`
	// Property periodUnit: The unit of the subscription duration.
	//
	// Valid values:
	// Month
	// Year
	// Default value: Month.
	PeriodUnit interface{} `field:"optional" json:"periodUnit" yaml:"periodUnit"`
	// Property promotionId: promotion id.
	PromotionId interface{} `field:"optional" json:"promotionId" yaml:"promotionId"`
	// Property tags: The list of desktops tags in the form of key\/value pairs.
	//
	// You can define a maximum of 20 tags for each desktops.
	Tags *[]*RosDesktops_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
	// Property userAssignMode: The assignment mode of the cloud desktop.
	//
	// Default value: ALL.
	// ALL: If you specify the EndUserId parameter, the cloud desktops that you create are
	// assigned to each regular user that you specify.
	// PER_USER: If you specify the EndUserId parameter, the cloud desktops that you create
	// are evenly assigned to all regular users that you specify. In this case, you must
	// make sure that the value of the Amount parameter can be divided by the N value of
	// the EndUserId.N parameter that you specify.
	// Note If you do not specify the EndUserId parameter, the cloud desktop that you create is
	// not assigned to regular users.
	UserAssignMode interface{} `field:"optional" json:"userAssignMode" yaml:"userAssignMode"`
	// Property userName: This parameter is not open for use.
	UserName interface{} `field:"optional" json:"userName" yaml:"userName"`
	// Property volumeEncryptionEnabled: Whether to enable disk encryption.
	VolumeEncryptionEnabled interface{} `field:"optional" json:"volumeEncryptionEnabled" yaml:"volumeEncryptionEnabled"`
	// Property volumeEncryptionKey: The key ID of the KMS used when disk encryption is enabled.
	//
	// It can be obtained through the ListKeys interface.
	VolumeEncryptionKey interface{} `field:"optional" json:"volumeEncryptionKey" yaml:"volumeEncryptionKey"`
	// Property vpcId: This parameter is not open for use.
	VpcId interface{} `field:"optional" json:"vpcId" yaml:"vpcId"`
}

