package alicloudroscdkapig


type RosHttpApi_QueryRewritingProperty struct {
	ContextSelection interface{} `field:"optional" json:"contextSelection" yaml:"contextSelection"`
	Enabled interface{} `field:"optional" json:"enabled" yaml:"enabled"`
	FallbackStrategy interface{} `field:"optional" json:"fallbackStrategy" yaml:"fallbackStrategy"`
	MaxOutputTokens interface{} `field:"optional" json:"maxOutputTokens" yaml:"maxOutputTokens"`
	ModelService interface{} `field:"optional" json:"modelService" yaml:"modelService"`
	PromptConfig interface{} `field:"optional" json:"promptConfig" yaml:"promptConfig"`
	TriggerConditions interface{} `field:"optional" json:"triggerConditions" yaml:"triggerConditions"`
}

