package alicloudroscdkcen


// Properties for defining a `RosTransitRouterVbrAttachment`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-transitroutervbrattachment
type RosTransitRouterVbrAttachmentProps struct {
	VbrId interface{} `field:"required" json:"vbrId" yaml:"vbrId"`
	AutoPublishRouteEnabled interface{} `field:"optional" json:"autoPublishRouteEnabled" yaml:"autoPublishRouteEnabled"`
	CenId interface{} `field:"optional" json:"cenId" yaml:"cenId"`
	TransitRouterAttachmentDescription interface{} `field:"optional" json:"transitRouterAttachmentDescription" yaml:"transitRouterAttachmentDescription"`
	TransitRouterAttachmentName interface{} `field:"optional" json:"transitRouterAttachmentName" yaml:"transitRouterAttachmentName"`
	TransitRouterId interface{} `field:"optional" json:"transitRouterId" yaml:"transitRouterId"`
	VbrOwnerId interface{} `field:"optional" json:"vbrOwnerId" yaml:"vbrOwnerId"`
}

