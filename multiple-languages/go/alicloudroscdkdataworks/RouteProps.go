package alicloudroscdkdataworks


// Properties for defining a `Route`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dataworks-route
type RouteProps struct {
	// Property destinationCidr: The CIDR blocks of the destination-based route.
	DestinationCidr interface{} `field:"required" json:"destinationCidr" yaml:"destinationCidr"`
	// Property networkId: The ID of the network resource to which the route belongs.
	NetworkId interface{} `field:"required" json:"networkId" yaml:"networkId"`
	// Property dwResourceGroupId: ID of the resource group to which the route belongs.
	DwResourceGroupId interface{} `field:"optional" json:"dwResourceGroupId" yaml:"dwResourceGroupId"`
}

