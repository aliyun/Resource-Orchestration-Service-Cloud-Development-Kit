package alicloudroscdkarms


// Properties for defining a `ApplyAlertRuleTemplate`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-applyalertruletemplate
type ApplyAlertRuleTemplateProps struct {
	// Property clusterIds: The IDs list of Prometheus Instances.
	ClusterIds interface{} `field:"optional" json:"clusterIds" yaml:"clusterIds"`
	// Property templateIds: The IDs list of Prometheus alert rule templates.
	TemplateIds interface{} `field:"optional" json:"templateIds" yaml:"templateIds"`
	// Property update: Whether to update created alert rules.
	//
	// Default false.
	Update interface{} `field:"optional" json:"update" yaml:"update"`
}

