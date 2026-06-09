package alicloudroscdkcms2


type RosAddonRelease_EntityRulesProperty struct {
	Annotations interface{} `field:"optional" json:"annotations" yaml:"annotations"`
	EntityTypes interface{} `field:"optional" json:"entityTypes" yaml:"entityTypes"`
	FieldRules interface{} `field:"optional" json:"fieldRules" yaml:"fieldRules"`
	InstanceIds interface{} `field:"optional" json:"instanceIds" yaml:"instanceIds"`
	IpMatchRule interface{} `field:"optional" json:"ipMatchRule" yaml:"ipMatchRule"`
	Labels interface{} `field:"optional" json:"labels" yaml:"labels"`
	RegionIds interface{} `field:"optional" json:"regionIds" yaml:"regionIds"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	Tags *[]*RosAddonRelease_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
}

