package alicloudroscdksls


type RosIndex_KeyIndicesProperty struct {
	Name interface{} `field:"required" json:"name" yaml:"name"`
	Type interface{} `field:"required" json:"type" yaml:"type"`
	Alias interface{} `field:"optional" json:"alias" yaml:"alias"`
	CaseSensitive interface{} `field:"optional" json:"caseSensitive" yaml:"caseSensitive"`
	Delimiter interface{} `field:"optional" json:"delimiter" yaml:"delimiter"`
	EnableAnalytics interface{} `field:"optional" json:"enableAnalytics" yaml:"enableAnalytics"`
	IncludeChinese interface{} `field:"optional" json:"includeChinese" yaml:"includeChinese"`
	JsonKeyIndices interface{} `field:"optional" json:"jsonKeyIndices" yaml:"jsonKeyIndices"`
}

