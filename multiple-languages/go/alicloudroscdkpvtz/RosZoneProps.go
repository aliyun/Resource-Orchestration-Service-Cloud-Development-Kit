package alicloudroscdkpvtz


// Properties for defining a `RosZone`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pvtz-zone
type RosZoneProps struct {
	ZoneName interface{} `field:"required" json:"zoneName" yaml:"zoneName"`
	IgnoredStackTagKeys interface{} `field:"optional" json:"ignoredStackTagKeys" yaml:"ignoredStackTagKeys"`
	ProxyPattern interface{} `field:"optional" json:"proxyPattern" yaml:"proxyPattern"`
	Remark interface{} `field:"optional" json:"remark" yaml:"remark"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	Tags *[]*RosZone_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
	ZoneTag interface{} `field:"optional" json:"zoneTag" yaml:"zoneTag"`
	ZoneType interface{} `field:"optional" json:"zoneType" yaml:"zoneType"`
}

