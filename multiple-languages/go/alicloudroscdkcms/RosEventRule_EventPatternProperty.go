package alicloudroscdkcms


type RosEventRule_EventPatternProperty struct {
	CustomFilters interface{} `field:"optional" json:"customFilters" yaml:"customFilters"`
	EventTypeList interface{} `field:"optional" json:"eventTypeList" yaml:"eventTypeList"`
	LevelList interface{} `field:"optional" json:"levelList" yaml:"levelList"`
	NameList interface{} `field:"optional" json:"nameList" yaml:"nameList"`
	Product interface{} `field:"optional" json:"product" yaml:"product"`
	SqlFilter interface{} `field:"optional" json:"sqlFilter" yaml:"sqlFilter"`
	StatusList interface{} `field:"optional" json:"statusList" yaml:"statusList"`
}

