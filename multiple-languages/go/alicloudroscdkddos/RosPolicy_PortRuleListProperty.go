package alicloudroscdkddos


type RosPolicy_PortRuleListProperty struct {
	DstPortEnd interface{} `field:"required" json:"dstPortEnd" yaml:"dstPortEnd"`
	DstPortStart interface{} `field:"required" json:"dstPortStart" yaml:"dstPortStart"`
	Protocol interface{} `field:"required" json:"protocol" yaml:"protocol"`
	SeqNo interface{} `field:"required" json:"seqNo" yaml:"seqNo"`
	SrcPortEnd interface{} `field:"required" json:"srcPortEnd" yaml:"srcPortEnd"`
	SrcPortStart interface{} `field:"required" json:"srcPortStart" yaml:"srcPortStart"`
	PortRuleId interface{} `field:"optional" json:"portRuleId" yaml:"portRuleId"`
}

