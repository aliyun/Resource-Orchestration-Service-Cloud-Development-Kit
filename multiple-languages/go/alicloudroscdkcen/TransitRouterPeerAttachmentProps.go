package alicloudroscdkcen


// Properties for defining a `TransitRouterPeerAttachment`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-transitrouterpeerattachment
type TransitRouterPeerAttachmentProps struct {
	// Property peerTransitRouterId: PeerTransitRouterId.
	PeerTransitRouterId interface{} `field:"required" json:"peerTransitRouterId" yaml:"peerTransitRouterId"`
	// Property autoPublishRouteEnabled: AutoPublishRouteEnabled.
	AutoPublishRouteEnabled interface{} `field:"optional" json:"autoPublishRouteEnabled" yaml:"autoPublishRouteEnabled"`
	// Property bandwidth: Bandwidth.
	Bandwidth interface{} `field:"optional" json:"bandwidth" yaml:"bandwidth"`
	// Property cenBandwidthPackageId: BandwidthPackageId.
	CenBandwidthPackageId interface{} `field:"optional" json:"cenBandwidthPackageId" yaml:"cenBandwidthPackageId"`
	// Property cenId: CenId.
	CenId interface{} `field:"optional" json:"cenId" yaml:"cenId"`
	// Property peerTransitRouterRegionId: PeerTransitRouterRegionId.
	PeerTransitRouterRegionId interface{} `field:"optional" json:"peerTransitRouterRegionId" yaml:"peerTransitRouterRegionId"`
	// Property transitRouterAttachmentDescription: TransitRouterAttachmentDescription.
	TransitRouterAttachmentDescription interface{} `field:"optional" json:"transitRouterAttachmentDescription" yaml:"transitRouterAttachmentDescription"`
	// Property transitRouterAttachmentName: TransitRouterAttachmentName.
	TransitRouterAttachmentName interface{} `field:"optional" json:"transitRouterAttachmentName" yaml:"transitRouterAttachmentName"`
	// Property transitRouterId: TransitRouterId.
	TransitRouterId interface{} `field:"optional" json:"transitRouterId" yaml:"transitRouterId"`
}

