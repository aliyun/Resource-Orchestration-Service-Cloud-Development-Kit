package alicloudroscdkcloudfw


// Properties for defining a `VpcFirewallCen`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudfw-vpcfirewallcen
type VpcFirewallCenProps struct {
	// Property cenId: The ID of the CEN instance.
	CenId interface{} `field:"required" json:"cenId" yaml:"cenId"`
	// Property firewallSwitch: Specifies whether to enable the VPC firewall.
	//
	// Valid values:
	// open: After you create the VPC firewall, the VPC firewall is automatically enabled. This is the default value.
	// close: After you create the VPC firewall, the VPC firewall is disabled. You can call the ModifyVpcFirewallCenSwitchStatus operation to manually enable the VPC firewall.
	FirewallSwitch interface{} `field:"required" json:"firewallSwitch" yaml:"firewallSwitch"`
	// Property firewallVpcZoneId: The ID of the zone to which the vSwitch belongs.
	//
	// If your service is latency-sensitive, you can specify the same zone for the vSwitch of the firewall and the vSwitch of your business VPC to minimize latency.If you do not specify a value, a zone is automatically assigned for the vSwitch.
	FirewallVpcZoneId interface{} `field:"required" json:"firewallVpcZoneId" yaml:"firewallVpcZoneId"`
	// Property networkInstanceId: The ID of the VPC for which you want to create the VPC firewall.
	NetworkInstanceId interface{} `field:"required" json:"networkInstanceId" yaml:"networkInstanceId"`
	// Property vpcFirewallName: The instance name of the VPC firewall.
	VpcFirewallName interface{} `field:"required" json:"vpcFirewallName" yaml:"vpcFirewallName"`
	// Property vpcRegion: The ID of the region to which the VPC belongs.
	VpcRegion interface{} `field:"required" json:"vpcRegion" yaml:"vpcRegion"`
	// Property firewallVpcCidrBlock: The CIDR block of the VPC that is automatically created for the VPC firewall.
	//
	// You must specify a CIDR block for the Cloud_Firewall_VPC VPC that is automatically created for the VPC firewall for traffic redirection. The subnet mask of the CIDR block must be less than or equal to 28 bits in length.If you do not specify a value, the CIDR block 10.0.0.0\/8 is automatically allocated.
	FirewallVpcCidrBlock interface{} `field:"optional" json:"firewallVpcCidrBlock" yaml:"firewallVpcCidrBlock"`
	// Property firewallVSwitchCidrBlock: The CIDR block of the vSwitch that is automatically created for the VPC firewall.You must specify a CIDR block for the Cloud_Firewall_VSWITCH VPC that is automatically created for the VPC firewall for traffic redirection. The CIDR block does not conflict with your network plan. The subnet mask of the CIDR block must be less than or equal to 29 bits in length. The CIDR block of the vSwitch must be within the network segment of the VPC.If you do not specify a value, the CIDR block 10.219.219.216\/29 is automatically allocated.
	FirewallVSwitchCidrBlock interface{} `field:"optional" json:"firewallVSwitchCidrBlock" yaml:"firewallVSwitchCidrBlock"`
	// Property memberUid: The UID of the member that is managed by your Alibaba Cloud account.
	MemberUid interface{} `field:"optional" json:"memberUid" yaml:"memberUid"`
	// Property vSwitchId: The ID of the vSwitch that is used to associate with the elastic network interface (ENI) required by the VPC firewall.
	VSwitchId interface{} `field:"optional" json:"vSwitchId" yaml:"vSwitchId"`
}

