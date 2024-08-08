package alicloudroscdkarms


// Properties for defining a `RosApplyAlertRuleTemplate`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-applyalertruletemplate
type RosApplyAlertRuleTemplateProps struct {
	ClusterIds interface{} `field:"optional" json:"clusterIds" yaml:"clusterIds"`
	TemplateIds interface{} `field:"optional" json:"templateIds" yaml:"templateIds"`
	Update interface{} `field:"optional" json:"update" yaml:"update"`
}

