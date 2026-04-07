package alicloudroscdkcen


// Properties for defining a `TransitRouterCidr`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-transitroutercidr
type TransitRouterCidrProps struct {
	// Property cidr: The CIDR block of the transit router.
	Cidr interface{} `field:"required" json:"cidr" yaml:"cidr"`
	// Property transitRouterId: The ID of the transit router.
	TransitRouterId interface{} `field:"required" json:"transitRouterId" yaml:"transitRouterId"`
	// Property description: The new description of the transit router CIDR block.
	//
	// The description must be 1 to 256 characters in length, and cannot start with http:\/\/ or https:\/\/. You can also leave this parameter empty.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property publishCidrRoute: Specifies whether to allow the system to automatically add a route that points to the CIDR block to the route table of the transit router.
	//
	// * true (default)
	//   If you set the value to true, after you create a VPN attachment on a private VPN gateway and enable route learning for the VPN attachment, the system automatically adds the following route to the route table of the transit router that is in route learning relationship with the VPN attachment:
	//   A blackhole route whose destination CIDR block is the transit router CIDR block, which refers to the CIDR block from which gateway IP addresses are allocated to the IPsec-VPN connection. The blackhole route is advertised only to the route tables of virtual border routers (VBRs) connected to the transit router.
	// * false.
	PublishCidrRoute interface{} `field:"optional" json:"publishCidrRoute" yaml:"publishCidrRoute"`
	// Property transitRouterCidrName: The new name of the transit router CIDR block.
	//
	// The name must be 1 to 128 characters in length, and cannot start with http:\/\/ or https:\/\/. You can also leave this parameter empty.
	TransitRouterCidrName interface{} `field:"optional" json:"transitRouterCidrName" yaml:"transitRouterCidrName"`
}

