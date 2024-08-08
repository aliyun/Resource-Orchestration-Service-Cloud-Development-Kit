package alicloudroscdkecs


// Properties for defining a `RosSecurityGroupEgress`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-securitygroupegress
type RosSecurityGroupEgressProps struct {
	IpProtocol interface{} `field:"required" json:"ipProtocol" yaml:"ipProtocol"`
	PortRange interface{} `field:"required" json:"portRange" yaml:"portRange"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	DestCidrIp interface{} `field:"optional" json:"destCidrIp" yaml:"destCidrIp"`
	DestGroupId interface{} `field:"optional" json:"destGroupId" yaml:"destGroupId"`
	DestGroupOwnerId interface{} `field:"optional" json:"destGroupOwnerId" yaml:"destGroupOwnerId"`
	DestPrefixListId interface{} `field:"optional" json:"destPrefixListId" yaml:"destPrefixListId"`
	Ipv6DestCidrIp interface{} `field:"optional" json:"ipv6DestCidrIp" yaml:"ipv6DestCidrIp"`
	NicType interface{} `field:"optional" json:"nicType" yaml:"nicType"`
	Policy interface{} `field:"optional" json:"policy" yaml:"policy"`
	Priority interface{} `field:"optional" json:"priority" yaml:"priority"`
	SecurityGroupId interface{} `field:"optional" json:"securityGroupId" yaml:"securityGroupId"`
}

