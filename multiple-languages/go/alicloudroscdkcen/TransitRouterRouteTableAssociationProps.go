package alicloudroscdkcen


// Properties for defining a `TransitRouterRouteTableAssociation`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-transitrouterroutetableassociation
type TransitRouterRouteTableAssociationProps struct {
	// Property transitRouterAttachmentId: TransitRouterAttachmentId.
	TransitRouterAttachmentId interface{} `field:"required" json:"transitRouterAttachmentId" yaml:"transitRouterAttachmentId"`
	// Property transitRouterRouteTableId: TransitRouterRouteTableId.
	TransitRouterRouteTableId interface{} `field:"required" json:"transitRouterRouteTableId" yaml:"transitRouterRouteTableId"`
}

