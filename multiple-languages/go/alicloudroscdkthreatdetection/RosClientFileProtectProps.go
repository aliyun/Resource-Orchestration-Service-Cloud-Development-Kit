package alicloudroscdkthreatdetection


// Properties for defining a `RosClientFileProtect`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-clientfileprotect
type RosClientFileProtectProps struct {
	FileOps interface{} `field:"required" json:"fileOps" yaml:"fileOps"`
	FilePaths interface{} `field:"required" json:"filePaths" yaml:"filePaths"`
	ProcPaths interface{} `field:"required" json:"procPaths" yaml:"procPaths"`
	RuleAction interface{} `field:"required" json:"ruleAction" yaml:"ruleAction"`
	RuleName interface{} `field:"required" json:"ruleName" yaml:"ruleName"`
	AlertLevel interface{} `field:"optional" json:"alertLevel" yaml:"alertLevel"`
	Platform interface{} `field:"optional" json:"platform" yaml:"platform"`
	Status interface{} `field:"optional" json:"status" yaml:"status"`
	SwitchId interface{} `field:"optional" json:"switchId" yaml:"switchId"`
}

