package alicloudroscdkvpc


// Properties for defining a `PeeringRouterInterfaceConnection`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-peeringrouterinterfaceconnection
type PeeringRouterInterfaceConnectionProps struct {
	// Property oppositeInterfaceId: The Receiver RouterInterface ID to accept peer RouterInterface.
	OppositeInterfaceId interface{} `field:"required" json:"oppositeInterfaceId" yaml:"oppositeInterfaceId"`
	// Property routerInterfaceId: The Initiator RouterInterface ID to connect peer RouterInterface.
	RouterInterfaceId interface{} `field:"required" json:"routerInterfaceId" yaml:"routerInterfaceId"`
}

