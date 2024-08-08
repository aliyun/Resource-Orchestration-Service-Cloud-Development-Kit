package alicloudroscdkvpc


// Properties for defining a `RosPeeringRouterInterfaceBinding`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-peeringrouterinterfacebinding
type RosPeeringRouterInterfaceBindingProps struct {
	OppositeInterfaceId interface{} `field:"required" json:"oppositeInterfaceId" yaml:"oppositeInterfaceId"`
	RouterInterfaceId interface{} `field:"required" json:"routerInterfaceId" yaml:"routerInterfaceId"`
	OppositeInterfaceOwnerId interface{} `field:"optional" json:"oppositeInterfaceOwnerId" yaml:"oppositeInterfaceOwnerId"`
	OppositeRouterId interface{} `field:"optional" json:"oppositeRouterId" yaml:"oppositeRouterId"`
}

