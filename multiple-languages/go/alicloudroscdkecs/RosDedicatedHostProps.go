package alicloudroscdkecs


// Properties for defining a `RosDedicatedHost`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-dedicatedhost
type RosDedicatedHostProps struct {
	DedicatedHostType interface{} `field:"required" json:"dedicatedHostType" yaml:"dedicatedHostType"`
	ActionOnMaintenance interface{} `field:"optional" json:"actionOnMaintenance" yaml:"actionOnMaintenance"`
	AutoPlacement interface{} `field:"optional" json:"autoPlacement" yaml:"autoPlacement"`
	AutoReleaseTime interface{} `field:"optional" json:"autoReleaseTime" yaml:"autoReleaseTime"`
	AutoRenew interface{} `field:"optional" json:"autoRenew" yaml:"autoRenew"`
	AutoRenewPeriod interface{} `field:"optional" json:"autoRenewPeriod" yaml:"autoRenewPeriod"`
	ChargeType interface{} `field:"optional" json:"chargeType" yaml:"chargeType"`
	DedicatedHostName interface{} `field:"optional" json:"dedicatedHostName" yaml:"dedicatedHostName"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	NetworkAttributesSlbUdpTimeout interface{} `field:"optional" json:"networkAttributesSlbUdpTimeout" yaml:"networkAttributesSlbUdpTimeout"`
	NetworkAttributesUdpTimeout interface{} `field:"optional" json:"networkAttributesUdpTimeout" yaml:"networkAttributesUdpTimeout"`
	Period interface{} `field:"optional" json:"period" yaml:"period"`
	PeriodUnit interface{} `field:"optional" json:"periodUnit" yaml:"periodUnit"`
	Quantity interface{} `field:"optional" json:"quantity" yaml:"quantity"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	Tags *[]*RosDedicatedHost_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
	ZoneId interface{} `field:"optional" json:"zoneId" yaml:"zoneId"`
}

