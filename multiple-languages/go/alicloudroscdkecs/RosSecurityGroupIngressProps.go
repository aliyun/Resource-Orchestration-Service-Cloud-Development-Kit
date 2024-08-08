package alicloudroscdkecs


// Properties for defining a `RosSecurityGroupIngress`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-securitygroupingress
type RosSecurityGroupIngressProps struct {
	IpProtocol interface{} `field:"required" json:"ipProtocol" yaml:"ipProtocol"`
	PortRange interface{} `field:"required" json:"portRange" yaml:"portRange"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	Ipv6SourceCidrIp interface{} `field:"optional" json:"ipv6SourceCidrIp" yaml:"ipv6SourceCidrIp"`
	NicType interface{} `field:"optional" json:"nicType" yaml:"nicType"`
	Policy interface{} `field:"optional" json:"policy" yaml:"policy"`
	Priority interface{} `field:"optional" json:"priority" yaml:"priority"`
	SecurityGroupId interface{} `field:"optional" json:"securityGroupId" yaml:"securityGroupId"`
	SourceCidrIp interface{} `field:"optional" json:"sourceCidrIp" yaml:"sourceCidrIp"`
	SourceGroupId interface{} `field:"optional" json:"sourceGroupId" yaml:"sourceGroupId"`
	SourceGroupOwnerId interface{} `field:"optional" json:"sourceGroupOwnerId" yaml:"sourceGroupOwnerId"`
	SourcePortRange interface{} `field:"optional" json:"sourcePortRange" yaml:"sourcePortRange"`
	SourcePrefixListId interface{} `field:"optional" json:"sourcePrefixListId" yaml:"sourcePrefixListId"`
}

