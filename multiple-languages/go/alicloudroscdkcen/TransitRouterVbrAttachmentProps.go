package alicloudroscdkcen


// Properties for defining a `TransitRouterVbrAttachment`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-transitroutervbrattachment
type TransitRouterVbrAttachmentProps struct {
	// Property vbrId: VbrId.
	VbrId interface{} `field:"required" json:"vbrId" yaml:"vbrId"`
	// Property autoPublishRouteEnabled: AutoPublishRouteEnabled.
	AutoPublishRouteEnabled interface{} `field:"optional" json:"autoPublishRouteEnabled" yaml:"autoPublishRouteEnabled"`
	// Property cenId: CenId.
	CenId interface{} `field:"optional" json:"cenId" yaml:"cenId"`
	// Property transitRouterAttachmentDescription: TransitRouterAttachmentDescription.
	TransitRouterAttachmentDescription interface{} `field:"optional" json:"transitRouterAttachmentDescription" yaml:"transitRouterAttachmentDescription"`
	// Property transitRouterAttachmentName: TransitRouterAttachmentName.
	TransitRouterAttachmentName interface{} `field:"optional" json:"transitRouterAttachmentName" yaml:"transitRouterAttachmentName"`
	// Property transitRouterId: TransitRouterId.
	TransitRouterId interface{} `field:"optional" json:"transitRouterId" yaml:"transitRouterId"`
	// Property vbrOwnerId: VbrOwnerId.
	VbrOwnerId interface{} `field:"optional" json:"vbrOwnerId" yaml:"vbrOwnerId"`
}

