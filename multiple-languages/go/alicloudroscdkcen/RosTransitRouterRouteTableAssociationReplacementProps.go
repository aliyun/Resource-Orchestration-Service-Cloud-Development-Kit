package alicloudroscdkcen


// Properties for defining a `RosTransitRouterRouteTableAssociationReplacement`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-transitrouterroutetableassociationreplacement
type RosTransitRouterRouteTableAssociationReplacementProps struct {
	TransitRouterAttachmentId interface{} `field:"required" json:"transitRouterAttachmentId" yaml:"transitRouterAttachmentId"`
	TransitRouterRouteTableId interface{} `field:"required" json:"transitRouterRouteTableId" yaml:"transitRouterRouteTableId"`
}

