package alicloudroscdkcloudfw


// Properties for defining a `RosVpcFirewallConfigure`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudfw-vpcfirewallconfigure
type RosVpcFirewallConfigureProps struct {
	FirewallSwitch interface{} `field:"required" json:"firewallSwitch" yaml:"firewallSwitch"`
	LocalVpcCidrTableList interface{} `field:"required" json:"localVpcCidrTableList" yaml:"localVpcCidrTableList"`
	LocalVpcId interface{} `field:"required" json:"localVpcId" yaml:"localVpcId"`
	LocalVpcRegion interface{} `field:"required" json:"localVpcRegion" yaml:"localVpcRegion"`
	PeerVpcCidrTableList interface{} `field:"required" json:"peerVpcCidrTableList" yaml:"peerVpcCidrTableList"`
	PeerVpcId interface{} `field:"required" json:"peerVpcId" yaml:"peerVpcId"`
	PeerVpcRegion interface{} `field:"required" json:"peerVpcRegion" yaml:"peerVpcRegion"`
	VpcFirewallName interface{} `field:"required" json:"vpcFirewallName" yaml:"vpcFirewallName"`
	MemberUid interface{} `field:"optional" json:"memberUid" yaml:"memberUid"`
}

