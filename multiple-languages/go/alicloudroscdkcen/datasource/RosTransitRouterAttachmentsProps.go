package datasource


// Properties for defining a `RosTransitRouterAttachments`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cen-transitrouterattachments
type RosTransitRouterAttachmentsProps struct {
	CenId interface{} `field:"optional" json:"cenId" yaml:"cenId"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	RegionId interface{} `field:"optional" json:"regionId" yaml:"regionId"`
	ResourceTypes interface{} `field:"optional" json:"resourceTypes" yaml:"resourceTypes"`
	TransitRouterAttachmentId interface{} `field:"optional" json:"transitRouterAttachmentId" yaml:"transitRouterAttachmentId"`
	TransitRouterId interface{} `field:"optional" json:"transitRouterId" yaml:"transitRouterId"`
}

