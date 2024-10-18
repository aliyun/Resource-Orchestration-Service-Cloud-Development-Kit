package datasource


// Properties for defining a `RosRule`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-rule
type RosRuleProps struct {
	RuleId interface{} `field:"required" json:"ruleId" yaml:"ruleId"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

