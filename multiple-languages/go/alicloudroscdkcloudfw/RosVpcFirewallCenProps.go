package alicloudroscdkcloudfw


// Properties for defining a `RosVpcFirewallCen`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudfw-vpcfirewallcen
type RosVpcFirewallCenProps struct {
	CenId interface{} `field:"required" json:"cenId" yaml:"cenId"`
	FirewallSwitch interface{} `field:"required" json:"firewallSwitch" yaml:"firewallSwitch"`
	FirewallVpcZoneId interface{} `field:"required" json:"firewallVpcZoneId" yaml:"firewallVpcZoneId"`
	NetworkInstanceId interface{} `field:"required" json:"networkInstanceId" yaml:"networkInstanceId"`
	VpcFirewallName interface{} `field:"required" json:"vpcFirewallName" yaml:"vpcFirewallName"`
	VpcRegion interface{} `field:"required" json:"vpcRegion" yaml:"vpcRegion"`
	FirewallVpcCidrBlock interface{} `field:"optional" json:"firewallVpcCidrBlock" yaml:"firewallVpcCidrBlock"`
	FirewallVSwitchCidrBlock interface{} `field:"optional" json:"firewallVSwitchCidrBlock" yaml:"firewallVSwitchCidrBlock"`
	MemberUid interface{} `field:"optional" json:"memberUid" yaml:"memberUid"`
	VSwitchId interface{} `field:"optional" json:"vSwitchId" yaml:"vSwitchId"`
}

