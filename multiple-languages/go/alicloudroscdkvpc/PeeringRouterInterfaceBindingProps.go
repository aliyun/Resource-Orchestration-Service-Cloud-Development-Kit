package alicloudroscdkvpc


// Properties for defining a `PeeringRouterInterfaceBinding`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-peeringrouterinterfacebinding
type PeeringRouterInterfaceBindingProps struct {
	// Property oppositeInterfaceId: The connection peer RouterInterface ID.
	OppositeInterfaceId interface{} `field:"required" json:"oppositeInterfaceId" yaml:"oppositeInterfaceId"`
	// Property routerInterfaceId: The RouterInterface is set the parameters of the connection peer RouterInterface.
	RouterInterfaceId interface{} `field:"required" json:"routerInterfaceId" yaml:"routerInterfaceId"`
	// Property oppositeInterfaceOwnerId: Owner account ID of the connection peer RouterInterface.
	OppositeInterfaceOwnerId interface{} `field:"optional" json:"oppositeInterfaceOwnerId" yaml:"oppositeInterfaceOwnerId"`
	// Property oppositeRouterId: Router ID of the connection peer RouterInterface.
	OppositeRouterId interface{} `field:"optional" json:"oppositeRouterId" yaml:"oppositeRouterId"`
}

