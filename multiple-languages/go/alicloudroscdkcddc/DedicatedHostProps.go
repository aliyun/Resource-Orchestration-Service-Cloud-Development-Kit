package alicloudroscdkcddc


// Properties for defining a `DedicatedHost`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cddc-dedicatedhost
type DedicatedHostProps struct {
	// Property dedicatedHostGroupId: Dedicated Host Group ID.
	DedicatedHostGroupId interface{} `field:"required" json:"dedicatedHostGroupId" yaml:"dedicatedHostGroupId"`
	// Property hostClass: Host Class.
	HostClass interface{} `field:"required" json:"hostClass" yaml:"hostClass"`
	// Property paymentType: Payment Type.
	PaymentType interface{} `field:"required" json:"paymentType" yaml:"paymentType"`
	// Property vSwitchId: VSwitch ID.
	VSwitchId interface{} `field:"required" json:"vSwitchId" yaml:"vSwitchId"`
	// Property zoneId: Zone ID.
	ZoneId interface{} `field:"required" json:"zoneId" yaml:"zoneId"`
	// Property autoRenew: Whether Auto Renew.
	AutoRenew interface{} `field:"optional" json:"autoRenew" yaml:"autoRenew"`
	// Property hostName: Host Name.
	HostName interface{} `field:"optional" json:"hostName" yaml:"hostName"`
	// Property imageCategory: Host Image Category.
	ImageCategory interface{} `field:"optional" json:"imageCategory" yaml:"imageCategory"`
	// Property osPassword:.
	OsPassword interface{} `field:"optional" json:"osPassword" yaml:"osPassword"`
	// Property period:.
	Period interface{} `field:"optional" json:"period" yaml:"period"`
	// Property tags: The tag of the resource.
	Tags *[]*RosDedicatedHost_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
	// Property usedTime:.
	UsedTime interface{} `field:"optional" json:"usedTime" yaml:"usedTime"`
}

