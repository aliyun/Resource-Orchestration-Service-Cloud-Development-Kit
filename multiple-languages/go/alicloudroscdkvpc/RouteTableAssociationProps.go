package alicloudroscdkvpc


// Properties for defining a `RouteTableAssociation`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-routetableassociation
type RouteTableAssociationProps struct {
	// Property routeTableId: The ID of the route table.
	RouteTableId interface{} `field:"required" json:"routeTableId" yaml:"routeTableId"`
	// Property vSwitchId: The ID of the VSwitch.
	VSwitchId interface{} `field:"required" json:"vSwitchId" yaml:"vSwitchId"`
}

