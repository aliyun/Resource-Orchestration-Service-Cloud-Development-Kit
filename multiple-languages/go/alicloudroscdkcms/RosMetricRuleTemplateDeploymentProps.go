package alicloudroscdkcms


// Properties for defining a `RosMetricRuleTemplateDeployment`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms-metricruletemplatedeployment
type RosMetricRuleTemplateDeploymentProps struct {
	GroupId interface{} `field:"required" json:"groupId" yaml:"groupId"`
	TemplateIds interface{} `field:"required" json:"templateIds" yaml:"templateIds"`
	AppendMode interface{} `field:"optional" json:"appendMode" yaml:"appendMode"`
	ApplyMode interface{} `field:"optional" json:"applyMode" yaml:"applyMode"`
	EnableEndTime interface{} `field:"optional" json:"enableEndTime" yaml:"enableEndTime"`
	EnableStartTime interface{} `field:"optional" json:"enableStartTime" yaml:"enableStartTime"`
	NotifyLevel interface{} `field:"optional" json:"notifyLevel" yaml:"notifyLevel"`
	SilenceTime interface{} `field:"optional" json:"silenceTime" yaml:"silenceTime"`
	Webhook interface{} `field:"optional" json:"webhook" yaml:"webhook"`
}

