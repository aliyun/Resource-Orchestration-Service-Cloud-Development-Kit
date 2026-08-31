package alicloudroscdkcms


// Properties for defining a `DynamicTagGroup`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms-dynamictaggroup
type DynamicTagGroupProps struct {
	// Property contactGroupList: The alert contact groups.
	//
	// The value of N can be from 1 to 100. Alert
	// notifications for the application group are sent to the alert contacts in these
	// alert contact groups.
	// An alert contact group can contain one or more alert contacts. For more
	// information about how to create alert contacts and alert contact groups, see
	// PutContact and PutContactGroup. For more information about how to obtain
	// alert contact groups, see DescribeContactGroupList.
	ContactGroupList interface{} `field:"required" json:"contactGroupList" yaml:"contactGroupList"`
	// Property tagKey: Tag key.
	TagKey interface{} `field:"required" json:"tagKey" yaml:"tagKey"`
	// Property enableInstallAgent: Whether to enable initial installation monitoring plug, not installed by default.
	//
	// Values are:
	// true: enable installation
	// Note If ECS generated instances group does not monitor plug-in installed will attempt to automatically install.
	// false: disable installation.
	EnableInstallAgent interface{} `field:"optional" json:"enableInstallAgent" yaml:"enableInstallAgent"`
	// Property enableSubscribeEvent: Specifies whether to automatically subscribe to event notifications for the application group.
	//
	// When a critical or warning event occurs on a resource in the
	// application group, CloudMonitor sends an alert notification. Valid values:
	// - true: enabled.
	// - false (default): disabled.
	EnableSubscribeEvent interface{} `field:"optional" json:"enableSubscribeEvent" yaml:"enableSubscribeEvent"`
	// Property matchExpress: The match expressions that are used to create an application group from tags.
	MatchExpress interface{} `field:"optional" json:"matchExpress" yaml:"matchExpress"`
	// Property matchExpressFilterRelation: The relationship between the conditional expressions for the tag values.
	//
	// Valid
	// values:
	// - and (default)
	// - or.
	MatchExpressFilterRelation interface{} `field:"optional" json:"matchExpressFilterRelation" yaml:"matchExpressFilterRelation"`
	// Property templateIdList: The ID of the alert template.
	//
	// For more information about how to query the IDs of alert templates, see
	// DescribeMetricRuleTemplateList.
	TemplateIdList interface{} `field:"optional" json:"templateIdList" yaml:"templateIdList"`
}

