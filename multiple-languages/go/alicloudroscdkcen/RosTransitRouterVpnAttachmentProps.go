package alicloudroscdkcen


// Properties for defining a `RosTransitRouterVpnAttachment`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-transitroutervpnattachment
type RosTransitRouterVpnAttachmentProps struct {
	VpnId interface{} `field:"required" json:"vpnId" yaml:"vpnId"`
	ZoneId interface{} `field:"required" json:"zoneId" yaml:"zoneId"`
	AutoPublishRouteEnabled interface{} `field:"optional" json:"autoPublishRouteEnabled" yaml:"autoPublishRouteEnabled"`
	CenId interface{} `field:"optional" json:"cenId" yaml:"cenId"`
	DeletionForce interface{} `field:"optional" json:"deletionForce" yaml:"deletionForce"`
	RouteTableAssociationEnabled interface{} `field:"optional" json:"routeTableAssociationEnabled" yaml:"routeTableAssociationEnabled"`
	RouteTablePropagationEnabled interface{} `field:"optional" json:"routeTablePropagationEnabled" yaml:"routeTablePropagationEnabled"`
	Tags *[]*RosTransitRouterVpnAttachment_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
	TransitRouterAttachmentDescription interface{} `field:"optional" json:"transitRouterAttachmentDescription" yaml:"transitRouterAttachmentDescription"`
	TransitRouterAttachmentName interface{} `field:"optional" json:"transitRouterAttachmentName" yaml:"transitRouterAttachmentName"`
	TransitRouterId interface{} `field:"optional" json:"transitRouterId" yaml:"transitRouterId"`
	VpnOwnerId interface{} `field:"optional" json:"vpnOwnerId" yaml:"vpnOwnerId"`
}

