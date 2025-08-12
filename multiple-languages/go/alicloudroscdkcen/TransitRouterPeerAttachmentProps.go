package alicloudroscdkcen


// Properties for defining a `TransitRouterPeerAttachment`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-transitrouterpeerattachment
type TransitRouterPeerAttachmentProps struct {
	// Property peerTransitRouterId: Peer forwarding router instance ID.
	PeerTransitRouterId interface{} `field:"required" json:"peerTransitRouterId" yaml:"peerTransitRouterId"`
	// Property autoPublishRouteEnabled: Whether to make the enterprise version forwarding router automatically publish routes across regions to the peer region.
	//
	// false (default): No.
	// true: Yes.
	AutoPublishRouteEnabled interface{} `field:"optional" json:"autoPublishRouteEnabled" yaml:"autoPublishRouteEnabled"`
	// Property bandwidth: The bandwidth value for cross-region connections.Unit: Mbps. When the BandwidthType value is BandwidthPackage, this parameter represents the bandwidth value that can be used by cross-region connections. When the BandwidthType value is DataTransfer, this parameter represents the speed limit bandwidth value for cross-region connections.
	Bandwidth interface{} `field:"optional" json:"bandwidth" yaml:"bandwidth"`
	// Property bandwidthType: The bandwidth allocation method for cross-regional connections.Value: BandwidthPackage: Allocate bandwidth from bandwidth packets. DataTransfer: Do not allocate bandwidth for cross-region connections, and is billed based on usage traffic.
	BandwidthType interface{} `field:"optional" json:"bandwidthType" yaml:"bandwidthType"`
	// Property cenBandwidthPackageId: The bandwidth packet ID to bind to across regions.
	//
	// Note When the value of BandwidthType is DataTransfer, this item is not required.
	CenBandwidthPackageId interface{} `field:"optional" json:"cenBandwidthPackageId" yaml:"cenBandwidthPackageId"`
	// Property cenId: Cloud Enterprise Network Instance ID.
	CenId interface{} `field:"optional" json:"cenId" yaml:"cenId"`
	// Property defaultLinkType: Default link type.
	//
	// Optional values are Platinum, Gold, and default to Gold.
	// And it can only be configured as Platinum (Platinum) when the bandwidth allocation method is billed by traffic.
	DefaultLinkType interface{} `field:"optional" json:"defaultLinkType" yaml:"defaultLinkType"`
	// Property peerTransitRouterRegionId: The region ID to which the peer forwarding router instance belongs.
	PeerTransitRouterRegionId interface{} `field:"optional" json:"peerTransitRouterRegionId" yaml:"peerTransitRouterRegionId"`
	// Property tags: The list of tags in the form of key\/value pairs.
	//
	// You can define a maximum of 20 tags.
	Tags *[]*RosTransitRouterPeerAttachment_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
	// Property transitRouterAttachmentDescription: Description information for cross-region connections.
	//
	// The description can be empty or has a length of 1 to 256 characters and cannot start with http:\/\/ or https:\/\/.
	TransitRouterAttachmentDescription interface{} `field:"optional" json:"transitRouterAttachmentDescription" yaml:"transitRouterAttachmentDescription"`
	// Property transitRouterAttachmentName: The name of the cross-region connection.
	//
	// The name can be empty or has a length of 1 to 128 characters, and cannot start with http:\/\/ or https:\/\/.
	TransitRouterAttachmentName interface{} `field:"optional" json:"transitRouterAttachmentName" yaml:"transitRouterAttachmentName"`
	// Property transitRouterId: Local Enterprise Edition forwarding router instance ID.
	TransitRouterId interface{} `field:"optional" json:"transitRouterId" yaml:"transitRouterId"`
}

