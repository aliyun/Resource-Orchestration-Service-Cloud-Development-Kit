package alicloudroscdkvpc


// Properties for defining a `RosVirtualBorderRouter`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-virtualborderrouter
type RosVirtualBorderRouterProps struct {
	LocalGatewayIp interface{} `field:"required" json:"localGatewayIp" yaml:"localGatewayIp"`
	PeerGatewayIp interface{} `field:"required" json:"peerGatewayIp" yaml:"peerGatewayIp"`
	PeeringSubnetMask interface{} `field:"required" json:"peeringSubnetMask" yaml:"peeringSubnetMask"`
	PhysicalConnectionId interface{} `field:"required" json:"physicalConnectionId" yaml:"physicalConnectionId"`
	VlanId interface{} `field:"required" json:"vlanId" yaml:"vlanId"`
	CircuitCode interface{} `field:"optional" json:"circuitCode" yaml:"circuitCode"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	Name interface{} `field:"optional" json:"name" yaml:"name"`
}

