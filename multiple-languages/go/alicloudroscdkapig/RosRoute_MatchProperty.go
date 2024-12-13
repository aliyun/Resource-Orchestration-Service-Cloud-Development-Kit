package alicloudroscdkapig


type RosRoute_MatchProperty struct {
	Path interface{} `field:"required" json:"path" yaml:"path"`
	Headers interface{} `field:"optional" json:"headers" yaml:"headers"`
	IgnoreUriCase interface{} `field:"optional" json:"ignoreUriCase" yaml:"ignoreUriCase"`
	Methods interface{} `field:"optional" json:"methods" yaml:"methods"`
	QueryParams interface{} `field:"optional" json:"queryParams" yaml:"queryParams"`
}

