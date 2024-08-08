package alicloudroscdkcms


// Properties for defining a `DynamicTagGroup`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms-dynamictaggroup
type DynamicTagGroupProps struct {
	// Property contactGroupList: Alarm contacts.
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
	// Property enableSubscribeEvent: Whether the event subscription is enabled.
	//
	// Values are
	// :true: enable event subscription
	// false: disable event subscription.
	EnableSubscribeEvent interface{} `field:"optional" json:"enableSubscribeEvent" yaml:"enableSubscribeEvent"`
	// Property matchExpress: Matching list.
	//
	// Only supports one currently.
	MatchExpress interface{} `field:"optional" json:"matchExpress" yaml:"matchExpress"`
	// Property matchExpressFilterRelation: The relationship between the conditional expressions.
	//
	// Values are:
	// and: the relationship between
	// or: the relationship or the
	// Description currently supports only one combination of conditions, the follow-up Ali cloud will support a variety of combinations of conditions.
	MatchExpressFilterRelation interface{} `field:"optional" json:"matchExpressFilterRelation" yaml:"matchExpressFilterRelation"`
	// Property templateIdList: Alarm template ID list.
	//
	// When the automatically generated application group synchronizes tags, it will generate alarm rules according to the specified alarm template.
	TemplateIdList interface{} `field:"optional" json:"templateIdList" yaml:"templateIdList"`
}

