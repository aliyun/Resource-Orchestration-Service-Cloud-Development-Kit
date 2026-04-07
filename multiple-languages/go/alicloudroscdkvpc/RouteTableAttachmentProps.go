package alicloudroscdkvpc


// Properties for defining a `RouteTableAttachment`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-routetableattachment
type RouteTableAttachmentProps struct {
	// Property routeTableId: The ID of the route table.
	RouteTableId interface{} `field:"required" json:"routeTableId" yaml:"routeTableId"`
	// Property vSwitchId: The ID of the VSwitch to bind the route table.
	VSwitchId interface{} `field:"required" json:"vSwitchId" yaml:"vSwitchId"`
}

