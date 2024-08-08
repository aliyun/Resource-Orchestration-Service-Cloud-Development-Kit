package alicloudroscdksls


type RosAlert_SeverityConfigurationsProperty struct {
	Severity interface{} `field:"required" json:"severity" yaml:"severity"`
	EvalCondition interface{} `field:"optional" json:"evalCondition" yaml:"evalCondition"`
}

