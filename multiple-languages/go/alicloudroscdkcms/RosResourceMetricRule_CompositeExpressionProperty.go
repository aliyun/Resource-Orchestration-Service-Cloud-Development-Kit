package alicloudroscdkcms


type RosResourceMetricRule_CompositeExpressionProperty struct {
	Level interface{} `field:"required" json:"level" yaml:"level"`
	Times interface{} `field:"required" json:"times" yaml:"times"`
	ExpressionList interface{} `field:"optional" json:"expressionList" yaml:"expressionList"`
	ExpressionListJoin interface{} `field:"optional" json:"expressionListJoin" yaml:"expressionListJoin"`
	ExpressionRaw interface{} `field:"optional" json:"expressionRaw" yaml:"expressionRaw"`
}

