package alicloudroscdkvpc


// Properties for defining a `RosRouteTableAssociation`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-routetableassociation
type RosRouteTableAssociationProps struct {
	RouteTableId interface{} `field:"required" json:"routeTableId" yaml:"routeTableId"`
	VSwitchId interface{} `field:"required" json:"vSwitchId" yaml:"vSwitchId"`
}

