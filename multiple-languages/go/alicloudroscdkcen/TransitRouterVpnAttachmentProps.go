package alicloudroscdkcen


// Properties for defining a `TransitRouterVpnAttachment`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-transitroutervpnattachment
type TransitRouterVpnAttachmentProps struct {
	// Property vpnId: IPsec connection ID.
	VpnId interface{} `field:"required" json:"vpnId" yaml:"vpnId"`
	// Property zoneId: Availability zone ID in the current region.
	ZoneId interface{} `field:"required" json:"zoneId" yaml:"zoneId"`
	// Property autoPublishRouteEnabled: Whether to allow forwarding router instances to automatically publish route entries to IPsec connections.
	//
	// Default is true.
	AutoPublishRouteEnabled interface{} `field:"optional" json:"autoPublishRouteEnabled" yaml:"autoPublishRouteEnabled"`
	// Property cenId: The ID of the CEN instance.
	CenId interface{} `field:"optional" json:"cenId" yaml:"cenId"`
	// Property deletionForce: Whether to forcefully delete the VPN connection.
	DeletionForce interface{} `field:"optional" json:"deletionForce" yaml:"deletionForce"`
	// Property routeTableAssociationEnabled: Whether to enable route association and forwarding relationship.
	RouteTableAssociationEnabled interface{} `field:"optional" json:"routeTableAssociationEnabled" yaml:"routeTableAssociationEnabled"`
	// Property routeTablePropagationEnabled: Whether to enable route learning relationships.
	RouteTablePropagationEnabled interface{} `field:"optional" json:"routeTablePropagationEnabled" yaml:"routeTablePropagationEnabled"`
	// Property tags: Tags to attach to TransitRouterVpnAttachment.
	//
	// Max support 20 tags to add during create TransitRouterVpnAttachment. Each tag with two properties Key and Value, and Key is required.
	Tags *[]*RosTransitRouterVpnAttachment_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
	// Property transitRouterAttachmentDescription: Description of the VPN connection.
	TransitRouterAttachmentDescription interface{} `field:"optional" json:"transitRouterAttachmentDescription" yaml:"transitRouterAttachmentDescription"`
	// Property transitRouterAttachmentName: The name of the VPN connection.
	TransitRouterAttachmentName interface{} `field:"optional" json:"transitRouterAttachmentName" yaml:"transitRouterAttachmentName"`
	// Property transitRouterId: Forwarding router instance ID.
	TransitRouterId interface{} `field:"optional" json:"transitRouterId" yaml:"transitRouterId"`
	// Property vpnOwnerId: Alibaba Cloud account (main account) ID to which the IPsec connection belongs.
	VpnOwnerId interface{} `field:"optional" json:"vpnOwnerId" yaml:"vpnOwnerId"`
}

