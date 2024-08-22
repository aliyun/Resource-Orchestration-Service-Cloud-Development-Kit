package alicloudroscdkalb


type RosRule_RuleActionsProperty struct {
	Order interface{} `field:"required" json:"order" yaml:"order"`
	Type interface{} `field:"required" json:"type" yaml:"type"`
	CorsConfig interface{} `field:"optional" json:"corsConfig" yaml:"corsConfig"`
	FixedResponseConfig interface{} `field:"optional" json:"fixedResponseConfig" yaml:"fixedResponseConfig"`
	ForwardGroupConfig interface{} `field:"optional" json:"forwardGroupConfig" yaml:"forwardGroupConfig"`
	InsertHeaderConfig interface{} `field:"optional" json:"insertHeaderConfig" yaml:"insertHeaderConfig"`
	RedirectConfig interface{} `field:"optional" json:"redirectConfig" yaml:"redirectConfig"`
	RemoveHeaderConfig interface{} `field:"optional" json:"removeHeaderConfig" yaml:"removeHeaderConfig"`
	RewriteConfig interface{} `field:"optional" json:"rewriteConfig" yaml:"rewriteConfig"`
	TrafficLimitConfig interface{} `field:"optional" json:"trafficLimitConfig" yaml:"trafficLimitConfig"`
	TrafficMirrorConfig interface{} `field:"optional" json:"trafficMirrorConfig" yaml:"trafficMirrorConfig"`
}

