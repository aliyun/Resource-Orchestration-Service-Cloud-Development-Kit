package alicloudroscdkvpc


// Properties for defining a `VpcPeerConnection`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-vpcpeerconnection
type VpcPeerConnectionProps struct {
	// Property acceptingVpcId: The ID of the acceptor VPC.
	AcceptingVpcId interface{} `field:"required" json:"acceptingVpcId" yaml:"acceptingVpcId"`
	// Property vpcId: The ID of the requester VPC.
	VpcId interface{} `field:"required" json:"vpcId" yaml:"vpcId"`
	// Property acceptingAliUid: The ID of the Alibaba Cloud account to which the acceptor VPC belongs.
	//
	// To create a VPC peering connection within your Alibaba Cloud account, enter the ID
	// of your Alibaba Cloud account.
	// To create a VPC peering connection between your Alibaba Cloud account and another
	// Alibaba Cloud account, enter the ID of the peer Alibaba Cloud account.
	// Note If the acceptor VPC belongs to a Resource Access Management (RAM) user, you must set
	// the value of AcceptingAliUid to the ID of the corresponding Alibaba Cloud account.
	// Default current account ID.
	AcceptingAliUid interface{} `field:"optional" json:"acceptingAliUid" yaml:"acceptingAliUid"`
	// Property acceptingRegionId: The region ID of the acceptor VPC of the VPC peering connection that you want to create.
	//
	// To create an intra-region VPC peering connection, enter a region ID that is the same
	// as that of the requester VPC.
	// To create an inter-region VPC peering connection, enter a region ID that is different
	// from that of the requester VPC.
	// Default current region.
	AcceptingRegionId interface{} `field:"optional" json:"acceptingRegionId" yaml:"acceptingRegionId"`
	// Property deletionForce: Specifies whether to forcefully delete the VPC peering connection.
	//
	// Valid values:false (default): notrue: yes If you forcefully delete the VPC peering connection, the system deletes the routes that point to the VPC peering connection from the VPC route table.
	DeletionForce interface{} `field:"optional" json:"deletionForce" yaml:"deletionForce"`
	// Property description: The description of the VPC peering connection.
	//
	// The description must be 2 to 256 characters in length. It must start with a letter
	// but cannot start with http:\/\/ or https:\/\/.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property name: The name of the VPC peering connection.
	//
	// The name must be 2 to 128 characters in length and can contain digits, underscores
	// (_), and hyphens (-). It must start with a letter.
	Name interface{} `field:"optional" json:"name" yaml:"name"`
}

