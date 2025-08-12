package alicloudroscdkmns


type RosQueue_DlqPolicyProperty struct {
	DeadLetterTargetQueue interface{} `field:"required" json:"deadLetterTargetQueue" yaml:"deadLetterTargetQueue"`
	Enabled interface{} `field:"required" json:"enabled" yaml:"enabled"`
	MaxReceiveCount interface{} `field:"required" json:"maxReceiveCount" yaml:"maxReceiveCount"`
}

