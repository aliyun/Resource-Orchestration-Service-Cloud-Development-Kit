package alicloudroscdkens


type RosSecurityGroup_PermissionsProperty struct {
	Direction interface{} `field:"required" json:"direction" yaml:"direction"`
	IpProtocol interface{} `field:"required" json:"ipProtocol" yaml:"ipProtocol"`
	Policy interface{} `field:"required" json:"policy" yaml:"policy"`
	PortRange interface{} `field:"required" json:"portRange" yaml:"portRange"`
	Priority interface{} `field:"required" json:"priority" yaml:"priority"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	DestCidrIp interface{} `field:"optional" json:"destCidrIp" yaml:"destCidrIp"`
	SourceCidrIp interface{} `field:"optional" json:"sourceCidrIp" yaml:"sourceCidrIp"`
	SourcePortRange interface{} `field:"optional" json:"sourcePortRange" yaml:"sourcePortRange"`
}

