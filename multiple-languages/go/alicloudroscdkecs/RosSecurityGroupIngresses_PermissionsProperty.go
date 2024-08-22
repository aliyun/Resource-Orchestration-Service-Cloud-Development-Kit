package alicloudroscdkecs


type RosSecurityGroupIngresses_PermissionsProperty struct {
	IpProtocol interface{} `field:"required" json:"ipProtocol" yaml:"ipProtocol"`
	PortRange interface{} `field:"required" json:"portRange" yaml:"portRange"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	DestCidrIp interface{} `field:"optional" json:"destCidrIp" yaml:"destCidrIp"`
	Ipv6DestCidrIp interface{} `field:"optional" json:"ipv6DestCidrIp" yaml:"ipv6DestCidrIp"`
	Ipv6SourceCidrIp interface{} `field:"optional" json:"ipv6SourceCidrIp" yaml:"ipv6SourceCidrIp"`
	NicType interface{} `field:"optional" json:"nicType" yaml:"nicType"`
	Policy interface{} `field:"optional" json:"policy" yaml:"policy"`
	Priority interface{} `field:"optional" json:"priority" yaml:"priority"`
	SourceCidrIp interface{} `field:"optional" json:"sourceCidrIp" yaml:"sourceCidrIp"`
	SourceGroupId interface{} `field:"optional" json:"sourceGroupId" yaml:"sourceGroupId"`
	SourceGroupOwnerAccount interface{} `field:"optional" json:"sourceGroupOwnerAccount" yaml:"sourceGroupOwnerAccount"`
	SourceGroupOwnerId interface{} `field:"optional" json:"sourceGroupOwnerId" yaml:"sourceGroupOwnerId"`
	SourcePortRange interface{} `field:"optional" json:"sourcePortRange" yaml:"sourcePortRange"`
	SourcePrefixListId interface{} `field:"optional" json:"sourcePrefixListId" yaml:"sourcePrefixListId"`
}

