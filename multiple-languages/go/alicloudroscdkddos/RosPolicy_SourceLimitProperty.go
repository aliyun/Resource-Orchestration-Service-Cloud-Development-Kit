package alicloudroscdkddos


type RosPolicy_SourceLimitProperty struct {
	Bps interface{} `field:"optional" json:"bps" yaml:"bps"`
	Pps interface{} `field:"optional" json:"pps" yaml:"pps"`
	SynBps interface{} `field:"optional" json:"synBps" yaml:"synBps"`
	SynPps interface{} `field:"optional" json:"synPps" yaml:"synPps"`
}

