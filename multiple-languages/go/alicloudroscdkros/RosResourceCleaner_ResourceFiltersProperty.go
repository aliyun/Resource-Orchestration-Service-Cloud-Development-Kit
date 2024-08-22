package alicloudroscdkros


type RosResourceCleaner_ResourceFiltersProperty struct {
	Effect interface{} `field:"optional" json:"effect" yaml:"effect"`
	IncludeDeletionProtection interface{} `field:"optional" json:"includeDeletionProtection" yaml:"includeDeletionProtection"`
	RegionIds interface{} `field:"optional" json:"regionIds" yaml:"regionIds"`
	ResourceGroupIds interface{} `field:"optional" json:"resourceGroupIds" yaml:"resourceGroupIds"`
	ResourceIds interface{} `field:"optional" json:"resourceIds" yaml:"resourceIds"`
	ResourceNamePatterns interface{} `field:"optional" json:"resourceNamePatterns" yaml:"resourceNamePatterns"`
	ResourceTypePatterns interface{} `field:"optional" json:"resourceTypePatterns" yaml:"resourceTypePatterns"`
	Tags *[]*RosResourceCleaner_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
}

