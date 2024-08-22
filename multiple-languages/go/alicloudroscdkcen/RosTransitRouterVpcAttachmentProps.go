package alicloudroscdkcen


// Properties for defining a `RosTransitRouterVpcAttachment`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-transitroutervpcattachment
type RosTransitRouterVpcAttachmentProps struct {
	VpcId interface{} `field:"required" json:"vpcId" yaml:"vpcId"`
	ZoneMappings interface{} `field:"required" json:"zoneMappings" yaml:"zoneMappings"`
	AutoCreateVpcRoute interface{} `field:"optional" json:"autoCreateVpcRoute" yaml:"autoCreateVpcRoute"`
	CenId interface{} `field:"optional" json:"cenId" yaml:"cenId"`
	ChargeType interface{} `field:"optional" json:"chargeType" yaml:"chargeType"`
	DeletionForce interface{} `field:"optional" json:"deletionForce" yaml:"deletionForce"`
	RouteTableAssociationEnabled interface{} `field:"optional" json:"routeTableAssociationEnabled" yaml:"routeTableAssociationEnabled"`
	RouteTablePropagationEnabled interface{} `field:"optional" json:"routeTablePropagationEnabled" yaml:"routeTablePropagationEnabled"`
	TransitRouterAttachmentDescription interface{} `field:"optional" json:"transitRouterAttachmentDescription" yaml:"transitRouterAttachmentDescription"`
	TransitRouterAttachmentName interface{} `field:"optional" json:"transitRouterAttachmentName" yaml:"transitRouterAttachmentName"`
	TransitRouterId interface{} `field:"optional" json:"transitRouterId" yaml:"transitRouterId"`
	VpcOwnerId interface{} `field:"optional" json:"vpcOwnerId" yaml:"vpcOwnerId"`
}

