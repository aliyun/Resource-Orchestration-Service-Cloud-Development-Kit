package alicloudroscdkcen


// Properties for defining a `RosTransitRouterRouteTableAssociation`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-transitrouterroutetableassociation
type RosTransitRouterRouteTableAssociationProps struct {
	TransitRouterAttachmentId interface{} `field:"required" json:"transitRouterAttachmentId" yaml:"transitRouterAttachmentId"`
	TransitRouterRouteTableId interface{} `field:"required" json:"transitRouterRouteTableId" yaml:"transitRouterRouteTableId"`
}

