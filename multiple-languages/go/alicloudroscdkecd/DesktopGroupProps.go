package alicloudroscdkecd


// Properties for defining a `DesktopGroup`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecd-desktopgroup
type DesktopGroupProps struct {
	// Property bundleId: The ID of the desktop template.
	BundleId interface{} `field:"required" json:"bundleId" yaml:"bundleId"`
	// Property chargeType: The billing method of the cloud desktops in the desktop group.
	//
	// Enumeration Value:
	// PostPaid
	// PrePaid.
	ChargeType interface{} `field:"required" json:"chargeType" yaml:"chargeType"`
	// Property officeSiteId: The ID of the workspace.
	OfficeSiteId interface{} `field:"required" json:"officeSiteId" yaml:"officeSiteId"`
	// Property policyGroupId: The ID of the policy.
	PolicyGroupId interface{} `field:"required" json:"policyGroupId" yaml:"policyGroupId"`
	// Property allowAutoSetup: Specifies whether to automatically create cloud desktops in the desktop group if you set the billing method to subscription.
	//
	// If you set the ChargeType parameter to PrePaid, this parameter is required.
	AllowAutoSetup interface{} `field:"optional" json:"allowAutoSetup" yaml:"allowAutoSetup"`
	// Property allowBufferCount: Specifies whether to reserve cloud desktops if you set the billing method to pay-as-you-go.
	//
	// If you set the ChargeType parameter to PostPaid, this parameter is required. Valid values: 0: does not allow the system to reserve cloud desktops. N: allows the system to reserve N cloud desktops. The variable N must be an integer that ranges from 1 to 100.
	AllowBufferCount interface{} `field:"optional" json:"allowBufferCount" yaml:"allowBufferCount"`
	// Property autoPay: Specifies whether to enable automatic payment.
	AutoPay interface{} `field:"optional" json:"autoPay" yaml:"autoPay"`
	// Property autoRenew: Specifies whether to enable auto-renewal.
	AutoRenew interface{} `field:"optional" json:"autoRenew" yaml:"autoRenew"`
	// Property buyDesktopsCount: The number of cloud desktops that you want to purchase.
	//
	// Valid values: 0 to 200.
	BuyDesktopsCount interface{} `field:"optional" json:"buyDesktopsCount" yaml:"buyDesktopsCount"`
	// Property comments: The remarks on the desktop group.
	Comments interface{} `field:"optional" json:"comments" yaml:"comments"`
	// Property connectDuration: The maximum period of time during which the session is connected.
	//
	// When the specified maximum period of time is reached, the session automatically disconnects. Unit: milliseconds. This parameter is required only for cloud desktops in the same desktop group.
	ConnectDuration interface{} `field:"optional" json:"connectDuration" yaml:"connectDuration"`
	// Property defaultInitDesktopCount: The default number of cloud desktops to create when you create the desktop group.
	//
	// Default value: 1.
	DefaultInitDesktopCount interface{} `field:"optional" json:"defaultInitDesktopCount" yaml:"defaultInitDesktopCount"`
	// Property desktopGroupName: The name of the desktop group.
	DesktopGroupName interface{} `field:"optional" json:"desktopGroupName" yaml:"desktopGroupName"`
	// Property endUserIds: The end users that can use the desktop group.
	EndUserIds interface{} `field:"optional" json:"endUserIds" yaml:"endUserIds"`
	// Property groupVersion: The desktop group version.
	GroupVersion interface{} `field:"optional" json:"groupVersion" yaml:"groupVersion"`
	// Property idleDisconnectDuration: The maximum period of time for which a session remains idle.
	//
	// If an end user performs no operations on a cloud desktop by using keyboards or mouses during a session, the session becomes idle. When the specified maximum period of time is reached, the session automatically disconnects. Unit: milliseconds. This parameter is required only for cloud desktops in the same desktop group.
	IdleDisconnectDuration interface{} `field:"optional" json:"idleDisconnectDuration" yaml:"idleDisconnectDuration"`
	// Property keepDuration: The retention period of the cloud desktop after the end user disconnects from the cloud desktop.
	//
	// Unit: milliseconds.
	KeepDuration interface{} `field:"optional" json:"keepDuration" yaml:"keepDuration"`
	// Property maxDesktopsCount: The maximum number of cloud desktops that the desktop group can contain.
	//
	// Valid values: 0 to 200.
	MaxDesktopsCount interface{} `field:"optional" json:"maxDesktopsCount" yaml:"maxDesktopsCount"`
	// Property minDesktopsCount: The minimum number of cloud desktops that must be contained in the desktop group if you set the billing method to subscription.
	//
	// If you set the ChargeType parameter to PrePaid, this parameter is required. Valid values: 0 to the value of MaxDesktopsCount. Default value: 1.
	MinDesktopsCount interface{} `field:"optional" json:"minDesktopsCount" yaml:"minDesktopsCount"`
	// Property period: The subscription period of the cloud desktops in the desktop group.
	//
	// The unit is specified by the PeriodUnit parameter. The Period parameter takes effect only if you set the ChargeType parameter to PrePaid.
	// Valid values if you set the PeriodUnit parameter to Month: 1, 2, 3, 6
	// Valid values if you set the PeriodUnit parameter to Year:  1, 2, 3, 4, 5.
	Period interface{} `field:"optional" json:"period" yaml:"period"`
	// Property periodUnit: Whether to open CA.
	PeriodUnit interface{} `field:"optional" json:"periodUnit" yaml:"periodUnit"`
	// Property resetType: Specifies which type of the disk to reset for cloud desktops in the desktop group.
	ResetType interface{} `field:"optional" json:"resetType" yaml:"resetType"`
	// Property stopDuration: The period of time before the idle cloud desktop is stopped.
	//
	// When the specified period of time is reached, the idle cloud desktop automatically stops. If an end user connects to a stopped cloud desktop, the cloud desktop automatically starts. Unit: milliseconds.
	StopDuration interface{} `field:"optional" json:"stopDuration" yaml:"stopDuration"`
	// Property volumeEncryptionEnabled: Specifies whether to enable disk encryption.
	VolumeEncryptionEnabled interface{} `field:"optional" json:"volumeEncryptionEnabled" yaml:"volumeEncryptionEnabled"`
	// Property volumeEncryptionKey: The ID of the Key Management Service (KMS) key that you want to use when disk encryption is enabled.
	VolumeEncryptionKey interface{} `field:"optional" json:"volumeEncryptionKey" yaml:"volumeEncryptionKey"`
}

