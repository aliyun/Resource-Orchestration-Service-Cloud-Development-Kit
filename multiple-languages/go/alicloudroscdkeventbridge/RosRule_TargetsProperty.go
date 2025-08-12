package alicloudroscdkeventbridge


type RosRule_TargetsProperty struct {
	Endpoint interface{} `field:"required" json:"endpoint" yaml:"endpoint"`
	Identity interface{} `field:"required" json:"identity" yaml:"identity"`
	ParamList interface{} `field:"required" json:"paramList" yaml:"paramList"`
	Type interface{} `field:"required" json:"type" yaml:"type"`
	ConcurrentConfig interface{} `field:"optional" json:"concurrentConfig" yaml:"concurrentConfig"`
	DeadLetterQueue interface{} `field:"optional" json:"deadLetterQueue" yaml:"deadLetterQueue"`
	ErrorsTolerance interface{} `field:"optional" json:"errorsTolerance" yaml:"errorsTolerance"`
	PushRetryStrategy interface{} `field:"optional" json:"pushRetryStrategy" yaml:"pushRetryStrategy"`
}

