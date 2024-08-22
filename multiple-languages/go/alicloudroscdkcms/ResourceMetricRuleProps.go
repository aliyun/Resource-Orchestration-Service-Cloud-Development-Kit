package alicloudroscdkcms


// Properties for defining a `ResourceMetricRule`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms-resourcemetricrule
type ResourceMetricRuleProps struct {
	// Property contactGroups: The alert contact group.
	//
	// The alert notifications are sent to the contacts that belong to the alert contact group.
	// Note: An alert contact group can contain one or more alert contacts. For information about how to create alert contacts and alert contact groups, see PutContact and PutContactGroup.
	ContactGroups interface{} `field:"required" json:"contactGroups" yaml:"contactGroups"`
	// Property escalations: You must select at least one of the Critical, Warn, and Info alert levels.
	Escalations interface{} `field:"required" json:"escalations" yaml:"escalations"`
	// Property metricName: The name of the metric.
	//
	// For information about how to query the name of a metric, see Appendix 1: Metrics.
	// Note: If you create a Prometheus alert rule for Hybrid Cloud Monitoring, you must set this parameter to the name of the namespace. For information about how to obtain the name of a namespace, see DescribeHybridMonitorNamespaceList.
	MetricName interface{} `field:"required" json:"metricName" yaml:"metricName"`
	// Property namespace: The namespace of the cloud service.
	//
	// For information about how to query the namespace of a cloud service, Appendix 1: Metrics.
	// Note: If you create a Prometheus alert rule for Hybrid Cloud Monitoring, you must set this parameter to acs_prometheus.
	Namespace interface{} `field:"required" json:"namespace" yaml:"namespace"`
	// Property resources: The information about the resource.
	//
	// Examples: [{"instanceId":"i-uf6j91r34rnwawoo****"}] and [{"userId":"100931896542****"}].
	// For information about the supported dimensions that are used to query resources, see Appendix 1: Metrics.
	Resources interface{} `field:"required" json:"resources" yaml:"resources"`
	// Property compositeExpression: The trigger conditions for multiple metrics.
	//
	// Note: The trigger conditions for a single metric and multiple metrics are mutually exclusive. You cannot specify trigger conditions for a single metric and multiple metrics at the same time.
	CompositeExpression interface{} `field:"optional" json:"compositeExpression" yaml:"compositeExpression"`
	// Property deletionForce: Whether to delete rule even if it is not created by ROS.
	//
	// Default is false.
	DeletionForce interface{} `field:"optional" json:"deletionForce" yaml:"deletionForce"`
	// Property effectiveInterval: The time period during which the alert rule is effective.
	EffectiveInterval interface{} `field:"optional" json:"effectiveInterval" yaml:"effectiveInterval"`
	// Property emailSubject: The subject of the alert notification email.
	EmailSubject interface{} `field:"optional" json:"emailSubject" yaml:"emailSubject"`
	// Property interval: The interval at which the alert is triggered.
	//
	// Unit: seconds.
	// Note: For information about how to query the statistical period of a metric, see Appendix 1: Metrics.
	Interval interface{} `field:"optional" json:"interval" yaml:"interval"`
	// Property labels:.
	Labels interface{} `field:"optional" json:"labels" yaml:"labels"`
	// Property noDataPolicy: The processing method of alerts when no monitoring data is found.
	//
	// Valid values:
	// - KEEP_LAST_STATE (default value): No operation is performed.
	// - INSUFFICIENT_DATA: An alert whose content is "Insufficient data" is triggered.
	// - OK: The status is considered normal.
	NoDataPolicy interface{} `field:"optional" json:"noDataPolicy" yaml:"noDataPolicy"`
	// Property noEffectiveInterval: The time period during which the alert rule is ineffective.
	NoEffectiveInterval interface{} `field:"optional" json:"noEffectiveInterval" yaml:"noEffectiveInterval"`
	// Property period: The statistical period of the metric.
	//
	// Unit: seconds. The default value is the interval at which the monitoring data of the metric is collected.
	// Note: For information about how to query the statistical period of a metric, see Appendix 1: Metrics.
	Period interface{} `field:"optional" json:"period" yaml:"period"`
	// Property prometheus: The Prometheus alert rule.
	//
	// Note: This parameter is required only when you create a Prometheus alert rule for Hybrid Cloud Monitoring.
	Prometheus interface{} `field:"optional" json:"prometheus" yaml:"prometheus"`
	// Property ruleId: The ID of the alert rule.
	//
	// If not specified, ROS will generate one.
	// You can specify a new ID or the ID of an existing alert rule. For information about how to query the ID of an alert rule, see DescribeMetricRuleList.
	// Note: If you specify a new ID, a threshold-triggered alert rule is created.
	RuleId interface{} `field:"optional" json:"ruleId" yaml:"ruleId"`
	// Property ruleName: The name of the alert rule.
	//
	// If not specified and the rule is created by ROS, default to RuleId.
	// You can specify a new name or the name of an existing alert rule. For information about how to query the name of an alert rule, see DescribeMetricRuleList.
	// Note: If you specify a new name, a threshold-triggered alert rule is created.
	RuleName interface{} `field:"optional" json:"ruleName" yaml:"ruleName"`
	// Property silenceTime: The mute period during which new alerts are not sent even if the trigger conditions are met.
	//
	// Unit: seconds. Default value: 86400.
	// Note: If an alert is not cleared within the mute period, a new alert notification is sent when the mute period ends.
	SilenceTime interface{} `field:"optional" json:"silenceTime" yaml:"silenceTime"`
	// Property webhook: The callback URL to which a POST request is sent when an alert is triggered based on the alert rule.
	Webhook interface{} `field:"optional" json:"webhook" yaml:"webhook"`
}

