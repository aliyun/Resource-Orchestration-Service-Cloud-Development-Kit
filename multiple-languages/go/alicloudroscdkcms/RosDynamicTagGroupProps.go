package alicloudroscdkcms


// Properties for defining a `RosDynamicTagGroup`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms-dynamictaggroup
type RosDynamicTagGroupProps struct {
	ContactGroupList interface{} `field:"required" json:"contactGroupList" yaml:"contactGroupList"`
	TagKey interface{} `field:"required" json:"tagKey" yaml:"tagKey"`
	EnableInstallAgent interface{} `field:"optional" json:"enableInstallAgent" yaml:"enableInstallAgent"`
	EnableSubscribeEvent interface{} `field:"optional" json:"enableSubscribeEvent" yaml:"enableSubscribeEvent"`
	MatchExpress interface{} `field:"optional" json:"matchExpress" yaml:"matchExpress"`
	MatchExpressFilterRelation interface{} `field:"optional" json:"matchExpressFilterRelation" yaml:"matchExpressFilterRelation"`
	TemplateIdList interface{} `field:"optional" json:"templateIdList" yaml:"templateIdList"`
}

