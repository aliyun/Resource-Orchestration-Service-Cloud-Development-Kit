package alicloudroscdkcore


type RemovalPolicyOptions struct {
	ApplyToUpdateReplacePolicy *bool `field:"optional" json:"applyToUpdateReplacePolicy" yaml:"applyToUpdateReplacePolicy"`
	DefaultPolicy RemovalPolicy `field:"optional" json:"defaultPolicy" yaml:"defaultPolicy"`
}

