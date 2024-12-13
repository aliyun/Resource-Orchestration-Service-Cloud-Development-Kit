package alicloudroscdkcloudfw


// Properties for defining a `RosTrFirewall`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudfw-trfirewall
type RosTrFirewallProps struct {
	CenId interface{} `field:"required" json:"cenId" yaml:"cenId"`
	FirewallName interface{} `field:"required" json:"firewallName" yaml:"firewallName"`
	RegionNo interface{} `field:"required" json:"regionNo" yaml:"regionNo"`
	RouteMode interface{} `field:"required" json:"routeMode" yaml:"routeMode"`
	TransitRouterId interface{} `field:"required" json:"transitRouterId" yaml:"transitRouterId"`
	FirewallDescription interface{} `field:"optional" json:"firewallDescription" yaml:"firewallDescription"`
	FirewallSubnetCidr interface{} `field:"optional" json:"firewallSubnetCidr" yaml:"firewallSubnetCidr"`
	FirewallVpcCidr interface{} `field:"optional" json:"firewallVpcCidr" yaml:"firewallVpcCidr"`
	FirewallVpcId interface{} `field:"optional" json:"firewallVpcId" yaml:"firewallVpcId"`
	FirewallVswitchId interface{} `field:"optional" json:"firewallVswitchId" yaml:"firewallVswitchId"`
	TrAttachmentMasterCidr interface{} `field:"optional" json:"trAttachmentMasterCidr" yaml:"trAttachmentMasterCidr"`
	TrAttachmentMasterZone interface{} `field:"optional" json:"trAttachmentMasterZone" yaml:"trAttachmentMasterZone"`
	TrAttachmentSlaveCidr interface{} `field:"optional" json:"trAttachmentSlaveCidr" yaml:"trAttachmentSlaveCidr"`
	TrAttachmentSlaveZone interface{} `field:"optional" json:"trAttachmentSlaveZone" yaml:"trAttachmentSlaveZone"`
}

