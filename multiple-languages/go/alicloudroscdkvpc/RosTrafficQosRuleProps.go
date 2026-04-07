package alicloudroscdkvpc


// Properties for defining a `RosTrafficQosRule`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-trafficqosrule
type RosTrafficQosRuleProps struct {
	Priority interface{} `field:"required" json:"priority" yaml:"priority"`
	Protocol interface{} `field:"required" json:"protocol" yaml:"protocol"`
	QosId interface{} `field:"required" json:"qosId" yaml:"qosId"`
	QueueId interface{} `field:"required" json:"queueId" yaml:"queueId"`
	DstCidr interface{} `field:"optional" json:"dstCidr" yaml:"dstCidr"`
	DstIpv6Cidr interface{} `field:"optional" json:"dstIpv6Cidr" yaml:"dstIpv6Cidr"`
	DstPortRange interface{} `field:"optional" json:"dstPortRange" yaml:"dstPortRange"`
	MatchDscp interface{} `field:"optional" json:"matchDscp" yaml:"matchDscp"`
	RemarkingDscp interface{} `field:"optional" json:"remarkingDscp" yaml:"remarkingDscp"`
	RuleDescription interface{} `field:"optional" json:"ruleDescription" yaml:"ruleDescription"`
	RuleName interface{} `field:"optional" json:"ruleName" yaml:"ruleName"`
	SrcCidr interface{} `field:"optional" json:"srcCidr" yaml:"srcCidr"`
	SrcIpv6Cidr interface{} `field:"optional" json:"srcIpv6Cidr" yaml:"srcIpv6Cidr"`
	SrcPortRange interface{} `field:"optional" json:"srcPortRange" yaml:"srcPortRange"`
}

