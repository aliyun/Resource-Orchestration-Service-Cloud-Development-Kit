package alicloudroscdkcore


type RosConditionProps struct {
	// The expression that the condition will evaluate.
	Expression IRosConditionExpression `field:"optional" json:"expression" yaml:"expression"`
}

