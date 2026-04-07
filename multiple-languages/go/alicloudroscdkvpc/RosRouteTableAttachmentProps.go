package alicloudroscdkvpc


// Properties for defining a `RosRouteTableAttachment`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-routetableattachment
type RosRouteTableAttachmentProps struct {
	RouteTableId interface{} `field:"required" json:"routeTableId" yaml:"routeTableId"`
	VSwitchId interface{} `field:"required" json:"vSwitchId" yaml:"vSwitchId"`
}

