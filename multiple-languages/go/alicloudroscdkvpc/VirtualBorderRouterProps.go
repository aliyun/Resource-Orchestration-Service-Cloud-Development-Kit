package alicloudroscdkvpc


// Properties for defining a `VirtualBorderRouter`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-virtualborderrouter
type VirtualBorderRouterProps struct {
	// Property localGatewayIp: The IP address of the VBR on the Alibaba Cloud side.
	LocalGatewayIp interface{} `field:"required" json:"localGatewayIp" yaml:"localGatewayIp"`
	// Property peerGatewayIp: The IP address of the peer router interface of the VBR.
	//
	// Only the owner of the VBR can set or modify the value.
	// This parameter is required when you create a VBR for the owner of the physical connection.
	// You can ignore this parameter when you create a VBR for another Alibaba Cloud account.
	PeerGatewayIp interface{} `field:"required" json:"peerGatewayIp" yaml:"peerGatewayIp"`
	// Property peeringSubnetMask: The subnet mask for the IP addresses of the VBR on the Alibaba Cloud side and on the user side.
	//
	// The two IP addresses must fall within the same subnet.
	PeeringSubnetMask interface{} `field:"required" json:"peeringSubnetMask" yaml:"peeringSubnetMask"`
	// Property physicalConnectionId: The ID of the physical connection.
	PhysicalConnectionId interface{} `field:"required" json:"physicalConnectionId" yaml:"physicalConnectionId"`
	// Property vlanId: The VLAN ID of the VBR.
	//
	// Valid values: 0 to 2999.
	// Note Only the owner of the physical connection can set this parameter. The VLAN IDs of
	// two VBRs of the same physical connection must be different.
	VlanId interface{} `field:"required" json:"vlanId" yaml:"vlanId"`
	// Property circuitCode: The circuit code provided by the Internet service provider (ISP) for the physical connection.
	//
	// Note Only the owner of the physical connection can set this parameter.
	CircuitCode interface{} `field:"optional" json:"circuitCode" yaml:"circuitCode"`
	// Property description: The description of the VBR.
	//
	// The description must be 2 to 256 characters in length. It must start with a letter
	// but cannot start with http:\/\/ or https:\/\/.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property name: The name of the VBR.
	//
	// The name must be 2 to 128 characters in length, and can contain, digits, periods (.),
	// underscores (_), and hyphens (-). The name cannot start with http:\/\/ or https:\/\/.
	Name interface{} `field:"optional" json:"name" yaml:"name"`
}

