package alicloudroscdkecd


// Properties for defining a `RosDesktopGroup`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecd-desktopgroup
type RosDesktopGroupProps struct {
	BundleId interface{} `field:"required" json:"bundleId" yaml:"bundleId"`
	ChargeType interface{} `field:"required" json:"chargeType" yaml:"chargeType"`
	OfficeSiteId interface{} `field:"required" json:"officeSiteId" yaml:"officeSiteId"`
	PolicyGroupId interface{} `field:"required" json:"policyGroupId" yaml:"policyGroupId"`
	AllowAutoSetup interface{} `field:"optional" json:"allowAutoSetup" yaml:"allowAutoSetup"`
	AllowBufferCount interface{} `field:"optional" json:"allowBufferCount" yaml:"allowBufferCount"`
	AutoPay interface{} `field:"optional" json:"autoPay" yaml:"autoPay"`
	AutoRenew interface{} `field:"optional" json:"autoRenew" yaml:"autoRenew"`
	BuyDesktopsCount interface{} `field:"optional" json:"buyDesktopsCount" yaml:"buyDesktopsCount"`
	Comments interface{} `field:"optional" json:"comments" yaml:"comments"`
	ConnectDuration interface{} `field:"optional" json:"connectDuration" yaml:"connectDuration"`
	DefaultInitDesktopCount interface{} `field:"optional" json:"defaultInitDesktopCount" yaml:"defaultInitDesktopCount"`
	DesktopGroupName interface{} `field:"optional" json:"desktopGroupName" yaml:"desktopGroupName"`
	EndUserIds interface{} `field:"optional" json:"endUserIds" yaml:"endUserIds"`
	GroupVersion interface{} `field:"optional" json:"groupVersion" yaml:"groupVersion"`
	IdleDisconnectDuration interface{} `field:"optional" json:"idleDisconnectDuration" yaml:"idleDisconnectDuration"`
	KeepDuration interface{} `field:"optional" json:"keepDuration" yaml:"keepDuration"`
	MaxDesktopsCount interface{} `field:"optional" json:"maxDesktopsCount" yaml:"maxDesktopsCount"`
	MinDesktopsCount interface{} `field:"optional" json:"minDesktopsCount" yaml:"minDesktopsCount"`
	Period interface{} `field:"optional" json:"period" yaml:"period"`
	PeriodUnit interface{} `field:"optional" json:"periodUnit" yaml:"periodUnit"`
	ResetType interface{} `field:"optional" json:"resetType" yaml:"resetType"`
	StopDuration interface{} `field:"optional" json:"stopDuration" yaml:"stopDuration"`
	VolumeEncryptionEnabled interface{} `field:"optional" json:"volumeEncryptionEnabled" yaml:"volumeEncryptionEnabled"`
	VolumeEncryptionKey interface{} `field:"optional" json:"volumeEncryptionKey" yaml:"volumeEncryptionKey"`
}

