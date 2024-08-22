package alicloudroscdkcen


// Properties for defining a `TransitRouterVpcAttachment`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-transitroutervpcattachment
type TransitRouterVpcAttachmentProps struct {
	// Property vpcId: VpcId.
	VpcId interface{} `field:"required" json:"vpcId" yaml:"vpcId"`
	// Property zoneMappings: ZoneMappingss.
	ZoneMappings interface{} `field:"required" json:"zoneMappings" yaml:"zoneMappings"`
	// Property autoCreateVpcRoute: undefined.
	AutoCreateVpcRoute interface{} `field:"optional" json:"autoCreateVpcRoute" yaml:"autoCreateVpcRoute"`
	// Property cenId: CenId.
	CenId interface{} `field:"optional" json:"cenId" yaml:"cenId"`
	// Property chargeType:.
	ChargeType interface{} `field:"optional" json:"chargeType" yaml:"chargeType"`
	// Property deletionForce: Whether force delete related resources, like vpc route entry, route table association, route propagation.
	DeletionForce interface{} `field:"optional" json:"deletionForce" yaml:"deletionForce"`
	// Property routeTableAssociationEnabled: undefined.
	RouteTableAssociationEnabled interface{} `field:"optional" json:"routeTableAssociationEnabled" yaml:"routeTableAssociationEnabled"`
	// Property routeTablePropagationEnabled: undefined.
	RouteTablePropagationEnabled interface{} `field:"optional" json:"routeTablePropagationEnabled" yaml:"routeTablePropagationEnabled"`
	// Property transitRouterAttachmentDescription: TransitRouterAttachmentDescription.
	TransitRouterAttachmentDescription interface{} `field:"optional" json:"transitRouterAttachmentDescription" yaml:"transitRouterAttachmentDescription"`
	// Property transitRouterAttachmentName: TransitRouterAttachmentName.
	TransitRouterAttachmentName interface{} `field:"optional" json:"transitRouterAttachmentName" yaml:"transitRouterAttachmentName"`
	// Property transitRouterId: TransitRouterId.
	TransitRouterId interface{} `field:"optional" json:"transitRouterId" yaml:"transitRouterId"`
	// Property vpcOwnerId: VpcOwnerId.
	VpcOwnerId interface{} `field:"optional" json:"vpcOwnerId" yaml:"vpcOwnerId"`
}

