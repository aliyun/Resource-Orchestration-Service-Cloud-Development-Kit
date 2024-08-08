package alicloudroscdksls


type RosSavedsearch_DetailProperty struct {
	Logstore interface{} `field:"required" json:"logstore" yaml:"logstore"`
	SavedsearchName interface{} `field:"required" json:"savedsearchName" yaml:"savedsearchName"`
	SearchQuery interface{} `field:"required" json:"searchQuery" yaml:"searchQuery"`
	Topic interface{} `field:"required" json:"topic" yaml:"topic"`
	DisplayName interface{} `field:"optional" json:"displayName" yaml:"displayName"`
}

