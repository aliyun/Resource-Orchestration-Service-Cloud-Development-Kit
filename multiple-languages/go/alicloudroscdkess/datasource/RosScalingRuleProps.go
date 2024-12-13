package datasource


// Properties for defining a `RosScalingRule`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ess-scalingrule
type RosScalingRuleProps struct {
	ScalingRuleId interface{} `field:"required" json:"scalingRuleId" yaml:"scalingRuleId"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

