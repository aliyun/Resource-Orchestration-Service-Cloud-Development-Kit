package alicloudroscdkens


type RosSecurityGroup_SecurityGroupEgressProperty struct {
	IpProtocol interface{} `field:"required" json:"ipProtocol" yaml:"ipProtocol"`
	PortRange interface{} `field:"required" json:"portRange" yaml:"portRange"`
	DestCidrIp interface{} `field:"optional" json:"destCidrIp" yaml:"destCidrIp"`
	Policy interface{} `field:"optional" json:"policy" yaml:"policy"`
	Priority interface{} `field:"optional" json:"priority" yaml:"priority"`
	SourcePortRange interface{} `field:"optional" json:"sourcePortRange" yaml:"sourcePortRange"`
}

