package alicloudroscdkcen


// Properties for defining a `TransitRouterVpcAttachment`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-transitroutervpcattachment
type TransitRouterVpcAttachmentProps struct {
	// Property vpcId: The ID of the VPC.
	VpcId interface{} `field:"required" json:"vpcId" yaml:"vpcId"`
	// Property zoneMappings: The zone mappings for the VPC.
	ZoneMappings interface{} `field:"required" json:"zoneMappings" yaml:"zoneMappings"`
	// Property autoCreateVpcRoute: undefined.
	AutoCreateVpcRoute interface{} `field:"optional" json:"autoCreateVpcRoute" yaml:"autoCreateVpcRoute"`
	// Property autoPublishRouteEnabled: Whether to automatically publish routes.
	AutoPublishRouteEnabled interface{} `field:"optional" json:"autoPublishRouteEnabled" yaml:"autoPublishRouteEnabled"`
	// Property cenId: The ID of the Cloud Enterprise Network (CEN) instance.
	CenId interface{} `field:"optional" json:"cenId" yaml:"cenId"`
	// Property chargeType: The charge type of the transit router vpc attachment.
	ChargeType interface{} `field:"optional" json:"chargeType" yaml:"chargeType"`
	// Property deletionForce: Whether force delete related resources, like vpc route entry, route table association, route propagation.
	DeletionForce interface{} `field:"optional" json:"deletionForce" yaml:"deletionForce"`
	// Property routeTableAssociationEnabled: undefined.
	RouteTableAssociationEnabled interface{} `field:"optional" json:"routeTableAssociationEnabled" yaml:"routeTableAssociationEnabled"`
	// Property routeTablePropagationEnabled: undefined.
	RouteTablePropagationEnabled interface{} `field:"optional" json:"routeTablePropagationEnabled" yaml:"routeTablePropagationEnabled"`
	// Property transitRouterAttachmentDescription: The description of the transit router VPC attachment.
	TransitRouterAttachmentDescription interface{} `field:"optional" json:"transitRouterAttachmentDescription" yaml:"transitRouterAttachmentDescription"`
	// Property transitRouterAttachmentName: The name of the transit router VPC attachment.
	TransitRouterAttachmentName interface{} `field:"optional" json:"transitRouterAttachmentName" yaml:"transitRouterAttachmentName"`
	// Property transitRouterId: The ID of the transit router.
	TransitRouterId interface{} `field:"optional" json:"transitRouterId" yaml:"transitRouterId"`
	// Property transitRouterVpcAttachmentOptions: The options for the transit router VPC attachment.
	TransitRouterVpcAttachmentOptions interface{} `field:"optional" json:"transitRouterVpcAttachmentOptions" yaml:"transitRouterVpcAttachmentOptions"`
	// Property vpcOwnerId: The owner ID of the VPC.
	VpcOwnerId interface{} `field:"optional" json:"vpcOwnerId" yaml:"vpcOwnerId"`
}

