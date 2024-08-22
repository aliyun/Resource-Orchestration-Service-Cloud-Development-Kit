package alicloudroscdkvpc


// Properties for defining a `RosPeeringRouterInterfaceConnection`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-peeringrouterinterfaceconnection
type RosPeeringRouterInterfaceConnectionProps struct {
	OppositeInterfaceId interface{} `field:"required" json:"oppositeInterfaceId" yaml:"oppositeInterfaceId"`
	RouterInterfaceId interface{} `field:"required" json:"routerInterfaceId" yaml:"routerInterfaceId"`
}

