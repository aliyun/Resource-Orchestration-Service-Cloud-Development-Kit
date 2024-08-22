package datasource


// Properties for defining a `RosNetworkRule`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-kms-networkrule
type RosNetworkRuleProps struct {
	NetworkRuleName interface{} `field:"required" json:"networkRuleName" yaml:"networkRuleName"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

