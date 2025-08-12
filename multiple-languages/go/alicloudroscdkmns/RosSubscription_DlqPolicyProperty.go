package alicloudroscdkmns


type RosSubscription_DlqPolicyProperty struct {
	DeadLetterTargetQueue interface{} `field:"required" json:"deadLetterTargetQueue" yaml:"deadLetterTargetQueue"`
	Enabled interface{} `field:"required" json:"enabled" yaml:"enabled"`
}

