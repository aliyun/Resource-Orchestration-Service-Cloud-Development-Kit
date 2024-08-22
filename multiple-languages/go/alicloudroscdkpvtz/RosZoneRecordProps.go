package alicloudroscdkpvtz


// Properties for defining a `RosZoneRecord`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pvtz-zonerecord
type RosZoneRecordProps struct {
	Rr interface{} `field:"required" json:"rr" yaml:"rr"`
	Status interface{} `field:"required" json:"status" yaml:"status"`
	Type interface{} `field:"required" json:"type" yaml:"type"`
	Value interface{} `field:"required" json:"value" yaml:"value"`
	ZoneId interface{} `field:"required" json:"zoneId" yaml:"zoneId"`
	Priority interface{} `field:"optional" json:"priority" yaml:"priority"`
	Ttl interface{} `field:"optional" json:"ttl" yaml:"ttl"`
}

