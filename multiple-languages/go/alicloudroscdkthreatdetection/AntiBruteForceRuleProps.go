package alicloudroscdkthreatdetection


// Properties for defining a `AntiBruteForceRule`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-antibruteforcerule
type AntiBruteForceRuleProps struct {
	// Property antiBruteForceRuleName: The name of the defense rule.
	AntiBruteForceRuleName interface{} `field:"required" json:"antiBruteForceRuleName" yaml:"antiBruteForceRuleName"`
	// Property failCount: The maximum number of failed logon attempts from an account.
	//
	// Valid values: 2, 3, 4, 5, 10, 50, 80, and 100.
	FailCount interface{} `field:"required" json:"failCount" yaml:"failCount"`
	// Property forbiddenTime: The period of time during which logons from an account are not allowed.
	//
	// Unit: minutes. Valid values:
	// - 5: 5 minutes
	// - 15: 15 minutes
	// - 30: 30 minutes
	// - 60: 1 hour
	// - 120: 2 hours
	// - 360: 6 hours
	// - 720: 12 hours
	// - 1440: 24 hours
	// - 10080: 7 days
	// - 52560000: permanent.
	ForbiddenTime interface{} `field:"required" json:"forbiddenTime" yaml:"forbiddenTime"`
	// Property span: The maximum period of time during which failed logon attempts from an account can occur.
	//
	// Unit: minutes. Valid values:
	// - 1
	// - 2
	// - 5
	// - 10
	// - 15.
	Span interface{} `field:"required" json:"span" yaml:"span"`
	// Property uuidList: The UUIDs of the servers to which you want to apply the defense rule.
	UuidList interface{} `field:"required" json:"uuidList" yaml:"uuidList"`
	// Property defaultRule: Specifies whether to set the defense rule as the default rule.
	//
	// Valid values:
	// - true: yes
	// - false: no.
	DefaultRule interface{} `field:"optional" json:"defaultRule" yaml:"defaultRule"`
}

