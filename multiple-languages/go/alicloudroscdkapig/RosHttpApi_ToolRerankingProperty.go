package alicloudroscdkapig


type RosHttpApi_ToolRerankingProperty struct {
	FallbackStrategy interface{} `field:"optional" json:"fallbackStrategy" yaml:"fallbackStrategy"`
	FilteringMethod interface{} `field:"optional" json:"filteringMethod" yaml:"filteringMethod"`
	ModelService interface{} `field:"optional" json:"modelService" yaml:"modelService"`
	ScoreThreshold interface{} `field:"optional" json:"scoreThreshold" yaml:"scoreThreshold"`
	TopKPercent interface{} `field:"optional" json:"topKPercent" yaml:"topKPercent"`
	TopNCount interface{} `field:"optional" json:"topNCount" yaml:"topNCount"`
}

