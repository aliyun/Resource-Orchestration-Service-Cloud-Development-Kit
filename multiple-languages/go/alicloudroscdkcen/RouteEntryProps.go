package alicloudroscdkcen


// Properties for defining a `RouteEntry`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-routeentry
type RouteEntryProps struct {
	// Property cenId: The ID of the CEN instance where the route entry is published.
	CenId interface{} `field:"required" json:"cenId" yaml:"cenId"`
	// Property childInstanceId: The ID of the attached network (VPC or VBR).
	ChildInstanceId interface{} `field:"required" json:"childInstanceId" yaml:"childInstanceId"`
	// Property childInstanceRegionId: The ID of the region where the attached VBR or VPC is located.
	ChildInstanceRegionId interface{} `field:"required" json:"childInstanceRegionId" yaml:"childInstanceRegionId"`
	// Property childInstanceRouteTableId: The route table of the attached VBR or VPC.
	ChildInstanceRouteTableId interface{} `field:"required" json:"childInstanceRouteTableId" yaml:"childInstanceRouteTableId"`
	// Property childInstanceType: The type of the network, value: VPC VBR.
	ChildInstanceType interface{} `field:"required" json:"childInstanceType" yaml:"childInstanceType"`
	// Property destinationCidrBlock: The destination CIDR block of the route entry to publish.
	DestinationCidrBlock interface{} `field:"required" json:"destinationCidrBlock" yaml:"destinationCidrBlock"`
}

