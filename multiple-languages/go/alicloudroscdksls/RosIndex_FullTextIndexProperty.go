package alicloudroscdksls


type RosIndex_FullTextIndexProperty struct {
	Enable interface{} `field:"required" json:"enable" yaml:"enable"`
	CaseSensitive interface{} `field:"optional" json:"caseSensitive" yaml:"caseSensitive"`
	Delimiter interface{} `field:"optional" json:"delimiter" yaml:"delimiter"`
	IncludeChinese interface{} `field:"optional" json:"includeChinese" yaml:"includeChinese"`
}

