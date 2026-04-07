package alicloudroscdkcr


// Properties for defining a `RosScanRule`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cr-scanrule
type RosScanRuleProps struct {
	InstanceId interface{} `field:"required" json:"instanceId" yaml:"instanceId"`
	RepoTagFilterPattern interface{} `field:"required" json:"repoTagFilterPattern" yaml:"repoTagFilterPattern"`
	RuleName interface{} `field:"required" json:"ruleName" yaml:"ruleName"`
	ScanScope interface{} `field:"required" json:"scanScope" yaml:"scanScope"`
	ScanType interface{} `field:"required" json:"scanType" yaml:"scanType"`
	TriggerType interface{} `field:"required" json:"triggerType" yaml:"triggerType"`
	Namespaces interface{} `field:"optional" json:"namespaces" yaml:"namespaces"`
	RepoNames interface{} `field:"optional" json:"repoNames" yaml:"repoNames"`
}

