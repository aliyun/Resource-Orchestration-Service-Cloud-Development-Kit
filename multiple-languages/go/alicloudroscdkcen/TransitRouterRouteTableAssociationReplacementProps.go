package alicloudroscdkcen


// Properties for defining a `TransitRouterRouteTableAssociationReplacement`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-transitrouterroutetableassociationreplacement
type TransitRouterRouteTableAssociationReplacementProps struct {
	// Property transitRouterAttachmentId: The ID of the network instance connection.
	TransitRouterAttachmentId interface{} `field:"required" json:"transitRouterAttachmentId" yaml:"transitRouterAttachmentId"`
	// Property transitRouterRouteTableId: The ID of the transit router route table to be associated.
	TransitRouterRouteTableId interface{} `field:"required" json:"transitRouterRouteTableId" yaml:"transitRouterRouteTableId"`
}

