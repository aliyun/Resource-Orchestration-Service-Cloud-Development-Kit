package datasource


// Properties for defining a `TransitRouterPeerAttachments`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cen-transitrouterpeerattachments
type TransitRouterPeerAttachmentsProps struct {
	// Property cenId: The ID of the CEN instance.
	CenId interface{} `field:"optional" json:"cenId" yaml:"cenId"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	// Property regionId: The ID of the region where the transit router is deployed.
	RegionId interface{} `field:"optional" json:"regionId" yaml:"regionId"`
	// Property tag: Tags of cen transit router peer attachments..
	Tag interface{} `field:"optional" json:"tag" yaml:"tag"`
	// Property transitRouterAttachmentId: The ID of the peer connection.
	TransitRouterAttachmentId interface{} `field:"optional" json:"transitRouterAttachmentId" yaml:"transitRouterAttachmentId"`
	// Property transitRouterId: The ID of the enterprise edition transit router.
	TransitRouterId interface{} `field:"optional" json:"transitRouterId" yaml:"transitRouterId"`
}

