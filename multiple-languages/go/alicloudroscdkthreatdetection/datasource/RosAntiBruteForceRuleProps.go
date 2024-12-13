package datasource


// Properties for defining a `RosAntiBruteForceRule`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-threatdetection-antibruteforcerule
type RosAntiBruteForceRuleProps struct {
	AntiBruteForceRuleId interface{} `field:"required" json:"antiBruteForceRuleId" yaml:"antiBruteForceRuleId"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

