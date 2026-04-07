package alicloudroscdkthreatdetection


// Properties for defining a `ClientFileProtect`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-clientfileprotect
type ClientFileProtectProps struct {
	// Property fileOps: The operations that you want to perform on the files.
	FileOps interface{} `field:"required" json:"fileOps" yaml:"fileOps"`
	// Property filePaths: The paths to the monitored files.
	//
	// Wildcard characters are supported.
	FilePaths interface{} `field:"required" json:"filePaths" yaml:"filePaths"`
	// Property procPaths: The paths to the monitored processes.
	ProcPaths interface{} `field:"required" json:"procPaths" yaml:"procPaths"`
	// Property ruleAction: The handling method of the rule.
	//
	// Valid values:
	// *   pass: allow
	// *   alert.
	RuleAction interface{} `field:"required" json:"ruleAction" yaml:"ruleAction"`
	// Property ruleName: The name of the rule.
	RuleName interface{} `field:"required" json:"ruleName" yaml:"ruleName"`
	// Property alertLevel: The severity of alerts.
	//
	// Valid values:
	// *   0: does not generate alerts
	// *   1: sends notifications
	// *   2: suspicious
	// *   3: high-risk.
	AlertLevel interface{} `field:"optional" json:"alertLevel" yaml:"alertLevel"`
	// Property platform: The type of the operating system.
	//
	// Valid values:
	// *   **windows**: Windows
	// *   **linux**: Linux.
	Platform interface{} `field:"optional" json:"platform" yaml:"platform"`
	// Property status: Rule status.
	//
	// 1: Enabled
	// 0: Not enabled.
	Status interface{} `field:"optional" json:"status" yaml:"status"`
	// Property switchId: The switch ID of the rule.
	SwitchId interface{} `field:"optional" json:"switchId" yaml:"switchId"`
}

