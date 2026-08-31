package alicloudroscdkpvtz


// Properties for defining a `ZoneVpcBinder`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pvtz-zonevpcbinder
type ZoneVpcBinderProps struct {
	// Property vpcs: The VPCs.
	//
	// > If you leave this parameter empty, all VPCs bound to the zone are unbound.
	Vpcs interface{} `field:"required" json:"vpcs" yaml:"vpcs"`
	// Property zoneId: Zone Id.
	ZoneId interface{} `field:"required" json:"zoneId" yaml:"zoneId"`
}

