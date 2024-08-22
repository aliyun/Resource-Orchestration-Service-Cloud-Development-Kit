package alicloudroscdkoos


type RosExecution_ResourceOptionsProperty struct {
	CancelOnDelete interface{} `field:"optional" json:"cancelOnDelete" yaml:"cancelOnDelete"`
	FailureStatuses interface{} `field:"optional" json:"failureStatuses" yaml:"failureStatuses"`
	SuccessStatuses interface{} `field:"optional" json:"successStatuses" yaml:"successStatuses"`
	Timeout interface{} `field:"optional" json:"timeout" yaml:"timeout"`
}

