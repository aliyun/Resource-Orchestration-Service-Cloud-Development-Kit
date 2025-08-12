package alicloudroscdkcms


// Properties for defining a `MetricRuleTemplateDeployment`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms-metricruletemplatedeployment
type MetricRuleTemplateDeploymentProps struct {
	// Property groupId: Apply group ID.
	//
	// For how to get the application group ID, see DescribeMonitorGroups.
	GroupId interface{} `field:"required" json:"groupId" yaml:"groupId"`
	// Property templateIds: The ID list of the Alarm Template to be applied.
	//
	// For how to get the alarm template ID, see DescribeMetricRuleTemplateList.
	TemplateIds interface{} `field:"required" json:"templateIds" yaml:"templateIds"`
	// Property appendMode: Template application policy.Value: all: Delete all rules created by the alarm template on the selected group, and then create a new alarm rule by the template (default). append: Delete the rules created by the alarm template on the selected group, and then create a new alarm rule based on the current template.
	AppendMode interface{} `field:"optional" json:"appendMode" yaml:"appendMode"`
	// Property applyMode: How to apply templates.Value: GROUP_INSTANCE_FIRST: Application grouping instances are preferred.When applying an alarm template, the application grouping instance is preferred. If the instance does not exist in the application grouping, the rules in the template are ignored. ALARM_TEMPLATE_FIRST: Alarm template instances are preferred.When an alarm template is applied, an alarm rule is created regardless of whether the instance exists in the application group.
	ApplyMode interface{} `field:"optional" json:"applyMode" yaml:"applyMode"`
	// Property enableEndTime: The end time when the alarm takes effect.Value range: 0~23, indicating 00:59 to 23:59.
	EnableEndTime interface{} `field:"optional" json:"enableEndTime" yaml:"enableEndTime"`
	// Property enableStartTime: The start time when the alarm takes effect.Value range: 0~23, indicating 00:00 to 23:00.
	EnableStartTime interface{} `field:"optional" json:"enableStartTime" yaml:"enableStartTime"`
	// Property notifyLevel: Alarm notification method.Value: 2: Phone + SMS + Email + Wangwang + DingTalk Robot. 3: SMS + Email + Wangwang + DingTalk Robot. 4: Wangwang + Dingding Robot.
	NotifyLevel interface{} `field:"optional" json:"notifyLevel" yaml:"notifyLevel"`
	// Property silenceTime: Channel silence period.Unit: seconds.Default value: 86400. Note When the monitoring data continues to exceed the alarm rule threshold, only one alarm notification will be sent during each silence cycle.
	SilenceTime interface{} `field:"optional" json:"silenceTime" yaml:"silenceTime"`
	// Property webhook: When an alarm occurs, the specified URL address will be called back and a POST request will be sent.
	Webhook interface{} `field:"optional" json:"webhook" yaml:"webhook"`
}

