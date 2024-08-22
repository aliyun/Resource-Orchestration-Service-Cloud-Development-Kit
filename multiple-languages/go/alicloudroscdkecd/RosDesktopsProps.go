package alicloudroscdkecd


// Properties for defining a `RosDesktops`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecd-desktops
type RosDesktopsProps struct {
	BundleId interface{} `field:"required" json:"bundleId" yaml:"bundleId"`
	OfficeSiteId interface{} `field:"required" json:"officeSiteId" yaml:"officeSiteId"`
	PolicyGroupId interface{} `field:"required" json:"policyGroupId" yaml:"policyGroupId"`
	Amount interface{} `field:"optional" json:"amount" yaml:"amount"`
	AutoPay interface{} `field:"optional" json:"autoPay" yaml:"autoPay"`
	AutoRenew interface{} `field:"optional" json:"autoRenew" yaml:"autoRenew"`
	ChargeType interface{} `field:"optional" json:"chargeType" yaml:"chargeType"`
	DesktopName interface{} `field:"optional" json:"desktopName" yaml:"desktopName"`
	DesktopNameSuffix interface{} `field:"optional" json:"desktopNameSuffix" yaml:"desktopNameSuffix"`
	DirectoryId interface{} `field:"optional" json:"directoryId" yaml:"directoryId"`
	EndUserId interface{} `field:"optional" json:"endUserId" yaml:"endUserId"`
	GroupId interface{} `field:"optional" json:"groupId" yaml:"groupId"`
	Hostname interface{} `field:"optional" json:"hostname" yaml:"hostname"`
	Period interface{} `field:"optional" json:"period" yaml:"period"`
	PeriodUnit interface{} `field:"optional" json:"periodUnit" yaml:"periodUnit"`
	PromotionId interface{} `field:"optional" json:"promotionId" yaml:"promotionId"`
	Tags *[]*RosDesktops_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
	UserAssignMode interface{} `field:"optional" json:"userAssignMode" yaml:"userAssignMode"`
	UserName interface{} `field:"optional" json:"userName" yaml:"userName"`
	VolumeEncryptionEnabled interface{} `field:"optional" json:"volumeEncryptionEnabled" yaml:"volumeEncryptionEnabled"`
	VolumeEncryptionKey interface{} `field:"optional" json:"volumeEncryptionKey" yaml:"volumeEncryptionKey"`
	VpcId interface{} `field:"optional" json:"vpcId" yaml:"vpcId"`
}

