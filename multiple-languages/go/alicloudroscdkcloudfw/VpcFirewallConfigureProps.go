package alicloudroscdkcloudfw


// Properties for defining a `VpcFirewallConfigure`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudfw-vpcfirewallconfigure
type VpcFirewallConfigureProps struct {
	// Property firewallSwitch: The status of the VPC firewall after you create the firewall.
	//
	// Valid values:
	// open: After you create the VPC firewall, the VPC firewall is automatically enabled. This is the default value.
	// close: After you create the VPC firewall, the VPC firewall is disabled. To enable the firewall, you can call the ModifyVpcFirewallSwitchStatus operation.
	FirewallSwitch interface{} `field:"required" json:"firewallSwitch" yaml:"firewallSwitch"`
	// Property localVpcCidrTableList: The CIDR blocks of the local VPC.
	LocalVpcCidrTableList interface{} `field:"required" json:"localVpcCidrTableList" yaml:"localVpcCidrTableList"`
	// Property localVpcId: The ID of the local VPC.
	LocalVpcId interface{} `field:"required" json:"localVpcId" yaml:"localVpcId"`
	// Property localVpcRegion: The region ID of the local VPC.
	LocalVpcRegion interface{} `field:"required" json:"localVpcRegion" yaml:"localVpcRegion"`
	// Property peerVpcCidrTableList: The CIDR blocks of the peer VPC.
	PeerVpcCidrTableList interface{} `field:"required" json:"peerVpcCidrTableList" yaml:"peerVpcCidrTableList"`
	// Property peerVpcId: The ID of the peer VPC.
	PeerVpcId interface{} `field:"required" json:"peerVpcId" yaml:"peerVpcId"`
	// Property peerVpcRegion: The region ID of the peer VPC.
	PeerVpcRegion interface{} `field:"required" json:"peerVpcRegion" yaml:"peerVpcRegion"`
	// Property vpcFirewallName: The instance name of the VPC firewall.
	VpcFirewallName interface{} `field:"required" json:"vpcFirewallName" yaml:"vpcFirewallName"`
	// Property memberUid: The UID of the member that is managed by your Alibaba Cloud account.
	MemberUid interface{} `field:"optional" json:"memberUid" yaml:"memberUid"`
}

