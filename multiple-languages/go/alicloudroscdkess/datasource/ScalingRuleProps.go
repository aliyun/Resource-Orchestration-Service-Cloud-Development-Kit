package datasource


// Properties for defining a `ScalingRule`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ess-scalingrule
type ScalingRuleProps struct {
	// Property scalingRuleId: The ID of the scaling rule that you want to query.
	ScalingRuleId interface{} `field:"required" json:"scalingRuleId" yaml:"scalingRuleId"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

