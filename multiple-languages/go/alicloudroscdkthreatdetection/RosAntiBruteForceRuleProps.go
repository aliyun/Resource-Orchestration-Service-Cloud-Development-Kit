package alicloudroscdkthreatdetection


// Properties for defining a `RosAntiBruteForceRule`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-antibruteforcerule
type RosAntiBruteForceRuleProps struct {
	AntiBruteForceRuleName interface{} `field:"required" json:"antiBruteForceRuleName" yaml:"antiBruteForceRuleName"`
	FailCount interface{} `field:"required" json:"failCount" yaml:"failCount"`
	ForbiddenTime interface{} `field:"required" json:"forbiddenTime" yaml:"forbiddenTime"`
	Span interface{} `field:"required" json:"span" yaml:"span"`
	UuidList interface{} `field:"required" json:"uuidList" yaml:"uuidList"`
	DefaultRule interface{} `field:"optional" json:"defaultRule" yaml:"defaultRule"`
}

