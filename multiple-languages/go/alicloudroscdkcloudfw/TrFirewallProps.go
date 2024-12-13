package alicloudroscdkcloudfw


// Properties for defining a `TrFirewall`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudfw-trfirewall
type TrFirewallProps struct {
	// Property cenId: The ID of the Cloud Enterprise Network (CEN) instance.
	CenId interface{} `field:"required" json:"cenId" yaml:"cenId"`
	// Property firewallName: The name of the firewall.
	FirewallName interface{} `field:"required" json:"firewallName" yaml:"firewallName"`
	// Property regionNo: The region ID of the route router.
	RegionNo interface{} `field:"required" json:"regionNo" yaml:"regionNo"`
	// Property routeMode: The routing mode of the VPC firewall.
	//
	// Valid values:
	// managed: automatic mode
	// manual: manual mode.
	RouteMode interface{} `field:"required" json:"routeMode" yaml:"routeMode"`
	// Property transitRouterId: The ID of the transit router.
	TransitRouterId interface{} `field:"required" json:"transitRouterId" yaml:"transitRouterId"`
	// Property firewallDescription: The description of the firewall.
	FirewallDescription interface{} `field:"optional" json:"firewallDescription" yaml:"firewallDescription"`
	// Property firewallSubnetCidr: The subnet CIDR block of the VPC in which the ENI of the firewall is stored in automatic mode.
	FirewallSubnetCidr interface{} `field:"optional" json:"firewallSubnetCidr" yaml:"firewallSubnetCidr"`
	// Property firewallVpcCidr: The CIDR block that is allocated to the VPC created for the VPC firewall in automatic mode.
	FirewallVpcCidr interface{} `field:"optional" json:"firewallVpcCidr" yaml:"firewallVpcCidr"`
	// Property firewallVpcId: The ID of the VPC in which the ENI associated with the VPC firewall is created in manual mode.
	FirewallVpcId interface{} `field:"optional" json:"firewallVpcId" yaml:"firewallVpcId"`
	// Property firewallVswitchId: The ID of the vSwitch that is used to create the ENI in manual mode.
	FirewallVswitchId interface{} `field:"optional" json:"firewallVswitchId" yaml:"firewallVswitchId"`
	// Property trAttachmentMasterCidr: The primary subnet CIDR block that the VPC uses to connect to the transit router in automatic mode.
	TrAttachmentMasterCidr interface{} `field:"optional" json:"trAttachmentMasterCidr" yaml:"trAttachmentMasterCidr"`
	// Property trAttachmentMasterZone: The primary zone for the vSwitch.
	TrAttachmentMasterZone interface{} `field:"optional" json:"trAttachmentMasterZone" yaml:"trAttachmentMasterZone"`
	// Property trAttachmentSlaveCidr: The secondary subnet CIDR block that the VPC uses to connect to the transit router in automatic mode.
	TrAttachmentSlaveCidr interface{} `field:"optional" json:"trAttachmentSlaveCidr" yaml:"trAttachmentSlaveCidr"`
	// Property trAttachmentSlaveZone: The secondary zone for the vSwitch.
	TrAttachmentSlaveZone interface{} `field:"optional" json:"trAttachmentSlaveZone" yaml:"trAttachmentSlaveZone"`
}

