package alicloudroscdkcore


type NestedStackProps struct {
	Parameters *map[string]interface{} `field:"optional" json:"parameters" yaml:"parameters"`
	TemplateBody *string `field:"optional" json:"templateBody" yaml:"templateBody"`
	TemplateUrl *string `field:"optional" json:"templateUrl" yaml:"templateUrl"`
	Timeout *float64 `field:"optional" json:"timeout" yaml:"timeout"`
}

