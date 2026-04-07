package datasource


// Properties for defining a `TransitRouterAttachments`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cen-transitrouterattachments
type TransitRouterAttachmentsProps struct {
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
	// Property resourceTypes: Specify the type of the network instance associated with the connection to be queried.
	//
	// Valid values:
	// ** VPC: Virtual Private Cloud instance.
	// ** CCN: Cloud Connect Network instance.
	// ** VBR: Virtual Border Router instance.
	// ** TR: Transit Router instance, indicating that cross-region connection information will be queried.
	ResourceTypes interface{} `field:"optional" json:"resourceTypes" yaml:"resourceTypes"`
	// Property transitRouterAttachmentId: The ID of the peer connection.
	TransitRouterAttachmentId interface{} `field:"optional" json:"transitRouterAttachmentId" yaml:"transitRouterAttachmentId"`
	// Property transitRouterId: The ID of the enterprise edition transit router.
	TransitRouterId interface{} `field:"optional" json:"transitRouterId" yaml:"transitRouterId"`
}

