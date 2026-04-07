package datasource


// Properties for defining a `RosTransitRouterPeerAttachments`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cen-transitrouterpeerattachments
type RosTransitRouterPeerAttachmentsProps struct {
	CenId interface{} `field:"optional" json:"cenId" yaml:"cenId"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	RegionId interface{} `field:"optional" json:"regionId" yaml:"regionId"`
	Tag interface{} `field:"optional" json:"tag" yaml:"tag"`
	TransitRouterAttachmentId interface{} `field:"optional" json:"transitRouterAttachmentId" yaml:"transitRouterAttachmentId"`
	TransitRouterId interface{} `field:"optional" json:"transitRouterId" yaml:"transitRouterId"`
}

