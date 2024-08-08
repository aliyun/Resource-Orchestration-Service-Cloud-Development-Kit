package alicloudroscdkemr


type RosCluster2_BootstrapScriptsProperty struct {
	NodeSelector interface{} `field:"required" json:"nodeSelector" yaml:"nodeSelector"`
	ScriptName interface{} `field:"required" json:"scriptName" yaml:"scriptName"`
	ScriptPath interface{} `field:"required" json:"scriptPath" yaml:"scriptPath"`
	ExecutionFailStrategy interface{} `field:"optional" json:"executionFailStrategy" yaml:"executionFailStrategy"`
	ExecutionMoment interface{} `field:"optional" json:"executionMoment" yaml:"executionMoment"`
	Priority interface{} `field:"optional" json:"priority" yaml:"priority"`
	ScriptArgs interface{} `field:"optional" json:"scriptArgs" yaml:"scriptArgs"`
}

