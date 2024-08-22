package alicloudroscdkcddc


// Properties for defining a `RosDedicatedHost`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cddc-dedicatedhost
type RosDedicatedHostProps struct {
	DedicatedHostGroupId interface{} `field:"required" json:"dedicatedHostGroupId" yaml:"dedicatedHostGroupId"`
	HostClass interface{} `field:"required" json:"hostClass" yaml:"hostClass"`
	PaymentType interface{} `field:"required" json:"paymentType" yaml:"paymentType"`
	VSwitchId interface{} `field:"required" json:"vSwitchId" yaml:"vSwitchId"`
	ZoneId interface{} `field:"required" json:"zoneId" yaml:"zoneId"`
	AutoRenew interface{} `field:"optional" json:"autoRenew" yaml:"autoRenew"`
	HostName interface{} `field:"optional" json:"hostName" yaml:"hostName"`
	ImageCategory interface{} `field:"optional" json:"imageCategory" yaml:"imageCategory"`
	OsPassword interface{} `field:"optional" json:"osPassword" yaml:"osPassword"`
	Period interface{} `field:"optional" json:"period" yaml:"period"`
	Tags *[]*RosDedicatedHost_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
	UsedTime interface{} `field:"optional" json:"usedTime" yaml:"usedTime"`
}

