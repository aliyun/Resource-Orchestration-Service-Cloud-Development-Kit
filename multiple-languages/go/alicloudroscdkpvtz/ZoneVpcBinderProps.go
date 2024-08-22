package alicloudroscdkpvtz


// Properties for defining a `ZoneVpcBinder`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pvtz-zonevpcbinder
type ZoneVpcBinderProps struct {
	// Property vpcs:.
	Vpcs interface{} `field:"required" json:"vpcs" yaml:"vpcs"`
	// Property zoneId: Zone Id.
	ZoneId interface{} `field:"required" json:"zoneId" yaml:"zoneId"`
}

