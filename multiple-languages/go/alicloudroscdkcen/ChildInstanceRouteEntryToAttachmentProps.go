package alicloudroscdkcen


// Properties for defining a `ChildInstanceRouteEntryToAttachment`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-childinstancerouteentrytoattachment
type ChildInstanceRouteEntryToAttachmentProps struct {
	// Property cenId: The ID of the CEN instance.
	CenId interface{} `field:"required" json:"cenId" yaml:"cenId"`
	// Property destinationCidrBlock: The destination CIDR block of the route.
	DestinationCidrBlock interface{} `field:"required" json:"destinationCidrBlock" yaml:"destinationCidrBlock"`
	// Property routeTableId: The ID of the route table configured on the network instance.
	RouteTableId interface{} `field:"required" json:"routeTableId" yaml:"routeTableId"`
	// Property transitRouterAttachmentId: The ID of the network instance connection.
	TransitRouterAttachmentId interface{} `field:"required" json:"transitRouterAttachmentId" yaml:"transitRouterAttachmentId"`
}

