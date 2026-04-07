package alicloudroscdkesa


type RosWafRule_RateLimitProperty struct {
	Characteristics interface{} `field:"optional" json:"characteristics" yaml:"characteristics"`
	Interval interface{} `field:"optional" json:"interval" yaml:"interval"`
	OnHit interface{} `field:"optional" json:"onHit" yaml:"onHit"`
	Threshold interface{} `field:"optional" json:"threshold" yaml:"threshold"`
	Ttl interface{} `field:"optional" json:"ttl" yaml:"ttl"`
}

