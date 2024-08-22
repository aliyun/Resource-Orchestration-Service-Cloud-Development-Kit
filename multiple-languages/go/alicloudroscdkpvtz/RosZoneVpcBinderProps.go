package alicloudroscdkpvtz


// Properties for defining a `RosZoneVpcBinder`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pvtz-zonevpcbinder
type RosZoneVpcBinderProps struct {
	Vpcs interface{} `field:"required" json:"vpcs" yaml:"vpcs"`
	ZoneId interface{} `field:"required" json:"zoneId" yaml:"zoneId"`
}

