package alicloudroscdkens


type RosSecurityGroup_SecurityGroupIngressProperty struct {
	IpProtocol interface{} `field:"required" json:"ipProtocol" yaml:"ipProtocol"`
	PortRange interface{} `field:"required" json:"portRange" yaml:"portRange"`
	Policy interface{} `field:"optional" json:"policy" yaml:"policy"`
	Priority interface{} `field:"optional" json:"priority" yaml:"priority"`
	SourceCidrIp interface{} `field:"optional" json:"sourceCidrIp" yaml:"sourceCidrIp"`
	SourcePortRange interface{} `field:"optional" json:"sourcePortRange" yaml:"sourcePortRange"`
}

