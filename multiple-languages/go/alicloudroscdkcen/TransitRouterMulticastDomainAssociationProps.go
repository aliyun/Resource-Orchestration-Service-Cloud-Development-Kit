package alicloudroscdkcen


// Properties for defining a `TransitRouterMulticastDomainAssociation`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-transitroutermulticastdomainassociation
type TransitRouterMulticastDomainAssociationProps struct {
	// Property transitRouterAttachmentId: The ID of the VPC connection.
	TransitRouterAttachmentId interface{} `field:"required" json:"transitRouterAttachmentId" yaml:"transitRouterAttachmentId"`
	// Property transitRouterMulticastDomainId: The ID of the multicast domain.
	TransitRouterMulticastDomainId interface{} `field:"required" json:"transitRouterMulticastDomainId" yaml:"transitRouterMulticastDomainId"`
	// Property vSwitchId: The ID of the VSwitch.
	VSwitchId interface{} `field:"required" json:"vSwitchId" yaml:"vSwitchId"`
}

