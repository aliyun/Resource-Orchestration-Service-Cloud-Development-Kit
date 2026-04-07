package alicloudroscdkcen


// Properties for defining a `RosTransitRouterMulticastDomainAssociation`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-transitroutermulticastdomainassociation
type RosTransitRouterMulticastDomainAssociationProps struct {
	TransitRouterAttachmentId interface{} `field:"required" json:"transitRouterAttachmentId" yaml:"transitRouterAttachmentId"`
	TransitRouterMulticastDomainId interface{} `field:"required" json:"transitRouterMulticastDomainId" yaml:"transitRouterMulticastDomainId"`
	VSwitchId interface{} `field:"required" json:"vSwitchId" yaml:"vSwitchId"`
}

