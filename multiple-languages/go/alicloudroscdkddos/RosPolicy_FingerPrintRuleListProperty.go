package alicloudroscdkddos


type RosPolicy_FingerPrintRuleListProperty struct {
	DstPortEnd interface{} `field:"required" json:"dstPortEnd" yaml:"dstPortEnd"`
	DstPortStart interface{} `field:"required" json:"dstPortStart" yaml:"dstPortStart"`
	MatchAction interface{} `field:"required" json:"matchAction" yaml:"matchAction"`
	MaxPktLen interface{} `field:"required" json:"maxPktLen" yaml:"maxPktLen"`
	MinPktLen interface{} `field:"required" json:"minPktLen" yaml:"minPktLen"`
	Protocol interface{} `field:"required" json:"protocol" yaml:"protocol"`
	SeqNo interface{} `field:"required" json:"seqNo" yaml:"seqNo"`
	SrcPortEnd interface{} `field:"required" json:"srcPortEnd" yaml:"srcPortEnd"`
	SrcPortStart interface{} `field:"required" json:"srcPortStart" yaml:"srcPortStart"`
	FingerPrintRuleId interface{} `field:"optional" json:"fingerPrintRuleId" yaml:"fingerPrintRuleId"`
	Offset interface{} `field:"optional" json:"offset" yaml:"offset"`
	PayloadBytes interface{} `field:"optional" json:"payloadBytes" yaml:"payloadBytes"`
	RateValue interface{} `field:"optional" json:"rateValue" yaml:"rateValue"`
}

