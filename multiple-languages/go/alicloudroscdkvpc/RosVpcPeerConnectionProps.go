package alicloudroscdkvpc


// Properties for defining a `RosVpcPeerConnection`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-vpcpeerconnection
type RosVpcPeerConnectionProps struct {
	AcceptingVpcId interface{} `field:"required" json:"acceptingVpcId" yaml:"acceptingVpcId"`
	VpcId interface{} `field:"required" json:"vpcId" yaml:"vpcId"`
	AcceptingAliUid interface{} `field:"optional" json:"acceptingAliUid" yaml:"acceptingAliUid"`
	AcceptingRegionId interface{} `field:"optional" json:"acceptingRegionId" yaml:"acceptingRegionId"`
	Bandwidth interface{} `field:"optional" json:"bandwidth" yaml:"bandwidth"`
	DeletionForce interface{} `field:"optional" json:"deletionForce" yaml:"deletionForce"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	LinkType interface{} `field:"optional" json:"linkType" yaml:"linkType"`
	Name interface{} `field:"optional" json:"name" yaml:"name"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
}

