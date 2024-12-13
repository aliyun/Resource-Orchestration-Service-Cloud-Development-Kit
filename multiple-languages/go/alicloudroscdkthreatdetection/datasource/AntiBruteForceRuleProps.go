package datasource


// Properties for defining a `AntiBruteForceRule`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-threatdetection-antibruteforcerule
type AntiBruteForceRuleProps struct {
	// Property antiBruteForceRuleId: The ID of the defense rule.
	AntiBruteForceRuleId interface{} `field:"required" json:"antiBruteForceRuleId" yaml:"antiBruteForceRuleId"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

