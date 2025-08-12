package alicloudroscdkcen


// Properties for defining a `RosTransitRouterPeerAttachment`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-transitrouterpeerattachment
type RosTransitRouterPeerAttachmentProps struct {
	PeerTransitRouterId interface{} `field:"required" json:"peerTransitRouterId" yaml:"peerTransitRouterId"`
	AutoPublishRouteEnabled interface{} `field:"optional" json:"autoPublishRouteEnabled" yaml:"autoPublishRouteEnabled"`
	Bandwidth interface{} `field:"optional" json:"bandwidth" yaml:"bandwidth"`
	BandwidthType interface{} `field:"optional" json:"bandwidthType" yaml:"bandwidthType"`
	CenBandwidthPackageId interface{} `field:"optional" json:"cenBandwidthPackageId" yaml:"cenBandwidthPackageId"`
	CenId interface{} `field:"optional" json:"cenId" yaml:"cenId"`
	DefaultLinkType interface{} `field:"optional" json:"defaultLinkType" yaml:"defaultLinkType"`
	PeerTransitRouterRegionId interface{} `field:"optional" json:"peerTransitRouterRegionId" yaml:"peerTransitRouterRegionId"`
	Tags *[]*RosTransitRouterPeerAttachment_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
	TransitRouterAttachmentDescription interface{} `field:"optional" json:"transitRouterAttachmentDescription" yaml:"transitRouterAttachmentDescription"`
	TransitRouterAttachmentName interface{} `field:"optional" json:"transitRouterAttachmentName" yaml:"transitRouterAttachmentName"`
	TransitRouterId interface{} `field:"optional" json:"transitRouterId" yaml:"transitRouterId"`
}

