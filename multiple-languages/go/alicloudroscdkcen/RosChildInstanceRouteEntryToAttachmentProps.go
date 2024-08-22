package alicloudroscdkcen


// Properties for defining a `RosChildInstanceRouteEntryToAttachment`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-childinstancerouteentrytoattachment
type RosChildInstanceRouteEntryToAttachmentProps struct {
	CenId interface{} `field:"required" json:"cenId" yaml:"cenId"`
	DestinationCidrBlock interface{} `field:"required" json:"destinationCidrBlock" yaml:"destinationCidrBlock"`
	RouteTableId interface{} `field:"required" json:"routeTableId" yaml:"routeTableId"`
	TransitRouterAttachmentId interface{} `field:"required" json:"transitRouterAttachmentId" yaml:"transitRouterAttachmentId"`
}

