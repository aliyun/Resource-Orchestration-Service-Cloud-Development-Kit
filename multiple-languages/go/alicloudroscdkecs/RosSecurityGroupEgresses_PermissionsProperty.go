package alicloudroscdkecs


type RosSecurityGroupEgresses_PermissionsProperty struct {
	IpProtocol interface{} `field:"required" json:"ipProtocol" yaml:"ipProtocol"`
	PortRange interface{} `field:"required" json:"portRange" yaml:"portRange"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	DestCidrIp interface{} `field:"optional" json:"destCidrIp" yaml:"destCidrIp"`
	DestGroupId interface{} `field:"optional" json:"destGroupId" yaml:"destGroupId"`
	DestGroupOwnerAccount interface{} `field:"optional" json:"destGroupOwnerAccount" yaml:"destGroupOwnerAccount"`
	DestGroupOwnerId interface{} `field:"optional" json:"destGroupOwnerId" yaml:"destGroupOwnerId"`
	DestPrefixListId interface{} `field:"optional" json:"destPrefixListId" yaml:"destPrefixListId"`
	Ipv6DestCidrIp interface{} `field:"optional" json:"ipv6DestCidrIp" yaml:"ipv6DestCidrIp"`
	Ipv6SourceCidrIp interface{} `field:"optional" json:"ipv6SourceCidrIp" yaml:"ipv6SourceCidrIp"`
	NicType interface{} `field:"optional" json:"nicType" yaml:"nicType"`
	Policy interface{} `field:"optional" json:"policy" yaml:"policy"`
	Priority interface{} `field:"optional" json:"priority" yaml:"priority"`
	SourceCidrIp interface{} `field:"optional" json:"sourceCidrIp" yaml:"sourceCidrIp"`
	SourcePortRange interface{} `field:"optional" json:"sourcePortRange" yaml:"sourcePortRange"`
}

